
// Rock-Paper-Scissors game against the computer


// This will make a random choice for the computer
function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    return num === 0 ? "Rock"
        : num === 1 ? "Paper"
            : "Scissors";
}


// This function defines who wins each round
function gameRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        console.log("It's a tie!");
        return null;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
        console.log("You win! Rock beats Scissors.");
        return true;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
        console.log("You lose! Paper beats Rock.");
        return false;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
        console.log("You win! Paper beats Rock.");
        return true;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
        console.log("You lose! Scissors beats Paper.");
        return false;
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
        console.log("You lose! Rock beats Scissors");
        return false;
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
        console.log("You win! Scissors beats Paper");
        return true;
    } else {
        console.log("Error. No valid input");
        return null;
    }
}

// let playerSelection = "rock";
// let computerSelection = computerPlay();
// console.log(gameRound(playerSelection, computerSelection));


// This function initiates the complete game
function game() {
    let computerSelection, playerSelection, result;
    // Two variables to keep track of score and compare at the end to decide who wins
    let playerScore = 0;
    let computerScore = 0;


    // for loop to repeat gameRound() 5 times
    for (let i = 0; i < 5; i++) {

        // We use toUpperCase() to make user input case insensitive
        playerSelection = prompt("Enter your choice ", "").toUpperCase();
        computerSelection = computerPlay();

        // Result will be stored as boolean
        result = gameRound(playerSelection, computerSelection);
        // If true, increment playerScore by 1
        // If false, increment computerScore by 1
        if (result === true) {
            playerScore += 1;
        } else if (result === false) {
            computerScore +=1
        } 
        // This console.log() will show the current score table
        console.log(`Player score is ${playerScore} and computer score is ${computerScore}`);
    }

    // If statement to decide if we won, lost or it's a tie
    if (playerScore > computerScore) {
        console.log("You won the game!")
    } else if (playerScore < computerScore) {
        console.log("Game over!")
    } else {
        console.log("Nobody has won")
    }
    
}

game();