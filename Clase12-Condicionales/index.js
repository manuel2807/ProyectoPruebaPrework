var manuel = {
    nombre: 'Manuel',
    apellido: 'Bustos',
    edad: 26,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    gamer: true
}



function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `)

    if(persona.ingeniero===true){
        console.log('Ingeniero')
    }
    if (persona.cantante) {
        console.log('Cantante')
    }else{
        console.log('No es cantante')
    }
    
}

function mayorDeEdad(persona) {
    if(manuel.edad >= 18){
        console.log('Es mayor de edad')
    }else{
        console.log('No es mayor de edad')
    }
}

imprimirProfesiones(manuel)
mayorDeEdad()