$(document).ready(function(){
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $('#m-menu').toggleClass('active')
    });
    $('#vintage-hover').hover(function(){
        $('.vintage-hover').addClass('hover');
        });
    $('.vintage-hover').mouseleave(function () {
        $('.vintage-hover').removeClass('hover')
    });
    $('#branding-hover').hover(function(){
        $('.branding-hover').addClass('hover');
    });
    $('.branding-hover').mouseleave(function () {
        $('.branding-hover').removeClass('hover')
    });
});










