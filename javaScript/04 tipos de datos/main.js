'use strict'

// Operadores

var numero = 7;
var num2 = 12;
var operacion = numero + num2;

console.log("El resultado de la operacion es: " + operacion)

//Tipos de datos

var numero_entero = 44;
var cadena_de_texto = "esto es una 'cadena' de texto";
var verdadero_falso = true;

console.log(numero_entero);
console.log(cadena_de_texto);
console.log(verdadero_falso);

var num_string = "33";

console.log(num_string + numero);
console.log(Number(num_string) + numero);//Convierte string a numero
console.log(String(numero_entero)+num2);//Convierte numero a string

//typeof

console.log(typeof numero);
console.log(typeof verdadero_falso);
console.log(typeof cadena_de_texto);//devuelve tipo de dato