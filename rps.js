export let humanScore = 0;
export let computerScore = 0;

export function getHumanChoice() {
    let humanChoice;
    while (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        humanChoice = prompt('Enter rock, paper or scissors').toLowerCase();
    }

    return humanChoice;
}   

export function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0) return 'rock';
    if (choice === 1) return 'scissors';
    if (choice === 2) return 'paper';
}

export function playRound(humanChoice, computerChoice) {
    if (computerChoice === 'rock') {
        if (humanChoice === 'rock') {
            return 't';
        } else if (humanChoice === 'scissors') {
            computerScore++;
            return 'c';
        } else if (humanChoice === 'paper') {
            humanScore++;
            return 'h';
        }

    } else if (computerChoice === 'scissors') {
        if (humanChoice === 'rock') {
            humanScore++;
            return 'h';
        } else if (humanChoice === 'scissors') {
            return 't';
        } else if (humanChoice === 'paper') {
            computerScore++;
            return 'c'
        }

    } else if (computerChoice === 'paper') {
        if (humanChoice === 'rock') {
            computerScore++;
            return 'c';
        } else if (humanChoice === 'scissors') {
            humanScore++;
            return 'h';
        } else if (humanChoice === 'paper') {
            return 't';
        }
    }
}
