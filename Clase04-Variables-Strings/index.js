var nombre = 'Manuel', apellido = 'Bustos';

var nombreEnMayusculas = nombre.toUpperCase();
var nombreEnMinusculas = nombre.toLowerCase();

//Trae la letra indicada en el parámetro
var primerLetra = nombre.charAt(0);

//Reto, ultima letra
var ultimaLetra = nombre.substr(-1,1);


//Cantidad de caracteres en la variable o cadena
var cantidadDeLetras = nombre.length;


//Concatenar cadenas
var nombreCompleto = nombre + ' ' + apellido;
var nombreCompletoDos = `Hola ${nombre} ${apellido.toUpperCase()}, Cómo estás?`;


//Accedes a un string más pequeño
var str = nombre.charAt(1) + nombre.charAt(2);

var strDos = nombre.substr(1,2);

console.log(nombreEnMayusculas);
console.log(nombreEnMinusculas);
console.log(primerLetra);
console.log(cantidadDeLetras);

console.log(nombreCompleto);
console.log(nombreCompletoDos);
console.log(str);
console.log(strDos);

console.log(ultimaLetra);