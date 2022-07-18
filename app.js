"use strict";
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
// function types
const myFunction = (param) => {
    return param + 1;
};
const anotherFunction = (a, b) => {
    console.log(a, b);
};
console.log(anotherFunction(28, 'mike'));
// array types
let names = [];
names = [3, 4, 4, true, false];
names.push('sarah');
let elements = ['name', 'age', 5];
//  object types
let obj;
obj = {
    name: 'luke',
    age: 44,
    adult: true
};
obj.pet = 'cat';
console.log(obj);
