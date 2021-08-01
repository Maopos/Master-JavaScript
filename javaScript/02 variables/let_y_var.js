'use strict'

var numero = 40;
console.log(numero);

if (true) {
    var numero = 50;
    console.log(numero);
}

console.log(numero);

var texto = 'Curso JS';//con var el valor es global
console.log(texto);

if (true) {
    let texto = 'Curso master JS';//con let solo funciona dentro del if
    console.log(texto);
}

console.log(texto);