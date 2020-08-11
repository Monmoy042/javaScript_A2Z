// Check prime number or not!!!!!
function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return "This is not a prime number";
    }
  }
  return "This is a Prime Number!!!";
}
var result = isPrime(403);
console.log(result);
