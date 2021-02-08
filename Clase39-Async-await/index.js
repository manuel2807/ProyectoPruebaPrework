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






async function obtenerPersonajes() {
    var idsPersonajes = [1,2,3,4,5,6,7]
    var promesas = idsPersonajes.map(id =>  obtenerPersonaje(id))
    

    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes[0]);
    } catch (id) {
        onError(id)
    }

}


obtenerPersonajes()