let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let humanChoice;
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("Enter rock, paper or scissors").toLowerCase();
    }

    return humanChoice;
}   

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0) return "rock";
    if (choice === 1) return "scissors";
    if (choice === 2) return "paper";
}

function playRound(humanChoice, computerChoice) {
    if (computerChoice === "rock") {
        if (humanChoice === "rock") {
            console.log("Tie!");
        } else if (humanChoice === "scissors") {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        } else if (humanChoice === "paper") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        }

    } else if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        } else if (humanChoice === "scissors") {
            console.log("Tie!");
        } else if (humanChoice === "paper") {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        }

    } else if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        } else if (humanChoice === "scissors") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        } else if (humanChoice === "paper") {
            console.log("Tie!");
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(`You win! Player: ${humanScore}. Computer: ${computerScore}.`);
    } else if (humanScore === computerScore) {
        console.log("You tied!");
    } else {
        console.log(`You lose! Player: ${humanScore}. Computer: ${computerScore}.`);
    }
}

