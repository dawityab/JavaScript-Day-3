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

// Temperature v2.0

let temp2 = Math.floor(Math.random() * 50) + -5;

console.log(`The temperature is ${temp2}`);
if((temp2 >= -5) && (temp2 <= 10) ){

let weatherText = document.getElementById("weatherText");
const weatherInfo = `The weather is cold and it is ${temp2}c`;
weatherText.innerHTML= weatherInfo;

let weatherImage = document.getElementById("weatherImage")
weatherImage.src = 'cold.png';
weatherImage.style.width = '200px';

}
else if((temp2 >= 11) && (temp2 <= 25) ){
    let weatherText = document.getElementById("weatherText");
    const weatherInfo = `The weather is moderate and it is ${temp2}c`;
    weatherText.innerHTML= weatherInfo;
        
    let weatherImage = document.getElementById("weatherImage")
    weatherImage.src = 'moderate.jpg';
    weatherImage.style.width = '200px';
    }
else{
let weatherText = document.getElementById("weatherText");
const weatherInfo = `The weather is hot and it is ${temp2}c`;
weatherText.innerHTML= weatherInfo;

let weatherImage = document.getElementById("weatherImage")
weatherImage.src = 'sun.jpg';
weatherImage.style.width = '200px';
}
