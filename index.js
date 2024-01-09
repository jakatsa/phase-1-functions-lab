// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}
function distanceFromHqInFeet(feet) {
  return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(start, destination) {
  // Calculate the distance by subtracting starting block from ending block
  const blocksTravelled = Math.abs(destination - start);

  // Calculate the distance in feet using the length of each block (264 feet)
  const distanceInFeet = blocksTravelled * 264;

  // Return the result
  return distanceInFeet;
}
function calculatesFarePrice(start, destination) {
  // Calculate the distance using the distanceTravelledInFeet function
  const distance = distanceTravelledInFeet(start, destination);

  // Check if the distance is over 2500 feet
  if (distance > 2500) {
    return "cannot travel that far";
  }

  // Calculate the fare based on the given conditions
  if (distance <= 400) {
    // First 400 feet are free
    return 0;
  } else if (distance <= 2000) {
    // Charge 2 cents per foot for distance between 400 and 2000 feet
    return (distance - 400) * 0.02;
  } else {
    // Flat fare of 25 dollars for distance over 2000 feet
    return 25;
  }
}
