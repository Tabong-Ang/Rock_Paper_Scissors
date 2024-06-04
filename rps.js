

const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    }
    else if (choice === 1) {
        return 'paper';
    }
    else if (choice === 2) {
        return 'scissors';
    }
}

const getHumanChoice = () => {
    const userInput = prompt('Make a choice from the following[Rock, paper, scissors]').toLowerCase();
    return userInput;
}

let computerScore = 0;
let humanScore = 0;

const playRound = (humanChoice, computerChoice) => {
    

    if (humanChoice === computerChoice) {
        console.log('it\'s a tie');
    }
    else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper') 
        ) {
            console.log('You win');
            humanScore++;
        }
    else {
        console.log('computer wins');
        computerScore++;
    }
}

const playGame = () => {
 for (let i = 0; i < 5; i++) {

     computerSelection = getHumanChoice();
     humanSelection = getComputerChoice();
     playRound(humanSelection, computerSelection);
}
console.log('Game Over')

if (computerScore > humanScore) {
    console.log('Computer Wins');
}
else if (computerScore < humanScore) {
    console.log('Human wins');
}
else {
    console.log('It\'s a tie');
}

}
playGame();