const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 1) {
        return "rock";
    }
    else if (choice === 2) {
        return "paper";
    }
    else if (choice = 3) {
        return "scissors";
    }
}

const getHumanChoice = () => {
    let userChoice = prompt("Make a random choice from the list [Rock, Paper and Scissors]").toLowerCase();
    return userChoice;
}


humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie");
    }
    else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }
    else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }
    else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }
    else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }

  }

  function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore === computerScore) {
        console.log("It's a tie. No winner yet");
    }
    else if (humanScore > computerScore) {
        console.log("Congratulations! You won the game");
    }
    else if (computerScore > humanScore) {
        console.log("You lose! Computer wins the game");
    }
    console.log("Game Over");
  }
  playGame();