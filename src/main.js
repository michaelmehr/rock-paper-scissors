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
            return "You Lose! Paper beats Rock";
        }
        if (computerSelection === 'scissors') {
            return "You Win! Rock beats Scissors";
        }
    }
    if (pChoice === 'paper') {
        if (computerSelection === 'rock') {
            return "You Win! Paper beats Rock";
        }
        if (computerSelection === 'paper') {
            return "You Tied! Both chose Paper";
        }
        if (computerSelection === 'scissors') {
            return "You Lose! Scissors beats Paper";
        }
    }
    if (pChoice === 'scissors') {
        if (computerSelection === 'rock') {
            return "You Lose! Rock beats Scissors";
        }
        if (computerSelection === 'paper') {
            return "You Win! Scissors beats Paper";
        }
        if (computerSelection === 'scissors') {
            return "You Tied! Both chose Scissors";
        }
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));