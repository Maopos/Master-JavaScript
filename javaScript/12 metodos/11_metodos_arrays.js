'use strict'

let nombres = ['pedro', 'Maria', 'Jorge', 'Jennifer', 'Jay'];

// let resultado = nombres.pop();

// console.log(resultado);
// console.log(nombres);



var resultado = nombres.filter( nombre => (nombre.length < 5));

     console.log(resultado);



//----------------metodos Transformadores

//let resultado = nombres.pop();                            - Elimina el ultimo elemento del array. Devuelve el elemento que elimino.
//let resultado = nombres.shift();                          - Elimina el primer elemento del array. Devuelve el elemento que elimino.
//let resultado = nombres.push('Jennifer', 'Verito');       - Agrega elementos al final del array. devuelve el nuevo tamaño del array.
//let resultado = nombres.unshift('Vero', 'Viole');         - Agrega elementos al inicio del array. devuelve el nuevo tamaño del array.
//let resultado = nombres.reverse();                        - Invierte el orden del array.
//let resultado = nombres.sort();                           - Organiza alfabeticamente un array.
//let resultado = nombres.splice(1, 2, 'Carlos', 'Ovidio'); - Elimina 2 elementos desde la posicion 1, agrega a ['Carlos', 'Ovidio'] en las posiciones eliminadas.

//---------------Metodos Accesores

//let resultado = nombres.join(' - ');                      - Convierte el array en un string. El parametro seria el separador.
//let resultado = nombres.slice(0, 3);                      - Devuelve un array con los elementos desde la posicion 0 hasta la 2. El 3 no esta incluido.

//Se pueden utilizar los metodos de Strings - toString(), includes(), indexOf(), lastIndexOf(),  

//---------------Metodos de repetición.

/*var resultado = nombres.filter( nombre => (nombre.length < 5));

     console.log(resultado);
})                                                            - Filtra el array de acuerdo al parametro*/

/*nombres.forEach( nombre => {
     console.log(nombre);
})                                                           - Es un bucle que asigna cada elemento a la variable cada ves que itera.*/