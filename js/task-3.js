const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
 const userName = inputEl.value.trim();

   if (userName === '') {
    outputEl.textContent = 'Anonymous';
 } else {
    outputEl.textContent = userName;
   }
});