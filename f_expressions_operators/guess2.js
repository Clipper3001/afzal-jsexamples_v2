// const { use } = require("react");

let ans = 10;
let ansString = "ten";

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();

// as long as the user doesn't enter 'q' AND 'Q', run the loop
while (userInput !== 'q') {
console.log(userInput);
    if (Number(userInput) === '10' || userInput === "ten") {
        alert("You are correct");
        break;
    }

    else if (!userInput) {
        userInput = prompt("No answer. Input value pls").toLowerCase();
    }

    else {
        alert("You are incorrect");
        userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();
        
    }













    // if(userInput == ans){ // if user's answer is a number 10

    //     alert("You are correct!!");
    //     break;

    // }else if(!userInput){ // else if the user's input is undefined == false (!false == true)

    //     userInput = prompt("Your answer is empty. Please try again."); 

    // }
    // else{

    //     userInput = prompt("Wrong answer. Guess again. Press q or Q to quit.");

    // }
}
