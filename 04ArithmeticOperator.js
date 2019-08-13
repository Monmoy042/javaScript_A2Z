// Arithmetic Operator in javaScript
/*
    1. Addition(+)
    2. Subtraction(-)
    3. Multiplication(*)
    4. Division(/)
    5. Increment(++)
    6. Decrement(--)
    7. Modulus(%)
*/

var num1 = 128;
var num2 = 64;

var add = num1 + num2; // Addition of two numbers
var sub = num1 - num2; // Subtraction of two numbers
var mul = num1 * num2; // Multiplication of two numbers
var div = num1 / num2; // Division of two numbers

console.log('Addition of two numbers: '+add);
console.log('Subtraction of two numbers: '+sub);
console.log('Multiplication of two numbers: '+mul);
console.log('Division of two numbers: '+div);

// Increment
let x = 10;
let y = ++x; // This is called prefix operation | y = x+1
console.log(y);

let p = 350;
let q = p++;
let r = p++; // This is called postfix operation | r = p + 1
console.log(q);
console.log(r);

// Decrement
let a = 105;
let b = --a; // This is called prefix operation | b = a - 1
console.log(b);

let l = 550;
let m = l--;
let n = l--; // This is called postfix operation | n = l - 1
console.log(m);
console.log(n);

// Modulus
let mod = num1 % 3;
console.log(mod); // The remainder is 2