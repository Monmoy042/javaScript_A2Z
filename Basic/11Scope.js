// Scope in javaScript
/* ----------------------
    # Scope determines the accessibility (visibility) of variables
    # There are two types of scopes in javascript 
        1. Local Scope
        2. Global Scope
    # JavaScript has functions scope. Each Functions will create a scope
    # Variables defines inside a functions or blocks will not be accessible from anywhere of the code
    # But a global variable will be accessible from anywhere of the code
    # Something is in the third bracket generally is called as a scope
*/
let x = 5; // Global Variable
if(true){
    let y = 10; // Local Variable
    x = 50;
    console.log('The value of x inside the scope is: '+x);
    console.log('The value of y inside the scope is: '+y);
}
x = 100;
console.log('The value of x outside the scope is: '+x);
// console.log('The value of y outside the scope is: '+y);

// Here if we try to console log to the value of y, we will get an error. Because y is a local variable. We cannot access it from the outside of the scope


//But if we use var instead of let we can access the value of y from the outside of the scope.
var n = 600; // Global Variable
if(n>200){
    n = 500; 
    console.log('The value of n inside the scope is: '+n);
    var m = 1000; // Local Variable
    console.log('The value of m inside the scope is: '+m);
}
 n = 200+m;
 console.log('The value of n outside the scope is: '+n);
 console.log('The value of m outside the scope is: '+m);