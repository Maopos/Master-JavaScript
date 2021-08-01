'use strict'

//DOM - Document Object Model




var caja = document.getElementById("miCaja");//Selecciona elementos con un ID

caja.innerHTML = "Yo era una caja roja...."
caja.style.background = "red";
caja.style.color = "white";
caja.style.padding = "20px";

//---------------------------------------

function cambiaColor(color) {
    caja.style.background = color;
}

cambiaColor("green");

//---------------------------------

var parrafo = document.querySelector(".parrafo"); // Otra forma para seleccionar

parrafo.innerHTML = "Soy un parrafo con Clase."
parrafo.style.background = "yellow";
parrafo.style.color = "black"
parrafo.style.padding = "20px"

//--------------------------------------------


var divs = document.getElementsByTagName("div");// Seleccionar objetos por clases

divs[2].innerHTML = "Segundo Div modificado";
divs[2].style.padding = "20px"

for (const valor in divs){

    if (typeof divs[valor].textContent == "string" ) {

        var parrafo1 = document.createElement("h2");//Crear elememntos en el document
        var texto = document.createTextNode(divs[valor].textContent);
        parrafo1.append(texto);
        document.querySelector('#miseccion').append(parrafo1);
    }
}

console.log(divs);

//-----------------------------------------

//Seleccionar con getElementsByClassName por class

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');


for (let index = 0; index < divsRojos.length; index++) {
    
    divsRojos[index].style.background = 'red';
    
}

divsAmarillos[0].style.background = 'yellow';

//Seleccionar con querySelector

var classRojos = document.querySelector('.rojo');


console.log(classRojos);//Solo muestra el primer elemento del array por seleccionar con querySelector
