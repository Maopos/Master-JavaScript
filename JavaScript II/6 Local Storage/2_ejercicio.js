'use strict'

// Ejercicio - Local storgae

//Formulario que permite añadir peliculas

var formulario = document.querySelector('#form_pelis');

formulario.addEventListener('submit', function() {// guarda el valor del input en el Local Storage
    var titulo = document.querySelector('#nombre_pelicula').value;
    if (titulo.length > 0) {
        localStorage.setItem(titulo, titulo);
    }
    


//-----Mostrar las peliculas en document

var ol = document.querySelector('#lista');

for (var key in localStorage) {
    
    if (typeof localStorage[key] == 'string') {
        var li = document.createElement('li');
        li.append(localStorage[key]);
        ol.append(li);      
        
    }  
}
});
//------------Borrar peliculas

var formulariob = document.querySelector('#formBorrar_pelis');

formulariob.addEventListener('submit', function() {// guarda el valor del input en el Local Storage
    var titulo = document.querySelector('#borrar_pelicula').value;
    if (titulo.length > 0) {
        localStorage.removeItem(titulo);        
    }
    
});

