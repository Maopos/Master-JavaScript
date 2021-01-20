'use strict'

$(document).ready(function () {
    
    $('#animar').click(function () {
        $('#caja1').animate({
                            marginLeft: '450px',
                            background: 'blue',
                            fontSize: '40px',
                            height: '200px',
                            width: '200px',
                            

                            }, 'slow')
                    .animate({
                            borderRadius: '50%'


                            }, 'fast')

                    .animate({
                        marginLeft: '0',
                            background: 'green',
                            fontSize: '20px',
                            height: '100px',
                            width: '100px'
                    }, 'fast')
    })

});