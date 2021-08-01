'use strict'

let cadena1 = 'String de prueba para metodos      ';
let cadena2 = ' Hola Mundillo!';

var resultado = cadena1.trimStart();

console.log(resultado.length);

// var resultado = cadena1.concat(cadena2);         - concatenar cadenas.
// var resultado = cadena1.startsWith('String');    - true si empieza con ese parametro.
// var resultado = cadena1.endsWith('String');      - true si termina con ese parametro.
// var resultado = cadena1.includes('p');           - true si encuentra ese parametro dentro .
// var resultado = cadena1.indexOf('p');            - devuelve la posicion del primer parametro que coincida.
// var resultado = cadena1.lastIndexOf('p');        - devuelve la posicion del ultimo parametro que coincida.
// console.log(cadena1[8]);                         - Devuelve el caracter de la posicion 8.

//----------------------------------------------------------------------------

// var resultado = cadena1.padStart(99, 'hola ');   - Rellena la cadena al principio con los caracteres deseados. para que quede con 99 caract. e inicie con 'hola '.
// var resultado = cadena1.padEnd(99, ' hola');     - Rellena la cadena al final con los caracteres deseados. para que quede con 99 caract. y termine con ' hola'.
// var resultado = cadena1.repeat(3);               - Repite la cadena segun el parametro.

//-------------------------------------------------------------------------------

// Transformar strings

// var resultado = cadena1.split(' ');              - Divide el String lo convierte en un array convierte cada elemento despues de cada espacio.
// var resultado = cadena1.substring(0, 21);        - Devuelve un nuevo string desde la posicion 0 hasta la posicion 21 del string original.
// var resultado = cadena1.toLowerCase();           - convierte un string en minuscula.
// var resultado = cadena1.toUpperCase();           - convierte un string a Mayusculas.
// var resultado = cadena1.toString();              - Convierte un numero  o un array a string.
// var resultado = cadena1.trim();                  - Elimina espacios al principio y final de un string
// var resultado = cadena1.trimEnd();               - Elimina los espacios al final de un string.
// var resultado = cadena1.trimStart();             - Elimina los espacios al principio de un string.