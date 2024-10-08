// Create a game board with obstacles
const gameBoard = [
    [' ', ' ', 'X', ' ', ' '],
    [' ', 'X', ' ', 'X', 'G'],
    [' ', ' ', ' ', ' ', ' '],
    ['X', ' ', 'X', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ']
  ];
  
  // Define the avatar and goal positions
  let avatarPos = [0, 0];
  let goalPos = [1, 4];
  let score = 0;
  
  // Function to draw the game board
  function drawBoard() {
    console.clear(); // Clear the console for redrawing
    for (let i = 0; i < gameBoard.length; i++) {
      let row = '';
      for (let j = 0; j < gameBoard[i].length; j++) {
        if (i === avatarPos[0] && j === avatarPos[1]) {
          row += 'A'; // Avatar
        } else if (i === goalPos[0] && j === goalPos[1]) {
          row += 'G'; // Goal
        } else {
          row += gameBoard[i][j]; // Empty space or obstacle
        }
      }
      console.log(row);
    }
    console.log(`Score: ${score}`);
  }
  
  // Function to move the avatar
  function moveAvatar(direction) {
    let newAvatarPos = [...avatarPos]; // Copy current position
  
    switch (direction) {
      case 'up':
        newAvatarPos[0]--;
        break;
      case 'down':
        newAvatarPos[0]++;
        break;
      case 'left':
        newAvatarPos[1]--;
        break;
      case 'right':
        newAvatarPos[1]++;
        break;
    }
  
    // Check for boundaries and obstacles
    if (
      newAvatarPos[0] >= 0 &&
      newAvatarPos[0] < gameBoard.length &&
      newAvatarPos[1] >= 0 &&
      newAvatarPos[1] < gameBoard[0].length &&
      gameBoard[newAvatarPos[0]][newAvatarPos[1]] !== 'X'
    ) {
      avatarPos = newAvatarPos; // Update position if valid
      score++; // Increase score for each valid move
    } else {
      console.log('Invalid move!'); // Feedback for invalid move
    }
  }
  
  // Function to check if the avatar has reached the goal
  function checkGoal() {
    if (avatarPos[0] === goalPos[0] && avatarPos[1] === goalPos[1]) {
      console.log(`You win! Your score is: ${score}`);
      process.exit(); // End the game
    }
  }
  
  // Listen for arrow key events and move the avatar accordingly
  document.addEventListener('keydown', function (event) {
    switch (event.key) {
      case 'ArrowUp':
        moveAvatar('up');
        break;
      case 'ArrowDown':
        moveAvatar('down');
        break;
      case 'ArrowLeft':
        moveAvatar('left');
        break;
      case 'ArrowRight':
        moveAvatar('right');
        break;
    }
    drawBoard();
    checkGoal();
  });
  
  // Draw the initial game board
  drawBoard();
  