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
    isGraduated:false,
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

var myPhone ={
    productName: 'Samsung',
    model:'J7NXT',
    height: 6 + '"',
    width: 3.09 + '"',
    color: 'Black',
    isReleased: true,
    software:{
        version: 9,
        kernel:'3.18.91',
    },
    hardware:{
        camera:'13 MP',
        selfieCamera:'5 MP',
        GPS: true,
        bluetooth: 4.1,
        fingerprint:false,
        battery:'3000mAh',
        others:['RAM:2GB','ROM:16GB','microUSB2.0',16000],
    },
};

console.log(myPhone);
console.log(myPhone.software);
console.log(myPhone.hardware.battery);
console.log(myPhone.hardware.others);
console.log(myPhone.hardware.others[2]);
