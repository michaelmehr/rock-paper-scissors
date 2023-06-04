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
            return "tie";
        }
        if (computerSelection === 'paper') {
            computerScore++;
            return "lose";
        }
        if (computerSelection === 'scissors') {
            playerScore++;
            return "win";
        }
    }
    if (pChoice === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            return "win";
        }
        if (computerSelection === 'paper') {
            return "tie";
        }
        if (computerSelection === 'scissors') {
            computerScore++;
            return "lose";
        }
    }
    if (pChoice === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            return "lose";
        }
        if (computerSelection === 'paper') {
            playerScore++;
            return "win";
        }
        if (computerSelection === 'scissors') {
            return "tie";
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