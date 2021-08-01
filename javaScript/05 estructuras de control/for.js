'use strict'

//Bucle for

var numeros = 20;

for (let index = 0; index <= numeros; index++) {
    document.write("Vamos por el numero: " + index +'<br>');
    
}

document.write('<br>')

let animales = ['perro', 'gato', 'raton'];

for ( let key in animales) {
    document.write(key+'<br>');
}

for ( let key of animales) {
    document.write(key + '<br>');
}