'use strict'

//Tabla de multiplicar de un número introducido por pantalla.

document.write('<h1>Ejercicio 07</h1><h2>Tabla de multiplicar de un número introducido por pantalla.</h2>');

var numero = parseInt(prompt('Cual tabla de multiplicar quieres saber?', 0));

document.write('<h3>Tabla del: ' + numero + '</h3>')

for (let index = 1; index <= 10; index++) {
    document.write(numero + ' x ' + index + ' = ' + (numero * index) + '<br>');
    
}
document.write('<br>');

//Todas las tablas

for (let i = 1; i <= 12; i++) {
    document.write('<h3>Tabla del: ' + i + '</h3>')
    for (let index = 1; index <= 10; index++) {
        document.write(i + ' x ' + index + ' = ' + (i * index) + '<br>');
        
    }
    document.write('<br>');
}