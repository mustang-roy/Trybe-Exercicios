function convertRoman(roman) {
  romNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let initial = 0;

  for (let index = 0; index < roman.length; index++) {
    if (romNumber[roman[index]] < romNumber[roman[index+1]]){
      initial -= romNumber[roman[index]]
    } else {
      initial += romNumber[roman[index]]
    }    
  } 

  console.log(initial)
}


convertRoman("MMXIX")