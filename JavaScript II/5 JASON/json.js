'use strict'

// JSON - javaScript Object Notation.

var pelicula = {
    titulo: 'Batman',
    año:   2017,
    pais:   'USA'
};

var movies = [
    {titulo: 'Cazador', año: 2015, pais: 'Alemania'},
    pelicula
];

pelicula.titulo = 'Batman vs Superman'//Cambiar algun elemento

var caja_peliculas = document.querySelector('#pelicula');

for (const key in movies) {// Recorre el obj movies para agregar los elementos al documento.
    var p = document.createElement('li');
    p.append(movies[key].titulo + ', ' + movies[key].año + ', ' + movies[key].pais + '.');
    caja_peliculas.append(p);
};