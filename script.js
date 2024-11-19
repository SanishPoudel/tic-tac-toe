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

  return {
    board
  };
}

const gameboard = displayBoard();

// playRound() takes the row, column and player(x or o) and updates the board
function playRound(player, row, column) {
    gameboard.board[row][column] = player;
    return gameboard.board;
}

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

  if ((player1 < 9 && player1 >=0) && (player2 < 9 && player2 >=0)) {
    console.log(player1);
    console.log(player2); 
  }
  else{
    console.error("Please choose from the given numbers.");
  }
}

game();