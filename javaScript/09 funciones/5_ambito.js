'use strict'

//Ambitos de las variables

var texto = 'Hola mundillo! soy una variable global';
var numero = 12;

function holaMundo(texto){
    
    var dentro = 'Hola estoy dentro de la función';
    console.log(dentro);
    
    
    console.log(texto);
    console.log(numero.toString()); 
       
    
}

holaMundo(texto);

//console.log(dentro); // No se puede acceder porqueesta dentro de la funcion
