function getComputerChoice() {
    let rand = Math.floor((Math.random() * 3)) + 1;
    switch (rand) {
        case 1: 
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissor';
    }
}

function playRound(user, comp) {
    switch(true) {
        case (user === 'rock' && comp === 'rock') || (user === 'paper' && comp === 'paper') || (user === 'scissor' && comp === 'scissor'):
            return 'It\'s a tie!';
        case (user === 'rock' && comp === 'scissor'):
            return 'You Win! Rock beats Scissor!';
        case (user === 'paper' && comp === 'rock'):
            return 'You Win! Paper beats Rock!';
        case (user === 'scissor' && comp === 'paper'):
            return 'You Win! Scissor beats Paper!'; 
        case (user === 'scissor' && comp === 'rock'):
            return 'You Lose! Rock beats Scissor!';   
        case (user === 'rock' && comp === 'paper'):
            return 'You Lose! Paper beats Rock!';   
        case (user === 'paper' && comp === 'scissor'):
            return 'You Lose! Scissor beats Paper!';
        default:
            console.log('Invalid Entry!');
    }
}

function game() {
    let userScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound();
        if (playRound() === 'It\'s a tie!') {
            userScore = userScore;
            compScore = compScore;
        }
    }
}


let playerSelection = prompt('Enter your choice: Rock, Paper or Scissor');
playerSelection = playerSelection.toLowerCase();
console.log('User: ' + playerSelection);

let compSelection = getComputerChoice();
compSelection = compSelection.toLowerCase();
console.log('Comp: ' + compSelection);


console.log(playRound(playerSelection, compSelection));