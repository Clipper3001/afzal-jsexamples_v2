// Example: 2D Array
/* ***************** */

const array2D = [
    [3, 2, 7],          /* row 0 */
    [2, 9, 5],          /* row 1 */
    [5, 1, 5],          /* row 2 */
];

console.log(array2D);

// const another2Darr = new Array(.     /* another way of writing array */
//     [3, 2, 7],       // row 0
//     [2, 9, 5],       // row 1
//     [5, 1, 5],       // row 2
// );

// console.log(another2Darr);


// assesing the elements of an array
// array name
const element = array2D[1][1];          /* targeting index row 1, column 1 = answer is 9 */
console.log(element);

// print all columns in 3rd row
const e1 = array2D[2][0];           /* targeting index row 2, column 0  */
const e2 = array2D[2][1];           /* targeting index row 2, column 1  */
const e3 = array2D[2][2];           /* targeting index row 2, column 2  */
console.log(e1, e2, e3);

// 2d game
const myField = [
    ['░', '░', 'O', '░'],
    ['*', 'O', '░', 'O'],
    ['░', '^', '░', '░'],
];

console.log(myField);

// i refers to row
// j refers to column

// dynamic 2d array
const rows = 4;
const cols = 4;
const arr2D = [];                       /* arr2d is a new instance of an array object */

// nested for loop (loop inside a loop)

// 1. Manages per row
for (let i = 0; i < rows; i++) {
    arr2D[i] = [];                      /* create a new instance of an array (as the row) */

    // 2. manages the columns per row
    for (let j = 0; j < cols; j++) {
        arr2D[i][j] = '░';              /* populate each row and its column with a value of 0 */
    }
}
console.log(arr2D);
