'use strict'

//Calculadora.

document.write('<h1>Ejercicio 08</h1><h2>Calculadora.</h2>');

var num1 = parseInt(prompt('Escribe el primer número.', 0));
var num2 = parseInt(prompt('Escribe el segundo número.', 0));

while (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)) {
     num1 = parseInt(prompt('Escribe el primer número.', 0));
     num2 = parseInt(prompt('Escribe el segundo número.', 0));
}



var resultado = 'La suma de los dos números es: ' + (num1 + num2) + '.<br>' + 
                'La resta de los dos números es: ' + (num1 - num2) + '.<br>' +
                'La multiplicación de los dos números es: ' + (num1 * num2) + '.<br>' + 
                'La división de los dos números es: ' + (num1 / num2);


document.write(resultado);