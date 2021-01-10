'use strict'

// BOM - Browser Object Model


function getBom() {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(screen.width);
    console.log(window.location);
    
}

function redirect(url) {
    window.location.href = url
}

function abrirVentana(url) {
    window.open(url,'', 'width=200','height=200');
}

getBom();
//redirect('https://google.com'); //redirije a otro sitio eje en la consola

//abrirVentana('https://google.com');//abre otra ventana eje en la consola


