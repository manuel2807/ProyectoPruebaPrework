var edad = 26;

//Aumenta en X cantidad el valor de la variable.
edad +=1;

//Aumenta en 1 el valor de la variable.
edad ++;
console.log(edad);



//////////////////
var peso = 75

//Resta en X cantidad el valor de la variable
peso -=2
console.log(peso)

var sandwich = 6

//Suma de variables en una linea

peso += sandwich
console.log(peso)

//////////////// Decimales


var precioDeVino = 200.3

//Aquí muestra un decimal de más 600.9000000001
var total = precioDeVino * 3
console.log(total)

//Para redondear se utiliza mejor
var total = precioDeVino * 100 * 3 / 100
console.log(total)

//Para redondear con la librería Math
var total = Math.round(precioDeVino * 100 * 3)/ 100
console.log(total)

//Redondeo con decimales específicos convirtiendo a string
var totalStr = total.toFixed(2)
console.log(totalStr)


//Redondear y pasar a número decimal
var totalDos = parseFloat(totalStr)
console.log(totalDos)


//División
var pizza = 8
var persona = 2
var cantidadPorcionPorPersona = pizza / persona
console.log(cantidadPorcionPorPersona)
