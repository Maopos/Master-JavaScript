'use strict'

//Mostrar suma y la media de los numeros introducidos por el usuario hasta introducir un numero negativo

var suma = 0;
var contador = 0;


do {
    var numero = parseInt(prompt('Introduce numeros hasta que uno de ellos sea negativo', 0))

    if (isNaN(numero)) {
        numero = 0
    }
    else if (numero >= 0) {
        suma += numero;

        contador++;
    }

    console.log(suma, contador)

}while (numero >= 0) 

document.write('la Suma de todos los numeros es: ' + suma + '.')

document.write('la Media de todos los numeros es: ' + (suma/contador) + '.')