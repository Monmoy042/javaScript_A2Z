// Factorial find-out
var findFactorial = function (n) {
  var factorial = 1;
  for (var i = 1; i <= n; i++) {
    factorial = factorial * i;
    console.log(i, factorial);
  }
};
findFactorial(10);

// Find out factorial recursive way
var recursiveFactorial = function (num) {
  if (num == 0) {
    return 1;
  } else {
    var fact = 1;
    for (var i = num; i >= 1; i--) {
      fact = fact * i;
      console.log(i, fact);
    }
  }
};
recursiveFactorial(5);

/*
0! = 1
2! = 1*2
3! = 1*2*3 = 2!*3 = (3-1)!*3
4! = 1*2*3*4 = 3!*4 = (4-1)!*4
5! = 1*2*3*4*5 = 4!*5 = (5-1)!*5
6! = 1*2*3*4*5*6 = 5!*6 = (6-1)!*5
n! = (n-1)! * n [General Formula]
*/

function factRecursive(num2) {
  if (num2 == 0) {
    return 1;
  } else {
    return num2 * factRecursive(num2 - 1);
  }
}
var result = factRecursive(5);
console.log("The factorial is: " + result);

// Diagnostic of recursive method while find out the factorial
/*
    Let's say we want to find out the factorial of 4
    Basic Formula: n! = n*(n-1)!
                 Return         State
===============================================
    F(4)         4*F(3)--> 24    Pause         
    F(3)         3*F(2)--> 6     Pause
    F(2)         2*F(1)--> 2     Pause
    F(1)         1*F(0)--> 1     Return 1 

*/
