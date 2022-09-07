const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
const newFragment = document.createDocumentFragment();
const a = ingredients.map((element, array) => {
  array = document.createElement("li");
  array.textContent = element;
  array.classList.add("item");
  newFragment.append(array);
});

ingredientsList.append(newFragment);
