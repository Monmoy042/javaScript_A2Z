$(document).ready(function () {
    // alert(1);
    // document.write("Hello World!");
    console.log('Hello World');
    var a = $('#test1').html();
    console.log(a);

    // Basic Selector
    $('#test2').css('color', 'black');
    // $('li:first-child').css('border','1px red solid');
    // $('li:first').css('border','1px red solid');
    // $('li:last').css('border','1px red solid');
    // $('ul li:gt(2)').css('color','red');
    // $('ul li:lt(2)').css('color','green');
    // $('ul li:eq(3)').css('color','green');
    // $('ul li:even()').css('color','green');
    // $('ul li:odd()').css('color','green');

    // Mouse Event
    $('.button1').click(function () {
        $('.mouseEventP').css('color', 'red');
    });

    $('.button1').dblclick(function () {
        $('.mouseEventP').css('color', 'green');
    });

    $('.button1').contextmenu(function () {
        $('.mouseEventP').css('color', 'brown');
    });

    $('.button1').mouseenter(function () {
        $('.mouseEventP').css('color', 'purple');
    });

    $('.button1').mouseleave(function () {
        $('.mouseEventP').css('color', 'blue');
    });

    // Hide | Show | Toggle
    $('.button2').click(function(){
        $('.newP').hide();
    });
    $('.button3').click(function(){
        $('.newP').show();
    });
    $('.button4').click(function(){
        $('.newP').toggle();
    });
});
