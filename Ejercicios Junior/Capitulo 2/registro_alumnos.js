'use strict'


let cantidad = parseInt(prompt('Cuantos alumnos son?'));
let alumnos = [];



for (let index = 0; index < cantidad; index++) {
    
    alumnos[index] = [prompt('Nombre del alumno' + ' ' + (index + 1) + '.'), 0];

    }       


    const asistencia = (nombre, p) => {
        let presencia = prompt(nombre);

            if (presencia == 'p' || presencia == 'P') {
                alumnos[p][1]++;
            }

    }

        for (let index = 0; index < 5; index++) {

            for (const alumno in alumnos){
                asistencia(alumnos[alumno][0], alumno);
            }
            
        }


for (const alumno in alumnos){
    let resultado = `${alumnos[alumno][0]}:<br>
    __________Asistió: ${alumnos[alumno][1]}<br>
    __________Ausencias: ${5 - alumnos[alumno][1]}<br> `;

    if (5 - alumnos[alumno][1] > 2) {
        resultado += 'Reprobado por inasistencia<br><br>';
    }
    else {
        resultado += 'Aprobo <br><br>';
    }
    document.write(resultado);
    
}
