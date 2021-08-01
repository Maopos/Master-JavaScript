'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['Brave hearth', 'La vida es bella', 'Gran Torino'];

var cine = [categorias, peliculas];

var elemento;

do {
    elemento = prompt('Introduce una pelicula');
    peliculas.push(elemento); //Añadir un elemento a un Array
    
}
while(elemento != 'Acabar') 

peliculas.pop(); //Elimina el ultimo elemento de un array

var index = peliculas.indexOf('Batman');//busca un elemento en un array

if(index > -1){
    peliculas.splice(index, 1); //Elimina un elemento de un array, parametros:(cual se elimina, cuantos se eliminan a partir de ahi)
}

var stringPeliculas = peliculas.join(', ');// Convierte el array en un string, param:(metodo de separacion)

console.log(peliculas);
document.write(stringPeliculas);



