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

const gameboard = displayBoard();

// playRound() takes the row, column and player(x or o) and updates the board
function playRound(player, row, column) {
    gameboard.board[row][column] = player;
    return gameboard.board
}
