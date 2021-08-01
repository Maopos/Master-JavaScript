'use strict'

$(document).ready(function () {
    
    //Load de la pagina https://reqres.in/

    $('#datos1').load('https://reqres.in/api/users?page=2');

    //-------------Get--------------------

    $.get('https://reqres.in/api/users?', {page: 2}, function (response) {
        response.data.forEach((element, index) => {
            $('#datos2').append("<p>" + element.first_name + ' ' + element.last_name +"</p>");
        });
        
    })

    //----------------Post------------------

    $('#formulario').submit(function (e) {
        e.preventDefault();

        var usuario = {
            name: $('input[name="Name"]').val(),
            web: $('input[name="Web"]').val()
    };
    console.log(usuario);
    

    $.post($(this).attr('action'), usuario, function (response) {
        console.log(response);
        
    }).done(function () {
        alert('Usuario agregado:' + ' ' + usuario.name + '.')
    });

    //Metodo ajax

   $.ajax({
       type: "POST",
       url: $(this).attr('action'),
       data: usuario,
       dataType: "json",
       success: function (response) {
           console.log('Enviando usuario');           
       },
       error: function (response) {
           console.log('Algo salió mal.');
        },
        timeOut:2000
   });

        return false;

    });
    
});