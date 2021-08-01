'use stricts'

//Mostrar todos los numeros divisores de un numero introducido por el usuario.


var numero = parseInt(prompt('Introduce un número.', 0))


for (let index = 1; index <= numero; index++) {

    if ((numero % index) == 0) {
        document.write(index + '<br>');
    }
    
}