'use strict'

//Metodos para transformar textos -strings

let numero = 4444;
let texto = 'Hola mundillo!';
let texto2 = 'TRANSFORMAR TEXTO';


let dato = numero.toString();//Convertir a String
console.log(typeof dato);

let mayus = texto.toUpperCase(); //convertir a mayusculas
console.log(mayus);


let minus = texto2.toLowerCase(); //Convertir a minusculas
console.log(minus);


console.log(texto.length);//Calcular longitud cantidad de caracteres


let array = ['hola', 'como', 'estas'];//Calcular longitud cantidad de elementos
console.log(array.length);


let concatenar = texto + ' ' + texto2 + ' ' + dato;//Concatenar
console.log(concatenar);

let textoTotal = texto.concat(' ' + texto2 + ' ' + dato);// Concatenar
console.log(textoTotal);

