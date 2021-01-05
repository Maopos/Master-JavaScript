'use strict'

//Comparar dos numeros

var num1 = parseInt(prompt('Escribe un numero.', 0));
var num2 = parseInt(prompt('Escribe un segundo numero.', 0));

console.log(num1, num2);

while (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt('Escribe un numero.', 0));
    num2 = parseInt(prompt('Escribe un segundo numero.', 0));
}

if (num1 > num2) {
    document.write('El numero: ' + num1 + ' es Mayor al numero: ' + num2 +'.')
}

else if (num1 == num2) {
    document.write('El numero: ' + num1 + ' es Igual al numero: ' + num2 +'.')
}

else {
    document.write('El numero: ' + num1 + ' es Menor al numero: ' + num2 +'.')
}