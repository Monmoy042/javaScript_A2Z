// Fibonacci Series using for loop
/*
Fibonacci Series: 0 1 1 2 3 5 8 13 21 34 55
=============================================
fib[2] = fib[2-1] + fib[2-2]
fib[3] = fib[3-1] + fib[3-2]
fib[4] = fib[4-1] + fib[4-2]
fib[5] = fib[5-1] + fib[5-2]
fib[6] = fib[6-1] + fib[6-2]
fib[7] = fib[7-1] + fib[7-2]
fib[n] = fib[n-1] + fib[n-2]

Here, initial condition is fib = [0,1]
*/

var fibonacci = function (num) {
  var fib = [0, 1];
  for (var i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

var result = fibonacci(12);
console.log(result);
