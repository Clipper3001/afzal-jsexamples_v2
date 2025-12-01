// 1. Trim a string ( note trim start & trim end)
let wordWithTrim = "   FSD   ";
console.log(`"${wordWithTrim.trim()}"`);
console.log(`"${wordWithTrim.trimStart()}"`);
console.log(`"${wordWithTrim.trimEnd()}"`);


// 2. toString ( number to string conversion)
let statusCode = 404;                                       /* this is a number. not a string. string would have "" */
console.log(statusCode.toString());                         // equivalent to Number(statusCode).toString(); where we use Number Object's built-in toString() method
console.log(String(statusCode).toString());

// 3. toString (converts a boolean to a string, printing either "true" or "false")
let boolVal = true;
console.log(typeof String(boolVal).toString());

// 4. Split a string 
let fullName3 = "John Doe";
let splitName = fullName3.split(" "); /* what type is returned? Ans: array.  */
console.log(splitName.length);["John", "Doe"];
console.log(`Welcome ${splitName[0]} ${splitName[1]} to our web site!`);

// 5. Split a string based on the character used as a delimiter, and limit the number of elements returned (in the 2nd argument)
let sentence = "Hello World JS Coders";
let splitInstances = sentence.split(" ", 3);
console.log(splitInstances);                        /* split to 3 "Hello", "World, "JS" */

let splitWordIndex0 = splitInstances[0].split("");  /* [ 'H', 'e', 'l', 'l', 'o' ] */
console.log(splitWordIndex0);


// 6. Split the string based on today's date and render a custom message
const currDate = Date.now();
const today = new Date(currDate);
let splitToday = today.toDateString();          /* output: ddd mmm dd yyyy */
splitToday = splitToday.split(" ");             /* Fri, Nov, 28, 2025 */
console.log(splitToday[0]);                     /* value will be Fri. */

let msg = "";
switch (splitToday[0]) {
    case "Mon":
        msg = "Monday Blues.";
        break;
    case "Fri":
        msg = "TGIF!!";
        break;
    case "Sun":
        msg = "Every day is Sunday."
        break;
    default:
        break;
}
console.log(msg);                                       // Output: "TGIF!!"

// do until point number 9