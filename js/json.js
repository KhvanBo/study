'use strict';
//json
const person = {
    name: 'alex',
    tel: '+78899445',
    parents: {
        mom: 'jose',
        dad: 'hose'
    }
};
const clone = (JSON.parse(JSON.stringify(person)));
// копирование объекта
clone.parents.mom = 'sue';
console.log(person);
console.log(clone);