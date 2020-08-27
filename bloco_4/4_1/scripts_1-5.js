var botaoSoma = document.querySelector("#soma");
var botaoSub = document.querySelector("#subtracao");
var botaoMult = document.querySelector("#multiplicacao");
var botaoDiv = document.querySelector("#divisao");
var botaoMod = document.querySelector("#module");

botaoSoma.addEventListener("click", adicao);
botaoSub.addEventListener("click",subtracao);
botaoMult.addEventListener("click",multiplicacao);
botaoDiv.addEventListener("click",divisao);
botaoMod.addEventListener("click",modulo);

function adicao() {
  let firstElement = document.getElementById('elemento1').value;
  let secondElement = document.getElementById('elemento2').value;

  let result = document.querySelector("#resultado");
  result.textContent = Number(firstElement) + Number(secondElement);
}

function subtracao() {
  let firstElement = document.getElementById('elemento1').value;
  let secondElement = document.getElementById('elemento2').value;

  let result = document.querySelector("#resultado");
  result.textContent = firstElement - secondElement;
}

function multiplicacao() {
  let firstElement = document.getElementById('elemento1').value;
  let secondElement = document.getElementById('elemento2').value;

  let result = document.querySelector("#resultado");
  result.textContent = firstElement * secondElement;
}

function divisao() {
  let firstElement = document.getElementById('elemento1').value;
  let secondElement = document.getElementById('elemento2').value;

  let result = document.querySelector("#resultado");
  result.textContent = firstElement / secondElement;
}

function modulo() {
  let firstElement = document.getElementById('elemento1').value;
  let secondElement = document.getElementById('elemento2').value;

  let result = document.querySelector("#resultado");
  result.textContent = firstElement % secondElement;
}

