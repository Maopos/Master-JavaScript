'use strict'


var numero = 4444;
var texto = 'Hola mundillo!, el dia de hoy buscaremos palabras dentro de strings';
var texto2 = 'TRANSFORMAR TEXTO';

var busqueda = texto.indexOf('hoy');//En que posicion se encuentra de acuerdo a los caracteres
console.log(busqueda);

var busqueda2 = texto.lastIndexOf('de');//Ultima posicion en que se encuentra de acuerdo a los caracteres
console.log(busqueda2);

var busqueda3 = texto.search('mundillo');//En que posicion se encuentra de acuerdo a los caracteres
console.log(busqueda3);

var busqueda4 = texto.match(/de/g);//Muestra un array con las coincidencias
console.log(busqueda4);

var busqueda5 = texto.substr(5, 10);//Muestra 10 caracteres desde la posicion 5
console.log(busqueda5);

var busqueda6 = texto.charAt(34);//Muestra el caracter en la posicion 34
console.log(busqueda6);

var busqueda7 = texto.startsWith('Hola');//Busca una palabra al inicio de un string
console.log(busqueda7);

var busqueda8 = texto.endsWith('Hola');//Busca una palabra al final de un string
console.log(busqueda8);

var busqueda9 = texto.includes('Hola');//Busca una palabra en un string
console.log(busqueda9);


