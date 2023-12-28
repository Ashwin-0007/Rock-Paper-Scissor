let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const move = document.querySelector("#move");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
    const drawGame = () => {
        move.innerHTML = "Game was Drawn, Play Again."
        move.style.backgroundColor = "#081b31";

    };
     const showWinner =(userwin, userChoice, compChoice) => {
        if(userwin){
            userScore++;
            userScorePara.innerText = userScore;
            move.innerHTML = `You win! your ${userChoice} beats ${compChoice}`; 
            move.style.backgroundColor = "green";
        }else{
            compScore++;
            compScorePara.innerText = compScore;
            move.innerHTML = `You lose!  ${compChoice} beats your ${userChoice}`;
            move.style.backgroundColor = "red";
        }
     };

const playGame = (userChoice) => {
    //Generate Computer Choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        // Draw match
        drawGame();
    }else{
        let userwin = true;
        if(userChoice === "rock"){
            // scissor , paper
            userwin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            
            //rock, scissor
            userwin = compChoice === "scissor" ? false : true;

        }else{
            // rock, paper
             userwin  = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }
};
 choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
 });