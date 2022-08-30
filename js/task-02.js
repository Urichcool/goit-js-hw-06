const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");
 ingredients.map((element ,array) => {
 array = document.createElement("li"); 
  array.textContent = element;
   array.classList.add("item");
   ingredientsList.append(array);
 });



