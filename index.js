let obj1 = {
    name: 'person1',
    age: 5
}

let obj2 = {
    age: 5,
    name: 'person1'
}



console.log(obj1.name == obj2.name)
console.log(obj1.age == obj2.age)


----------------------------------------------------------------------------------------


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
