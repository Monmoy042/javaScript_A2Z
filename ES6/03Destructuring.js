// Destructuring Array and Object
const arr = [10,20,30];
let [a, ,c] =arr;
console.log(`The value of a is: ${a}`);
console.log(`The value of c is: ${c}`);

const arr2 = ['John Doe',25,'Student'];
let [name,age,profession]=arr2;
console.log(`The name of the person is: ${name}\nThe age of the person is: ${age}\nThe profession of the person is: ${profession}`);

// Destructuring in Object
const obj ={
    name1: 'John',
    email: 'john@gmail.com',
};
let {name1,email}=obj;
console.log(name1);
console.log(email);