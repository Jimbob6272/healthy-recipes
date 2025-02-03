const recipeContainer = document.getElementById('recipeContainer');
const searchInput = document.getElementById('searchInput');
const filterTags = document.getElementById('filterTags');
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;


//  IMPORTANT!  Replace this with your published Google Sheet CSV URL
const googleSheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzbzSxiOWJAEHbVfAGSf3bPBvxU2sExpX3uiWQc6i15wLy6F0lonPtm3t4_O_qbv9-3NTOBkdK_V5J/pub?output=csv';


let allRecipes = [];


function fetchAndDisplayRecipes() {
    fetch(googleSheetURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
           return response.text();
      })
        .then(csv => {
            console.log("CSV data received:", csv);
            const rows = csvToObjects(csv);
            if(rows) {
                 allRecipes = rows;
                  displayRecipes(allRecipes);
                 populateFilterOptions();
             } else {
                console.error("Data in incorrect format:", csv)
                  recipeContainer.innerHTML = "Data in incorrect format"
             }
         })
        .catch(error => {
            console.error('Error fetching data:', error);
             recipeContainer.innerHTML = "Error fetching recipe data."
         });
}


function csvToObjects(csv) {
    const lines = csv.trim().split('\n');

    if (lines.length <= 1) {
        console.warn("No data or only header found in CSV.");
        return [];
    }

    const headers = lines[0].split(',').map(header => header.trim().replace(/"/g, ''));
     if(headers.length === 0) {
      console.warn("No headers found in CSV.");
      return [];
   }

   const recipes = lines.slice(1).map(line => {
        const values = parseCSVLine(line);

        if (values.length !== headers.length) {
            console.error("Mismatched headers and values:", values, "Headers:", headers);
             return null;
        }
      const recipe = {};
        headers.forEach((header, index) => {
        recipe[header] = values[index];
        });
        return recipe;
    });

    return recipes.filter(recipe => recipe !== null);
}

function parseCSVLine(line) {
  const values = [];
  let currentValue = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
     const char = line[i];
     if (char === '"') {
        inQuotes = !inQuotes;
     } else if (char === ',' && !inQuotes) {
       values.push(currentValue.trim());
        currentValue = '';
      } else {
       currentValue += char;
     }
  }
 values.push(currentValue.trim());
    return values;
 }


function displayRecipes(recipes) {
    recipeContainer.innerHTML = '';
    recipes.forEach(recipe => {
      const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
      recipeCard.style.opacity = 0;

      recipeCard.innerHTML = `
          <h3>${recipe.Name}</h3>
          <p><strong>Ingredients:</strong> ${recipe.Ingredients}</p>
          <p><strong>Instructions:</strong> ${recipe.Instructions}</p>
         <p class="tags"><strong>Tags:</strong> ${recipe["Diet Restrictions"] ? recipe["Diet Restrictions"] : ""}, ${recipe["Meal"] ? recipe["Meal"] : ""}</p>
      `;
        recipeContainer.appendChild(recipeCard);
    setTimeout(() => {
          recipeCard.style.opacity = 1;
      }, 10);
  });
}


function populateFilterOptions() {
   const allMeals = new Set();
     const allDietRestrictions = new Set();

    allRecipes.forEach(recipe => {
        if(recipe.Meal){
            allMeals.add(recipe.Meal)
        }

        if(recipe["Diet Restrictions"]){
              const restrictions = recipe["Diet Restrictions"].split(',').map(tag => tag.trim())
            restrictions.forEach(restriction => allDietRestrictions.add(restriction))
        }


    });

   // Clear existing options
   filterTags.innerHTML = '<option value="">All Filters</option><optgroup label="Meal Type"></optgroup><optgroup label="Diet Restrictions"></optgroup>';
    const mealOptGroup = filterTags.querySelector('[label="Meal Type"]');
    const dietOptGroup = filterTags.querySelector('[label="Diet Restrictions"]');



    allMeals.forEach(tag => {
      const option = document.createElement('option');
       option.value = tag;
       option.textContent = tag;
     mealOptGroup.appendChild(option);
  });


   allDietRestrictions.forEach(tag => {
       const option = document.createElement('option');
        option.value = tag;
       option.textContent = tag;
      dietOptGroup.appendChild(option)
  });
}




searchInput.addEventListener('input', () => {
    filterRecipes();
});

filterTags.addEventListener('change', () => {
    filterRecipes();
});

function filterRecipes() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedTag = filterTags.value;

    const filteredRecipes = allRecipes.filter(recipe => {
        const matchesSearch = recipe.Name.toLowerCase().includes(searchTerm) ||
                             recipe.Ingredients.toLowerCase().includes(searchTerm) ||
                             recipe.Instructions.toLowerCase().includes(searchTerm);
        const matchesMeal = !selectedTag || (recipe.Meal && recipe.Meal.trim() === selectedTag);
        const matchesDiet = !selectedTag || (recipe["Diet Restrictions"] && recipe["Diet Restrictions"].split(',').map(tag => tag.trim()).includes(selectedTag));

        return matchesSearch && (matchesMeal || matchesDiet);
    });
     recipeContainer.classList.add('fade-out');
      setTimeout(() => {
           displayRecipes(filteredRecipes);
            recipeContainer.classList.remove('fade-out')
       }, 300)
}


darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
});

fetchAndDisplayRecipes();
