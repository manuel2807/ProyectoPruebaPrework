var manuel = {
    nombre: 'Manuel',
    apellido: 'Bustos',
    edad: 26
}

//Al manejar de esta manera el objeto se verá afectado el objeto completo de manera externa
function cumpleanos(persona) {
    persona.edad +=1
}


//Se genera un objeto nuevo el cual tomará los valores del objeto original.
function cumpleanosDos(persona){
    return{
        ...persona,
        edad:persona.edad + 1
    }
}

cumpleanos(manuel)
cumpleanosDos(manuel)
console.log(manuel.edad)