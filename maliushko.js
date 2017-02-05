
var addresses = require('./addresses');

    let regular = /\d[0-9-а-яА-Яё]{1,30}\s?[А-Яа-яё]+|([А-Я][ёА-Яа-я-\s]{1,50})|\d+/g;
    let arrayObjectParse = [];
    for(var i = 0; i < addresses.length; i++){
        let arrayMatch = [];
        while (match = regular.exec(addresses[i])){
            arrayMatch.push(match[0]);
        }


        let jsonRegularObject = JSON.stringify({street: arrayMatch[0], house: arrayMatch[1], flags: arrayMatch[2]});
        jsonRegularObject = JSON.parse(jsonRegularObject);
        arrayObjectParse.push(jsonRegularObject);
    }
console.log(arrayObjectParse);
module.exports = arrayObjectParse;

// ... some good code ...

/*
приклад структури масиву result
>>> result
[
  ...
  {
    "street": 'Юности', //string
    "house": '25',      //string
    "flat": '6'         //string
  }
 ...
]
*/
//module.exports = result;








