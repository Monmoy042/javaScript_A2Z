// Fibonacci series in recursive way
function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
var result = fibonacci(6);
console.log(result);

// Diagnostic of fibonacci series in recursive way
/*
||=================================||
||## Fibonacci Series: 0 1 1 2 3 5 ||
||=================================||
Let's Say we want to find out the fibonacci series for the first 6th position
|===========|============================|==========|
|Function   |           Return           | State    |
|===========|============================|==========|
|F(6)       |   F(6-1) + F(6-2)--> 5+3   | Pause    |
|F(5)       |   F(5-1) + F(5-2)--> 3+2   | Pause    |
|F(4)       |   F(4-1) + F(4-2)--> 2+1   | Pause    |
|F(3)       |   F(3-1) + F(3-2)--> 1+1   | Pause    |
|F(2)       |   F(2-1) + F(2-2)--> 1+0   | Return1+0|
|===========|============================|==========|

*/
