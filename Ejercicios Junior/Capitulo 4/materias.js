'use strict'

class Materia{
    constructor(materia, profesor, alumnos){
        this.materia = materia;
        this.profesor = profesor;
        this.alumnos = alumnos;
        this.info = `*En la Materia de <b>${materia}</b> hay ${alumnos.length} alumnos, ellos son:<br>${alumnos.join(', ')}.<br>Su profesor es <b>${profesor}.</b><br><br>`;
    }
}

var español = new Materia('Español', 'Saulo',['Andres','Carlos', 'Adriana', 'Ismael', 'Cofla']);

var naturales = new Materia('Naturales', 'Luis',['Andres','Carlos', 'Adriana', 'Ismael', 'Cofla']);

var sociales = new Materia('Sociales', 'Edgardo',['Andres','Carlos', 'Adriana', 'Ismael', 'Ernesto', 'Francia']);

var matematicas = new Materia('Matemáticas', 'Francisco',['Andres','Carlos', 'Adriana', 'Ismael', 'Ernesto', 'Francia', 'Cofla', 'Martin']);

document.write(español.info);
document.write(naturales.info);
document.write(sociales.info);
document.write(matematicas.info);


var materias = [español, naturales, sociales, matematicas]

var numeroMat = 0;
var incluido = [];
var nombre = 'Andres';

for (let index = 0; index < materias.length; index++) {
    
      function cuales(param) {    
            if ((materias[index].alumnos.includes(param)) == true) {
                
                numeroMat++; 
                incluido += '<br>' + materias[index].materia + ' con el Profe ' + materias[index].profesor + '. ';
                        
            } 
    }cuales(nombre);   
}

document.write(`${nombre} esta inscrito en ${numeroMat} materias: ${incluido}`);