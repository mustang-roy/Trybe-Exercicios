let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function funcaoQ1(array1) {
  for (item in array1) {
    console.log(array1[item])
  }  
}
function funcaoQ2(array1) {
  let sum = 0;
  for (item in array1) {
    sum += array1[item];
  }
  return sum;
}
function funcaoQ3(array1) {
  return funcaoQ2(array1)/array1.length
}
function funcaoQ4(array1) {
  if(funcaoQ3(array1) > 20){
    return "valor maior que 20"
  } 
  else {
    return "valor menor que 20"
  }
}

function funcaoQ5(array1) {
  let maximo=array1[0];

  for (let count = 1; count<array1.length; count++){
    if (maximo < array1[count]) {
      maximo = array1[count];
    }
  }
  return "maior valor é: " + maximo
}

function funcaoQ6(array1) {
  let impar = 0;

  for (i in array1){
    if (array1[i]%2 == 1){
      impar++
    }
  }

  if (impar > 0){
    return impar
  } else {
    return "nenhum valor ímpar encontrado"
  }
  
}

function funcaoQ7(array1) {
  let minimo=array1[0];

  for (let count = 1; count<array1.length; count++){
    if (minimo > array1[count]) {
      minimo = array1[count];
    }
  }
  return "menor valor é: " + minimo
}

function quickSortBasic(array) {
  if(array.length < 2) {
    return array;
  }

  var pivot = Number(array[0]);
  var lesserArray = [];
  var greaterArray = [];

  for (var i = 1; i < array.length; i++) {
    if ( Number(array[i]) > Number(pivot) ) {
      greaterArray.push(Number(array[i]));
    } else {
      lesserArray.push(Number(array[i]));
    }
  }

  return quickSortBasic(lesserArray).concat(pivot, quickSortBasic(greaterArray));
}

function funcaoQ8(array1) {

  let orderAr = quickSortBasic(array1)
  
  return(orderAr);
}

function funcaoQ9(array1) {
  
  let reverseOrdArray = []
  let orderArray = quickSortBasic(array1);

  for (let count = 1; count <= orderArray.length; count++ ){
    reverseOrdArray.push(orderArray[orderArray.length-count])
  }

  return reverseOrdArray;
}

function funcaoQ10(array1) {
  let newArray = [];

  for (let count = 0; count < array1.length-1; count++ ){
    newArray.push(array1[count]*array1[count+1])
  }

  newArray.push(array1[array1.length-1]*2)

  return newArray
  
}

console.log(funcaoQ9(numbers))
console.log(funcaoQ8(numbers))



