const DIAS_DEL_ANIO = 365

var manuel = {
    nombre: 'Manuel',
    apellido: 'Bustos',
    edad: 26,
    peso: 75
}


console.log(`${manuel.nombre} al inicio del año pesaba ${manuel.peso} kilogramos`)

const TAZA_DE_PESO = 0.2
const aumentarDePeso = persona => persona.peso += TAZA_DE_PESO 
const adelgazar = persona => persona.peso -= TAZA_DE_PESO 

for (let index = 1; index <= DIAS_DEL_ANIO; index++) {
    var random = Math.random()

    if (random < 0.25) {
        //Aumento de peso
        aumentarDePeso(manuel)
    }else if (random < 0.5) {
        //Va a adelgazar
        adelgazar(manuel)
    }
}


console.log(`${manuel.nombre} al final del año pesaba ${manuel.peso.toFixed(2)} kilogramos`)