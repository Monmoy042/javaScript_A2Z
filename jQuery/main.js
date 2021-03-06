$(document).ready(function (){
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
        $('.newP').hide('slow');
    });
    $('.button3').click(function(){
        $('.newP').show('slow');
    });
    $('.button4').click(function(){
        $('.newP').toggle();
    });

    // Slide Up | Slide Down | Slide Toggle
    $('.button5').click(function(){
        $('.newP2').slideUp("slow");
        // $('.newP2').slideUp(fast);
        // $('.newP2').slideUp(2000);
    });
    $('.button6').click(function(){
        $('.newP2').slideDown(3000);
    });
    $('.button7').click(function(){
        $('.newP2').slideToggle();
    });

    // Form Event
    $('#sName,#sClass,#sCountry').focus(function(){
        $(this).css('background-color','black');
        $(this).css('color','white');
    });
    
    $('#sName,#sClass,#sCountry').blur(function(){
        $(this).css('background-color','');
        $(this).css('color','');
    });
    

    $('#sName').change(function(){
        // $(this).css('background-color','brown');
        var sname = $(this).val();
        $('#item1').html(sname);
    });

    $('#sClass').change(function(){
        var sclass = $(this).val();
        $('#item2').html(sclass);
    });

    $('#sCountry').change(function(){
        var scountry = $(this).val();
        $('#item3').html(scountry);
    });

    $('#sForm').submit(function(){
        alert('Form Submitted');
    });

    // Get Method
    // var h = $('#newP3').html();
    var h = $('#newP3').text();
    console.log(h);

    // Append | Prepend 
    $(".button9").click(function(){
        $("#newP4").append("<h2>Hello World</h2>");
    });

    $(".button10").click(function(){
        $("#newP4").prepend("<h2>Hello World</h2>");
    });

    // Before | After
    $('.button11').click(function(){
        $('#newP5').before('<h3>Before:Text included</h3>');
    });
    
    $('.button12').click(function(){
        $('#newP5').after('<h3>After:Text included</h3>');
    });

});
