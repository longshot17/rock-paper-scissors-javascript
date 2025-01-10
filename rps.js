let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let num = Math.random();
    let choice = null;
    if(num <= .33){
        choice = "rock";
    }
    else if(num <=.66){
        choice= "paper";
    }
    else{
        choice = "scissors";
    }

    return choice;
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice.toLowerCase();
}

function playRound(computerChoice, humanChoice){
    if(humanChoice == "rock"){
        if(computerChoice =="rock"){
            console.log("Tie! Rock matches Rock!");
        }
        if(computerChoice == "paper"){
            console.log("Loss! Rock loses to Paper!");
            computerScore = computerScore + 1;
        }
        if(computerChoice == "scissors"){
            console.log("Win! Rock beats Scissors!");
            humanScore = humanScore + 1;
        }
    }

    if(humanChoice == "scissors"){
        if(computerChoice =="rock"){
            console.log("Loss! Scissors loses to Rock!");
            computerScore = computerScore + 1;
        }
        if(computerChoice == "paper"){
            console.log("Win! Scissors beats Paper!");
            humanScore = humanScore + 1;
        }
        if(computerChoice == "scissors"){
            console.log("Tie! Scissors matches Scissors!");
        }
    }

    if(humanChoice == "paper"){
        if(computerChoice =="rock"){
            console.log("Win! Paper beats to Rock!");
            humanScore = humanScore + 1;
        }
        if(computerChoice == "paper"){
            console.log("Tie! Paper matches Paper!");
        }
        if(computerChoice == "scissors"){
            console.log("Loss! Paper loses to Scissors!");
            computerScore = computerScore + 1;
        }
    }
}

function playGame(){
        for(let i = 0; i<5; i++){
            let comp = getComputerChoice();
            let hum = getHumanChoice();
            playRound(comp,hum);
        }
        if(computerScore > humanScore){
            console.log("Computer Wins!");
        }
        else if (humanScore>computerScore){
            console.log("You Win!");
        }
        else{
            console.log("It's a tie!");
        }
    }

playGame();
   





