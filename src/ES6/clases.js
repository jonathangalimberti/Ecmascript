//declaracion
class User {
    //constructor permite construir la estructura de la clase
    // con this. asignamos los parametros que llegaran para construir la clase
    constructor (name, age){
        this.name = name
        this.age = age
    }

    //metodos para utilizar en la clase
    greeting(){
        return `${this.speak()} ${this.name}`
    }
    speak(){
        return 'Hello'
    }

    // Getter y seters sirven para pedir o enviar datos al constructor
    get uAge(){
        return this.age
    }
    set uAge (n){
        this.age = n
    }
}

//instancia de la clase
// primero declaro la instancia y aplico el metodo de saludo
const gndx = new User("gndx", 35);
console.log(gndx.greeting());

//con el metodo que esta declarado con get pido datos especificos como la edad en este caso

console.log( gndx.uAge);

// cuando le asigno otro valor al metodo estoy haciendo uso de set de forma automatica y esto cambiara el valor antes asignado
console.log(gndx.uAge = 40);
