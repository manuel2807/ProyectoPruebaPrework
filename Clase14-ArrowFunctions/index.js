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


var juan = {
    nombre: 'Juan',
    edad: 12
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

//Función anónima al utilizar una variable para guardar
//una función

/*const esMayorDeEdad = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}
*/

//Función de flecha
//Se elimina el nombre de la función y se puede quitar el paréntesis
//Se puede eliminar también las llaves si solo retorna algo
//Normalmente se utiliza la palabra const al ser una función
//que no cambiará y una variable
//También se puede desestructurar poniendo parentesis y llaves
//y solo utilizando después de la flecha el atributo
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

function mayorDeEdad(persona) {
    if(esMayorDeEdad(persona)){
        console.log('Es mayor de edad')
    }else{
        console.log('No es mayor de edad')
    }
}


const esMenorDeEdad = ({edad}) => edad < MAYORIA_DE_EDAD




imprimirProfesiones(manuel)
mayorDeEdad(manuel)
console.log(esMenorDeEdad(juan))