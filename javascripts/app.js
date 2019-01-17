// Rover Object Goes Here
// ======================
var tr = {
  name: "The Mars Rover",
  year: "2019",
  direction: "N",
  x: 0,
  y: 0
}
// ======================

console.log("Start direction: " + tr.direction);
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
  console.log("New Direction: " + rover.direction);
}
function turnRight(rover){
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
  console.log("New Direction: " + rover.direction);
}
function moveForward(rover){
  console.log("Move forward was called!");
  endOfMap = false;
  switch(rover.direction){
    case "N":
      if (rover.x -1 < 0) {
        endOfMap = true;
      }else{
        travelLog(rover.x, rover.y);
        rover.x -= 1;
      }
      break;
    case "E":
      if (rover.y + 1 >= 5) {
        endOfMap = true;
      }else{
        travelLog(rover.x, rover.y);
        rover.y += 1;
      }
      break;
    case "S":
      if (rover.x + 1 >= 5) {
        endOfMap = true;
      }else{
        travelLog(rover.x, rover.y);
        rover.x += 1;
      }
      break;
    case "W":
      if (rover.y -1 < 0) {
        endOfMap = true;
      }else{
        travelLog(rover.x, rover.y);
        rover.y -= 1;
      }
      break;
  }
  if (endOfMap) {
    console.log("This is the end of the Map!, Can't move forward here!");
  }
  console.log("The rover is now on " + rover.x + "," + rover.y + " direction: " + rover.direction);
  showTravelLog();
  updateFrontend(rover.x, rover.y);
}
function moveBackward(rover){
  console.log("Move backward was called!");
  endOfMap = false;
  switch(rover.direction){
    case "N":
      if (rover.x + 1 >= 5) {
        endOfMap = true;
      }else{
        travelLog(rover.x, rover.y);
        rover.x += 1;
      }
      break;
    case "E":
      if (rover.y - 1 < 0) {
        endOfMap = true;
      }else{
        travelLog(rover.x, rover.y);
        rover.y -= 1;
      }
      break;
    case "S":
      if (rover.x - 1 < 0) {
        endOfMap = true;
      }else{
        travelLog(rover.x, rover.y);
        rover.x -= 1;
      }
      break;
    case "W":
      if (rover.y + 1 >= 5) {
        endOfMap = true;
      }else{
        travelLog(rover.x, rover.y);
        rover.y += 1;
      }
      break;
  }
  if (endOfMap) {
    console.log("This is the end of the Map!, Can't move backward here!");
  }
  console.log("The rover is now on " + rover.x + "," + rover.y + " direction: " + rover.direction);
  showTravelLog();
  updateFrontend(rover.x, rover.y);
}
function info(rover){
  console.log("Direction: " + rover.direction);
}
function commands(rover, commands){
  var command = commands.split("");
  for (var i = 0; i < commands.length; i++) {
    if (command[i] == "r" || command[i] == "l" || command[i] == "f" || command[i] == "b"){
      validationError = false;
    }else{
      validationError = true;
    }
  }
  if (validationError) {
    console.log("incorrect commands! Please only use: r,l,f,b");    
  }else{
    for (var i = 0; i < commands.length; i++) {
      switch(command[i]){
        case "r":
          turnRight(rover);
          break;
        case "l":
          turnLeft(rover);
          break;
        case "f":
          moveForward(rover);
          break;
        case "b":
          moveBackward(rover);
          break;
      }
    }
  }
}
var travelLogX = [];
var travelLogY = [];
function travelLog(xCord, yCord){
  travelLogX.push(xCord);
  travelLogY.push(yCord);
}
function showTravelLog(){
  var logString = "Past places: ";
  for (var i = 0; i < travelLogX.length; i++) {
    logString += travelLogX[i] + "," + travelLogY[i] + " | ";
  }
  console.log(logString);
}

function updateFrontend(xCord, yCord){
  id = xCord.toString() + yCord.toString();
  console.log(id);
  var field = document.getElementById(id);
  field.className = "active";
}