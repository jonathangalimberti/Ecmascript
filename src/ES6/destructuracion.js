//arrays destructured

let fruits = ["Apple", "Banana"]

let [a,b] = fruits

console.log (a,b)

//object destructured

let user = {
    username: "Oscar",
    age: 33
};
let {username, age } = user

console.log(username, age);

//spread operator

let person ={
    name: "Ramon",
    age: 28
}

let country="MX"

let data = {...person, country}

console.log(data)

//rest

function sum(num,...values){
    console.log(num,values);
    console.log(num + values);
    return num + values
}

sum(1,1,3,5)