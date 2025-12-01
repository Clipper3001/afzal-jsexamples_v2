

let ans = 10;


let userInput = prompt("Guess the Number").toLowerCase(); 

// as long as the user doesn't enter 'q' AND 'Q', run the loop
while (userInput !== 'q') {

    if (Number(userInput) === 10) {
        alert("You are correct");
        break;
    }

    else if (!userInput) {
        userInput = prompt("No answer. Input value pls").toLowerCase();
    }

    else {
        // provide hints to user
        const hint = userInput < ans ? "Higher" : "Lower";


        alert(`You are incorrect. ${hint} number please.`);
        userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();

    }


}
