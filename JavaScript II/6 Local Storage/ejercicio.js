'use strict'

window.addEventListener('load', () => {

    // Ejercicio - Local storgae

    //Formulario que permite añadir peliculas

    var formulario = document.querySelector('#form_pelis');

    formulario.addEventListener('submit', function (event) {// guarda el valor del input en el Local Storage

        event.preventDefault();

        var titulo = document.querySelector('#nombre_pelicula').value;

        if (titulo.length > 0) {

            localStorage.setItem(titulo, titulo);

            cargarLista();

        }

    });

    //------------Borrar peliculas

    var formulariob = document.querySelector('#formBorrar_pelis');

    formulariob.addEventListener('submit', function (event) {// guarda el valor del input en el Local Storage

        event.preventDefault();

        var titulo = document.querySelector('#borrar_pelicula').value;

        if (titulo.length > 0) {

            localStorage.removeItem(titulo);

            cargarLista();

        }

    });

    //-----Mostrar las peliculas en document

    function cargarLista() {

        let ol = document.querySelector('#lista');

    ol.innerHTML = "";

        for (let key in localStorage) {

            if (typeof localStorage[key] == 'string') {

                let li = document.createElement('li');

                li.append(localStorage[key]);

                ol.append(li);

            }

        }

    }

   cargarLista();

});