'use strict';
//filter фильтрация массиваю создает новый массив

const name = ['Ann', 'Kazb', 'Ruslan', 'Volandemort'];
const newArr = name.filter(function(name) {
    return name.length < 5;
});
console.log(newArr);

// map - трасформируем элементы массива в новый массив

const ans = ['IvAn', 'AnnA', 'kAZBEK'];
const newArr = ans.map(item => item.toLowerCase());
console.log(newArr);

//every - / some- выбирает элемент массива если он подходит условию вернtn true
const some = [4, 'dool', 'd'];
console.log(some.some(item => typeof(item) === 'number'));

const some = [4, 5, 5];
console.log(some.every(item => item > 4));

// reduce - обирать массив в одно целое

const arr = [4, 5, 6, 7, 8, 7, 6, 5];
// два аргумента подставляется автоматическиб первый сумма по умолчанию 0
// можно использовать со строками

const res = arr.reduce((sum, current) => sum + current);

const arr1 = ['apple', 'potato', 'tomato'];
const res = arr1.reduce((sum, current) => sum + ',' + current);
console.log(res);
// можем передать в reduce начальную переменную 
const res = arr.reduce((sum, current) => sum + current, 3);

//вытащить имена в объекта у кого persone

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal',
};
// метод объектов entries - делает из объекта матрицу. массив массивов
// чайнинг записывание операции в цепочку
//filter - отфильтровали по значению person
//map - вывели только 1 элемент массива
const newArr = Object.entries(obj)
    .filter(item => item[1] === 'persone')
    .map(item => item[0]);

console.log(newArr);