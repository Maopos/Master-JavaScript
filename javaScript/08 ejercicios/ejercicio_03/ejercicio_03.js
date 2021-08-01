'use strict'

// mostrar los numeros entre dos numeros que introduzca el usuario.

var num1 = parseInt(prompt('Introduce un primer numero', 0))
var num2 = parseInt(prompt('Introduce un segundo numero', 0))

if (num1 < num2) {

    document.write('<h2>La secuencia numérica entre ' + num1 + ' y ' + num2 + ' es:</h2><br>')
for (let index = num1; index < num2; index++) {
    document.write(index + ', ')      
}
document.write(num2 + '.')

}
else if (num1 == num2) {
    document.write('<h2>No hay números entre ellos.</h2>')
}

else {
    document.write('<h2>La secuencia numérica entre ' + num2 + ' y ' + num1 + ' es:</h2><br>')
    for (let index = num2; index < num1; index++) {
        document.write(index + ', ')        
    }
    document.write(num1 + '.')
    }