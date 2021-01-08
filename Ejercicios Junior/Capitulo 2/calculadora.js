'use strict'

var num1 = parseInt(prompt('Primer Numero'));
var num2 = parseInt(prompt('Segundo Numero'));

const sumar = (num1, num2) =>{
    return parseInt(num1) + parseInt(num2)
}

const restar = (num1, num2) =>{
    return parseInt(num1) - parseInt(num2)
}

const multiplicar = (num1, num2) =>{
    return parseInt(num1) * parseInt(num2)
}

const dividir = (num1, num2) =>{
    return parseInt(num1) / parseInt(num2)
}

var operacion = prompt(`Que operacion quieres realizar? 
suma: 1, resta: 2, multiplcacion: 3, division: 4.`);

while (operacion > 4) {
     operacion = prompt(`Debe ser un numero entre 1 y 4, 
suma: 1, resta: 2, multiplcacion: 3, division: 4.`);

}


if (operacion == 1) {
    alert('El resultado de la suma es: ' + sumar(num1, num2));
}
else if (operacion == 2) {
    alert('El resultado de la resta es: ' + restar(num1, num2));
}
else if (operacion == 3) {
    alert('El resultado de la multiplicacion es: ' + multiplicar(num1, num2));
}
else {
    alert('El resultado de la division es: ' + dividir(num1, num2));
}