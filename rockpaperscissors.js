const player_score = document.createElement('p');
const pc_score = document.createElement('p');

const player_symbol = document.createElement('p');
const pc_symbol = document.createElement('p');

let pl_score = 0; //player score
let p_score = 0; //pc score

player_score.textContent = 'Player: ' + pl_score;
pc_score.textContent = 'Computer: ' + p_score;

let br1 = document.createElement('br');
let br2 = document.createElement('br');

box1.appendChild(player_score);
box1.appendChild(br1);
box5.appendChild(pc_score);
box5.appendChild(br2);


rockbtn.addEventListener('click', function(){
    let tmp = game('rock');
    update_score(tmp); 
} );
paperbtn.addEventListener('click', function(){let tmp = game('paper'); update_score(tmp);} );
scissorsbtn.addEventListener('click', function(){let tmp = game('scissors'); update_score(tmp);} );


function computerplay(){
    let items = ["rock","paper","scissors"];

    return items[Math.floor(Math.random()*items.length)];
}

function game(playerSelection){  //0...pc win   1...player win    2....draw
    let result = '';
    
    computerSelection = computerplay();
   
    player_symbol.textContent = 'You chose: ' + playerSelection;
    pc_symbol.textContent = 'Computer chose: ' + computerSelection;

    box1.appendChild(player_symbol);
    box5.appendChild(pc_symbol);

    if(playerSelection == computerSelection){
        result = 2; //draw
    }
    else{
        if(playerSelection == "rock"){
            computerSelection == 'paper'? result = 0 : result = 1;
        }
        else if(playerSelection == "paper"){
            computerSelection == 'rock'? result = 1: result = 0;
        }
        else{ //player selects scissors
            computerSelection == 'rock'?  result = 0: result = 1;     
        }
    }
    return result;
}

function update_score(points){
    if(points == 0){
        p_score += 1;
        pc_score.textContent = 'Computer: ' + p_score;
    }
    else if(points == 1){
        pl_score +=1;
        player_score.textContent = 'Player: ' + pl_score;
    }
    else{
        return true;
    }
    check_winner(pl_score,p_score);
}

function check_winner(player_points,pc_points){
    if(player_points == 5 && pc_points < 5){
        results.textContent = 'You win!!';
        results.style.cssText = 'color: #009933; font-weight: bold; font-size: 24px;'

        rockbtn.disabled = true;
        rockbtn.style.backgroundColor = 'grey';
        paperbtn.disabled = true;
        paperbtn.style.backgroundColor = 'grey';
        scissorsbtn.disabled = true;
        scissorsbtn.style.backgroundColor = 'grey';

        reset();
    }
    else if(player_points < 5 && pc_points == 5){
        results.textContent = 'You lose.';
        results.style.cssText = 'color: #800000; font-weight: bold; font-size: 24px;'

        rockbtn.disabled = true;
        rockbtn.style.backgroundColor = 'grey';
        paperbtn.disabled = true;
        paperbtn.style.backgroundColor = 'grey';
        scissorsbtn.disabled = true;
        scissorsbtn.style.backgroundColor = 'grey';
        
        reset();
    }

    else{
        return true;
    }
}

function reset(){
    const resetbtn = document.createElement('button');
    resetbtn.textContent = 'Reset';
    resetbtn.style.backgroundColor = 'white';
    resetbtn.addEventListener('click',function(){
        pl_score = 0;
        p_score = 0;
        player_score.textContent = 'Player: ' + pl_score;
        pc_score.textContent = 'Computer: ' + p_score;
        player_symbol.textContent = '';
        pc_symbol.textContent = '';

        rockbtn.disabled = false;
        rockbtn.style.backgroundColor = '';
        paperbtn.disabled = false;
        paperbtn.style.backgroundColor = '';
        scissorsbtn.disabled = false;
        scissorsbtn.style.backgroundColor = '';

        results.textContent = '';
        resetdiv.removeChild(resetbtn);

    })
    
    resetdiv.appendChild(resetbtn);
}