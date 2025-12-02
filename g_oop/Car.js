// Car is a child class of Vehicle 
// const Vehicle = require("./Vehicle.js");
import Vehicle from "./Vehicle.js";

class Car extends Vehicle {                 // <-- INHERITANCE: Using 'extends' establishes the inheritance relationship

    // constructor
    constructor(make, model, year) {
        super(make, model, year);           // <-- INHERITANCE: The 'super()' call executes the parent's (Vehicle's) constructor
        this.hasAirbag = true;
    }
    // s
    static welcomeStatement (msg){
        console.log(msg);
    }

    // Polymorph
    drive(distance) {                       // <-- ABSTRACTION: Calls the 'drive' method, hiding the logic of calling 'super.travel()'.
        super.travel(distance);             // Reuses the encapsulated method travel from parent (Vehicle).
        console.log(`Driving is complete. Status: ${this.hasAirbag ? 'Safety check passed.' : 'Airbag absent.'}`);
    }

    // New method specific to the Car class. Only found in Car class
    checkSafetyFeature() {
        return this.hasAirbag;
    }
}

// Instantiate a new instance of a Car called myNewCar

Car.welcomeStatement("\n********\nWelcome Car Owner.\n*******\n");          /* static method(performing initialisation task that does not affect the class itself) */

const myNewCar = new Car("Honda", "Civic", 2024);
myNewCar.drive(50); // Calls the Car's specialized drive() method
console.log(`Car total distance: ${myNewCar.getTotalDistance()}`);
console.log(`Has Airbag: ${myNewCar.checkSafetyFeature()}`);


// module.exports = Car;

export default Car; /* car need export for es6 also */