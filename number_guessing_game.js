// node assignment9

const prompt = require('prompt-sync')({sigint: true});

// Random number from 1 - 100
let numberInMind = Math.floor(Math.random() * 100) + 1;

// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;

while (!foundCorrectNumber) {
  // Step 1: Get user input (don't forget that the input is a string)
  const ans = prompt('Guess the number in my mind: ');
  console.log( `Your guess is : ${ans}`);
  if (ans<numberInMind){
    console.log("Too small. Guess larger.")
  } else if (ans > numberInMind){
    console.log("Too large. Guess smaller.")
  } else if (ans == numberInMind){
    console.log("You are CORRECT! The number in my mind is: " + numberInMind )
    foundCorrectNumber = true
  } else {
    console.log("This is not a number.")
  }

  // Step 2: Compare the guess to the secret answer and
  // let the user know the feedback (too large, too small, correct).
}

// if (foundCorrectNumber = true){
//   const again = prompt('Play again?');
//   console.log( `${again}`);
//   if (again=="n"){
//     console.log("bye")
//   }
// }else if (again=="y") {
//   return game

// Bonus Point: prompt user and provide option for user to start a new game after winning