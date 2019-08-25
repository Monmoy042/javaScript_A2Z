// Array in javaScript
let arr1 = []; // This is an empty array
arr1.push(1,2,22,33,44,55,66,77,88,99); // Push some data in an empty array
console.log(arr1);
console.log(arr1[6]);
console.log(Array.isArray(arr1)); // Check it is an array or not

let arr2 = [10,20,30,40,50,60,70,80,90,100];
console.log(arr2);
console.log(arr2[5]); // Access a particular element in an array
console.log('The length of the arr2 is: ' + arr2.length); // Check the length of an array
console.log('Total index of arr2 is: ' + ([arr2.length]-1)); // Check the total indexes of an array
console.log(arr2[(arr2.length-1)]); // Print the last element of an array

let u = 8.96;
let v = 1000;
var arr3 = ['Dhaka','Chittagong','Rajshahi','Sylhet','Khulna',100,300,true,60.5,u,v];
console.log(arr3[9]);

// Another way to declare an array
let arr4 = new Array(); // Empty Array
console.log(arr4);
arr4.push('Avijit','Mugdha','Shanto','Saidul','Afridi',10,30);
console.log(arr4);
arr4.push('Cricket');
console.log(arr4);
var pos = arr4.indexOf('Afridi'); // Check the index of a particular element
console.log('The index number of "Afridi" is: ' + pos);

// Some operations on array
// ------------------------
/*  1. push --> Add elements to an array. Always element will add at the end of the array 
    2. pop --> Remove elements from an array. Last element remove from an array
    3. shift --> 
    4. slice --> 
    5. splice --> 
*/

