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
function Player(name) // name can be x or o
{
  return {
    name
  };
}

// factory function to display gameboard
function Gameboard()
{
  const gameboard = [
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
    gameboard
  };
}