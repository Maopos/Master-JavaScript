'use strict'

$(document).ready(function () {
    
    $('#box1').draggable();

    $('#box2').resizable();

    $('#box3').selectable();//ol .ui-selecting {background: chocolate;}
                            //ol .ui-selected {background: coral;}
                            //Ingresar esto en css.

    $('#box5').sortable();


    $('#box4').draggable()
    $('#box6').droppable({
        drop: function( event, ui ) {
          $( this )
            .addClass( "ui-state-highlight" )
            .find( "p" )
              .html( "Dropped!" );
        }
      });

      //Efectos
      $('#mostrar').click(function () {
          $('#box7').toggle('shake', 'slow')//fade, explode, blind, slide, drop, fall, fold, puff, scale, shake
      });
    
});