// factory function to display gameboard
function displayBoard() {
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

  return {
    board,
    hasItem,
    updateValue
  };
}

const gameboard = displayBoard();

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
  console.log(gameboard.board);
  let player1 = Number(prompt("Choose a location for X. [1-9]"));
  let player2 = Number(prompt("Choose a location for O. [1-9]"));
  
  if (player1 === player2) {
    console.error("Please choose different numbers.");
  }

  if (gameboard.hasItem(player1) && gameboard.hasItem(player2)) {
    gameboard.updateValue(player1, 'x');
    console.log(gameboard.board);  
  }
  else{
    console.error("Please choose from the given numbers.");
  }
}

game();