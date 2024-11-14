// basic structure and requirements
// 2 players: x & o
// board[3][3] 
// isfull = false
// loop board 
// {
//   if the board is full
//   {
//     isfull = true
//   }
//   check for wins()
//   check for draws() 
//   play next round() 
// }

// factory function to make players
function player(name) // name can be x or o
{
  return {
    name
  };
}

// factory function to display gameboard
function displayBoard() {
  const board = [
    [
      null, null, null
    ],
    [
      null, null, null
    ],
    [
      null, null, null
    ],
  ];

  return {
    board
  };
}

// game() takes the row, column and player(x or o) and returns the player if there is a win or "draw" in case of a draw
function game(player, row, column) {
  let gameover = false;
  while (!gameover) {
    const gameboard = displayBoard.board;
    gameboard[row][column] = player;
    if (checkWinner() === true) {
      gameover = true;
      return player;
    }
    if (isdraw() == true) {
      gameover = true;
      return "draw";
    }
  }
}