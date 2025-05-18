function playGame(){
    let player_move = document.getElementById("player_move").value;
    let a = Math.floor(Math.random() * 100);
    a = a%3;
    let comp_move = "null";
    if(a==0) comp_move = "rock";
    else if (a==1) comp_move = "paper";
    else comp_move = "scissors";

    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "block";
    resultContainer.classList.remove("win", "loss", "tie");

    let result = "null";

    if(player_move=="null"){
        console.log("Select a move before playing.");
    }
    else{
        result= play_hand(player_move, comp_move);
    }
    resultContainer.classList.add(result);
    document.getElementById("player-choice").textContent = player_move;
    document.getElementById("computer-choice").textContent = comp_move;
    document.getElementById("game-result").textContent = result.charAt(0).toUpperCase() + result.slice(1);

    let ans = {player_move, comp_move, result};
    return ans;
}

function play_hand(player_move, comp_move){
    let result="null";
    if(player_move=="rock"){
        if(comp_move=="rock") result = "tie";
        else if (comp_move=="paper") result = "loss";
        else result = "win";
    }
    else if(player_move=="paper"){
        if(comp_move=="rock") result = "win";
        else if (comp_move=="paper") result = "tie";
        else result = "loss";
    }
    else if(player_move=="scissors"){
        if(comp_move=="rock") result = "loss";
        else if (comp_move=="paper") result = "win";
        else result = "tie";
    }
    return result;
}