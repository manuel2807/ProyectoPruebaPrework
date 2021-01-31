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

function saludar(persona) {

    //var nombre = persona.nombre
    var { nombre } = persona
    var { edad } = persona
    console.log(`Hola,  me llamo ${nombre} y tengo ${edad} años`)

}

saludar(dario)