'use stricts'

//Plantillas de texto

var nombre = prompt('Cual es tu nombre?');
var apellido = prompt('Cual es tu apellido?')

var texto = "Mi nombre es: " + nombre + ' y mi apellido es: ' + apellido + '<br>';
var plantilla =     `<h1>Hola Bienvenido </h1>
                     <h3>Mi nombre es: ${nombre} y mi apellido es: ${apellido}.</h3>`;

document.write(texto);
document.write(plantilla);


