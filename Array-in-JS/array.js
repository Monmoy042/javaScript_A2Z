// Array and some operations on Array in JavaScript

var name = ["Kamal", "Jamal", "Amal", "Jalal"];
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);

// Check index and length on an array
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr1.indexOf(5));
console.log("The index number of 7 is: " + arr1.indexOf(7));

console.log("The total elements of this array are: " + arr1.length);

// Push and pop
var arr2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log("Original arr2: " + arr2);
arr2.push(22); // By default push operation will add an element to the last of that array
console.log("After add 22 in the array: " + arr2);

arr2.pop(); // By default push operation will delete an element to the last of that array
console.log("Pop out the last element form an array" + arr2);

arr2.push(10, 20, 30); // Multiple element add to the array
console.log(arr2);

// Shift and unshift
/* This two operations works on array so that elements are added and deleted to the beginning of that array */
var cats = ["Mikku", "Gullu", "Billu"];
cats.shift();
console.log("Remove the first element from the cats: " + cats);

cats.unshift("Polu", "Mikey");
console.log(cats);

// Slice Operation
/* 
    Slice operation helps us to split the array 
*/

var days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
console.log("Before Slice: " + days);
var sliceDays = days.slice(3);
console.log("After Slice: " + sliceDays);

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
console.log("Before Slice: " + months);
var sliceMonth = months.slice(2, 4);
console.log("After Slice: " + sliceMonth);
