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

  function checkWinner() {
    //loop through to check for x and then o, return false if there isn't one yet.

    // checking rows
    for (let row = 0; row < 3; row ++) {
      if (board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
        return board[row][0];
      }
    }

    // checking columns
    for (let col = 0; col < 3; col ++) {
      if (board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
        return board[0][col];
      }
    }

    // checking diagonal
    if ((board[0][0] === board[1][1] && board[1][1] == board[2][2]) || 
        (board[0][2] === board[1][1] && board[1][1] == board[2][0])) {
          return board[1][1];
        }

    return false;
  }

  return {
    board,
    hasItem,
    updateValue,
    isFull,
    checkWinner
  };
}) ();

function game(){
  // this will be the main function that will execute the game
  // the game will continue in a loop unless there is a win or a draw.
  console.table(gameboard.board);
  while (gameboard.isFull() !== true) {

    while (gameboard.isFull() !== true) {

      let player1 = Number(prompt("Choose a location for X. [1-9]"));

      if (gameboard.hasItem(player1)) {
        gameboard.updateValue(player1, "X");
        console.table(gameboard.board);
        result = gameboard.checkWinner
        if (gameboard.checkWinner() != false) {
          console.log(gameboard.checkWinner(), "wins");
          return;
        }
        break;
      }
      else {
        console.error("Please choose from the empty spots only.");
      }
    }

    while (gameboard.isFull() !== true) {

      let player2 = Number(prompt("Choose a location for O. [1-9]"));
      
      if (gameboard.hasItem(player2)) { 
        gameboard.updateValue(player2,"O");
        console.table(gameboard.board);
        if (gameboard.checkWinner() != false) {
          console.log(gameboard.checkWinner(), "wins");
          return;
        }  
        break;
      }
      else{
        console.error("Please choose from the given numbers.");
      }
    }
  }
  console.log("It's a draw");
}

game();