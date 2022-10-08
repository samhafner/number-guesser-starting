let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generate the secret target number (integer between 0 and 9)
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

// compare the guesses from user and computer
// returns true is the user is closer to the target or 
// the game is a tie
// otherwise it returns false
function compareGuesses(playerGuess, computerGuess, targetNumber) {
    if (Math.abs(targetNumber - playerGuess) <= Math.abs(targetNumber - computerGuess)) return true;
    else return false;
}

// increase the score depending on the winner
// argument winner can be string "human" or "computer"
function updateScore(winner) {
    if (winner === "human") humanScore++;
    if (winner === "computer") computerScore++;
}

// increase the round number by 1
// The purpose of this function is to be used to update the round number after each round.
function advanceRound() {
    currentRoundNumber++;
}