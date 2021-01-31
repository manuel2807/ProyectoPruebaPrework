var nombre = 'Manuel'

function imprimirNombreMayusculas() {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}


//Este tipo de declaración hace que la  variable global no sea modificada
function imprimirNombreLocal(n) {
    n = n.toUpperCase()
    console.log(n)
    
}

imprimirNombreMayusculas()
imprimirNombreLocal(nombre)