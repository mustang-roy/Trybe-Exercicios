const btnDark = document.querySelector('#dark-button');
const inputFontStyle = document.querySelector('#font-paragraph');
const inputFontSize = document.querySelector('#font-size');
const inputLineHeight = document.querySelector('#line-height');
const bStyle = document.querySelector('body');
const pStyle = document.querySelector('.paragraph');

inputLineHeight.addEventListener('change',() =>{
  pStyle.style.lineHeight = Number(inputLineHeight.value)
  localStorage.setItem('lineHeight', pStyle.style.lineHeight);
});

inputFontStyle.addEventListener('change',() =>{
  bStyle.style.fontFamily = inputFontStyle.value
  localStorage.setItem('fontFamily', bStyle.style.fontFamily)
});

inputFontSize.addEventListener('change',() =>{
  pStyle.style.fontSize = inputFontSize.value+'px';
  localStorage.setItem('fontSize', pStyle.style.fontSize)
});

btnDark.addEventListener('click', () => {
  if (bStyle.style.backgroundColor !== "black") {
    bStyle.style.backgroundColor = "black"
    bStyle.style.color = "white"

    
  } else {
    bStyle.style.backgroundColor = ""
    bStyle.style.color = ""
  }

  localStorage.setItem('bgcolor', bStyle.style.backgroundColor)
  localStorage.setItem('fontcolor', bStyle.style.color)

})

window.onload = () => {
  bStyle.style.backgroundColor = localStorage.getItem('bgcolor');
  bStyle.style.color = localStorage.getItem('fontcolor');
  bStyle.style.fontFamily = localStorage.getItem('fontFamily');
  pStyle.style.fontSize = localStorage.getItem('fontSize');
  pStyle.style.lineHeight = localStorage.getItem('lineHeight');
}