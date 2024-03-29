'use strict'

//Fetch (ajax) y peticiones a servicios / apis rest

var div_usuarios = document.querySelector('#usuarios');
var div_profesor = document.querySelector('#profesor');
var div_usuarioUnico = document.querySelector('#usuarioUnico');



    getUsuarios()
                .then(data => data.json())//capturar los datos y convertirlos a json
                .then(users => {
             
                    listadoUsuarios(users);   //invoca la 3ra funcion de abajo 
                     
                   
                    return getInfo();
                })
                .then(data => {
                   div_profesor.innerHTML = data;
                    return getUsuarioUnico();
                })
                .then(data => data.json())
                .then(user => {
                        mostrarUsuarioUnico(user)
                       
                })
                .catch(error => { //capturar error
                    alert(error + ' algo salió mal.')
                    
                })
                
                

function getUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users');//promesa - hace peticion a servicio remoto
}

function getUsuarioUnico() {
    return fetch('https://jsonplaceholder.typicode.com/photos');//promesa - hace peticion a servicio remoto
}

    function getInfo() {
        var profesor = {
            nombre: 'Victor',
            apellido: 'Robles',
            url: 'https://victorroblesweb.es'
        };
        return new Promise((resolve, reject) => {
            var profe_string = '';
            setTimeout(function () {
                profe_string = JSON.stringify(profesor);

                if (typeof profe_string != 'string' || profe_string == '') {
                    return reject('Error');
                }
                else{
                    return resolve(profe_string);
                }

            }, 3000);
        });
    }


    //mostrar usuarios en document. --- 1. var div_usuarios arriba

    function listadoUsuarios(usuarios) {
        usuarios.map((user, i) => {
            let nombre = document.createElement('p');

            nombre.innerHTML = (i+1) + '. ' + user.name + '. ' ;

            div_usuarios.appendChild(nombre);


            //Cargando....
            document.querySelector('.loading').style.display = 'none';
        })
    }

    function mostrarUsuarioUnico(user) {

        console.log(user);
        
       
            let nombre = document.createElement('p');
            let image = document.createElement('img');//mostrar una imagen

            nombre.innerHTML = user[0].id + '. ' + user[0].title + '.';
            image.src = user[0].url;
            image.style.width = '100px'; //mostrar una imagen

            div_usuarioUnico.appendChild(nombre);
            div_usuarioUnico.appendChild(image);//mostrar una imagen


            //Cargando....
            document.querySelector('.loading2').style.display = 'none';
        
    }