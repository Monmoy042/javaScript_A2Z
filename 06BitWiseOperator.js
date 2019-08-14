// Bitwise operator in javaScript

/*
    01. x &= y           x = x & y           Assigns the result of x AND y to x
    02. X |= y           x =x | y            Assigns the result of x OR y to x
    03. x ^= y           x = x ^ y           Assigns the result of x XOR y to x
    04. x <<= y          x = x << y          Assigns the result of x shifted left by y to x
    05. x >>= y          x = x >> y          Assigns the result of x shifted right by y to x
    06. x >>>= y         x = x >>> y         Assigns the result of x shifted right by y to x
    07. ~x               NOT                 Inverts all the bits of x
*/

// x &= y
let x1 = 5;
let x2 = 10;
x2 &= x1; // x2 = x2 & x1

/* x2 will return 0 
 Here, binary representation of 5 is:      00000101
       binary representation of 10 is:     00001010
       binary representation of 5 & 10 is: 00000000
*/
console.log(x2);

let x3 = 7;
let x4 = 7;
x4 &= x3;
/* x4 will return 7 
 Here, binary representation of 7 is:     00000111
       binary representation of 7 is:     00000111
       binary representation of 7 & 7 is: 00000111
*/
console.log(x4);

// X |= y
let n1 = 15;
let n2 = 14;
n2 |= n1; // n2 = n2 | n1
/* n2 will return 15 
 Here, binary representation of 15 is:      00001111
       binary representation of 14 is:      00001110
       binary representation of 15 | 14 is: 00001111
*/
console.log(n2);

// ~X [NOT]
let n = 1;
let n0 = ~n;
console.log(n0);