// ---------
// 1. ARRAYS
// ---------

// Basic array
// This is just an example, the best practice is to store a single data type to an array
const myArray = [1, 2, 3, 4, "Hello", true, null];
console.log(myArray.length);



// B) ARRAY METHODS
// i - map function of an array
// Implement your code here
const mappedArray = [1, 2, 3, 4, 5, 6];
const mulitplyArrBy10 = mappedArray.map(item => item * 10);     /* short form of the arrow function */
console.log(mulitplyArrBy10);                                   /* [ 10, 20, 30, 40, 50, 60 ] */


// ii - filter function of an array
// Implement your code here
const vowels = ["a", "e", "i", "o"];
const filteredVowels = vowels.filter(vowel => vowel == "a" || vowel == "u");          /* [] refers to the spefic query. will only return a becos u is not included in query. || means or */
console.log(filteredVowels);

// iii - sort function of an array
// Implement your code here
const nums = [1, 2, 3, 4, 5, 6];
const names = ["James", "Chris", "Max", "Lenon"];

// Sort by descending order
// Implement your code here
const descendNums = nums.sort((a, b) => a > b ? -1 : 1);
console.log(descendNums)

const descendingNames = names.sort((a, b) => a > b ? -1 : 1);
console.log(descendingNames); // ['Chris', 'James', 'Lenon', 'Max']

// Sort by ascending order
// Implement your code here
const ascendingNames = names.sort((a, b) => a > b ? 1 : -1);
console.log(ascendingNames); // ['Chris', 'James', 'Lenon', 'Max']

const ascendingNum = nums.sort((a, b) => a > b ? 1 : -1);
console.log(descendNums)

// iv - reduce function of an array
// Implement your code here
const numbers = new Array(1, 2, 3, 4);
var product_of_arr = numbers.reduce((a, b) => a * b);
console.log(product_of_arr);                            /* answer is 24 .a x b (1x2x3x4=24)*/


// another approach of applying a reuduce function of an array
// Implement your code here
const arr = new Array(2, 3, 4, 5);

function product(a, b) {
    return a * b;
}

// append elements to an existing array
const teamList = ["Tanna", "Shia Lyn", "Zhi Yan", "Francis"];   /* 0 - 3 */
teamList.push("Muhaimin");                                      /* 0 - 4 */
console.log(teamList.length);
console.log(teamList);

// remove last element of an existing array
teamList.pop();                 /*  intrinsically known to remove the last element */
console.log(teamList.length);   /* 0 - 3 */
console.log(teamList);          /* 4 names */

// shift elements of an array
const mag7 = ["FB", "AMZN", "AAPL", "TSLA", "GOOG"];
console.log(mag7.shift()); /* FB removed ( 0,1,2,3,4,) */
console.log(mag7);

// unshift (add in META, NVDA, MSFT)
mag7.unshift("META", "NVDA", "MSFT");
console.log(mag7);

// splice data (insert)
const bballTeam = ["Jordan", "Pippen", "Bill"];
const index = 2;
const newPlayer = "Steve Carr";
bballTeam.splice(index, 0, newPlayer);
console.log(bballTeam);

// replace Bill with Rodman
bballTeam.splice(3, 1, "Rodman"); /*  start at 3,  */
console.log(bballTeam);





// ---------
// 2. LOOPS
// ---------

// i - for loops (Simulate a countdown using a for loop)
// Implement your code here

// do a count up
const max = 10;
for (let index = 1; index <= max; index += 1) {
    console.log(index);

}

// index, the condition and the step area variables
const max100 = 100;
for (let index = 10; index <= max100; index = index + 10) {
    console.log(index);
}

// count down (10 to 1)
for (let index = max; index >= 0; index--) {        /* max is 10,index is more or equals to 0 */
  if (index === 0) {                                /* if statement */
    console.log("Merry X'mas!");
  } else {
    console.log(index);
  }
}



// ii - for-each loop
// Implement your code here
const tickerSymbol = ["META", "AMZN", "GOOG", "MSFT"];          /* constant */
// console.log(tickerSymbol);

// test shorthand 
tickerSymbol.forEach((element, index) => {console.log(`${index + 1}. ${element}`)});


// iii - do-while loop (execute first, check for the condition later)
// Implement your code here
let i = 0

do {
    console.log(i); /* print 0 to 10 */
    i++;
} while (i <= 5);


// iv - while loop (check the conditions first before running the while loop)
// Implement your code here
let j = 0
while (j <=10) {
    console.log(j);
    j++;
}


