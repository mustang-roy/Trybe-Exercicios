let titlesPage = document.createElement('h1');
titlesPage.innerHTML = 'Exercício 5.2 - JavaScript DOM';

document.getElementsByTagName('body')[0].appendChild(titlesPage);

let divMain = document.createElement('div');
divMain.className = 'main-content'
document.getElementsByTagName('body')[0].appendChild(divMain);