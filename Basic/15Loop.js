// Loops in javaScript
/*
    1. While Loop
    2. For Loop
    3. forEach loop
*/

// While loop in javaScript
/*
    While Loop Structure
    ---------------------
    initialization
    while(condition){
        statement
        statement
        ..........
        increment/decrement
    }
*/
var a = 1;
while(a<=5){
    console.log('The value of a is: '+a);
    a++;
}

console.log('\n'); // Print a new line

// For loop in javaScript
/*
    For Loop Structure
    -------------------
    for(initialization,condition,increment/decrement){
        statement
        statement
        .........
        .........
    }
*/
let i =0;
for(i;i<=5;i++){
    console.log('The value of i is: '+i);
}
console.log('\n'); // Print a new line

for(let n=0;n<5;n++){
    console.log('The value of n is: '+n);
}

for(let x = 0;x<=10;x++){
   let y = x;
   let z = y+x;
   console.log(z);
}

// forEach Loop in javaScript
let dayNum = 0;
let days = ['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];
days.forEach(function(day,dayNum){
    // console.log(day,+' '+(dayNum+1)); 
    console.log('Number '+(dayNum+1)+' day of a week is: '+day);
});

// Loop in Array
const fruits =['Mango','Apple','Orange','Coconut','Cherry'];
for(let f=0;f<fruits.length;f++){
    console.log(fruits[f]);    
}

// Loop in Object
const data ={
    name:'Mr. X',
    age:25,
    studentship:false,
    job:true,
};
for(let element in data){
    console.log(element,data[element]);
}