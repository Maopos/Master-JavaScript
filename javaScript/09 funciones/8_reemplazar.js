'use strict'


var numero = 4444;
var texto = '       Hola mundillo!, el dia de hoy reemplazaremos palabras dentro de strings    ';

var reemplazar = texto.replace('Hola', 'Buenos dias');//Reemplaza una palabra por otra
console.log(reemplazar);

var reemplazar2 = texto.slice(14, 22);//Devuelve el string a partir  del caracter 14 hasta el 22.
console.log(reemplazar2);

var reemplazar3 = texto.split(' ');//Devuelve un array
console.log(reemplazar3);

console.log(reemplazar3.length);// Devuelve la cantidad de elementos de ese array

var reemplazar4 = texto.trim(' ');//Elimina los espacios al principio y al final de un string
console.log(reemplazar4);