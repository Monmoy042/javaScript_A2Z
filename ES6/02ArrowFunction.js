// Arrow Function in javaScript
const sayHello = () => console.log('Hello World!');
sayHello();

const sqr = (x) => {
    return x * x;
};
console.log(`Two square is: ${sqr(2)}`);

const minimum = (p, q, r, s) => {
    let min = Math.min(p, q, r, s);
    return min;
}
console.log(`The minimum number is: ${minimum(25,8,63,75)}`);

const hello = () => {
    let i = 0;
    for (i; i <= 10; i++) {
        console.log('Hello World!\n');
    }
}
hello();

const sumAll = () => {
    let n =0;
    for(let j=0;j<=10;j++){
        n = n+j;       
    }
    console.log(`The addition of one to ten is: ${n}`);
}
sumAll();