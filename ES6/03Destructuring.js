// Destructuring
let x,y,z;
[x, ,y,...z] = [100,200,300,400,500,600];
console.log(`The value of x is:${x}\nThe value of y is:${y}\nThe value of z is:${z}`);

// Destructuring in function
function f1(){
  return [0,1,2,3];
}
let n1,n2,n3;
[n1,n2, ,...n3] = f1();
console.log(n1);
console.log(n2);
console.log(n3);

// Destructuring Array
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

const user = {
    displayName: 'jDoe',
    ID: 42,
    fullName:{
      firstName:'John',
      lastName:'Doe',
    },
  };
  
  let {displayName,ID,fullName:{firstName,lastName}} =user;
  console.log(displayName);
  console.log(ID);
  console.log(firstName);
  console.log(lastName);


const user1 ={
    userName:'John Doe',
    ID1: 45,
    skill:['Python','JavaScript','C++','PHP'],
    address:{
      city:'Dhaka',
      country:'Bangladesh',
      zipCode:'1217',
    }
  };
  
  let {userName,ID1,skill:[prog1, ,prog3],address:{city,country,zipCode}} = user1;
  console.log(prog1);
  console.log(prog3);
  console.log(zipCode);

  