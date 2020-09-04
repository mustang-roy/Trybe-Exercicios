let titlesPage = document.createElement('h1');
titlesPage.innerHTML = 'Exercício 5.2 - JavaScript DOM';

document.getElementsByTagName('body')[0].appendChild(titlesPage);

let divMain = document.createElement('div');
divMain.className = 'main-content'
document.getElementsByTagName('body')[0].appendChild(divMain);

let divCenter = document.createElement('div')
divCenter.className = 'center-content'
divMain.appendChild(divCenter)

let paragraphText = document.createElement('p')
paragraphText.innerHTML = 'bolinha'
divCenter.appendChild(paragraphText)

let leftContent = document.createElement('div')
leftContent.className='left-content'
divMain.appendChild(leftContent)

let rightContent = document.createElement('div')
rightContent.className='right-content'
divMain.appendChild(rightContent)

let imgLeft = document.createElement('img')
imgLeft.src='https://picsum.photos/200'
imgLeft.className = 'small-image'
leftContent.appendChild(imgLeft)

let listRight = document.createElement('ul')

for (let index = 0; index < 10; index += 1) {
  let itemList = document.createElement('li')
  itemList.innerHTML = index+1
  listRight.appendChild(itemList)
}

rightContent.appendChild(listRight)

for (let index = 0; index < 3; index +=1) {
  let title3 = document.createElement('h3')
  title3.innerHTML = `TITULO ${index + 1}`
  title3.className = 'description'
  
  divMain.appendChild(title3)  
}

titlesPage.className = 'title'

divMain.removeChild(leftContent)

rightContent.style.marginRight = 'auto'

divCenter.style.backgroundColor = 'green'

listaItensTotal = document.getElementsByTagName('ul')[0]

for (let index = 0; index < 2; index++) {
  listaItensTotal.removeChild(listaItensTotal.lastChild)
}
