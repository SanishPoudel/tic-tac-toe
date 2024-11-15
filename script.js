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
    return gameboard.board;
}