'use strict'

// Eventos

//Load
window.addEventListener('load', () => { //Habilita la opcion de cargar el script en la parte del HEAD y no necesariamente al final del BODY


            //Mouse

        var boton = document.querySelector('#boton');//capturar el boton




        function cambiarColor() {

            var bg = boton.style.background;

            if(bg == 'green'){
                boton.style.background = 'red';        
            }
            else {
                boton.style.background = 'green';
            }
            boton.style.padding = '10px';
            boton.style.border = '1px solid #ccc';    
        }

        //Click
        boton.addEventListener('click', function () {
            cambiarColor();
        });

        //Mouseover

        boton.addEventListener('mouseover', function () {//Sucede al estar sobre el boton
            boton.style.background = '#ccc';
        })

        //Mouseout

        boton.addEventListener('mouseout', function () { //Sucede al salir del boton
            boton.style.background = '#fff';
        })

        //Focus
        var input = document.querySelector('#campo_nombre');//Al entrar al input
        input.addEventListener('focus', function () { 
            console.log('Estas dentro del input.');
        })
            
        //Blur
        input.addEventListener('blur', function () { //Al salir del input
            console.log('Saliste del input.');
        })

        //Keydown
        input.addEventListener('keydown', function (event) { //Al escribir
            console.log('Se esta pulsando una tecla.', String.fromCharCode(event.keyCode));//Muestra lo que se esta escribiendo
        })


        //Keypress
        input.addEventListener('keypress', function (event) { 
            console.log('Muestra la tecla presionada.', String.fromCharCode(event.keyCode));//Muestra lo que se esta escribiendo
        })


        //Keyup
        input.addEventListener('keypress', function (event) { 
            console.log('Muestra la tecla soltada.', String.fromCharCode(event.keyCode));//Muestra lo que se esta escribiendo
        })

})
