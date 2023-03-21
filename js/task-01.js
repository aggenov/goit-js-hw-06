const categories = document.getElementById('categories');
const list = [...categories.children];
console.log(`Quantity of categories: ${list.length}`);

list.forEach((item) => {
    const title = item.firstElementChild;
    console.log(title.textContent);
    const listItem = item.lastElementChild;
    const liItem = listItem.children;
    console.log(liItem.length);
});