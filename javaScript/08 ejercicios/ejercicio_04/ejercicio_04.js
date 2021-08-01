'use strict'

// Mostrar todos los numeros impares entre dos numeros introducidos por el usuario.

var num1 = parseInt(prompt('Introduce un primer número.', 0));
var num2 = parseInt(prompt('Introduce un segundo número.', 0));

while (num1 < num2) {
    num1++;

    if ((num1%2)!=0) {
        document.write(num1 + '<br>');
    }
    
}

while (num2 < num1) {
    num2++;

    if ((num2%2)!=0) {
        document.write(num2 + '<br>');
    }
    
}

