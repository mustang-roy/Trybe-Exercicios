function changeTagText(tag, text, position,) {
  document.getElementsByTagName(tag)[position].innerHTML = text;
}

function changeClassBg(classNm, colorBg, position = 0) {
  document.getElementsByClassName(classNm)[position].style.backgroundColor = colorBg
}
// Questão 1
changeTagText("p", "programando muito, muito mesmo", 1)
// Questão 2
changeClassBg("main-content", "rgb(76,164,109)")
// Questão 3
changeClassBg("center-content", "white")
// Questão 4

// Questão 5

// Questão 6