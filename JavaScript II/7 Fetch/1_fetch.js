'use strict'

//Fetch (ajax) y peticiones a servicios / apis rest

var div_usuarios = document.querySelector('#usuarios');

var usuarios = [];

fetch('https://jsonplaceholder.typicode.com/users')//promesa - hace peticion a servicio remoto
    .then(data => data.json())//capturar los datos y convertirlos a json
    .then(data => {
            usuarios = data; //guardamos los datos en var usuarios
            console.log(usuarios);

            //mostrar usuarios en document. --- 1. var div_usuarios arriba

            usuarios.map((user, i) => {
                let nombre = document.createElement('p');

                nombre.innerHTML = (i+1) + '. ' + user.name + '. ';

                div_usuarios.appendChild(nombre);


                //Cargando....
                document.querySelector('.loading').style.display = 'none';
            })
            
    });

