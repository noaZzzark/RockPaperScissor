function getComputerChoice() {
    let rand = Math.floor((Math.random() * 3)) + 1;
    let compChoice;
    switch (rand) {
        case 1: 
            compChoice = 'Rock';
            break;
        case 2:
            compChoice = 'Paper';
            break;
        case 3:
            compChoice = 'Scissor';
            break;
    }
    console.log(compChoice);
    return compChoice;
}

function playRound(user, comp) {
    if ((user === 'rock' && comp === 'scissor') || (user === 'paper' && comp === 'rock') || (user === 'scissor' && comp === 'paper')) {
        console.log('You Win!');
    }
    else if ((user === 'scissor' && comp === 'rock') || (user === 'rock' && comp === 'paper') || (user === 'paper' && comp === 'scissor')) {
        console.log('You Lose!');
    }
    else {
        console.log('Its a Tie!');
    }
}

let playerSelection = prompt('Enter your choice: Rock, Paper or Scissor');
playerSelection = playerSelection.toLowerCase();
let compSelection = getComputerChoice();
compSelection = compSelection.toLowerCase();
console.log(playRound(playerSelection, compSelection));