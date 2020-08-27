var botaoSoma = document.querySelector("#soma");
var botaoSub = document.querySelector("#subtracao");
var botaoMult = document.querySelector("#multiplicacao");
var botaoDiv = document.querySelector("#divisao");
var botaoMod = document.querySelector("#module");
var botaoComp2 = document.querySelector("#compare2");
var botaoComp3 = document.querySelector("#compare3");
var botaoIsZero = document.querySelector("#isitzero");
var botaoTriangulo = document.querySelector("#triangulo");
var botaoPecaXadrez = document.querySelector("#pecaxadrez");
var botaoNotamene = document.querySelector("#notamene");


botaoSoma.addEventListener("click", adicao);
botaoSub.addEventListener("click",subtracao);
botaoMult.addEventListener("click",multiplicacao);
botaoDiv.addEventListener("click",divisao);
botaoMod.addEventListener("click",modulo);
botaoComp2.addEventListener("click",compareDois);
botaoComp3.addEventListener("click",compareTres);
botaoIsZero.addEventListener("click", valueOrZero);
botaoTriangulo.addEventListener("click", checkTriangulo);
botaoPecaXadrez.addEventListener("click", movChessPiece);
botaoNotamene.addEventListener("click", converterNota);




function adicao() {
  let firstElement = document.getElementById('elemento1').value;
  let secondElement = document.getElementById('elemento2').value;

  let result = document.querySelector("#resultado");
  result.textContent = Number(firstElement) + Number(secondElement);
};

function subtracao() {
  let firstElement = document.getElementById('elemento1').value;
  let secondElement = document.getElementById('elemento2').value;

  let result = document.querySelector("#resultado");
  result.textContent = firstElement - secondElement;
};

function multiplicacao() {
  let firstElement = document.getElementById('elemento1').value;
  let secondElement = document.getElementById('elemento2').value;

  let result = document.querySelector("#resultado");
  result.textContent = firstElement * secondElement;
};

function divisao() {
  let firstElement = document.getElementById('elemento1').value;
  let secondElement = document.getElementById('elemento2').value;

  let result = document.querySelector("#resultado");
  result.textContent = firstElement / secondElement;
};

function modulo() {
  let firstElement = document.getElementById('elemento1').value;
  let secondElement = document.getElementById('elemento2').value;

  let result = document.querySelector("#resultado");
  result.textContent = firstElement % secondElement;
};

function compareDois() {
  let firstElement = document.getElementById('elemento1comp2').value;
  let secondElement = document.getElementById('elemento2comp2').value;
  let max = null;
  if (Number(firstElement) > Number(secondElement)) {
    max = firstElement;
  } else {
    max = secondElement;
  }

  let result = document.querySelector("#resultadocomparacao2");
  result.textContent = max;  
};

function compareTres() {
  let elementoscomp = [];

  elementoscomp.push(Number(document.getElementById('elemento1comp3').value));
  elementoscomp.push(Number(document.getElementById('elemento2comp3').value));
  elementoscomp.push(Number(document.getElementById('elemento3comp3').value));

  let maximo = elementoscomp.reduce(function(a, b){
    return Math.max(a,b)
  });

  let result = document.querySelector("#resultadocomparacao3");
  result.textContent = maximo;
};

function valueOrZero() {
  let elemento = document.querySelector("#elementoisitzero").value;
  let valor = null;
  if (Number(elemento) > 0) {
    valor = "positive";
  } else if (Number(elemento) < 0){
    valor = "negative";
  } else {
    valor = "zero";
  }

  let result = document.querySelector("#resultadoisitzero");
  result.textContent = valor;
};

function checkTriangulo() {
  let elementoscomp = [];
  elementoscomp.push(Number(document.getElementById('elemento1triangulo').value));
  elementoscomp.push(Number(document.getElementById('elemento2triangulo').value));
  elementoscomp.push(Number(document.getElementById('elemento3triangulo').value));

  let resultadoBooleano = null

  let somaAngulo = elementoscomp.reduce(function(a,b){
    return a + b;
  });

  if (somaAngulo === 180) {
    resultadoBooleano = true;
  } else {
    resultadoBooleano = false;
  }

  let result = document.querySelector("#resultadotriangulo");
  result.textContent = resultadoBooleano;
};

function movChessPiece() {
  
  let elementoPeca = document.getElementById("elementopecaxadrez").value;

  let moveStyle = null;

  switch (elementoPeca) {
    case 'pawn':
      moveStyle = "vertically forward one square";
      break;

    case 'rook':
      moveStyle = "horizontally or vertically";
      break;

    case 'bishop':
      moveStyle = "diagonally";
      break;

    case 'knight':
      moveStyle = "in an ‘L’ shape’";
      break;

    case 'queen':
      moveStyle = "diagonally and horizontally";
      break;
    
    case 'king':
      moveStyle = "one square in any direction";
      break;
  
    default:
      moveStyle = "select a chess piece";
      break;
  }

  let result = document.querySelector("#resultadopecaxadrez");
  result.textContent = moveStyle;
}

function converterNota() {
  let elemento = Number(document.getElementById("elementonotamene").value);
  let elementoTrunc = Math.trunc(elemento/10);
  let notaLetter = null;

  if ((elemento<0) || (elemento>100)) {
    notaLetter = "Nota Inválida";
  } else {
    switch (elementoTrunc) {
      case (10):
        notaLetter = "A";      
        break;
      case (9):
        notaLetter = "A";      
        break;
      case (8):
        notaLetter = "B";      
        break;
      case (7):
        notaLetter = "C";      
        break;
      case (6):
        notaLetter = "D";      
        break;
      case (5):
        notaLetter = "E";      
        break;    
      default:
        notaLetter = "F";
        break;
    }
  }

  let result = document.querySelector("#resultadonotamene");
  result.textContent = notaLetter;
}