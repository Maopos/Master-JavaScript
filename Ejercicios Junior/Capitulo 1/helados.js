'use strict'

var dineroAndres = prompt("Cuanto dinero tienes Andrés?");
var dineroCarlos = prompt("Cuanto dinero tienes Carlos?");
var dineroMarcela = prompt("Cuanto dinero tienes Marcela?");

dineroAndres = parseInt(dineroAndres);

if (dineroAndres >= 600 && dineroAndres < 1000) {
    alert("Andrés, Helado de agua. y te sobran: " + (dineroAndres - 600));
}

else if (dineroAndres >= 1000 && dineroAndres < 1600) {
    alert("Andrés, Helado de crema. y te sobran: " + (dineroAndres - 1000));
}

else if (dineroAndres >= 1600 && dineroAndres < 1700) {
    alert("Andrés, Heladix. y te sobran: " + (dineroAndres - 1600));
}

else if (dineroAndres >= 1700 && dineroAndres < 1800) {
    alert("Andrés, Heladovich. y te sobran: " + (dineroAndres - 1700));
}

else if (dineroAndres >= 1800 && dineroAndres < 2900) {
    alert("Andrés, Helardo. y te sobran: " + (dineroAndres - 1800));
}

else if (dineroAndres >= 2900) {
    alert("Andrés, Helado con confites o pote de 1/4 Kg. y te sobran: " + (dineroAndres - 2900));
}

else{
    alert("Andrés, No puedes permitirte nada.");
}

//-----------------------------------------------------------------

if (dineroCarlos >= 600 && dineroCarlos < 1000) {
    alert("Carlos, Helado de agua.");
}

else if (dineroCarlos >= 1000 && dineroCarlos < 1600) {
    alert("Carlos, Helado de crema.");
}

else if (dineroCarlos >= 1600 && dineroCarlos < 1700) {
    alert("Carlos, Heladix.");
}

else if (dineroCarlos >= 1700 && dineroCarlos < 1800) {
    alert("Carlos, Heladovich.");
}

else if (dineroCarlos >= 1800 && dineroCarlos < 2900) {
    alert("Carlos, Helardo.");
}

else if (dineroCarlos >= 2900) {
    alert("Carlos, Helado con confites o pote de 1/4 Kg.");
}

else{
    alert("Carlos, No puedes permitirte nada.");
}

//---------------------------------------------------------------

if (dineroMarcela >= 600 && dineroMarcela < 1000) {
    alert("Marcela, Helado de agua.");
}

else if (dineroMarcela >= 1000 && dineroMarcela < 1600) {
    alert("Carlos, Helado de crema.");
}

else if (dineroMarcela >= 1600 && dineroMarcela < 1700) {
    alert("Marcela, Heladix.");
}

else if (dineroMarcela >= 1700 && dineroMarcela < 1800) {
    alert("Marcela, Heladovich.");
}

else if (dineroMarcela >= 1800 && dineroMarcela < 2900) {
    alert("Marcela, Helardo.");
}

else if (dineroMarcela >= 2900) {
    alert("Marcela, Helado con confites o pote de 1/4 Kg.");
}

else{
    alert("Marcela, No puedes permitirte nada.");
}

