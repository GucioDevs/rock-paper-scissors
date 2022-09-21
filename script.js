let choices = ["rock", "paper", "scissors"]

function getComputerChoice (){
    return choices[Math.floor(Math.random()*choices.length)]
}

function getRoundResult(playerChoice, computerChoice){

    if (playerChoice == "rock"){
        
        switch(computerChoice){
            case "rock":
                return 0;

            case "paper":
                return -1;

            case "scissors":
                return 1;
        }


    }else if(playerChoice == "paper"){
        switch(computerChoice){
            case "rock":
                return 1;

            case "paper":
                return 0;

            case "scissors":
                return -1;
        }

    }else if(playerChoice == "scissors"){

        switch(computerChoice){
            case "rock":
                return -1;

            case "paper":
                return 1;

            case "scissors":
                return 0;
        }

    }

    return -2;

}

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice){

    let computerChoice = getComputerChoice();
    
    switch(getRoundResult(playerChoice,computerChoice)){
        case -1:
            computerScore++;
            updateMessage("you lose - " + computerChoice + " beats " +  playerChoice + ".");
            updateScore(playerScore, computerScore);
        break;

        case 0:
            updateMessage("tie.");
        break;

        case 1:
            playerScore++;
            updateMessage("you win - " + playerChoice + " beats " +  computerChoice + ".");
            updateScore(playerScore, computerScore);
        break;

        case -2:
            updateMessage("invalid input.");
        break;
    }

    if(computerScore >= 5){
        updateMessage("defeat. you lost " + computerScore + " to " + playerScore + ".");
        reset();
    }else if(playerScore >= 5){
        updateMessage("you won the game " + playerChoice + " to " + computerChoice + ".");
        reset();
    }

    
}

function reset(){
    computerScore = 0;
    playerScore = 0;
    updateScore(playerScore, computerScore);
}

function buttonClicked(e){
    playRound(e.srcElement.id);
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', buttonClicked)
});

const scoreText = document.querySelector('.score');
function updateScore(playerScore, computerScore){
    scoreText.textContent = "" + playerScore + " " + computerScore;
}

const messageText = document.querySelector('.message');
function updateMessage(message){
    messageText.textContent = message;
}

reset();

