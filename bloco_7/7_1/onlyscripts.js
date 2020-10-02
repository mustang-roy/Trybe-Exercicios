const factorial = value => value === 1 ? value : value * factorial(value-1);

const longestWord = phrase => phrase.split(' ').sort((element1, element2) => element1.length - element2.length).pop();

const replaceX = (original, toReplace) => original.replace('x', toReplace);

const skills = ['skill1', 'skill2', 'skill3', 'skill4', 'skill5']

const addSkill = (skillList, original, toReplace) => {
  let phrase = `${replaceX(original, toReplace)} Minhas cinco principais habilidades são: \n`
  skillList.forEach(element => phrase += `${element} \n`)
  return phrase
}

console.log(addSkill(skills, 'Tryber x aqui!', 'Bebeto'))



