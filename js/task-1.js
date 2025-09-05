const categoriesList = document.querySelectorAll('#categories .item')
console.log('Number of categories:', categoriesList.length);

categoriesList.forEach(categoryEl => {
const categoryTitleEl = categoryEl.querySelector('h2');
const categoryTitle = categoryTitleEl.textContent;
const categoryListCount = categoryEl.querySelectorAll('ul li').length;

console.log('Category:' , categoryTitle);
console.log('Elements:' , categoryListCount);
});