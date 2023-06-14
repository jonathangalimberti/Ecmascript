//enahced object literals - mejoras de objetos literales

// podemos retornar un objeto con los parametros de entrada con solo poner el nombre tal cual lo pide la funcion sin tener que asignarlo como por ej user: user, etc.

function newUser (user, age, country,id){
    return {
        user,
        age,
        country,
        id
    }
}

console.log(newUser("gndx", 93, "MX",1))

