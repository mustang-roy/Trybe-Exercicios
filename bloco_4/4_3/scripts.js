function quest01(number) {
  
  for (let countline = 0; countline < number; countline+=1) {
    let line = "";
    for (let countcolumn = 0; countcolumn < number; countcolumn+=1) {
      line += "*"
      
    }    
    console.log(line)
  }
}

function quest02(number) {
  
  for (let countline = 0; countline < number; countline+=1) {
    let line = "";
    for (let countcolumn = 0; countcolumn <= countline; countcolumn+=1) {
      line += "*"      
    }    
    console.log(line)
  }
}

function quest03(number) {
  
  for (let countline = 0; countline < number; countline+=1) {
    let line = "";
    for (let countcolumn = 0; countcolumn <= number; countcolumn+=1) {
      countcolumn < (number - countline)? line +=" " : line +="*";      
    }    
    console.log(line)
  }
}

function quest04(number) {

  let voidSpace = Math.ceil(number/2) - 1;
  
  for (let countline = 0; countline < number/2; countline+=1) {
    let line = "";
    let voidSpace = Math.ceil((number-1)/2) - countline;
    for (let countcolumn = 0; countcolumn < (number/2)+countline; countcolumn+=1) {
        countcolumn >= voidSpace ? line+="*" : line+=" "
    }    
    console.log(line);
  }
}

function quest05(number) {

  let edgeRight = Math.ceil((number-1)/2);
  let edgeLeft = Math.floor((number-1)/2);
  
  for (let countline = 0; countline < (number/2); countline+=1) {
    let line = "";
    for (let countcolumn = 0; countcolumn < (number/2)+countline; countcolumn+=1) {
        if(countcolumn === edgeLeft || countcolumn === edgeRight || countline === Math.floor(number/2)) {
          line+="*";
        } else {
          line+=" ";
        }
    }    
    edgeLeft -= 1;
    edgeRight += 1;
    console.log(line);
  }
}

function quest06(number) {
  let divisores = 0;
  for (let index = 1; index <= number; index++) {
    if (number%index === 0){
      divisores +=1
    }
  }

  divisores > 2 ? console.log("Não é Primo") : console.log("É Primo")

}