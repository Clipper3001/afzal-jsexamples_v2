// // 1. Start

const prompt = require("prompt-sync")({ sigint: true });

// let getName = prompt("What is your name?");

// // while loop
// // if a condition is to be checked first, before running a while loop
// while (getName === ""){                                         /* Check first */
//     getName = prompt("What is your name?");                     /* Do later */
// }

// // console.log(`Welcome, ${getName}`);

// // 2. Do-while loop
// // since it is a must to obtain the user name, do the executable block AT LEAST ONCE
// let getName2 = "";

// do {
//     getName2 = prompt("Please enter your name:");               /* do first */

// } while (getName2 === "");                                      /* ask later */

// console.log(`Welcome, ${getName2}`);


// 3. Game input
const up = "w";
const down = "s";
const left = "a";
const right = "d";
const quit = "q";

let move = "";

function updateMove(m) {
    if (m === up) return console.log("you moved up")
    if (m === down) return console.log("you moved down")
    if (m === left) return console.log("you moved left")
    if (m === right) return console.log("you moved right")
    if (m === quit) return console.log("you quit the game!")
    console.log("Invalid Entry!");
}

do {
    move = prompt("(w),(a),(s),(d),(q) exit: ").trim().toLowerCase();
    switch (move.toLowerCase()) {
        case up:
            updateMove(up);
            break;
        case down:
            updateMove(down);
            break;
        case left:
            updateMove(left);
            break;
        case right:
            updateMove(right);
            break;
        case quit:
            updateMove(quit);
            break;
        default:
            updateMove();
    }

} while (move !== quit);
