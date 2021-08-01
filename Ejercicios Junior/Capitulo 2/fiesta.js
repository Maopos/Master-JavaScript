'use strict'

let free = false;

function validarCliente(time) {
    let edad = parseInt(prompt('Cual es tu edad?'));

    if (edad >= 18) {
        
        if (time >= 2 && time < 7 && free == false) {

            document.write('Puede entrar. Sos la primera persona despues de las dos<br>');
            free = true
        }
        else { 
            document.write(`Entra pero debes pagar. porque son las ${time}<br>`);
            
        }
}
else {
    document.write('No puede entrar.<br>');
}
    return edad;
}

validarCliente(23);
validarCliente(2);
validarCliente(5);
validarCliente(1);
validarCliente(8);
validarCliente(20);




