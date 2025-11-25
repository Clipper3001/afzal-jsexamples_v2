// Try to stick with let & const. Try not to use var




// 1. Primitive TYpes

let pi = 3.142;     /* Variable with a number of 3.142 */
console.log(typeof pi);

let strValue =
  "Hello";    /* variable (camelcase naming convention) with a value of "Hello" */
console.log(typeof strValue);

let boolValue = true;     /*  Variable storing a boolean value */
console.log(typeof boolValue);

let nullvalue = null;     /* variable of null vaue objext */
console.log(typeof nullvalue);

let undefinedvalue;     /* variable that is declared but is uninistialised */
console.log(typeof undefinedvalue);



// 2. Non- Primitive Type



let arr = ["a", "b", "c"];    /*  Declare and initialize an array with 3 elements */
console.log(arr);

let faang = new Array();    /*  Declare a new array object, BUT uninitialised */
faang[0] = "FaceBook";
faang[1] = "AMAZON";    /* // Assign a value the second element of array faang */
console.log(faang);

console.log(faang[0]);
console.log(faang[1]);

let person = { name: "Sam", age: "42" }; /* // Declare and initialize an object with 2 key-value pairs (value and age) */
console.log(`name: ${person.name}`);
console.log(`age: ${person.age}`);

let vehicle =
  new Object();            /* // Declare a new instance on object called vehicle */
vehicle.name = "Suzuki";   /* // Assign vehicle object property called "name" then assign value called "suzuki" */
vehicle.model = "Swift";   /* // Assign vehicle object property called "model" then assign value called "swift" */
vehicle.color = "blue";

let announce = function () { console.log("HelloJS"); };    /* Declare a new function "announce() as a function" */
announce();                                                /* Invoke and execute new object "announce" */


let announce2 = () => {
  console.log("Hello JS Again");
}
announce2();

// 3. Declaring variables using let, const & var

const PI = 3.142; // constant variable. constant is imutable. let is

// let variables
function greet() {
  let greeting = "Welcome FSD Learners";
  console.log(greeting);
}

// console.log(greeting); 

// var keyword
var localMsg = "welcome"

function welcome() {
  var localMsg = "Welcome FSD Learners";
  console.log(localMsg);
}

console.log(localMsg)


