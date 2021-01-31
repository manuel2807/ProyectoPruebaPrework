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

//Definicion de constantes
const MAYORIA_DE_EDAD = 18



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

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function mayorDeEdad(persona) {
    if(esMayorDeEdad()){
        console.log('Es mayor de edad')
    }else{
        console.log('No es mayor de edad')
    }
}

imprimirProfesiones(manuel)
mayorDeEdad()