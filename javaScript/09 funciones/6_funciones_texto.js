'use strict'

//Metodos para transformar textos -strings

var numero = 4444;
var texto = 'Hola mundillo!';
var texto2 = 'TRANSFORMAR TEXTO';


var dato = numero.toString();//Convertir a String
console.log(typeof dato);

var mayus = texto.toUpperCase(); //convertir a mayusculas
console.log(mayus);


var minus = texto2.toLowerCase(); //Convertir a minusculas
console.log(minus);


console.log(texto.length);//Calcular longitud cantidad de caracteres


var array = ['hola', 'como', 'estas'];//Calcular longitud cantidad de elementos
console.log(array.length);


var concatenar = texto + ' ' + texto2 + ' ' + dato;//Concatenar
console.log(concatenar);

var textoTotal = texto.concat(' ' + texto2 + ' ' + dato);// Concatenar
console.log(textoTotal);

