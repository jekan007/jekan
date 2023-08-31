// let name = 'thayu'

// let secodName = 'manavan'

// console.log(name + ' ' + secodName)

// console.log('first line')


// console.log('second line')


// let val1 = 90;
// let val2 = 99;

// console.log('Arthmetic operators-----------')
// console.log('Add', val1 + val2);
// console.log('sub', val1 - val2);
// console.log('div', val1 / val2);
// console.log('mul', val1 * val2);
// console.log

// for (let day = 5; day >= 1; day--) {
//     console.log('bay milk for', day)
// }

// let average = 35;
// let good = 60;
// let excellance = 90;
// let yourMark = 32;

// if (yourMark >= excellance) {
//     console.log('you or excellance')
// } else if (yourMark >= good) {
//     console.log('you or good')
// } else if (yourMark >= average) {
//     console.log('you or avarage')
// } else {
//     console.log('sorry your fail')
// }

// const day = 0;
// switch (day) {
//     case 0:
//         console.log("sunday");
//         break;
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tusday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     default:
//         console.log('you have not entered a date')
// }

// let a = userInput[0]
// let b = userInput[1]

// let c = a + b

// console.log(Math.round(c))

// let celis = 12

// let fernheat = (1.8 * celis) + 32;

// console.log(fernheat.toFixed(2))

// let radius = 2

// if (radius < 0) {
//     console.log("Error")
// }

// let ciruqfarance = 2 * Math.PI * radius

// console.log(ciruqfarance.toFixed(2))


// let fact = 6
// let sum = 1
// for (let i = fact; i > 0; i--) {
//     sum = sum * i


// }
// console.log(sum)


// let kilometer = 10

// let meter = kilometer * 1000

// console.log(meter)

// let centimeter = meter * 100

// console.log(centimeter)

// let P = 1000

// let T = 2

// let R = 5

// let SI = P * T * R / 100

// console.log(SI.toFixed(2))

// let usr = ['1000 2 5']

// let val = usr[0].split(" ");


// let num = 4

// for (let i = 0; i < 5; i++) {
//     console.log(num)
// }

// let input1 = 2

// let input2 = 3

// for (let i = 0; i < input2; i++) {
//     console.log(input1)
// }

// let A = 20;

// let area = Math.sqrt(20) / 4 * Math.pow(A, 2)

// console.log(area)

// let input = ['1234'];

// let arr = input[0].split('')

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr)
//     }
//     if (arr[i] % 2 != 0) {
//         console.log(arr)
//     }
// }

let xhr = new XMLHttpRequest();
// console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
    const data = JSON.parse(xhr.response);
    console.log(data);
    console.log(xhr.status);
    for (let i = 0; i < data.length; i++) {
        console.log("_____________________________")
        console.log("Name :", data[i].name.common)
        console.log("flag :", data[i].flags.png)
        console.log("regions:", data[i].region)
        console.log("subregion :", data[i].subregion)
        console.log("population :", data[i].population)

        console.log("_____________________________")
    }
}