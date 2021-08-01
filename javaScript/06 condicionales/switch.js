'use strict'

//Condicional Switch

var edad = 18;
var imprime = "";

switch (edad) {
    case 18:
        imprime = 'Eres mayor de edad.'
        break;

    case 25:
        imprime = 'Eres adulto'
        break;

    case 40:
        imprime = 'Crisis de los 40'
        break;

    case 70:
        imprime = 'Eres mayor de edad.'
        break;

    default:
        imprime = 'Tu edad es neutral'
        break;
}

console.log(imprime);