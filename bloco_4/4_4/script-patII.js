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
  moreRepeat = {
    element: array[0],
    repeat: 1
  }

  for (let index = 0; index < array.length; index+=1) {
    let count ={
      element: array[index],
      repeat: 0
    };
    for (let index2 = 0; index2 < array.length; index2+=1) {
        if (count.element === array[index2]) {
          count.repeat+=1;
        }
    }    
      if (count.repeat > moreRepeat.repeat) {
        moreRepeat.element = count.element
        moreRepeat.repeat = count.repeat;
      }
  }

  return moreRepeat.element
}

function summation(number) {
  let sumToNumber = 0;

  for (let index = 1; index <= number; index+=1) {
    sumToNumber += index;    
  }

  return sumToNumber;
}

function verifyEnd(word, wordEnd) {
  wordIsEnd = true;

  for (let index = 1; index <= wordEnd.length; index+=1) {
    if (wordEnd[wordEnd.length-index] !== word[word.length-index]) {
      wordIsEnd = false
    }
  }

  return wordIsEnd;
}