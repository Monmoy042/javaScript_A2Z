// Data Types in javaScript

/*
1. String 
2. Number --> [Integer(1,2,31,20) | Float(3.5,1.5) | Double(3.1416)]
3. Array
4. Object
5. Boolean
*/

// String
var name = 'John Doe';
console.log(name);
console.log(typeof(name));

var num = "15"; 
// Here, num is a string | Because anything will be consider as a string between double or single quote 
console.log(num);
console.log(typeof(num));

// Number
var num1 = 100;
console.log(typeof(num1));
let g = 9.8;
console.log(typeof(g));

// Array
let superHeroes = ['spiderMan','superMan','ironMan','Hulk','captainAmerica'];
console.log(superHeroes[0]);
console.log(superHeroes[4]);
console.log(typeof(superHeroes)); 
// In javaScript array will be considered as an object

// Object
// Object ---> key: value
const product={
    productName: 'Arduino',
    productID: 300150,
    productVersion: 'R3',
    price: 450 + 'BDT',
};
console.log(product.price);

/*
    Here, productName is the key
    Arduino is the value of that key(productName)
*/

// Boolean
var bool1 = true;
console.log(typeof(bool1));
var bool2 = false;
console.log(typeof(bool2));

console.log(Boolean(3>1));

var bool3 = 0; // In boolean 0 consider as false state
console.log(Boolean(bool3));
var bool4 = 1; // In boolean 1 consider as true state
console.log(Boolean(bool4));

// Undefined
var u;
console.log(typeof(u));

// Null
var v = null;
console.log(typeof(v));

// NaN --> Not a Number
// The NaN property represents "Not-a-Number" value. This property indicates that a value is not a legal number.

var n = 10;
var m = n/"name";
console.log(m);
console.log(isNaN(bool3)); //Check NanN or not

var sub1 = "Mathematics";
var sub2 = "English";
var value = sub1*sub2;
console.log(value);
console.log(isNaN(value));

var a = 10;
var b = '10';
var c = a+b;
console.log(c);
console.log(isNaN(c));