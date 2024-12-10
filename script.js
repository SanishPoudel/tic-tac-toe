// factory function to display gameboard
const gameboard = (function GameBoard() {

  const items = document.querySelectorAll(".items");
  let choice = "X";
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
    for (let row of board) {
      if (row.includes(item)) {
        return true;
      }
    }
    return false;
  }

  function updateValue(oldValue, newValue) {
    for (let row of board) {
      if (row.includes(oldValue)) {
        const index = row.indexOf(oldValue);
        row[index] = newValue;
        return true;
      }
    }
    return false;
  }

  function isFull() {
    for (let row of board) {
      for (let item of row) {
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
    items,
    choice,
    board,
    hasItem,
    updateValue,
    isFull,
    checkWinner
  };
}) ();

gameboard.items.forEach((item)=> {
  item.addEventListener("click", ()=> {

    if (gameboard.checkWinner() !== false) {
      alert("Please reset the page to play again.")
      return;
    }

    // gets here if there isn't a winner yet.
    let player = Number(item.id);
    if (gameboard.hasItem(player)) {

      // if the input is valid
      gameboard.updateValue(player, gameboard.choice);
      item.textContent = gameboard.choice;

      // gamecheck logic
      if (gameboard.checkWinner() !== false) {
          alert(gameboard.checkWinner() + " wins.\nPlease reset the page to play again.");
          return;
      } else if ((gameboard.isFull() === true) && (gameboard.checkWinner() === false)) {
        alert("It's a draw. \nPlease reset the page to play again.");
        return;
      }

      // changing the players so they can take turns
      if (gameboard.choice == "X") {
        gameboard.choice = "O";
      } else {
        gameboard.choice = "X";
      }

    } else {
      // if the user selects an occupied box.
      alert("Please select a valid spot.")
    }
  });
});
