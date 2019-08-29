// Arrow Function in javaScript
const sayHello=()=>console.log('Hello World!');
sayHello();

const sqr =(x)=>{
    return x*x;
};
console.log(`Two square is: ${sqr(2)}`);

const minimum = (p,q,r,s)=>{
    let min = Math.min(p,q,r,s);
    return min;
}
console.log(`The minimum number is: ${minimum(25,8,63,75)}`);
