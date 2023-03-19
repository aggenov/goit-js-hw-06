const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngr = document.querySelector("#ingredients");

const nameIngredients = ingredients.map((ingredient) => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  // console.log(listItem.textContent);
  return listItem;
});
// console.log(nameIngredients);
listIngr.append(...nameIngredients);