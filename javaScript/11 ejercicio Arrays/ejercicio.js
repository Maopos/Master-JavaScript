'use strict'

// 1. Programa que pida 6 numeros y los meta en un array
// 2. Debe mostrar los elementos del array en la pagina y en la consola
// 3. Mostrar Ordenar el array 
// 4. Mostrar el array orden inverso
// 5. Mostrar cuantos elementos tiene el array
// 6. Buscar un elemento introducido por el usuario



var numeros = new Array(6); // Declaramos un nuevo array con 6 posiciones



for (let index = 0; index < numeros.length; index++) {
    
    numeros[index] = parseInt(prompt('Introduce un número.', 0)); //pedimos 6 numeros y los introducimos al array
}  

//------------------------------------------------

//Busqueda en un array devuelve la posicion

var busqueda =  parseInt(prompt('Cual elemento desea buscar?'));

var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion < 0) {
    document.write(`El Numero ${busqueda} no fue encontrado`);
    
}
else {
    document.write(`El numero ${busqueda} se encuentra en la posición ${posicion}<br>`);
}


//------------------------------------------------


document.write(`<h1>Los elementos del Array son:</h1>`);

numeros.forEach((element, index) => {     //Mostrar el array
    document.write(`<b>${element}</b><br><br>`);
    
});


console.log(`Los elementos del Array son: ${numeros}`);

document.write(`El array ordenado sería: ${numeros.sort(function(a, b) {return a - b})}<br>`);//ordena los numeros correctamente
document.write(`El array en orden inverso sería: ${numeros.reverse()}<br>`);
document.write(`El array tiene ${numeros.length} elementos.<br>`);