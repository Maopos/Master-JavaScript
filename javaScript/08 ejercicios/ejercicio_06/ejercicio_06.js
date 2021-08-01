'use strict'

//Programa que nos diga si un número es un par o impar.

document.write('<h1>Ejercicio 06</h1><br><h2>Programa que nos diga si un número es par o impar.</h2>');


var numero = parseInt(prompt('Introduce un número.', 0));

while ((numero < 1) || (isNaN(numero))) {
    var numero = parseInt(prompt('Introduce un número.', 0));
}

if (numero%2 == 0) {
    document.write('<h3>El número ' + numero + ' es un número <em>par</em>.</h3>');
}
else {
    document.write('<h3>El número ' + numero + ' es un número <em>impar</em>.</h3>');
}