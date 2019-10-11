// Math Object in javaScript

/*
    01. Math.PI --> Ratio of the circumference of a circle to its diameter, approximately 3.14159
    02. Math.E --> Euler's constant
    03. Math.LN2 --> Natural logarithm of 2, approximately 0.693
    04. Math.LN10 --> Natural logarithm of 10, approximately 2.303
    05. Math.LOG2E --> Base 2 logarithm of E, approximately 1.443
    06. Math.LOG10E --> Base 10 logarithm of E, approximately 0.434
    07. Math.SQRT1_2 --> Square root of 1/2
    08. Math.SQRT2 --> Square root of 2 
    09. Math.abs(x) --> Absolute value of x
    10. Math.ceil(x) --> Round a fractional number to the next whole number
    11. Math.cbrt(x) --> Cube root of x
    12. Math.exp(x) --> Exponential
    13. Math.floor(x) --> Round a fractional number to the previous whole number
    14. Math.fround(x)
    15. Math.log(x) --> Logarithm of any number | We can use Math.log2() and Math.log10() for base 2 and 10
    16. Math.max(x,y,z,....) --> Return Maximum value between x,y,z and more
    17. Math.min(x,y,z,....) --> Return Minimum value between x,y,z and more
    18. Math.pow(x,y) --> Return x to the power of y
    19. Math.random() --> Generate random number between 0 and 1
    20. Math.round(x) --> Round up the floating number
    21. Math.sign(x) 
    22. Math.sin(x) 
    23. Math.sqrt(x) --> Return square root of x 
    24. Math.tan(x) 
*/

console.log('The value of pi is: ' + Math.PI);
console.log("Euler's constant: " + Math.E);
console.log('The value of LN2 is: ' + Math.LN2);
console.log('The value of LN10 is: ' + Math.LN10);
console.log('The value of LOG2E is: ' + Math.LOG2E);
console.log('The value of LOG10E is: ' + Math.LOG10E);
console.log('The value of square root of 1/2 is: ' + Math.SQRT1_2);
console.log('The value of square root of 2 is: ' + Math.SQRT2);
console.log('The value of square root of 2 is: ' + Math.sqrt(4));

let n1 = -100;
let n2 = 20;
let ans = n1/n2;
console.log('The answer is: '+ans);
console.log('Absolute value of the answer is: '+Math.abs(ans));

let num1 = 9.8;
console.log('Ceil of num1 is: '+Math.ceil(num1));
console.log('Floor of num1 is: '+Math.floor(num1));
console.log('Round of num1 is: '+Math.round(num1));
console.log('Fround of num1 is: '+Math.fround(num1));

console.log('The maximum number is: '+Math.max(10,20,500,90,70,60,55,45,15,6,35,101,207,45,10));
console.log('The minimum number is: '+Math.min(10,20,500,90,70,60,55,45,15,6,35,101,207,45,10));

let num2 = Math.exp(0);
console.log('The value of e^0 is: '+num2);
let num3 = Math.log(1);
console.log('The value of log(1) is: '+num3);

console.log('The value of sin(90) is: '+Math.sin(Math.PI/2));  // sin(90) = 1
console.log('The random value between 0 and 1 is: '+Math.random());
console.log('2 to the power of 4 is: '+Math.pow(2,4));