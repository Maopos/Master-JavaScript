'use strict'

//Funciones

function calculadora(){
    return "Hola mundillo<br>";
}

document.write(calculadora());

//-------------------------------------------------

function calculadora2 (params) {
    document.write('Hola soy la calculadora<br><br>');
}

calculadora2();

//-------Parametros


function operaciones(num1, num2) {
    document.write('Suma: ' + (num1+num2) + '<br>');
    document.write('Resta: ' + (num1-num2) + '<br>');
    document.write('Multiplicación: ' + (num1*num2) + '<br>');
    document.write('División: ' + (num1/num2) + '<br><br>');
}

operaciones(39, 48);
operaciones(10, 420);
operaciones(346, 1048);

for (let index = 1; index <= 2; index++) {
    document.write(index + ' y 5' + '<br>');
    operaciones(index, 5);    
}

//------------------------ Parametros opcionales

function nombre(primer, apellido, mostrar = false) {

    if (mostrar == false) {
        document.write(mostrar+'<br>');
    }
    else {
        document.write(primer+apellido+'<br>');
    }    
}

nombre('Mauricio ', 'Posada');
nombre('Libardo ', 'Posada', true);
nombre('Daniel ', 'Posada', true);

//----------------------------------------

document.write('<br>');


function consola(num1,num2) {
    console.log('Suma: ' + (num1+num2));
    console.log('Resta: ' + (num1-num2));
    console.log('Multiplicación: ' + (num1*num2));
    console.log('División: ' + (num1/num2));
}
 
function pantalla(num1,num2) {
    document.write('Suma: ' + (num1+num2) + '<br>');
    document.write('Resta: ' + (num1-num2) + '<br>');
    document.write('Multiplicación: ' + (num1*num2) + '<br>');
    document.write('División: ' + (num1/num2) + '<br><br>');
}

function operacion(num1, num2, mostrar = true) {
    if (mostrar == true) {
        consola(num1, num2);
    }
    else {
        pantalla(num1, num2);
    }
    return true;
}

operacion(1, 2, true);
operacion(3, 4, false)
        
        
