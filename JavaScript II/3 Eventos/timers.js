'use strict'

window.addEventListener('load', () =>{

//setInterval-ejecuta una accion cada intervalo de tiempo
//setTimeout- se ejecuta una sola vez

function intervalo() {
    

    var tiempo = setInterval(() => {//Cambia un texto de tamaño cada cierto tiempo

        var encabezado = document.querySelector('h1');
        if (encabezado.style.fontSize == '50px') {
            encabezado.style.fontSize = '30px';
        }
        else{
            encabezado.style.fontSize = '50px';
        }    
        
        console.log('han pasado 3 segundos');
        
    }, 500);
    return tiempo;
}

var tiempo = intervalo();

//---------------------------------------------------

var botonStop = document.querySelector('#stop');

botonStop.addEventListener('click', function () {
    alert('Has parado el intervalo del H1!');
    clearInterval(tiempo);//clear intervala detiene el intervalo
})

var botonStart = document.querySelector('#start');

botonStart.addEventListener('click', function () {
    alert('Has INICIADO el intervalo del H1 NUEVAMENTE!');
    intervalo();
})


})