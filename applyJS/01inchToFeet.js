// Inch to Feet
var inchToFeet = function(inch){
    var feet = inch/12;
    return feet;
} 

var finalResult = inchToFeet(60);
console.log(finalResult);


// Feet to Inch
var feetToInch = function(feet2){
    var inch2 = 12*feet2;
    return inch2;
}
var convertFeetToInch = feetToInch(5);
console.log(convertFeetToInch);
