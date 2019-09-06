// Examples of javaScript
// 1. Find out the even and odd number using javaScript
// 2. Find out the maximum and minimum numbers using a javaScript user define function
// 3. Fibonacci series up to 20
// 4. Swap two numbers

// 1. Identify the Even and Odd Numbers
let a = 35;
if(a%2 == 0){
    console.log('Even Number!');
}else{
    console.log('Odd Number!');
}

// 2. Maximum and Minimum Number Identification
var maxMin = function(a,b,c,d,e){
    var maxNum = Math.max(a,b,c,d,e);
    var minNum = Math.min(a,b,c,d,e);
    console.log(maxNum);
    console.log(minNum);
};
maxMin(25,92,36,885,47);

// 3. Fibonacci Series find out using javaScript

// 4. Swap two numbers using temporary variable and without temporary variable
var n = 10;
var m = 20;
console.log(`Before swapping:The value of n=${n} and m=${m}`);

// var temp = 0;
// temp = n;
// n = m;
// m = temp;

[n,m]=[m,n];
console.log(`After swapping:The value of n=${n} and m=${m}`);

