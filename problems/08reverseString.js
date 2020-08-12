// Reverse a string
function reverseString(str) {
  var reverse = "";
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    reverse = char + reverse;
  }
  return reverse;
}
var speech = "Hello aliens, how are you doing?";
var statement = reverseString(speech);
console.log(statement);
