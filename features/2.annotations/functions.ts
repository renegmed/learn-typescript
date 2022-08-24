const add = (a: number, b: number) => {
    return a + b;
};

console.log(add(5,6));

const substract = (a: number, b: number) => {
    a - b;
};

console.log(substract(5,6));

function divide(a: number, b: number): number {
    return a / b;
}

console.log(divide(5,6));

const multiply = function(a: number, b: number): number {
    return a * b;
}

console.log(multiply(5,6));

const logger = (message: string): void => {  // can return null or never
    console.log(message);
};

const throwError = (message: string): never => {
    throw new Error(message);
};

