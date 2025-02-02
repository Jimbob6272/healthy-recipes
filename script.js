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
  },
        {
        Name: "Garlic Herb Lamb Chops",
        Ingredients: "4 lamb chops, 2 tbsp olive oil, 2 cloves garlic (minced), 1 tsp rosemary, 1 tsp thyme, salt, pepper",
        Instructions: "Rub lamb chops with olive oil, garlic, and herbs. Sear in a pan for 3-4 minutes per side until desired doneness.",
        Tags: "Dinner, High Protein, No Refined Sugar, No Seed Oils, Thyroid Friendly"
    },
    {
        Name: "Roasted Brussels Sprouts with Bacon",
        Ingredients: "1 lb Brussels sprouts, 4 slices nitrate-free bacon, 1 tbsp olive oil, salt, pepper",
        Instructions: "Toss Brussels sprouts with olive oil, salt, and pepper. Roast at 400°F for 25 minutes. Add cooked, crumbled bacon before serving.",
        Tags: "Side, No Refined Sugar, No Seed Oils, Thyroid Friendly"
    },
    {
        Name: "Coconut Turmeric Chicken Soup",
        Ingredients: "1 lb chicken breast, 1 can coconut milk, 4 cups bone broth, 1 onion, 2 cloves garlic, 1 tbsp turmeric, 1 tsp ginger, salt, pepper",
        Instructions: "Sauté onions and garlic, add chicken and broth. Simmer until chicken is cooked, shred chicken, add coconut milk, turmeric, and ginger. Simmer for 10 minutes.",
        Tags: "Dinner, High Protein, No Refined Sugar, No Seed Oils, Thyroid Friendly"
    },
    {
        Name: "Zucchini Fritters",
        Ingredients: "2 zucchini (grated), 1/4 cup almond flour, 1 egg, 2 tbsp parmesan cheese, salt, pepper, olive oil",
        Instructions: "Mix all ingredients, form into small patties, cook in olive oil until golden brown on both sides.",
        Tags: "Side, No Refined Sugar, No Seed Oils, Thyroid Friendly"
    },
    {
        Name: "Stuffed Bell Peppers",
        Ingredients: "4 bell peppers, 1 lb ground turkey, 1 cup cauliflower rice, 1/2 cup diced tomatoes, 1/2 onion, 2 cloves garlic, salt, pepper, Italian seasoning",
        Instructions: "Sauté onions, garlic, and turkey. Stir in tomatoes and cauliflower rice. Stuff into bell peppers, bake at 375°F for 30 minutes.",
        Tags: "Dinner, High Protein, No Refined Sugar, No Seed Oils, Thyroid Friendly"
    },
    {
        Name: "Lemon Garlic Butter Cod",
        Ingredients: "2 cod fillets, 2 tbsp butter, 2 cloves garlic (minced), juice of 1 lemon, salt, pepper, parsley",
        Instructions: "Sear cod in butter for 2-3 minutes per side. Add garlic and lemon juice, cook another minute. Garnish with parsley.",
        Tags: "Dinner, High Protein, No Refined Sugar, No Seed Oils, Thyroid Friendly"
    },
    {
        Name: "Sautéed Kale with Garlic",
        Ingredients: "1 bunch kale, 2 tbsp olive oil, 2 cloves garlic, salt, pepper, red pepper flakes",
        Instructions: "Sauté garlic in olive oil, add kale, cook until wilted, season with salt, pepper, and red pepper flakes.",
        Tags: "Side, No Refined Sugar, No Seed Oils, Thyroid Friendly"
    },
    {
        Name: "Coconut Yogurt Parfait",
        Ingredients: "1 cup coconut yogurt, 1/4 cup mixed berries, 1 tbsp chopped nuts, 1 tsp cinnamon",
        Instructions: "Layer coconut yogurt with berries and nuts. Sprinkle with cinnamon before serving.",
        Tags: "Breakfast, No Refined Sugar, No Seed Oils, Thyroid Friendly"
    },
    {
        Name: "Baked Cod with Olive Tapenade",
        Ingredients: "2 cod fillets, 1/2 cup black olives (chopped), 1 tbsp capers, 1 tbsp olive oil, 1 clove garlic, juice of 1 lemon",
        Instructions: "Mix olives, capers, garlic, olive oil, and lemon. Top cod fillets with mixture, bake at 375°F for 15 minutes.",
        Tags: "Dinner, High Protein, No Refined Sugar, No Seed Oils, Thyroid Friendly"
    },
    {
        Name: "Eggplant Lasagna",
        Ingredients: "1 eggplant (sliced), 1 lb ground turkey, 1/2 cup ricotta cheese, 1/2 cup mozzarella, 1 cup tomato sauce, Italian seasoning",
        Instructions: "Brown turkey, layer with eggplant slices, ricotta, and sauce. Top with mozzarella, bake at 375°F for 30 minutes.",
        Tags: "Dinner, High Protein, No Refined Sugar, No Seed Oils, Thyroid Friendly"
    },
    {
        Name: "Liver and Onions",
        Ingredients: "1/2 lb beef liver, 1 onion (sliced), 2 tbsp butter, salt, pepper",
        Instructions: "Sauté onions in butter, add liver slices, cook for 2 minutes per side until browned.",
        Tags: "Dinner, High Protein, No Refined Sugar, No Seed Oils, Thyroid Friendly"
    },
    {
        Name: "Roasted Garlic Mashed Cauliflower",
        Ingredients: "1 head cauliflower, 2 tbsp butter, 3 cloves roasted garlic, salt, pepper",
        Instructions: "Steam cauliflower until soft, blend with butter and roasted garlic until smooth.",
        Tags: "Side, No Refined Sugar, No Seed Oils, Thyroid Friendly"
    },
    {
        Name: "Pesto Chicken",
        Ingredients: "2 chicken breasts, 1/4 cup homemade pesto (basil, garlic, olive oil, parmesan, walnuts), salt, pepper",
        Instructions: "Spread pesto over chicken, bake at 375°F for 25 minutes.",
        Tags: "Dinner, High Protein, No Refined Sugar, No Seed Oils, Thyroid Friendly"
    },
    {
        Name: "Coconut Macaroons",
        Ingredients: "2 cups shredded coconut, 2 egg whites, 1/4 cup maple syrup, 1 tsp vanilla extract",
        Instructions: "Mix ingredients, form into small balls, bake at 350°F for 15 minutes.",
        Tags: "Dessert, No Refined Sugar, No Seed Oils, Thyroid Friendly"
    },
    {
        Name: "Avocado Egg Salad",
        Ingredients: "3 boiled eggs, 1 avocado, 1/4 cup diced red onion, 1 tbsp lemon juice, salt, pepper",
        Instructions: "Mash avocado, mix with chopped eggs, onion, lemon juice, salt, and pepper.",
        Tags: "Lunch, High Protein, No Refined Sugar, No Seed Oils, Thyroid Friendly"
    },
    {
        Name: "Garlic Lemon Butter Shrimp",
        Ingredients: "1 lb shrimp, 2 tbsp butter, 2 cloves garlic, juice of 1 lemon, salt, pepper",
        Instructions: "Sauté garlic in butter, add shrimp, cook until pink, finish with lemon juice.",
        Tags: "Dinner, High Protein, No Refined Sugar, No Seed Oils, Thyroid Friendly"
    },
    {
        Name: "Balsamic Glazed Roasted Carrots",
        Ingredients: "1 lb carrots, 2 tbsp balsamic vinegar, 1 tbsp olive oil, salt, pepper",
        Instructions: "Toss carrots with balsamic and olive oil, roast at 400°F for 20 minutes.",
        Tags: "Side, No Refined Sugar, No Seed Oils, Thyroid Friendly"
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
