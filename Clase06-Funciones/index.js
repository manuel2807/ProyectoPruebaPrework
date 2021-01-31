var nombre = 'Manuel', edad = 26

function imprimirEdad(){
    console.log(`${nombre} tiene ${edad} años`)
}

function imprimirEdadParametros(n, e) {
    console.log(`${n} tiene ${e} años`)
}

imprimirEdad()
imprimirEdadParametros('Meche', 33)
imprimirEdadParametros('Paco', 34)
imprimirEdadParametros(88, 'Chucho')