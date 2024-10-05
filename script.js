const buttons = document.querySelectorAll("button");
buttons.forEach((element) => {
  element.addEventListener("click", () => {
    const humanSelection = element.id;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  });
});

function getComputerChoice() {
  const comChoice = Math.floor(Math.random() * 3);
  if (comChoice === 0) {
    return "rock";
  } else if (comChoice === 1) {
    return "paper";
  } else if (comChoice === 2) {
    return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector("#result");

function playRound(humanChoice, computerChoice) {
  if (computerChoice === humanChoice) {
    resultDiv.textContent = "It's a tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore += 1;
    resultDiv.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore += 1;
    resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }
  resultDiv.innerText += `\nHuman Score: ${humanScore} - Computer Score: ${computerScore}`;
  checkWinner();
}

const winnerDiv = document.querySelector("#winner");
function checkWinner() {
  if (humanScore === 5) {
    winnerDiv.textContent = "Congratulations! You won the game";
    winnerDiv.style.color = "#09f043";
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
  } else if (computerScore === 5) {
    winnerDiv.textContent = "You lose! Computer won the game";
    winnerDiv.style.color = "red";
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
  }
}

const initialize = document.querySelector(".reset");
document.addEventListener("DOMContentLoaded", () => {
  initialize.addEventListener("click", () => {
    // Reset scores
    humanScore = 0;
    computerScore = 0;

    // Clear result and winner text
    resultDiv.textContent = "";
    winnerDiv.textContent = "";

    // Enable game buttons
    document.querySelector("#rock").disabled = false;
    document.querySelector("#paper").disabled = false;
    document.querySelector("#scissors").disabled = false;
  });
});

const showbtn = document.getElementById("showbtn");
const closebtn = document.getElementById("closebtn");
const popup = document.querySelector(".popup");
const subp = document.getElementById("sub-p");

// To show the popup on click
showbtn.addEventListener("click", () => {
  popup.style.display = "block";
  showbtn.style.display = "none";
  document.body.style.backgroundColor = "#9EA9B1";
  subp.style.display = "none";
});

// To close the popup on click
closebtn.addEventListener("click", () => {
  popup.style.display = "none";
  showbtn.style.display = "block";
  document.body.style.backgroundColor = "#09dbd450";
  subp.style.display = "block";
});
