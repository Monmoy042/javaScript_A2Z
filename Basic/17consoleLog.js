// Clear the console
console.clear(); // This will clear the whole console

// Basic console.log
var a = 10;
var b = 20;
console.log(a);
console.log(b);

var log = console.log;
log(a, b);
log("a: " + a + " b: " + b);

var superHeroes = ["SuperMan", "SpiderMan", "BatMan", "IronMan", "HitMan"];
var friends = ["Ross", "Phybbie", "Chadler", "Monica", "Rachel"];
log({ superHeroes, friends });
log([superHeroes, friends]);
log([superHeroes[2], friends[4]]);

// console.table
var num1 = 100;
var num2 = 200;
var sum = num1 + num2;
console.table([num1, num2, sum]);

var mathNumbers = [78, 96, 88, 92, 71, 68];
console.table([mathNumbers]);

var obj = {
  name: "John Doe",
  age: 27,
  ID: 1001,
  profession: "Website Developer",
  skills: ["HTML", "CSS", "JavaScript", "NodeJs", "Firebase"],
};
console.table([obj]);

// Styling with console.log
log("%c Bangladesh", "color:red;"); // This will only work in the browser's console

// String and Number
log("%s is %d years old", "John", 27); // %s represents String and %d represents Number

// Extra console
console.info("Important Information");
console.error("Error!");
console.warn("Warning!");
console.debug("Works for Debugging");

// Count with console
// console.countReset(); // This is used for reset the counting
for (var i = 0; i <= 10; i++) {
  // console.count();
  console.count("Counting-1");
}

// Counting time using console.time()
console.time();

setTimeout(() => {
  // console.timeEnd('About 5 Sec....');
  console.timeEnd();
}, 5000);

setTimeout(() => {
  // console.timeLog('About 2 Sec....')
  console.timeLog();
}, 2000);

// console.group()
console.group("Presentation Group");
log("Group member-1");
log("Group member-2");
log("Group member-3");
log("Group member-4");
log("Group member-5");
log("Group member-6");
console.groupEnd();

// Stack trace
function one() {
  two();
}
function two() {
  three();
}
function three() {
  console.trace();
}
one();

// Debugger
for (var n = 0; n <= 10; n++) {
  debugger;
  console.log(n);
}
