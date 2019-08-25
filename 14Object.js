// Object in JavaScript
/*
    # Object will be created with properties and values pair
    # We will get a value with respect to the property

    # Basic Structure of an object 
    -------------------------------
    var obj = {
        property1: value,
        property2: value,
        property3: value,
    };
*/

var student ={
    firstName: 'John',
    lastName: 'Doe',
    id: 123456,
    age: '28',
    phone: '01234678910',
    isGraduated:fase,
};
// Here, firstName, lastName, age etc. is the properties and John, Doe, 28 etc. is the value of that properties.
// Note: We can use string, number, array etc. as the value of an object

console.log(student);
console.log('The age of this student is: '+student.age); // Access a particular information/value from an object

// Another way to declare an object
var newObj = new Object();
newObj.name = 'Jane Doe';
newObj.age = 25;
newObj.ID = 1234567;
console.log(newObj);
console.log(newObj.name);
console.log(newObj.ID);