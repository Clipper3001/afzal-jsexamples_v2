let ans = 10;

// feedback messages
const feedbackGuess = "Guess the number.";
const feedbackQuit = "Press q or Q to quit.";
const feedbackCorrect = "You are Correct!";
const feedbackWrong = "Your answer is wrong";
const feedbackTooHigh = "Lower number please. Try again.";
const feedbackTooLow = "Higher number please. Try again.";
const feedbackEmpty = "Your answer is empty";

// first input
let userInput = prompt(`${feedbackGuess} ${feedbackQuit}`);

while (userInput !== null && userInput.toLowerCase() !== 'q') {

    let isCorrect = false;
    let feedback = "";

    switch (true) {

        case (!userInput.trim()):        // empty input
            feedback = feedbackEmpty;
            break;

        case (Number(userInput) === ans || text2num(userInput) === ans):  // correct
            feedback = feedbackCorrect;
            isCorrect = true;
            break;

        case (Number(userInput) > ans || text2num(userInput) === ans):    // too high
            feedback = feedbackTooHigh;
            break;

        case (Number(userInput) < ans || text2num(userInput) === ans):    // too low
            feedback = feedbackTooLow;
            break;

        default:
            feedback = feedbackWrong;      // invalid or is not a number
    }

    alert(feedback);

    if (isCorrect) break;

    userInput = prompt(`${feedbackGuess} ${feedbackQuit}`);
}
