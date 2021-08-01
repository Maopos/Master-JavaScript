'use strict'

//Condicional if

var edad3 = 30;
var edad2 = 42;

if (edad3 > edad2) {
    console.log('Edad3 es mayor a Edad2');
}
else{
    console.log('Edad3 es menor a Edad2');
}

var edad = 33;
var nombre = 'David';

if (edad >= 18) {
    
    console.log(nombre + ', Estás autorizado, porque tienes ' + edad + ' años.');
    if (edad <= 33) {
        console.log('Todavia eres Milleniam.')
    }
    else if (edad >= 70) {
        console.log('Ya eres anciano.')
    }
    else{
        console.log('Ya no eres Milleniam.')
    }
}
else{
    console.log(nombre + ', ' + 'No puedes ingresar, porque tienes ' + edad + ' años.');
}

//Operadores Logicos

// and: &&
// or: ||
// negacion: !

var year = 2020;

if (year != 2018) {
    console.log("El año no es 2018, realmente es " + year +'.')
}

if (year >= 2000 && year <= 2020) {
    console.log("Estamos en la era actual, año " + year +'.')
}

