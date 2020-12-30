var person = {
    name: 'Ivan',
    surname: 'Kruglov',
    bday: 1998,
    age: 22,
}
function getValues(object) {
    var personValues = [];
   for (key in object) {
       personValues.push(person[key]);
   } return personValues;
}

console.log(getValues(person));

/*--------------------------------------*/

var person = {
    name: 'Ivan',
    surname: 'Kruglov',
    bday: 1998,
    age: 22,
} 
function getKeys(object) {
    var personKeys = [];
   for (key in object) {
    personKeys.push(key);
   } return personKeys;
}
console.log(getKeys(person));

/*-------------------------------*/

function getEntries (object) {
    var personEntries = [];
    for (key in object) {
        personEntries.push(['0: ' + key + ' ' + '1: ' + person[key]]);
       } return personEntries;
}
console.log(getEntries(person));