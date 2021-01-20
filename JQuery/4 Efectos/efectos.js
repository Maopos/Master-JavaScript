'use strict'

$(document).ready(function () {
    
    $('#show').hide();

    $('#show').click(function () {
        $('#caja1').show('slow'); //fadeIn mostrar con fundido, fadeOut ocultar
        $('#caja2').fadeIn('slow');
        $('#caja3').fadeTo('slow', 1);//Opacidad 1
        $('#caja4').fadeToggle('slow');
        $(this).hide();
        $('#hide').show();
    })

    $('#hide').click(function () {
        $('#caja1').hide('slow');// Normal, medium, slow
        $('#caja2').fadeOut('slow');
        $('#caja3').fadeTo('slow', 0.3);//opacidad 0.3
        $('#caja4').slideToggle('slow');
        $(this).hide();
        $('#show').show();

    })

    //Tambien esta slideUp ocultar y slideDown mostrar.

   
});