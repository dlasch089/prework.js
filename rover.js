var gridSize = 5;

var obstaclePosition = [2, 3];

var myRover = {
  position: [0, 0],
  newPosition: [0, 0], //To check moves for obstacles
  direction: 'N',
  moveCommand: "ffffffs" //insert a command with the statements f = forward, b = backwards, r = turn right, l = turn left
};

var mySecondRover = {
  position: [0, 0],
  newPosition: [0, 0], //To check moves for obstacles
  direction: 'W',
  moveCommand: "fff"
};

function move(rover) { //moving the rover (code reduction possible?)
  for (var i = 0; i <= rover.moveCommand.length - 1; i++) {

    //check command validation:
    if (rover.moveCommand[i] != 'f' && rover.moveCommand[i] != 'b' && rover.moveCommand[i] != 'l' && rover.moveCommand[i] != 'r') {
      console.log("What do you mean with: \"" + rover.moveCommand[i] + "\"? Please insert a valid command!");
      continue;
    }

    //normal moves (without obstacles)
    else if (rover.moveCommand[i] === 'f') {
      gridEndForward(rover);
      goForward(rover);
    } else if (rover.moveCommand[i] === 'b') {
      gridEndBackward(rover);
      goBackward(rover);
    } else if (rover.moveCommand[i] === 'l') {
      turnLeft(rover);
    } else if (rover.moveCommand[i] === 'r') {
      turnRight(rover);
    }
  }
}

move(myRover);

function goForward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }
  detectObstacle(rover);
}

function goBackward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.position[0]--;
      break;
    case 'E':
      rover.position[1]--;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[1]++;
      break;
  }
  detectObstacle(rover);
}

function turnLeft(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  }
  console.log("New Rover direction: " + rover.direction);
}

function turnRight(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
  console.log("New Rover direction: " + rover.direction);
}

function gridEndForward(rover) {
  if (rover.position[0] != gridSize && rover.position[0] != -gridSize && rover.position[1] != gridSize && rover.position[1] != -gridSize) {

  } else if (rover.position[0] === gridSize && rover.direction === 'N') {
    rover.position[0] = -gridSize;
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  } else if (rover.position[0] === -gridSize && rover.direction === 'S') {
    rover.position[0] = gridSize;
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  } else if (rover.position[1] === gridSize && rover.direction === 'E') {
    rover.position[1] = -gridSize;
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  } else if (rover.position[1] === -gridSize && rover.direction === 'W') {
    rover.position[1] = gridSize;
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  }
}

function gridEndBackward(rover) {
  if (rover.position[0] != gridSize && rover.position[0] != -gridSize && rover.position[1] != gridSize && rover.position[1] != -gridSize) {

  } else if (rover.position[0] === gridSize && rover.direction === 'S') {
    rover.position[0] = -gridSize;
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  } else if (rover.position[0] === -gridSize && rover.direction === 'N') {
    rover.position[0] = gridSize;
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  } else if (rover.position[1] === gridSize && rover.direction === 'W') {
    rover.position[1] = -gridSize;
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  } else if (rover.position[1] === -gridSize && rover.direction === 'E') {
    rover.position[1] = gridSize;
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  }
}

function detectObstacle(rover) {
  if (rover.position[0] === obstaclePosition[0] && rover.position[1] === obstaclePosition[1]) {
    console.log("Obstacle ahead - at position: [" + rover.position + "]");
  } else if (rover.newPosition[0] != obstaclePosition[0] || rover.newPosition[1] != obstaclePosition[1]) {
    console.log("New Rover Position: [" + rover.position + "]"); //prints position after every move
  }
}
