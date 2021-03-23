function computerplay(){
    let items = ["rock","paper","scissors"];

    return items[Math.floor(Math.random()*items.length)];
}

function onegame(playerSelection,computerSelection=computerplay()){
    playerSelection = playerSelection.toLowerCase();
    console.log("PC chose: " + computerSelection);
    if(playerSelection == computerSelection){
        return "Draw";
    }
    else{
        if(playerSelection == "rock"){
            return computerSelection == 'paper'? 'You lost' : 'You won';
        }
        else if(playerSelection == "paper"){
            return computerSelection == 'rock'? 'You won': 'You lost';
        }
        else{ //player selects scissors
            return computerSelection == 'rock'? 'You lost': 'You won'; 
            
        }
    }
}

function game(){

    for (let i = 0; i < 5; i++) {
        let checkInside = false;
        let player_input = null;
        do{
            player_input = prompt("Rock, Paper or Scissors?");
            player_input = player_input.toLowerCase();
            checkInside = check(player_input);
            if(checkInside==false){
                alert("Please type only: Rock, Paper or Scissors");
            }
        }while(checkInside == false);
        
        console.log(onegame(player_input));
    }    
}

function check(input){
    let items = ["rock","paper","scissors"];
    let isInside = items.includes(input);
    return isInside;
}