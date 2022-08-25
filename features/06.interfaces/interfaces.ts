interface Reportable {  
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true, 
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const drink = {
    color: 'brown',
    carbonated: true, 
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};
//const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void =>{
const printSummary = (item: Reportable): void => {
   
    console.log("Summary:\n\t", item.summary());
};

printSummary(oldCivic);

printSummary(drink);
