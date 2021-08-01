'use strict'

var lenguajes = ['Html', 'Css', 'Sass', 'JavaScript', 'C#', 'Angular'];

document.write('<h2>Lenguajes</h2>');
document.write('<ol>');


lenguajes.forEach((element, index, array) => { //For eeach tiene 3 parametros elementos, indices y el arreglo completo
    document.write('<li>' + index + ' ' + element);
    
});

document.write('</ol>');
