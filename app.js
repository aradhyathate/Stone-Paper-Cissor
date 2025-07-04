// let userScore = 0;
// let computerScore = 0;

// const choices = document.querySelectorAll(".choice");

// const genComputerChoice = () => {
//     const options = ["rock", "paper", "scissors"];
//     const randomNum = Math.floor(Math.random() * 3);
//     return options[randomNum];
// }

// const drawGame = () => {
//     console.log("Draw Game");
// }

// const playgame = (userChoice) => {
//     console.log("User Choice is:", userChoice);
//     const computerChoice = genComputerChoice();
//     console.log("Computer Choice is:", computerChoice);

//     if (userChoice === computerChoice) {
//         drawGame();
//     } else {
//         let userWin = true;
//         if (userChoice === "rock") {
//             if (computerChoice === "paper") {
//                 userwin = false;
//             } else {
//                 userWin = true;
//             }
//         }else if(userChoice === "paper") {
//                 if (computerChoice === "scissors") {
//                     userWin = false;
//                 } else {
//                     userWin = true;
//                 }
//             }
//             }
//         }
//     }

// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         const userChoice = choice.getAttribute("id");
//         // console.log("Choice was clicked", userChoice);
//         playgame(userChoice);
//     });
// });

let userScore = 0;
let computerScore = 0;
let message = document.querySelector("#message");
let restart = document.querySelector("#restart");

const choices = document.querySelectorAll(".choice");

const yourScorePara = document.querySelector("#your-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

const drawGame = () => {
    console.log("Draw Game");
    message.innerText = "Game Draw!";
    message.style.backgroundColor = "yellow";
    message.style.color = "black";
}

const playgame = (userChoice) => {
    console.log("User Choice is:", userChoice);
    const computerChoice = genComputerChoice();
    console.log("Computer Choice is:", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            if (computerChoice === "paper") {
                userWin = false;
            } else {
                userWin = true;
            }
        } else if (userChoice === "paper") {
            if (computerChoice === "scissors") {
                userWin = false;
            } else {
                userWin = true;
            }
        } else if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                userWin = false;
            } else {
                userWin = true;
            }
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        console.log("User Wins! Score:", userScore);
        yourScorePara.innerText = userScore;
        message.innerText = `User Wins! Computer move was ${computerChoice}`;
        message.style.backgroundColor = "green";
    } else {
        computerScore++;
        console.log("Computer Wins! Score:", computerScore);
        computerScorePara.innerText = computerScore;
        message.innerText = `Computer Wins! You Lose! Computer move was ${computerChoice}`;
        message.style.backgroundColor = "red";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice);
        playgame(userChoice);
    });
});

const resetGame = () => {
    userScore = 0;
    yourScorePara.innerText = userScore;
    computerScorePara.innerText = computerScore;
    computerScore--;
    message.innerText = "Game Restarted!";
    message.style.backgroundColor = "blue";
    message.style.color = "white";
    console.log("Game has been reset.");
}

restart.addEventListener("click", resetGame);