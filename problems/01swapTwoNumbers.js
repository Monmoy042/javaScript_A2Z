// Swap two numbers using temp variable
var a = 10;
var b = 20;
console.log("Before swap: a =", a, "& b =", b);
var temp = 0;
temp = a;
a = b;
b = temp;
console.log("After swap: a =", a, "& b =", b);

// Swap 2 numbers addition method
var x = 5;
var y = 7;
x = x + y; // x = x + y
y = x - y; // y = (x + y - y) = x
x = x - y; // x = (x + y - x) = y
console.log("After swap: x =", x, "& y =", y);
