'use strict'


//Crear clase

class animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}.`;
    }
    //Metodo
    verInfo(){
        document.write(this.informacion + '<br>');        
    }

    ladrar(){
        if (this.especie == 'Perro') {
            document.write('El ' + this.especie + ' hace ¡Waw!<br>');
        }
        else {
            document.write('No puede ladrar porque es un ' + this.especie + '<br>');
            
        }
    }
}

//instanciar

let perro = new animal('Perro', 5, 'Marron');
let gato = new animal('Gato', 3, 'Blanco');
let pajaro = new animal('Pajaro', 1, 'Negro');

// document.write(perro.informacion + '<br>');
// document.write(gato.informacion + '<br>');
// document.write(pajaro.informacion + '<br>');

perro.verInfo();
gato.verInfo();
pajaro.verInfo();
console.log(perro);

perro.ladrar();
gato.ladrar();
pajaro.ladrar();

