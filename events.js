import { humanScore, computerScore, getHumanChoice, getComputerChoice, playRound } from './rps.js';

function handleRound(event) {
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();

    // Display the two choices
    const displayPlayerChoice = document.querySelector('.player-choice');
    const displayComputerChoice = document.querySelector('.computer-choice');

    displayPlayerChoice.textContent = playerChoice; 
    displayComputerChoice.textContent = computerChoice;

    const winner = playRound(playerChoice, computerChoice);

    // Display the new score
    const displayPlayerScore = document.querySelector('.player-score');
    const displayComputerScore = document.querySelector('.computer-score');

    displayPlayerScore.textContent = humanScore.toString();
    displayComputerScore.textContent = computerScore.toString();

    const displayWinner = document.querySelector('.round-winner');
    switch (winner) {
        case 'h':
            displayWinner.textContent = 'human!';
            displayWinner.style.color = 'blue';
            break;
        case 'c':
            displayWinner.textContent = 'computer!';
            displayWinner.style.color = 'red';
            break;
        case 't':
            displayWinner.textContent = 'tie!';
            displayWinner.style.color = 'grey';
            break;
    }

    // End game if one player reaches 5 points
    const gameEnd = document.querySelector('.game-end');
    if (humanScore === 5) {
        gameEnd.textContent = 'Player wins!'
        gameEnd.style.color = 'blue';
        buttons.removeEventListener('click', handleRound);

    } else if (computerScore === 5) {
        gameEnd.textContent = 'Computer wins!'
        gameEnd.style.color = 'red';
        buttons.removeEventListener('click', handleRound);
    }
}

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', handleRound);


