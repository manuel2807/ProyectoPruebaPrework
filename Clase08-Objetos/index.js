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

function imprimirNombreMayusculas(nombre) {
    var nombre = nombre.toUpperCase()
    console.log(nombre)
}

function imprimirNombreObjeto(persona) {
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}

//Se pasa cómo parametro uno de los atributos de los objetos o más
function imprimirDesmembrandoObjeto({nombre}) {
    console.log(nombre.toUpperCase())
}

imprimirNombreMayusculas(manuel.nombre)
imprimirNombreMayusculas(dario.nombre)


imprimirNombreObjeto(manuel)
imprimirNombreObjeto(dario)

imprimirDesmembrandoObjeto(manuel)
imprimirDesmembrandoObjeto({nombre:'Pepito'})