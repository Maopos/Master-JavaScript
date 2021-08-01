
// $ == JQuery

$(document).ready(function () { 

    console.log("JQuery listo");//Comprobar si esta todo cargado

    //selector ID

    $("#rojo").css("color", "red")
              .css("background", "lightgrey")
              .css("border", "2px solid");
    

    $("#verde").css("color", "green")
               .css("background", "lightgrey")
               .css("border", "2px solid");
   

    $("#azul").css("color", "blue")
              .css("background", "lightgrey")
              .css("border", "2px solid");   
              
    //selector clases

    $(".parrafo").css('padding', '30px');

    //selector etiqueta

    $('p').click(function () {             
        $(this).addClass('.parrafo');
    })

    $('p').css('cursor', 'pointer');

    //selector de atributos

    $('[title="google"]').css('background', 'lightgreen')
                         .css('padding', '10px')
                         .css('margin', '10px');

    $('[title="facebook"]').css('background', 'lightblue')
                         .css('padding', '10px')
                         .css('margin', '10px');

    $('[title="instagram"]').css('background', 'blue')
                         .css('padding', '10px')
                         .css('margin', '10px')
                         .css('color', 'white');
                         
    //otros

    $('p, a').addClass('margen');

    var buscar = $('.caja').parent().find('.resaltado');//buscar clases etiquetas id
    console.log(buscar);
    
    
})