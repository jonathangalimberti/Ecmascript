function user ( name, age, country){
    let name = name || "Jose";
    let age =age || 22;
    let country = country || "AR"

    console.log(`tu nombre es ${name}, tienes ${age} años y vives en ${country}`)
}

function newUser (name = "jose", age = 22, country ="AR"){
    console.log(`tu nombre es ${name}, tienes ${age} años y vives en ${country}`)
}
newUser()
newUser("martin", 35, "MX")