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
    console.log('Comp: ' + compChoice);
    return compChoice;
}

// function playRound(user, comp) {
//     if ((user === 'rock' && comp === 'scissor') || (user === 'paper' && comp === 'rock') || (user === 'scissor' && comp === 'paper')) {
//         console.log('You Win!');
//     }
//     else if ((user === 'scissor' && comp === 'rock') || (user === 'rock' && comp === 'paper') || (user === 'paper' && comp === 'scissor')) {
//         console.log('You Lose!');
//     }
//     else {
//         console.log('Its a Tie!');
//     }
// }

function playRound(user, comp) {
    switch(true) {
        case (user === 'rock' && comp === 'scissor'):
            console.log('You Win! Rock beats Scissor!');
            break;
        case (user === 'paper' && comp === 'rock'):
            console.log('You Win! Paper beats Rock!');
            break;   
        case (user === 'scissor' && comp === 'paper'):
            console.log('You Win! Scissor beats Paper!');
            break;   
        case (user === 'scissor' && comp === 'rock'):
            console.log('You Lose! Rock beats Scissor!');
            break;   
        case (user === 'rock' && comp === 'paper'):
            console.log('You Lose! Paper beats Rock!');
            break;   
        case (user === 'paper' && comp === 'scissor'):
            console.log('You Lose! Paper beats Scissor!');
            break;  
        default:
            console.log('It\'s a tie!');
    }
}

let playerSelection = prompt('Enter your choice: Rock, Paper or Scissor');
playerSelection = playerSelection.toLowerCase();
console.log('User: ' + playerSelection);
let compSelection = getComputerChoice();
compSelection = compSelection.toLowerCase();
playRound(playerSelection, compSelection);