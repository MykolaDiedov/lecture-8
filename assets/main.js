var person = {
    name: 'Ivan',
    surname: 'Kruglov',
    bday: 1998,
    age: 22,
}
function getValues(object) {
    var personValues = [];
    for (key in object) {
       personValues.push(object[key]);
    } 
    
    return personValues;
}

console.log(getValues(person));

/*--------------------------------------*/

function getKeys(object) {
var personKeys = [];
    for (key in object) {
        personKeys.push(key);
    } 

   return personKeys;
}
console.log(getKeys(person));

/*-------------------------------*/

function getEntries (object) {
    var personEntries = [];
    for (key in object) {
        personEntries.push([key, object[key]]);
    } 

    return personEntries;
}
console.log(getEntries(person));