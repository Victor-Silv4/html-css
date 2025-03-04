const square = document.getElementsByClassName("square");

function handleClick(player){
    for (let index = 0; index < square.length; index++) {
        square[index].addEventListener("click", () => {
            setNewMove(player, index);
        });
        
    }
}

function setNewMove(player, id) {
    if(square[id].innerHTML === "") 
        square[id].innerHTML = player.current;

    setTimeout(() => {
        checkGame(player);
        changePlayer(player);
    }, 10);

    
}

function changePlayer(player) {
    if(player.current === "x") {
        player.current = "o";
    }
    else {
        player.current = "x";
    }
}

function checkGame(player) {
    if(square[0].innerHTML !== "" && square[0].innerHTML === square[1].innerHTML && square[0].innerHTML === square[2].innerHTML) {
        alert(player.current + " Venceu");
        return;
    }

    if(square[3].innerHTML !== "" && square[3].innerHTML === square[4].innerHTML && square[3].innerHTML === square[5].innerHTML) {
        alert(player.current + " Venceu");
        return;
    }

    if(square[6].innerHTML !== "" && square[6].innerHTML === square[7].innerHTML && square[6].innerHTML === square[8].innerHTML) {
        alert(player.current + " Venceu");
        return;
    }   

    if(square[0].innerHTML !== "" && square[0].innerHTML === square[3].innerHTML && square[0].innerHTML === square[6].innerHTML) {
        alert(player.current + " Venceu");
        return;
    }
 
    if(square[1].innerHTML !== "" && square[1].innerHTML === square[4].innerHTML && square[1].innerHTML === square[7].innerHTML) {
        alert(player.current + " Venceu");
        return;
    }

    if(square[2].innerHTML !== "" && square[2].innerHTML === square[5].innerHTML && square[2].innerHTML === square[8].innerHTML) {
        alert(player.current + " Venceu");
        return;
    }

    if(square[0].innerHTML !== "" && square[0].innerHTML === square[4].innerHTML && square[0].innerHTML === square[8].innerHTML) {
        alert(player.current + " Venceu");
        return;
    }

    if(square[2].innerHTML !== "" && square[2].innerHTML === square[4].innerHTML && square[2].innerHTML === square[6].innerHTML) {
        alert(player.current + " Venceu");
        return;
    }

    if(square[0].innerHTML !== "" && square[1].innerHTML !== "" && square[2].innerHTML !== "" && square[3].innerHTML !== "" && 
        square[4].innerHTML !== "" && square[5].innerHTML !== "" && square[6].innerHTML !== "" && square[7].innerHTML !== "" && square[8].innerHTML !== "") {
        alert("Empate");
        return;
    }

}

function resetGame() {
    for (let index = 0; index < square.length; index++) {
        square[index].innerHTML = "";
        
    }
}

function main() {
    let player = {current: "x"};
    handleClick(player);
}

main();