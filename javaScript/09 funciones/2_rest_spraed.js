'use strict'

// Parametros rest y spread

function listadoFrutas(fruta1, fruta2, ...todas) {
    console.log('Fruta 1: ' + fruta1);
    console.log('Fruta 2: ' + fruta2);
    console.log(todas);
}

//listadoFrutas('Naranja', 'Manzana', 'Sandia', 'Pera', 'Melon', 'Coco');

var frutas = ['Banano', 'Mora', 'Fresa'];
listadoFrutas(...frutas, 'Manzana', 'Sandia', 'Pera', 'Melon', 'Coco');