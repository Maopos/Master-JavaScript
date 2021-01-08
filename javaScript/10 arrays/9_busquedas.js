'use strict'

var peliculas = ['Brave hearth', 'La vida es bella', 'Gran Torino', 'Avengers', 'Tom Sawyer'];



var busqueda = peliculas.find(function(pelicula) {//Busqueda en un array
    return pelicula == 'Avengers2';
});

console.log(busqueda);


var busqueda = peliculas.find(pelicula => pelicula == 'Avengers');//Busqueda en un array
    console.log(busqueda);


var busqueda = peliculas.findIndex(pelicula => pelicula == 'Avengers');//Busqueda en un array devuelve la posicion
    console.log(busqueda);

//------------------------------------------------

var precios = [10, 48, 32, 12, 90, 28, 56, 2];

var busqueda = precios.some(precio => precio >= 90);//Busqueda en un array evuelve la posicion
    console.log(busqueda);


