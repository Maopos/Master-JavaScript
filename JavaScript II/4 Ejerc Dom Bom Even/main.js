'use strict'

// Ejercicio
// 1. Formulario campos: Nombre, Apellido, Edad
// 2. Crear boton con evento Submit
// 3. Mostrar los datos en pantalla
// 4. Validar los datos con JS

window.addEventListener('load', function () {
    console.log('DOM Cargado!!');

    var formulario = document.querySelector('#formulario');
    var resultado = document.querySelector('.resultado');

    resultado.style.display = 'none'; //oculta el recuadro .resultado    
    

    formulario.addEventListener('submit', function() {
            console.log('Evento submit!!');

        var nombre = document.querySelector('#nombre').value;
        var apellido = document.querySelector('#apellido').value;
        var edad = document.querySelector('#edad').value;

        //validar datos

        if (nombre.trim() == null || nombre.trim() == 0 || !isNaN(nombre)) {
            alert('Escribe tu nombre correctamente, no puede estar vacio ni ser un número.');
            return false;
        }

        if (apellido.trim() == null || apellido.trim() == 0 || !isNaN(apellido)) {
            alert('Escribe tu apellido correctamente, no puede estar vacio ni ser un número.');
            return false;
        }

        if (edad.trim() == 0 || edad.trim <= 0 || isNaN(edad) || edad > 110) {
            alert('Escribe tu edad correctamente, no puede estar vacio, mi ser mayor a 110 años')
            return false;
        }
        //---------------------------
        resultado.style.display = 'block';//Muestra el recuadro .resultado

        //seleccionamos los parrafos con su span donde vamos a meter los datos
        var dato_nombre = document.querySelector('#dato_nombre span');
        var dato_apellido = document.querySelector('#dato_apellido span');
        var dato_edad = document.querySelector('#dato_edad span');

        //Meter los datos y mostrarlos
        dato_nombre.innerHTML = ' ' + nombre;
        dato_apellido.innerHTML = ' ' + apellido;
        dato_edad.innerHTML = ' ' + edad + ' Años.';
        
    })    
    
})