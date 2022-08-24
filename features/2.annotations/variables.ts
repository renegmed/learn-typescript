let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true; 

let nothingMuch: null = null; // null is type, and null is a value 
let nothing: undefined = undefined; 

// build in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truth: boolean[] = [true, true, false];

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

 

