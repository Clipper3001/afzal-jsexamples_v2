// a) Create a person object
const person = { name: "John" }
console.log(person);

// b) create person object
function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}

// make new person objects
const person1 = new Person("John", "Doe");
const person2 = new Person("Steve", "Smith");

console.log(person1);
console.log(person2);

// c) Add a new PROPERTY gender to the Person constructor function.
// Note: Now, person1 and person2 objects inherits gender property from it constructor ftn too.
Person.prototype.gender = "Male";
Person.prototype.membership = "Basic";

// what is the outcome of the person
console.log(person1.gender);
console.log(person2.gender);

person2.membership = "Premium";

// d) intro a new method to person
Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
};

Person.prototype.getMembership = function() {
    return `Type: ${this.membership}`;
}

console.log(person1.getFullName() + " " + person1.membership);
console.log(person2.getFullName() + " " + person2.membership);

