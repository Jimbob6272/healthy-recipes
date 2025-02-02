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

let allRecipes = [
    {
        Name: "Almond Flour Pancakes",
        Ingredients: "1 cup almond flour, 1 tsp baking powder, 1/4 tsp salt, 2 eggs, 1/2 cup almond milk, 1 tsp vanilla extract, 2 tbsp maple syrup (or monk fruit sweetener)",
        Instructions: "Mix dry ingredients, whisk wet ingredients separately, combine, cook on a hot griddle.",
        Tags: "Breakfast, No Refined Sugar"
      },
      {
        Name: "Coconut Curry Chicken",
        Ingredients: "1 lb chicken thighs, 1 can coconut milk, 1 tbsp curry powder, 1 onion, garlic, ginger, spinach",
        Instructions: "Sauté onion, garlic, ginger, add chicken, cook until browned, stir in coconut milk, curry powder, simmer until chicken is cooked, add spinach.",
        Tags: "Dinner, High Protein, No Refined Sugar, Thyroid Friendly"
      },
      {
          Name: "Chocolate Avocado Mousse",
          Ingredients: "2 ripe avocados, 1/2 cup cocoa powder, 1/4 cup maple syrup, 1/4 cup almond milk, 1 tsp vanilla extract, pinch of salt",
          Instructions: "Blend all ingredients until smooth, chill for at least 30 minutes.",
          Tags: "Dessert, No Refined Sugar, Vegan, Dairy-free"
      },
      {
          Name: "Salmon with Roasted Asparagus",
          Ingredients: "2 salmon fillets, 1 bunch asparagus, 2 tbsp olive oil, salt, pepper, lemon",
          Instructions: "Toss asparagus in olive oil, salt, pepper. Roast at 400 for 15 minutes. Season salmon, bake alongside asparagus until salmon is done. Squeeze lemon.",
          Tags: "Dinner, High Protein, No Seed Oils, Thyroid Friendly"
      },
      {
          Name: "Chia Seed Pudding",
          Ingredients: "1/4 cup chia seeds, 1 cup almond milk, 1 tbsp maple syrup (or monk fruit sweetener), 1/2 tsp vanilla extract, fruit for topping",
          Instructions: "Combine all ingredients, stir well, chill for at least 2 hours or overnight. Add fruit before serving.",
          Tags: "Breakfast, High Protein, No Refined Sugar, Vegan"
      },
      {
          Name: "Lentil Soup",
          Ingredients: "1 cup green lentils, 8 cups vegetable broth, 1 onion, 2 carrots, 2 celery stalks, 2 cloves garlic, herbs, salt, pepper, olive oil",
          Instructions: "Sauté veggies, add lentils, broth, simmer until lentils are soft. Season with herbs, salt, and pepper.",
          Tags: "Lunch, High Protein, No Refined Sugar, Vegan"
      },
      {
           Name: "Turkey Meatballs",
           Ingredients: "1 lb ground turkey, 1/2 cup almond flour, 1/4 cup onion, 2 garlic cloves, 1 egg, herbs, salt, pepper",
           Instructions: "Mix all ingredients, shape into meatballs, bake or pan-fry until cooked through. Serve with a homemade tomato sauce.",
          Tags: "Dinner, High Protein, No Refined Sugar, Thyroid Friendly"
      },
     {
           Name: "Baked Sweet Potatoes",
          Ingredients: "2 medium sweet potatoes, olive oil, salt, pepper, cinnamon",
          Instructions: "Rub sweet potatoes with olive oil, sprinkle with salt, pepper, and cinnamon. Bake at 400 until tender.",
          Tags: "Side, Vegan, No Refined Sugar"
     },
     {
       Name: "Chicken Stir-fry",
      Ingredients: "1 lb chicken breast, mixed vegetables (broccoli, peppers, onions), coconut aminos, ginger, garlic",
       Instructions: "Stir-fry chicken, add vegetables, add coconut aminos, ginger, and garlic. Cook until chicken is done.",
       Tags: "Dinner, High Protein, No Refined Sugar, Thyroid Friendly"
      },
     {
          Name: "Shrimp Scampi (with Zucchini Noodles)",
         Ingredients: "1 lb shrimp, zucchini noodles, garlic, olive oil, white wine (optional), lemon juice, red pepper flakes",
         Instructions: "Sauté garlic in olive oil, add shrimp, cook until pink. Add zucchini noodles, white wine, lemon, red pepper flakes, cook until tender. ",
          Tags: "Dinner, High Protein, No Seed Oils, Thyroid Friendly"
      },
       {
         Name: "Egg Frittata",
         Ingredients: "6 eggs, 1 cup spinach, 1/2 cup diced onions, 1/2 cup chopped bell pepper, salt, pepper, olive oil",
          Instructions: "Saute onions and peppers in olive oil, add spinach, add whisked eggs, bake at 350 until set.",
         Tags: "Breakfast, High Protein, No Refined Sugar"
       },
      {
        Name: "Black Bean Burgers",
        Ingredients: "1 can black beans, 1/2 cup cooked brown rice, 1/4 cup diced onion, 1/4 cup breadcrumbs, herbs, spices, 1 egg",
        Instructions: "Mash black beans, combine all ingredients, form into patties, bake or pan-fry until cooked.",
        Tags: "Lunch, High Protein, Vegan, No Refined Sugar"
    },
    {
      Name: "Cauliflower Rice Bowl",
      Ingredients: "1 head cauliflower (riced), 1 cup chickpeas, 1 cucumber, 1 tomato, olive oil, lemon juice, parsley",
      Instructions: "Toss riced cauliflower with olive oil, lemon, salt and pepper, and roast at 400 for 15 minutes. Serve with chickpeas, cucumber, and tomato and parsley.",
      Tags: "Lunch, Vegan, No Refined Sugar, No Seed Oils"
    },
   {
        Name: "Tuna Salad (no mayo)",
        Ingredients: "2 cans tuna, 1 avocado, 1/4 cup diced celery, 1 tbsp lemon juice, salt, pepper",
        Instructions: "Mash avocado, combine with all other ingredients.",
        Tags: "Lunch, High Protein, No Refined Sugar, No Seed Oils"
    },
   {
      Name: "Steak with Garlic Butter Mushrooms",
     Ingredients: "1 lb steak, 1 lb mushrooms, 2 tbsp butter, 2 cloves garlic, herbs, salt, pepper",
      Instructions: "Cook steak to desired doneness, sauté garlic in butter, add mushrooms, cook until browned, and season with herbs, salt and pepper",
      Tags: "Dinner, High Protein, No Refined Sugar, Thyroid Friendly"
   },
    {
      Name: "Bone Broth",
       Ingredients: "Bones from chicken or beef, water, celery, carrots, onion, garlic, herbs",
      Instructions: "Simmer bones in water for a long time. Add vegetables and herbs for the last few hours. Strain before serving.",
       Tags: "Side, High Protein, No Refined Sugar, Thyroid Friendly"
    },
   {
      Name: "Chicken Salad (with Avocado)",
      Ingredients: "2 cups cooked chicken (shredded), 1 avocado, 1/4 cup diced red onion, 1 tbsp lemon juice, salt, pepper",
      Instructions: "Mash avocado, combine with other ingredients, salt and pepper to taste.",
       Tags: "Lunch, High Protein, No Refined Sugar, No Seed Oils, Thyroid Friendly"
  }
];

function displayRecipes(recipes) {
    recipeContainer.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <h3>${recipe.Name}</h3>
            <p><strong>Ingredients:</strong> ${recipe.Ingredients}</p>
            <p><strong>Instructions:</strong> ${recipe.Instructions}</p>
            <p class="tags"><strong>Tags:</strong> ${recipe.Tags}</p>
        `;
        recipeContainer.appendChild(recipeCard);
    });
}

function populateFilterOptions() {
  const allTags = new Set();
  allRecipes.forEach(recipe => {
      const tags = recipe.Tags ? recipe.Tags.split(',').map(tag => tag.trim()) : [];
      tags.forEach(tag => allTags.add(tag));
  });

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
    displayRecipes(filteredRecipes);
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

  allRecipes.push(newRecipe);
  displayRecipes(allRecipes);
  populateFilterOptions()
  // Clear the form
  newRecipeNameInput.value = '';
  newRecipeIngredientsInput.value = '';
  newRecipeInstructionsInput.value = '';
  newRecipeTagsInput.value = '';
})

displayRecipes(allRecipes);
populateFilterOptions();

// Set dark mode as default
body.classList.remove('light-mode');
