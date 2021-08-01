'use strict'

var nombreAlumno = prompt('Cual es tu nombre?.')
var inscripcion = parseInt(prompt('En que materia te quieres inscribir?\nEspañol: 1.\nNaturales: 2.\nSociales: 3.\nMatemáticas: 4', 0));


class Materia{
    constructor(materia, profesor, alumnos){
        this.materia = materia;
        this.profesor = profesor;
        this.alumnos = alumnos;
        this.info = `*En la Materia de <b>${materia}</b> hay ${alumnos.length} alumnos, ellos son:<br>${alumnos.join(', ')}.<br>Su profesor es <b>${profesor}.</b><br><br>`;
    }
}

var español = new Materia('Español', 'Saulo',['Andres','Carlos', 'Adriana', 'Ismael', 'Maritza', 'Emanuel', 'Ernesto']);

var naturales = new Materia('Naturales', 'Luis',['Andres','Carlos', 'Adriana', 'Ismael', 'Maritza', 'Emanuel', 'Ernesto']);

var sociales = new Materia('Sociales', 'Edgardo',['Andres','Carlos', 'Adriana', 'Ismael', 'Ernesto', 'Francia', 'Emanuel', 'Ernesto']);

var matematicas = new Materia('Matemáticas', 'Francisco',['Andres','Carlos', 'Adriana', 'Ismael', 'Ernesto', 'Francia', 'Maritza', 'Martin', 'Emanuel', 'Ernesto']);

while (inscripcion <= 0 || inscripcion > 4) {
    inscripcion = parseInt(prompt('En que materia te quieres inscribir?\nEspañol: 1.\nNaturales: 2.\nSociales: 3.\nMatemáticas: 4'));
}

if (inscripcion === 1) {

    if (español.alumnos.length >= 10) {
        document.write(`Ya no hay cupo en la materia de <b>${español.materia}</b>.`)
    }
    else {
        español.alumnos.push(nombreAlumno);
        var esp = español.alumnos.join(', ')
        document.write(`Felicidades quedas inscrito en la materia de <b>${español.materia}</b>,<br>Se han escrito <b>${español.alumnos.length} Alumnos.</b><br>Los alumnos inscritos son: ${esp}.`);        
    }
    
}
else if (inscripcion === 2) {

    if (naturales.alumnos.length >= 10) {
        document.write(`Ya no hay cupo en la materia de <b>${naturales.materia}</b>.`)
    }
    else {
        naturales.alumnos.push(nombreAlumno);
        var nat = naturales.alumnos.join(', ')
        document.write(`Felicidades quedas inscrito en la materia de <b>${naturales.materia}</b>,<br>Se han escrito <b>${naturales.alumnos.length} Alumnos.</b><br>Los alumnos inscritos son: ${nat}.`);        
    }
    
}

else if (inscripcion === 3) {

    if (sociales.alumnos.length >= 10) {
        document.write(`Ya no hay cupo en la materia de <b>${sociales.materia}</b>.`)
    }
    else {
        sociales.alumnos.push(nombreAlumno);
        var soc = sociales.alumnos.join(', ')
        document.write(`Felicidades quedas inscrito en la materia de <b>${sociales.materia}</b>,<br>Se han escrito <b>${sociales.alumnos.length} Alumnos.</b><br>Los alumnos inscritos son: ${soc}.`);        
    }
    
}

else if (inscripcion === 4) {

    if (matematicas.alumnos.length >= 10) {
        document.write(`Ya no hay cupo en la materia de <b>${matematicas.materia}</b>.`)
    }
    else {
        matematicas.alumnos.push(nombreAlumno);
        var mat = matematicas.alumnos.join(', ')
        document.write(`Felicidades quedas inscrito en la materia de <b>${matematicas.materia}</b>,<br>Se han escrito <b>${matematicas.alumnos.length} Alumnos.</b><br>Los alumnos inscritos son: ${mat}`);        
    }
    
}