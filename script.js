let choices = ["rock", "paper", "scissors"]

function getComputerChoice (){
    return choices[Math.floor(Math.random()*choices.length)]
}

function playRound(playerChoice, computerChoice){

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

    }else{
        return -2;
    }

    return -2;

}

function areEqualCaseInsensitive(string1, string2){
    return string1.toUpperCase() === string2.toUpperCase();
}

let playerScore = 0;
let computerScore = 0;

function game(){
    for(let i = 0; i < 5; i++){
        let playerChoice = prompt().toLowerCase();
        let computerChoice = getComputerChoice();
        
        switch(playRound(playerChoice,computerChoice)){
            case -1:
                computerScore++;
                console.log("You lose! " + computerChoice + " beats " +  playerChoice);
            break;

            case 0:
                console.log("It's a tie.");
            break;

            case 1:
                playerScore++;
                console.log("You win! " + playerChoice + " beats " +  computerChoice);
            break;

            case -2:
                console.log("Invalid input.");
            break;
        }

    }
}

