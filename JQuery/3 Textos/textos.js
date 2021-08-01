'use strict'

$(document).ready(function () {

    reload();

        console.log($('a').length);

        $('#button').click(function () { // asignar el evento click al boton
             var link = $('#input1').val();     //Capturar valor del input en var link

             $('#lista').prepend(`<li><a href="${link}"></a></li>`); //Añadir el valor del input m/nte la var link al listado #lista dentro del Attr href dentro de un li. 
             
             //Con append se añade al final con prepend al principio.

             //before añade antes de #lista
             //after añade despues de #lista
            

             $('#input1').val('');// Dejar vacio el input despues de dar click.
             
             reload();
            
        })
            
       


});

function reload() {  
    $('a').each(function () { //Capturar las etiquetas a
                var that = $(this);     //Crear variable para $(this)
                var enlace = that.attr('href'); // Capturar el atributo href de los a

                that.attr('target', '_blank') //abrir los enlaces en pestaña nueva
                that.removeAttr(''); //Remover algun atributo
                that.text(enlace);// Ubicar cada href en cada texto de los a
                
            })
}