const recipeContainer = document.getElementById('recipeContainer');
const searchInput = document.getElementById('searchInput');
const filterTags = document.getElementById('filterTags');
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const addRecipeForm = document.getElementById('addRecipeForm');
const newRecipeNameInput = document.getElementById('newRecipeName');
const newRecipeIngredientsInput = document.getElementById('newRecipeIngredients');
const newRecipeInstructionsInput = document.getElementById('newRecipeInstructions');
const newRecipeTagsInput = document.getElementById('newRecipeTags');
const addNewRecipeButton = document.getElementById('addNewRecipeButton');

//  IMPORTANT!  Replace this with your published Google Sheet CSV URL
const googleSheetURL = 'PASTE_YOUR_PUBLISHED_GOOGLE_SHEET_CSV_URL_HERE';


let allRecipes = [];

function fetchAndDisplayRecipes() {
   fetch(googleSheetURL)
        .then(response => response.text()) // Fetch as text (CSV)
       .then(csv => {
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
    if (lines.length <= 1) return []; // Check for empty or header-only CSV

    const headers = lines[0].split(',').map(header => header.trim().replace(/"/g, ''));
     const recipes = lines.slice(1).map(line => {
    const values = line.split(',').map(value => value.trim().replace(/"/g, ''));
        if (values.length !== headers.length) {
                console.error("Mismatched headers and values:", values);
                return null;
            }
      const recipe = {};
      headers.forEach((header, index) => {
        recipe[header] = values[index];
        });
      return recipe;
  });
    return recipes.filter(recipe => recipe !== null); // Remove any null recipes
}

function displayRecipes(recipes) {
  recipeContainer.innerHTML = '';
  recipes.forEach(recipe => {
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipe-card');
        recipeCard.style.opacity = 0; // Start with opacity 0

      recipeCard.innerHTML = `
          <h3>${recipe.Name}</h3>
          <p><strong>Ingredients:</strong> ${recipe.Ingredients}</p>
          <p><strong>Instructions:</strong> ${recipe.Instructions}</p>
          <p class="tags"><strong>Tags:</strong> ${recipe.Tags}</p>
      `;
        recipeContainer.appendChild(recipeCard);
     setTimeout(() => {
          recipeCard.style.opacity = 1;
        }, 10); // slight delay to allow browser to render
    });
}


function populateFilterOptions() {
    const allTags = new Set();
    allRecipes.forEach(recipe => {
        const tags = recipe.Tags ? recipe.Tags.split(',').map(tag => tag.trim()) : [];
        tags.forEach(tag => allTags.add(tag));
    });

    filterTags.innerHTML = '<option value="">All Tags</option>';

    allTags.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag;
        option.textContent = tag;
        filterTags.appendChild(option);
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

        const matchesTag = !selectedTag || (recipe.Tags && recipe.Tags.split(',').map(tag => tag.trim()).includes(selectedTag));
        return matchesSearch && matchesTag;

    });
      recipeContainer.classList.add('fade-out'); // start fade out animation
  setTimeout(() => {
        displayRecipes(filteredRecipes); // display the new recipe elements
        recipeContainer.classList.remove('fade-out')// remove the class to display the elements with a fade in on the next filter
   }, 300)
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
});

addNewRecipeButton.addEventListener('click', (event) => {
  event.preventDefault(); // prevent form from submitting

    const newRecipe = {
        Name: newRecipeNameInput.value,
        Ingredients: newRecipeIngredientsInput.value,
        Instructions: newRecipeInstructionsInput.value,
        Tags: newRecipeTagsInput.value
    };

  // Get the published google sheet
    fetch(googleSheetURL)
    .then(response => response.text())
   .then(csv => {
           const url = 'YOUR_GOOGLE_SHEET_API_ENDPOINT'; // <-- replace with your Google Sheets API endpoint
          const values = [[newRecipe.Name, newRecipe.Ingredients, newRecipe.Instructions, newRecipe.Tags]]
          console.log(values)
          fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
             body: JSON.stringify({values: values}),
          })
          .then(response => response.json())
          .then((data) => {
             console.log('Success: ', data);
                fetchAndDisplayRecipes()

            })
            .catch(error => console.error('Error adding recipe', error));
        })

  // Clear the form
  newRecipeNameInput.value = '';
  newRecipeIngredientsInput.value = '';
  newRecipeInstructionsInput.value = '';
  newRecipeTagsInput.value = '';
})


fetchAndDisplayRecipes();
