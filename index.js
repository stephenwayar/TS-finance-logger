"use strict";
// function types
const myFunction = (param) => {
    return param + 1;
};
const anotherFunction = (a, b, c) => {
    console.log(a, b);
    console.log(c);
};
console.log(anotherFunction(28, 'mike', [2, 4, 5]));
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
const handleRequests = (req, res) => {
    console.log(23);
};
const kole = {
    name: "mike",
    age: 56,
    data: 45
};
