const btnAdd = document.querySelector('button');
const elementH1 = document.querySelector('h1')
let valueH1 = 0;

btnAdd.addEventListener('click', () => {
  valueH1 += 1; 
  elementH1.textContent = valueH1 
});