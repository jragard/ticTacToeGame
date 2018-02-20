var currentPlayer = "X";
var nextPlayer = "O";

var xScore = 0;
var oScore = 0;
var drawScore = 0;

// Who's Turn it is
let element = document.createElement("h1");
let destination = document.getElementById("X");
destination.appendChild(element);
element.innerHTML = "X's Turn!"

// X Score
let elementX = document.createElement("h4");
let destinationX = document.getElementById("xScore");
destinationX.appendChild(elementX);
elementX.innerHTML = "X: " + xScore;

//O Score
let elementO = document.createElement("h4");
let destinationO = document.getElementById("oScore");
destinationO.appendChild(elementO);
elementO.innerHTML = "O: " + oScore;

//Draw Score
let elementDraw = document.createElement("h4");
let destinationDraw = document.getElementById("draw");
destinationDraw.appendChild(elementDraw);
elementDraw.innerHTML = "Draw: " + drawScore;


var playerXSelections = new Array();
var playerOSelections = new Array();

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

function checkWinner(playerSelections) {
    // Check if player has all values of each combination 
    for (let i = 0; i < winningCombinations.length; i++) {
        var matches = 0;
        for (let c = 0; c < winningCombinations[i].length; c++) {
            if (playerSelections.includes(winningCombinations[i][c])) {
                matches++
            } else {
                break;
            }
        }

        if (matches === 3) {
            return true;


        }
    }
}

function checkDraw() {
    return playerOSelections.length + playerXSelections.length >= cells.length
}

function resetGame() {
    playerXSelections = new Array();
    playerOSelections = new Array();
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = " ";
        cells[i].addEventListener('click', handleClick);

    }
}



handleClick = function (event) {
    var cell = event.target;
    cell.className = "cellText";
    // $(".cellText").fadeIn();

    cell.innerHTML = currentPlayer;
    // cell.className = "cellText";
    



    if (currentPlayer === "X") {
        console.log("X");
        element.innerHTML = "O's Turn!";
        playerSelections = playerXSelections;
        nextPlayer = "O";
    } else {
        console.log("O");
        element.innerHTML = "X's Turn!"
        playerSelections = playerOSelections;
        nextPlayer = "X";
    }

    playerSelections.push(parseInt(cell.id));

    cell.removeEventListener('click', handleClick);

    if (checkWinner(playerSelections)) {
        alert("Player" + currentPlayer + "wins!"); 
        if (currentPlayer === "X") 
             xScore++; 
             elementX.innerHTML = "X: " + xScore;
        if (currentPlayer === "O") 
             oScore++ 
             elementO.innerHTML = "O: " + oScore;
        resetGame();
        }   
         
        
    

    if (checkDraw()) {
        alert("Draw!");
        drawScore++
        elementDraw.innerHTML = "Draw: " + drawScore;
        resetGame();
    }



    //Swap Players

    currentPlayer = nextPlayer;

}

var cells = document.querySelectorAll("td");

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick);
}