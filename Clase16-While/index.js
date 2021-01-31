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
const META = manuel.peso - 3
const comeMucho = () => Math.random() < 0.3
const realizaDeporte  =() => Math.random() < 0.4
var dias = 0


while (manuel.peso > META) {
    
    if (comeMucho()) {
        aumentarDePeso(manuel)
    }
    if (realizaDeporte()) {
        adelgazar(manuel)
    }
    dias++
}


console.log(`Pasaron ${dias} hasta que se llegó a la meta`)