var manuel = {
    nombre: 'Manuel',
    apellido: 'Bustos',
    edad: 26,
    altura: 1.72
}

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 22,
    altura: 1.27
}

function imprimirNombre(persona) {

    //var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())

}

imprimirNombre(manuel)