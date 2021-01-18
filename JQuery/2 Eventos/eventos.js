'use strict'


$(document).ready (function () {

//Mouseover y mouseout

    var caja = $('#caja');

        caja.mouseover(function () {  // Al entrar el mouse
            $(this).css('background', 'red');
        })

        caja.mouseout(function () { // Al salir el mouse
            $(this).css('background', 'green');
        })

// Hover

    function rojo() {
        $(this).css('background', 'red');
    }

    function chocolate() {
        $(this).css('background', 'chocolate');
    }

    var caja2 = $('#caja2');

        caja2.hover(rojo, chocolate);


//Click y doble Click

    var caja3 = $('#caja3');

    caja3.click(function () {  
        $(this).css('background', 'brown');
    });

    caja3.dblclick(function () {  
        $(this).css('background', 'blue');
    });

// Focus y Blur

    var nombre = $('#nombre');

    nombre.focus(function () {
        $(this).css('border', '3px solid blue')
    });

    nombre.blur(function () {
        $(this).css('border', '1px solid blue')
        

        $('#area').text($(this).val()); //Mostrar el contenido del input en el text-area
        $('#area').css('display', 'block')//Mostrar el text-area
                    .css('margin', 'auto')//centrar
    });

// MouseDown y MouseUp.

    var caja5 = $('#caja5');

    caja5.mousedown(function () {
        $(this).css('width', '100px')
                .css('height', '100px')
    })

    caja5.mouseup(function () {
        $(this).css('width', '150px')
                .css('height', '150px')
    })

// MouseMove

    var caja6 = $('#caja6');

    $('#caja7').mousemove(function () {
        $('#area2').text('Posc. X: '+ event.clientX + '\nPosc en Y: '+ event.clientX)
        caja6.css('left', event.clientX)
            .css('top', event.clientY)
    })


    
});