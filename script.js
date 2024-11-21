// factory function to display gameboard
const gameboard = (function GameBoard() {
  const board = [
    [
      1, 2, 3
    ],
    [
      4, 5, 6
    ],
    [
      7, 8, 9
    ],
  ];

  function hasItem(item) {
    for (row of board) {
      if (row.includes(item)) {
        return true;
      }
    }
    return false;
  }

  function updateValue(oldValue, newValue) {
    for (row of board) {
      if (row.includes(oldValue)) {
        const index = row.indexOf(oldValue);
        row[index] = newValue;
        return true;
      }
    }
    return false;
  }

  function isFull() {
    for (row of board) {
      for (item of row) {
        if (Number.isInteger(item) == true) {
          return false;
        }
      }
    }
    return true;
  }


  return {
    board,
    hasItem,
    updateValue
  };
}) ();


function checkWinner(gameboard) {
  // check gameboard for a win condition
}

function isDraw(gameboard) {
  // check gameboard for a draw condition
  // if board is full but win condition is false then it's a draw
}

function game(){
  // this will be the main function that will execute the game
  // the game will continue in a loop unless there is a win or a draw.
  console.table(gameboard.board);
  for (let i = 0; i < 4; i++) {
    while (1) {
      let player1 = Number(prompt("Choose a location for X. [1-9]"));

      if (gameboard.hasItem(player1)) {
        gameboard.updateValue(player1, "X");
        console.table(gameboard.board);
        break;
      }
      else {
        console.error("Please choose from the empty spots only.");
      }
    }

    while (1) {
      let player2 = Number(prompt("Choose a location for O. [1-9]"));
      
      if (gameboard.hasItem(player2)) { 
        gameboard.updateValue(player2,"O");
        console.table(gameboard.board);  
        break;
      }
      else{
        console.error("Please choose from the given numbers.");
      }
    }
  }
}

game();