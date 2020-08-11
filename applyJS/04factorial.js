// Factorial find-out
var findFactorial = function (n) {
  var factorial = 1;
  for (var i = 1; i <= n; i++) {
    factorial = factorial * i;
    console.log(i, factorial);
  }
};
findFactorial(10);
