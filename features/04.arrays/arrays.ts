const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

// const carsByMake: string[][] = [] 

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

// Help with interference when extracting values 
const aCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values 
//carMakers.push(100);

// Help with 'map', etc..
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [new Date()];
importantDates.push('2030-12-10');
importantDates.push(new Date())
