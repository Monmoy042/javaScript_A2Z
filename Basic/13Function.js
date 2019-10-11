// Functions in javaScript
// ========================

// Undefined Function
function hello(){
    console.log('Hello World!');
}
hello(); // Function Calling

// Anonymous Function
let power = function(){
    let num1 = 10;
    let p = Math.pow(num1,2);
    console.log('num1 to the power 2 is: '+p);
};
power();

// Function with parameter
let myFun = function(a,b){ // Here, a and b are two parameters
    var add = a+b;
    console.log('Addition of a and b is: '+add);
};
myFun(10,10);

// Function with parameter and return type
let myFun2 = function(p1,p2,p3){
    let bodmas = 12 - (p1-1) + p3 / p2*(0.5) + 9 ;
    return bodmas;
};
// myFun2(2,4,6);
console.log(myFun2(2,4,6));

// Different ways of declaring functions
let convertTemp = function(degree=31.4){
    let fahrenheit = (degree * (9/5)) + 32;
    console.log('Temperature in Fahrenheit: ' + fahrenheit);
};
convertTemp();

let maximum = function(x,y,z){
    let max = Math.max(x,y,z);
    // console.log('The maximum value is: '+max);
    return max;
};
let result = maximum(650,820,820.5);
console.log('The result is: '+result);

// Get 2 numbers between 1 and 3
function randomValue(min, max) {
    return Math.random() * (max - min) + min;
  }
console.log('The random value between 0 and 1 is: '+randomValue(3,1));

//Get random Integer number
function getRandomInteger(min, max) {
    min = Math.ceil(min);
    console.log('The minimum number is: '+min);
    max = Math.floor(max);
    console.log('The maximum number is: '+max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  console.log('The random integer number between 1 and 3 is: '+getRandomInteger(1,3));