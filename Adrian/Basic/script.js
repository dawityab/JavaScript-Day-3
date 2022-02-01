//EXcercise 1

const number = 30
const temp = Math.floor((Math.random() * number) - 5);

console.log(`The temperature is ${temp}C.`)

if (temp > -5, temp < 10) {
    console.log("The wheater is cold")
} else {
    console.log("the wheater is moderate")
}


// Excercise 2

let value = [1, 7, -3, 9]

for (let i = 3; i < value.length; i++) {
    console.log(value[i]);
}

// Excercise 3

const numberMax = 40
const tempNew = Math.floor((Math.random() * numberMax) - 5);

console.log(`The temperature is ${tempNew}°C`);

if (tempNew >= -5 && tempNew <= 10) {
    document.getElementById("info").innerHTML = "The weather is cold";
    
    let imgWeather = document.getElementById("imgWeather");
    imgWeather.src = '3.png';

} else if (tempNew >= 10 && tempNew <= 25) {
    document.getElementById("info").innerHTML = "The weather is moderate";

    let imgWeather = document.getElementById("imgWeather");
    imgWeather.src = '1.png';
} else {
    document.getElementById("info").innerHTML = "The weather is hot" + "imgHot";

    let imgWeather = document.getElementById("imgWeather");
    imgWeather.src = '2.png';
}

document.getElementById("degree").innerHTML = (`${tempNew}°C`);

///




