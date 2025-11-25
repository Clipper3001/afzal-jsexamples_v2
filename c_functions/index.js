// 1. Writing a function declaration
function ftnGreeting(salutation, user){

    const msg = `Hi, ${salutation} ${user}.`;
    
    return msg; 
}

console.log(ftnGreeting("Mr", "Jones"));

// 2. function returning a sum of two values
// 2.1 equip ftnAdd to handle non-existant arguments (passed to its parameters)
function ftnAdd(a = 0, b = 0) {
    const result = a + b;
    return result;

}

const sum = ftnAdd(10, 5);      /* ftn wil send over 2 arguments */
console.log(sum);               /* 15 */

const anothersum = ftnAdd();    /* Passing in ZERO ARGUMENTS */
console.log(anothersum);


// 3. Arrow function
const anotherftnGreeting = (salutation = "", name = "") => {

    if (salutation.length == 0 && name.length == 0)
        return "Please enter your salutation & name";                               /*  Handle empty string value */

    return `Hello, ${salutation} ${name}. Welcome to Generation Bootcamp!`;         /* otherwise return the greeting
 */
}

console.log(anotherftnGreeting("Mr", "Afzal"));
console.log(anotherftnGreeting());
