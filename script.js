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
    let decla;
    switch(true) {
        case (user === 'rock' && comp === 'rock') || (user === 'paper' && comp === 'paper') || (user === 'scissor' && comp === 'scissor'):
            return decla = 'It\'s a tie!';
        case (user === 'rock' && comp === 'scissor'):
            return decla = 'You Win! Rock beats Scissor!';
        case (user === 'paper' && comp === 'rock'):
            return decla = 'You Win! Paper beats Rock!';
        case (user === 'scissor' && comp === 'paper'):
            return decla = 'You Win! Scissor beats Paper!'; 
        case (user === 'scissor' && comp === 'rock'):
            return decla = 'You Lose! Rock beats Scissor!';   
        case (user === 'rock' && comp === 'paper'):
            return decla = 'You Lose! Paper beats Rock!';   
        case (user === 'paper' && comp === 'scissor'):
            return decla = 'You Lose! Paper beats Scissor!';
        default:
            console.log('Invalid Entry!');
    }
}

let playerSelection = prompt('Enter your choice: Rock, Paper or Scissor');
playerSelection = playerSelection.toLowerCase();
console.log('User: ' + playerSelection);
let compSelection = getComputerChoice();
compSelection = compSelection.toLowerCase();
console.log(playRound(playerSelection, compSelection));