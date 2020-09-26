const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};



const func1 = (obj, keyObj, valueObj) => {obj[keyObj] = valueObj}
const func2 = obj => Object.keys(obj)
const func3 = obj => Object.keys(obj).length
const func4 = obj => Object.values(obj)
const func5 = (...inputs) => {
  let outObject = {};
  let count = 1;
  inputs.forEach(element => {
    outObject['lesson'+count] = Object.assign({}, element);
    count += 1
  });

  return outObject
};
const func6 = obj => {
  let somaAlunos = 0

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      somaAlunos += obj[key].numeroEstudantes      
    }
  }

  return somaAlunos
}

const func7 = (object, position) => {return Object.keys(object)[position]}

const func8 = (object, keySearch, valueSearch) => {  
  const verify = Object.entries(object).find(element => element[0] == keySearch && element[1] == valueSearch );
  return verify === undefined ? false : true;
}

const func9 = (object, subject) => {
  const valuesObj = Object.values(object);
  let sumStudent = 0;
  valuesObj.forEach(element => element.materia === subject ? sumStudent += element.numeroEstudantes : sumStudent);
  return sumStudent
}

const createReport = (object, nameTeacher) => {
  objArr = Object.values(object);
  const report = {professor : nameTeacher, };
  report.aulas = []
  report.estudantes = 0
  
  objArr.forEach(element => {
    if (element.professor === nameTeacher) {
      report.aulas.push(element.materia)
      report.estudantes += element.numeroEstudantes
    }
  })

  return report;
  
};

const allLessons = func5(lesson1, lesson2, lesson3);

console.log(createReport(allLessons, 'Maria Clara'))