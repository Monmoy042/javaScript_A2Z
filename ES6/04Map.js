// Map method in javaScript
let arr = [2,4,10,16];
let newArr = arr.map(function(value,index,array){
    console.log('The value is: '+value);
    console.log('Index Number is: '+index);
    console.log('Array: '+array);
});
console.log(arr);

// Using Arrow Function
let num = [2,4,6,8,10];
let num2 = num.map( value => {
    return value*value;
});
console.log(num2);
console.log(num); // The original Array will not change

// Array with object and Map method
let business = [
    {
        product:'PC',
        price:50000,
    },
    {
        product:'Mobile',
        price:15000,
    },
    {
        product:'Power Bank',
        price:1360,
    },
    {
        product:'Monitor',
        price:3000,
    },
    {
        product:'UPS',
        price:2500,
    },
];
let item = business.map(amount =>{
    priceTag = amount.price;
    console.log(priceTag);
    productType = amount.product;
    console.log(productType);
    return productType;
});
console.log(item);