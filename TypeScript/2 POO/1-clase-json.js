'use strict'


var bicicleta = {
    marca: 'GW',
    color: 'Negro',
    frenos: 'Disco',
    velocidad: '60km/h',
    cambiarColor: function (color2) {
        this.color = color2;
    }
};

document.write(bicicleta.marca);
bicicleta.cambiarColor('Blanco');
console.log(bicicleta);



   





