function changeTagText(tag, text, position=0) {
  document.getElementsByTagName(tag)[position].innerHTML = text;
}

function capitalizeTagText(tag, position=0) {
  document.getElementsByTagName(tag)[position].innerHTML = document.getElementsByTagName(tag)[position].innerHTML.toUpperCase() ;
}

function plotConsoleTag(tag) {
  let elements = document.getElementsByTagName(tag)
  for (let item in elements){
    console.log(elements[item].innerHTML) 
  }
}

function changeClassBg(classNm, colorBg, position = 0) {
  document.getElementsByClassName(classNm)[position].style.backgroundColor = colorBg
}
// Questão 1
changeTagText("p", "programando muito, muito mesmo")
// Questão 2
changeClassBg("main-content", "rgb(76,164,109)")
// Questão 3
changeClassBg("center-content", "white")
// Questão 4
changeTagText("h1", "Exercício 5.1 - JavaScript")
// Questão 5
capitalizeTagText("p")
// Questão 6
plotConsoleTag("p")