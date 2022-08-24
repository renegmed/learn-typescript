let apples= 5;
let speed = 'fast';
let hasName = true; 

let nothingMuch = null; // null is type, and null is a value 
let nothing = undefined; 

// build in objects
let now = new Date();

// Array
let colors = ['red', 'green', 'blue'];
let myNumbers = [1,2,3];
let truth = [true, true, false];

// Classes 
class Car{}

let car: Car = new Car();

// Object literal 
let point: {x: number; y: number} = {
    x: 10,
    y: 20
};

console.log(point.x, " ", point.y);
 
// Function 
const logNumber:{(x: number):void} = (i: number) => {
//const logNumber:(x: number) => void = (i: number) => {  // aleternative form    
    console.log(i);
};

logNumber(35);


// When to use annotations
// 1. Function that returns the 'any' type 
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates);  // { x: 10, y: 20 } 
 
//coordinates.xdsdfsdd


 

