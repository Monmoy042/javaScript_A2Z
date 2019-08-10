/* Variable in javaScript
# In javaScript we can declare variable in three ways
# We can use three keywords to declare a variable
# var | let | const  */

// var keyword
var a = 10;
var b = 20;
var result;
result = a+b; // Add 2 numbers 
console.log(result);

// Check the variable type
console.log(typeof(result));

var name1 = 'John Doe';
console.log(name1);

//  let keyword
// This keyword works same as var
let name2 = "Jane Doe"; // Store a string to a variable
console.log(name2);
console.log(typeof(name2));

// const keyword
/* const means constant
After declare any variable with const keyword we cannot change the value of that variable */

const num1 = 50;
// num1 = 100; *** We cannot do this. It will give us an error
console.log(num1);