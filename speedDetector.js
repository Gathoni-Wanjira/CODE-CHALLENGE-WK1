// A program that takes in input as speed eg 80.
// if speed < 70 , return ("Ok")
// for every 5 above speedlimit(70), return (demerit point)
// If demerit points exceed 12 points.... print license suspended.

// Prompts the user to input speed.
console.log("What's the car speed?");

// Declare the expected speed limit.
const limitSpeed = 70;
// Declare the initial demerit points
const initialDemeritPoints = 5;

// Write the function that should take in the car speed.
// If the car speed is less than 70 it should return ok.
function speedDetector(speed){
    if (speed < limitSpeed){
        console.log('Ok');
    }
    // If the speed exceeds the speed limit the program should return a demerit point for every 5Kms above the limit speed.
    else if (speed >= limitSpeed) {
      DemeritPoints = (speed-limitSpeed)/initialDemeritPoints;
      console.log(DemeritPoints);
// If the demerit points exceed 12 points it should print out the points and return license suspended.
      if (DemeritPoints > 12){
        console.log("License suspended");
    }
}
}
// log in the car speed here as an argument to the function to detect the speed points.
(speedDetector(83));


