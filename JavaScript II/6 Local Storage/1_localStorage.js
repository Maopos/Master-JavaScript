'use strict'

// Local Storage

// Comprobar disponibilidad del Local Storage.
if (typeof(Storage) !== 'undefined') {
    console.log('Local Storage disponible');    
}
else {
    console.log('Local Storage incompatible');
}

// Guardar datos en el Local Storage

localStorage.setItem('Titulo', 'Hola');



// Recuperar elemento y llevarlo al documento

console.log(localStorage.getItem('Titulo'));

document.querySelector('#dato').innerHTML = localStorage.getItem('Titulo');


// Guardar Objetos

var usuario = {
    nombre: 'Mauricio Posada',
    email: 'mauricioposadamurillo@gmail.com',
    web: 'maoposites.com'
}

localStorage.setItem('Usuario', JSON.stringify(usuario));// Convierte el objeto usuario a un string.

// Recuperar el Objeto y llevarlo al documento

var userJs = JSON.parse(localStorage.getItem('Usuario'));

document.querySelector('#usuario').append(userJs.nombre + ', ' + userJs.web + '.');

// Borrar Local Storage

localStorage.removeItem('Usuario'); //Borra un solo dato

localStorage.clear(); // Borra todos

