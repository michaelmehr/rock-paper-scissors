function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice > 1) {
        return 'Rock';
    } else if (computerChoice > 0) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}