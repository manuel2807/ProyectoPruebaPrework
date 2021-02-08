const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const OPT = { crossDomain:true }
const ON_RESPONSE = function (data) {
    console.log(`hola yo soy ${data.name}`);
}

$.get(LUKE_URL,OPT, ON_RESPONSE)