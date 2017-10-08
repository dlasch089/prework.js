var gridSize = 5;

var obstaclePosition = [2, 3];

var myRover = {
  position: [0, 0],
  newPosition: [0, 0], //To check moves for obstacles
  direction: 'E',
  moveCommand: "frlfrlfrlfrlfrl" //insert a command with the statements f = forward, b = backwards, r = turn right, l = turn left
};

var mySecondRover = {
  position: [0, 0],
  newPosition: [0, 0], //To check moves for obstacles
  direction: 'W',
  moveCommand: "ffffffffrfff"
};

function move(rover) { //moving the rover (code reduction possible?)
  for (var i = 0; i <= rover.moveCommand.length - 1; i++) {

    //check command validation:
    if (rover.moveCommand[i] != 'f' && rover.moveCommand[i] != 'b' && rover.moveCommand[i] != 'l' && rover.moveCommand[i] != 'r') {
      console.log("What do you mean with: \"" + rover.moveCommand[i] + "\"? Please insert a valid command!");
      continue;
    }

    //normal moves (without obstacles)
    else if (rover.moveCommand[i] === 'f' && rover.direction === 'N' && rover.position[0] < gridSize) { //gridSize, because it is a 10x10 Grid --> in both directions gridSize
      rover.newPosition[0]++;
    } else if (rover.moveCommand[i] === 'f' && rover.direction === 'S' && rover.position[0] > -gridSize) {
      rover.newPosition[0]--;
    } else if (rover.moveCommand[i] === 'f' && rover.direction === 'E' && rover.position[1] < gridSize) {
      rover.newPosition[1]++;
    } else if (rover.moveCommand[i] === 'f' && rover.direction === 'W' && rover.position[1] > -gridSize) {
      rover.newPosition[1]--;
    } else if (rover.moveCommand[i] === 'b' && rover.direction === 'N' && rover.position[0] > -gridSize) {
      rover.newPosition[0]--;
    } else if (rover.moveCommand[i] === 'b' && rover.direction === 'S' && rover.position[0] < gridSize) {
      rover.newPosition[0]++;
    } else if (rover.moveCommand[i] === 'b' && rover.direction === 'E' && rover.position[1] > -gridSize) {
      rover.newPosition[1]--;
    } else if (rover.moveCommand[i] === 'b' && rover.direction === 'W' && rover.position[0] < gridSize) {
      rover.newPosition[1]++;
    } else if (rover.moveCommand[i] === 'l' && rover.direction === 'N') {
      rover.direction = 'W';
    } else if (rover.moveCommand[i] === 'l' && rover.direction === 'W') {
      rover.direction = 'S';
    } else if (rover.moveCommand[i] === 'l' && rover.direction === 'S') {
      rover.direction = 'E';
    } else if (rover.moveCommand[i] === 'l' && rover.direction === 'E') {
      rover.direction = 'N';
    } else if (rover.moveCommand[i] === 'r' && rover.direction === 'N') {
      rover.direction = 'E';
    } else if (rover.moveCommand[i] === 'r' && rover.direction === 'E') {
      rover.direction = 'S';
    } else if (rover.moveCommand[i] === 'r' && rover.direction === 'S') {
      rover.direction = 'W';
    } else if (rover.moveCommand[i] === 'r' && rover.direction === 'W') {
      rover.direction = 'N';

      //keeping the rover in the 10x10 grid:
    } else if (rover.position[0] === gridSize && rover.direction === 'N' && rover.moveCommand[i] === 'f') {
      rover.newPosition[0] = -gridSize;
    } else if (rover.position[0] === -gridSize && rover.direction === 'S' && rover.moveCommand[i] === 'f') {
      rover.newPosition[0] = gridSize;
    } else if (rover.position[1] === gridSize && rover.direction === 'E' && rover.moveCommand[i] === 'f') {
      rover.newPosition[1] = -gridSize;
    } else if (rover.position[1] === -gridSize && rover.direction === 'W' && rover.moveCommand[i] === 'f') {
      rover.newPosition[1] = gridSize;
    } else if (rover.position[0] === -gridSize && rover.direction === 'N' && rover.moveCommand[i] === 'b') {
      rover.newPosition[0] = gridSize;
    } else if (rover.position[0] === gridSize && rover.direction === 'S' && rover.moveCommand[i] === 'b') {
      rover.newPosition[0] = -gridSize;
    } else if (rover.position[1] === -gridSize && rover.direction === 'E' && rover.moveCommand[i] === 'b') {
      rover.newPosition[1] = gridSize;
    } else if (rover.position[1] === gridSize && rover.direction === 'W' && rover.moveCommand[i] === 'b') {
      rover.newPosition[1] = -gridSize;
    }

    //Check obstacle ahead:
    if (rover.newPosition[0] === obstaclePosition[0] && rover.newPosition[1] === obstaclePosition[1]) {
      console.log("Obstacle ahead - at position: [" + rover.position + "]");
      break;
    } else if (rover.newPosition[0] != obstaclePosition[0] || rover.newPosition[1] != obstaclePosition[1]) {
      rover.position = rover.newPosition;
      console.log("New Rover Position: [" + rover.position + "]"); //prints position after every move
      // console.log("I am heading: " + rover.direction ); //could be activated to see the direction every step
    }
  }
}

move(myRover);

/*function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

goForward(myRover);*/
