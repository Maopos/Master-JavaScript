'use strict'

var peliculas = ['Brave hearth', 'La vida es bella', 'Gran Torino', 'Avengers', 'Tom Sawyer'];

for (const key in peliculas) { //Devuelve los indices del array
    console.log(peliculas[key]);
    
}

for (const iterator of peliculas) {//Devuelve una lista con los elementos del array
    console.log(iterator);
    
}