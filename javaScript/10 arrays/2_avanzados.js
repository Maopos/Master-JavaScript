'use strict'

var lenguajes = ['Html', 'Css', 'Sass', 'JavaScript', 'C#', 'Angular'];

console.log(lenguajes.length);

var elemento = parseInt(prompt('Cual elemento del array quieres?', 0));

while (elemento >= lenguajes.length) {
    var elemento = parseInt(prompt('Cual elemento del array quieres?', 0));
}

document.write(lenguajes[elemento]);

//-------------------------------------------

document.write('<br><h1>Lenguajes de programacion  </h1><br>');

document.write('<ol>');

for (const iterator of lenguajes) {
    
    document.write('<li>' + iterator + '<br>');
    
}









