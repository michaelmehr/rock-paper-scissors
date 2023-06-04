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
            return "You Tied! Both chose Rock";
        }
        if (computerSelection === 'paper') {
            computerScore++;
            return "You Lose! Paper beats Rock";
        }
        if (computerSelection === 'scissors') {
            playerScore++;
            return "You Win! Rock beats Scissors";
        }
    }
    if (pChoice === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            return "You Win! Paper beats Rock";
        }
        if (computerSelection === 'paper') {
            return "You Tied! Both chose Paper";
        }
        if (computerSelection === 'scissors') {
            computerScore++;
            return "You Lose! Scissors beats Paper";
        }
    }
    if (pChoice === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            return "You Lose! Rock beats Scissors";
        }
        if (computerSelection === 'paper') {
            playerScore++;
            return "You Win! Scissors beats Paper";
        }
        if (computerSelection === 'scissors') {
            return "You Tied! Both chose Scissors";
        }
    }
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(button.id, getComputerChoice()));
    })
})