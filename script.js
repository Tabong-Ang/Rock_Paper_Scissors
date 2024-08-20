// Game instructions
const instruction = document.querySelector("#instructions");
instruction.addEventListener('click', () => { 
    instruction.innerHTML = `<ul>
    <li>Rock beats scissors, scissors beat paper, and paper beats rock.</li>
<li>Agree ahead of time whether you’ll count off “rock, paper, scissors, shoot” 
or just “rock, paper, scissors.”</li><li>Use rock, paper, scissors to settle 
minor decisions or simply play to pass the time.</li></ul>`
});

// Get Human Choice
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const humanSelection = button.id;
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });
});

// Results Display
const resultDiv = document.querySelector("#result");

// Get Computer's Choice
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


humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultDiv.textContent = "It's a tie";
    }
    else if (computerChoice === "rock" && humanChoice === "paper") {
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
    }
    else if (computerChoice === "paper" && humanChoice === "scissors") {
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
    }
    else if (computerChoice === "scissors" && humanChoice === "rock") {
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
    }
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
    }
    else if (computerChoice === "rock" && humanChoice === "scissors") {
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
    }
    resultDiv.innerText += `\nHuman Score: ${humanScore} - Computer Score: ${computerScore}`;
  results();
}

  // Scores
const scoreDiv = document.querySelector("#score");

function results() {
   if (humanScore === 5) {
    scoreDiv.innerText = "Congratulations! You won the game!";
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
   }
   else if (computerScore === 5) {
    scoreDiv.innerText = "You lose! Computer wins the game!";
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
}
}