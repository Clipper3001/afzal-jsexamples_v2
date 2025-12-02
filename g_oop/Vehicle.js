// create class called vehicle
class Vehicle {

    // constructor keyword
    // this(keyword)
    //  aconstructor is called when a new instance of class is created
    constructor(make, model, year) {
        this.make = make;                   // Property for vehicle's make
        this.model = model;                 // Property for vehicle's model
        this.year = year;                   // Property for vehicle's year of launch / production
        this.distanceTraveled = 0;          // Property for kilometers driven by the car
    }

    // common method for all vehicles
    travel(distance) {
        this.distanceTraveled += distance;
        console.log(`The ${this.year} ${this.make} ${this.model} has been driven ${distance} units (km)`);
    }

    // method to get total distance travelled
    getTotalDistance() {
        return this.distanceTraveled;
    }

}
// // my transport 1
// const myTransport = new Vehicle("Toyota", "Raize", "2022");
// myTransport.travel(100);
// myTransport.travel(150);

// console.log(`My transport has travelled a total of ${myTransport.getTotalDistance()} km.`);

// // my transokrt 2
// const myTransport2 = new Vehicle("Toyota", "Raize", "2022");
// myTransport2.travel(10);
// myTransport2.travel(10);

// console.log(`My transport has travelled a total of ${myTransport2.getTotalDistance()} km.`);

// module.exports = Vehicle;

export default Vehicle; /* modern (ES6) */