// Temperature v1.0
let temp = Math.floor(Math.random() * 25) + -5;

console.log(`The temperature is ${temp}`);
 if((temp >= -5) && (temp <= 10) )
 console.log("The weather is cold");
 else{
 console.log("The weather is moderate");
 }
// The Highet value in an array

let numberValue = [1,7-3,9];
console.log(Math.max(1,7,-3,9));

// Or with spread operator
let numberValue1 = [1,7,-3,9];
console.log(Math.max(...numberValue1));
