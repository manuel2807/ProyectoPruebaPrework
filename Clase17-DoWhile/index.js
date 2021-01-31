var contador = 0

const llueve = () => Math.random() < 0.25

do {
    

    contador ++
} while (!llueve());

if (contador ===1) {
    console.log(`Fuí a ver si llovía ${contador} ves`)
}else{
    console.log(`Fuí a ver si llovía ${contador} veces`)
}
