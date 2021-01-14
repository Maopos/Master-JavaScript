'use strict'

var num1 = parseInt(prompt('Primer Numero', 0));
var num2 = parseInt(prompt('Segundo Numero', 0));

class calculator {
    constructor(){}
        sumar(num1, num2){
            return parseInt(num1) + parseInt(num2);
        }

        restar(num1, num2) {
            return parseInt(num1) - parseInt(num2);
        }

        multiplicar(num1, num2) {
            return parseInt(num1) * parseInt(num2);
        }

        dividir(num1, num2) {
            return parseInt(num1) / parseInt(num2);
        }

        potenciar(num1, num2){
            return Math.pow((parseInt(num1)), (parseInt(num2)));
        }

        raizCuadrada(num1){
            return Math.sqrt(parseInt(num1));
        }

        raizCuadrada2(num2){
            return Math.sqrt(parseInt(num2));
        }

        raizCubica(num1){
            return Math.cbrt(parseInt(num1));
        }

        raizCubica2(num2){
            return Math.cbrt(parseInt(num2));
        }

}

var calculadora = new calculator();


var operacion = prompt(`Que operacion quieres realizar? 
Suma: 1, resta: 2, Multiplcacion: 3, Division: 4, Potencia: 5, Raiz Cuadrada: 6, Raiz Cubica: 7.`);

while (operacion > 7 || operacion < 1) {
     operacion = prompt(`Debe ser un numero entre 1 y 7, 
Suma: 1, Resta: 2, Multiplcacion: 3, Division: 4, Potencia: 5, Raiz Cuadrada: 6, Raiz Cubica: 7.`);

}


if (operacion == 1) {
    alert('El resultado de la suma es: ' + calculadora.sumar(num1, num2));
}
else if (operacion == 2) {
    alert('El resultado de la resta es: ' + calculadora.restar(num1, num2));
}
else if (operacion == 3) {
    alert('El resultado de la multiplicacion es: ' + calculadora.multiplicar(num1, num2));
}
else if(operacion == 4){
    alert('El resultado de la division es: ' + calculadora.dividir(num1, num2));
}

else if(operacion == 5){
    alert('El resultado de elevar el numero ' + num1 + ' a la ' + num2 + 'a es: ' + calculadora.potenciar(num1, num2));
}

else if (operacion == 6) {
    alert('La Raiz cuadrada de: ' + num1 + ' es: ' + calculadora.raizCuadrada(num1) + ' y la de ' + num2 + ' es: ' + calculadora.raizCuadrada2(num2))
}

else if (operacion == 7) {
    alert('La Raiz cubica de: ' + num1 + ' es: ' + calculadora.raizCubica(num1) + ' y la de ' + num2 + ' es: ' + calculadora.raizCubica2(num2))
}