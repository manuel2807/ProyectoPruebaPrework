const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const OPT = { crossDomain:true }
const ON_RESPONSE = function (data) {
    console.log(`hola yo soy ${data.name}`);
}

function obtenerPersonaje(id) {

    return new Promise( (resolve,reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`


        $
        .get(URL, OPT, function (data) {
            resolve(data)
        })
        .fail(()=>reject(id))
    })
   
}

function onError(id){
    console.log(`Hubo un error con el id ${id}`);
}


var idsPersonajes = [1,2,3,4,5,6,7]

// var promesas = idsPersonajes.map(function (id) {
//     return obtenerPersonaje(id)
// })

var promesas = idsPersonajes.map(id =>  obtenerPersonaje(id))

Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)

// obtenerPersonaje(1)
//     .then( personaje => {
//         console.log(`Hola, soy ${personaje.name}`);
//         return obtenerPersonaje(2)
//     })
//     .then (personaje => {
//         console.log(`Hola, soy ${personaje.name}`);
//         return obtenerPersonaje(3)
//     })
//     .then (personaje => {
//         console.log(`Hola, soy ${personaje.name}`);
//         return obtenerPersonaje(4)
//     })
//     .then (personaje => {
//         console.log(`Hola, soy ${personaje.name}`);
//         return obtenerPersonaje(5)
//     })
//     .then (personaje => {
//         console.log(`Hola, soy ${personaje.name}`);
//         return obtenerPersonaje(6)
//     })
//     .then (personaje => {
//         console.log(`Hola, soy ${personaje.name}`);
//         return obtenerPersonaje(7)
//     })
//     .then (personaje => {
//         console.log(`Hola, soy ${personaje.name}`);
//     })
//     .catch(function (id) {
//         onError(id)
//     })