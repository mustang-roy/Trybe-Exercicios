    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
 let value = names.reduce((acc, curr) => {
    return acc + curr.split('').reduce((acc2, curr2) => {
      if (curr2.toLowerCase() == 'a') return acc2 + 1
      return acc2
    }, 0)
  },0)

  return value
}

assert.deepEqual(containsA(), 20);