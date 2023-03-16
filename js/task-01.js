const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {
    const title = item.querySelector('h2');
    console.log(`Category: ${title.textContent}`);
    const lisIitem = item.querySelectorAll('li');
    console.log(`Elements: ${lisIitem.length}`);
});