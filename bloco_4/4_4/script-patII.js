function isPalindrome(name) {
  let palidrome = true;
  for (let index = 0; index < name.length; index++) {
    if (name[index] !== name[name.length-index-1]) {
      palidrome = false
    }
  }

  return palidrome
}


function isMax(array) {
  let max = 0
  for (let index = 1; index < array.length; index++) {
      if (array[max] < array[index]) {
        max = index
      }
  }

  return max;
}

function isMin(array) {
  let min = 0
  for (let index = 1; index < array.length; index++) {
      if (array[min] > array[index]) {
        min = index
      }
  }

  return min;
}

function maxLength(array) {
  maxLengthName = array[0];
  for (let index = 1; index < array.length; index++) {
    if (array[index].length > maxLengthName.length) {
      maxLengthName = array[index]
    }    
  }

  return maxLengthName;
}

function repeatCount(array) {
  for (let index = 0; index < array.length; index++) {
    for (let index2 = 0; index2 < array.length; index2++) {
          
    }    
  }
}

let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maxLength(arrayTeste))