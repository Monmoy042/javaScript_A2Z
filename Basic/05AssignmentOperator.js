// Assignment Operator in javaScript

/*  Operator             Meaning             Description
    01. x = y            x = y               Assign the value of y to x
    02. x += y           x = x + y           Assign the result of x plus y to x
    03. x -= y           x = x - y           Assign the result of x minus y to x
    04. x *= y           x = x * y           Assign the result of x times y to x
    05. x /= y           x = x / y           Assign the result of x divided by y to x
    06. x %= y           x = x % y           Assign the result of x modulus y to x
*/

// x = y
var num1 = 16;
console.log(num1);

// x += y
var num2 = 15;
num2 +=num1; // num2 = 15 + 16
console.log('The value of num2 is: '+num2); 

// x -= y
var num3 = 20;
num3 -= 25; // num3 = 20 - 25
console.log('The value of num3 is: '+num3);

// x *= y
let num4 = 9;
num4 *= 9; // num4 = 9 * 9
console.log('The value of num4 is: '+num4);

// x /= y
let num5 = 192;
num5 /= num4; // num5 = 192 / 81 [num4 will be 81(9*9)]
console.log('The value of num5 is: '+num5);

//  x %= y
let num6 = 10;
num6 %= 3;
console.log('The remainder of num6 / 2 is: ' +num6);