
$(document).ready(function () {
    $('#modoOscuro').click(function () {
        $('body').toggleClass('dark-mode');
        $('h5').toggleClass('dark-mode');
        $(this).toggleClass('active');
        $('#skills').toggleClass('.habilidades-oscuro');
        $('.nombre').toggleClass('form-dark');
        $('.email').toggleClass('form-dark');
        $('.mensaje').toggleClass('form-dark');
    });
    $('#navegacion').scroll( function(){
        $('#navegacion').toggleClass('fixed-top');
    });
    $('#skills').mouseover(function () {
        $('.front').animate({
            width: '80%'
        }, 1000);
        $('.bootstrap').animate({
            width: '80%'
        }, 1000);
        $('.figma').animate({
            width: '80%'
        }, 1000);
        $('.jq').animate({
            width: '60%'
        }, 1000);
        $('.php').animate({
            width: '60%'
        }, 1000);
        $('.team').animate({
            width: '80%'
        }, 1000);
    });

    $('#subir').click(function () {
        $('html').animate({
            scrollTop: '0'
        });
    });
    
});