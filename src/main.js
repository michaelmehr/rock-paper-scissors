function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice > 1) {
        return 'rock';
    } else if (computerChoice > 0) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let pChoice = playerSelection.toLowerCase();
    if (pChoice === 'rock') {
        if (computerSelection === 'rock') {
        }
        if (computerSelection === 'paper') {
            computerScore++;
        }
        if (computerSelection === 'scissors') {
            playerScore++;
        }
    }
    if (pChoice === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
        }
        if (computerSelection === 'paper') {
        }
        if (computerSelection === 'scissors') {
            computerScore++;
        }
    }
    if (pChoice === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
        }
        if (computerSelection === 'paper') {
            playerScore++;
        }
        if (computerSelection === 'scissors') {
        }
    }
    updateScores();
}

function updateScores() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    if (playerScore >= 5) {
        winnerDisplay.textContent = "WINNER: PLAYER";
    } else if (computerScore >= 5) {
        winnerDisplay.textContent = "WINNER: COMPUTER";
    }
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const winnerDisplay = document.querySelector('#winner');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    })
})