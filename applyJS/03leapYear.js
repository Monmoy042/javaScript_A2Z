// Leap year find out
var year = 1700;
if (year / 4 == 0 && year / 100 && year / 400) {
  console.log("This is a Leap Year!!!!!!");
} else {
  console.log("This is not a Leap Year");
}

var leapYear = function (year) {
  if (year / 4 == 0 && year / 100 && year / 400) {
    console.log("This is a Leap Year!!!!!!");
  } else {
    console.log("This is not a Leap Year");
  }
};
leapYear(1900);
