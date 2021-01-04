'use strict'

document.write('<h1>Arrays</h1>');

let computador = {
    nombre: 'maopos',
    procesador: 'intel core i7',
    memoria: '8gb',
    disco: '1tb'
}

// let nombre = computador['nombre'];
// let procesador = computador['procesador'];
// let memoria = computador['memoria'];
// let disco = computador['disco'];

let frase = `Sum is equal: <b>${computador.nombre}</b>, <br>
            Tiene un procesador: <b>${computador.procesador}</b>, <br>
            Su memoria es de: <b>${computador.memoria}</b>, <br>
            Con capacidad de: <b>${computador.disco}</b>.`

document.write(frase);