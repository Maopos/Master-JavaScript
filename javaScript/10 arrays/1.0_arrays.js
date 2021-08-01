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

let frase = `Mi computador se llama: <b>${computador.nombre}</b>, <br>
            Tiene un procesador: <b>${computador.procesador}</b>, <br>
            Su memoria es de: <b>${computador.memoria}</b>, <br>
            Con capacidad de: <b>${computador.disco}</b>.<br>`

document.write(frase);

//---------------------------------------------------

document.write('<br>');

let array1 = ['Carlos', 'Pedro', 'Maria']
let array2 = ['Andres', 'Juan', array1, 'Joseph']

fornombres:
for (let index in array2) {
    
    if (index == 2) {

        for(let index of array1){
            document.write(index + '<br>');
            
        }

    }else {
        document.write(array2[index] + '<br>');
    }
    
}

