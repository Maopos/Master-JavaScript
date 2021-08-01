'use strict'

var fecha = new Date;
var year = fecha.getFullYear();
var month = fecha.getMonth();
var day = fecha.getDate();//Dia

var textoHora = `El año es ${year} y estamos en el mes ${month+1} 
dia ${day}`;

console.log(fecha);
console.log(textoHora);

