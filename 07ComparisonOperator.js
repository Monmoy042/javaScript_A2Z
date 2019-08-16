// Comparison Operator in JavaScript
/* 
    Operator    Description
    x == y      Equality
    x != y      Inequality
    x === y     Strict Equality. Returns true if x and y are of the same type and are equal
    x !== y     Strict Inequality. Returns if x and y are of the different types, or are of the same type but not equal
    x > y       Greater than
    x >= y      Greater than or equal
    x < y       Less than
    x <= y      Less than or equal
*/

// Equality(==)
let a = 10;
let b = 20;
console.log('Equality: ' + (a==b)); // Output will be false

const name ='john';
const name2 = 'john';
console.log(name == name2);

console.log("1" == 1); // Output will be true

// Inequality(!=)
let num1 = 50;
let num2 = 60;
console.log('Inequality: ' + (num1 != num2));

const name3 = 'Jane';
const name4 = 'jane';
console.log(name3 != name4);

const name5 = 'Mikku';
const name6 = 'Mikku';
console.log(name5 != name6);

console.log("1" != 1);

// Identity/Strict Equality(===)
console.log('Strict Equality: '+ ('1' === 1)); 
// Output will be false. Because the types are not same though the values are same.

let num3 = 10;
let num4 = 20;
console.log(num3===num4);

// Non-identity / Strict inequality
console.log('Strict Inequality: ' + ('1' !== 1));

let num5 = 3;
let num6 = 4;
console.log(num5 !== num6);


// Greater than operator(>)
let num7 = 5;
let num8 = 3;
console.log('num6 is greater than num8: '+(num7 > num8));

// Greater than or equal operator(>=)
let num9 = 30;
let num10 = 45;
console.log('num9 is greater than or equal to num10: ' + (num9 >= num10));

// Less than operator(<)
let num11 = 60;
let num12 = 90;
console.log('num11 is less than num12: ' + (num11 < num12));

// Less than or equal operator(<=)
let num13 = 55;
let num14 = 55;
console.log('num14 is less than or equal to num13: ' + (num14 <= num13));