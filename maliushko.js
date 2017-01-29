
var addresses = require('./addresses');

    var regular = /\d[0-9-а-яА-Яё]{1,30}\s?[А-Яа-яё]+|([А-Я][ёА-Яа-я-\s]{1,50})|\d+/g;
    var regularObject = {};

    var arrayObjectParse = [];
    for(var i = 0; i < addresses.length; i++){
        let arrayMatch = [];
        while (match = regular.exec(addresses[i])){
            arrayMatch.push(match[0]);
        }
        if(arrayMatch.length == 2){
            regularObject.street = arrayMatch[0];
            regularObject.house = arrayMatch[1];
        }
        else if(arrayMatch.length == 3){
            regularObject.street = arrayMatch[0];
            regularObject.house = arrayMatch[1];
            regularObject.flat = arrayMatch[2];
        }
        let jsonRegularObject = JSON.stringify(regularObject);
        arrayObjectParse.push(jsonRegularObject);
    }

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







