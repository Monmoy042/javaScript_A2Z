// Conditional Statements
/*
    1. if
    2. else
    3. else if
    4. switch
    5. ternary operator
*/

// if
let x = 1;
if(x == 1){
    ++x;
}
console.log(x);

let y = 100;
if(true){
    y+=100; // y = y + 100
}
console.log('The value of y is: ' + y);

// else
let hour = 15;
if(hour>18){
    console.log('Good Morning');
}else{
    console.log('Good Night');
}

// Even and Odd number identify
let num = 560;
if(num %2 ==0){
    console.log('Even Number');
}else{
    console.log('Odd Number');
}

// else if
const name = 'Federer';

if(name == 'Murray'){
    console.log("'Grand Slam' Won: 3");
}else if(name == 'Wawrinka'){
    console.log("'Grand Slam' Won: 3");
}else if(name == 'Djokovic'){
    console.log("'Grand Slam' Won: 16");
}else if(name == 'Nadal'){
    console.log("'Grand Slam' Won: 18");
}else if(name == 'Federer'){
    console.log("'Grand Slam' Won: 20");
}else{
    console.log('Unknown Player!');
}

// Switch 
var grade = 'A';
switch(grade){
    case 'A': console.log('Your grade is A');
    break;
    case 'B': console.log('Your grade is B');
    break;
    case 'C': console.log('Your grade is C');
    break;
    case 'D': console.log('Your grade is D');
    break;
    case 'E': console.log('Your grade is E');
    break;
    case 'F': console.log('Your grade is F');
    break;
    default: console.log('Unknown Grade');
}

// Ternary Operator in JS
var age = 26;
var drink = (age >= 21) ? 'Beer' : 'Juice';
console.log(drink);

var jor = num % 2  == 0 ? 'Even Number' : 'Odd number';
console.log(jor);