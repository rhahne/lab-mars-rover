// Rover Object Goes Here
// ======================
var theRover = {
  name: "The Mars Rover",
  year: "2019",
  direction: "N",
}

console.log("Start direction: " + theRover.direction);

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
  console.log("New Direction: " + rover.direction)
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("New Direction: " + rover.direction)
}

function moveForward(rover){
  console.log("moveForward was called")
}