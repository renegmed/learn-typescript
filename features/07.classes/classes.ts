class Vehicle {
    // color: string; // = 'red'; // required to be initialized
    // constructor(color: string) {
    //     this.color = color;
    // }

    // same as (short version)
    
    constructor(public color: string) {}

    protected honk(): void { // only the child can use this
        console.log('beep');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {

    constructor(public wheels: number, color: string) {
        super(color);
    }

    private drive(): void {
        console.log("vroom");
    }
    startDrivingProcess(): void {
        console.log("Car number of wheels:", this.wheels, "  Car color:", this.color)
        this.drive();
        this.honk();
    }
    // honk(): void {
    //     console.log("BEEP BEEP")
    // }
}

const car = new Car(4, "red");
car.startDrivingProcess();
// car.drive();
// car.honk();