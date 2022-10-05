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
            return 'Invalid Entry!';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Enter your choice: Rock, Paper or Scissor');
        playerSelection = playerSelection.toLowerCase();
        console.log('User: ' + playerSelection);

        let compSelection = getComputerChoice();
        compSelection = compSelection.toLowerCase();
        console.log('Comp: ' + compSelection);

        resultRound = playRound(playerSelection, compSelection);
        switch (resultRound) {
            case 'You Win! Rock beats Scissor!':
            case 'You Win! Paper beats Rock!':
            case 'You Win! Scissor beats Paper!':
                console.log('User: ' + ++userScore);
                console.log('Comp: ' + compScore);
                console.log(resultRound);
                break;
            case 'You Lose! Rock beats Scissor!':
            case 'You Lose! Paper beats Rock!':
            case 'You Lose! Scissor beats Paper!':
                console.log('User: ' + userScore);
                console.log('Comp: ' + ++compScore);
                console.log(resultRound);
                break;
            case 'It\'s a tie!':
                console.log('User: ' + userScore);
                console.log('Comp: ' + compScore);
                console.log(resultRound);
                break;
            default:
                console.log(resultRound);
        }

        console.log('--------------------------------------------------------------');

    }
    if (userScore > compScore) {
        console.log('Congrats! You Win!');
    }else if (userScore === compScore) {
        console.log('Its a Tie! Rematch!');
    }else
        console.log('You Lose to a Computer?! Heck!');
}

let userScore = 0;
let compScore = 0;

game();


