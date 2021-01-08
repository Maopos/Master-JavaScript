'use strict'

// Crear clase

class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Hola soy un ${this.especie} tengo ${this.edad} años y soy de color ${this.color}.`
    }
    //Metodo
    verInfo(){
        document.write(this.info + '<br>');        
    }
    
}

class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie, edad, color)
        this.raza = raza;
        this.info = `Hola soy un ${this.especie} tengo ${this.edad} años y soy de color ${this.color} de raza ${this.raza}.`
    }
    ladrar(){
        alert('¡WAW!')
    }
    
}

// Instanciar

let canino = new Perro('Perro', 5, 'Marrón', 'Labrador');
let gato = new Animal('Gato', 3, 'Blanco');
let pajaro = new Animal('Pajaro', 1, 'Negro');

canino.verInfo();
gato.verInfo();