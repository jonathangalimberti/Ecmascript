//permite controlar el asincronismo y como lo dice su definicion son promesas que van a pasar en algun momento sin bloquear el resto del funcionamiento del programa

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Hey!!!')
        }else {
            reject('Ups')
        }
    })
}
// Al ejecutar la promesa decimos que tiene que hacer con la respuesta o el rechazo de ser necesario,con el .then decimos que hacer si se resuelve correctamente y el .catch nos permite realizar otra cosa si se rechaza la promesa

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))