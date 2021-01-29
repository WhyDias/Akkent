jQuery(document).ready(function($){

$('.button-for-one').on({
    'click': function(){
        $('.button-for-a1').hide();
        $('.button-for-a2').show();
        $('.button-for-a3').hide();
        $('.button-for-a4').hide();
        $('.button-for-a5').show();
        $('.button-for-a6').hide();
        $('.button-for-a7').hide();
    }
});

$('.button-for-two').on({
    'click': function(){
        $('.button-for-a1').show();
        $('.button-for-a2').hide();
        $('.button-for-a3').show();
        $('.button-for-a4').show();
        $('.button-for-a5').hide();
        $('.button-for-a6').hide();
        $('.button-for-a7').show();
    }
});

$('.button-for-three').on({
    'click': function(){
        $('.button-for-a1').hide();
        $('.button-for-a2').hide();
        $('.button-for-a3').hide();
        $('.button-for-a4').hide();
        $('.button-for-a5').hide();
        $('.button-for-a6').hide();
        $('.button-for-a7').show();
    }
});
$('.button-for-a1').on({
     'click': function(){
         $('#change-app-plan').attr('src','resources/A1.jpg');
         $('#change-floor').attr('src','resources/A1-floor.jpeg');
         $('#change-floor-lightbox').attr('href', 'resources/A1-floor.jpeg');
         $('#change-app-plan-lightbox').attr('href', 'resources/A1.jpg');
     }
});
 
$('.button-for-a2').on({
     'click': function(){
         $('#change-app-plan').attr('src','resources/A2.jpg');
         $('#change-floor').attr('src','resources/A2-floor.jpeg');
         $('#change-floor-lightbox').attr('href', 'resources/A2-floor.jpeg');
         $('#change-app-plan-lightbox').attr('href', 'resources/A2.jpg');
     }
});
 
$('.button-for-a3').on({
     'click': function(){
         $('#change-app-plan').attr('src','resources/A3.jpg');
         $('#change-floor').attr('src','resources/A3-floor.jpeg');
         $('#change-floor-lightbox').attr('href', 'resources/A3-floor.jpeg');
         $('#change-app-plan-lightbox').attr('href', 'resources/A3.jpg');
     }
});
 
$('.button-for-a4').on({
     'click': function(){
         $('#change-app-plan').attr('src','resources/A4.jpg');
         $('#change-floor').attr('src','resources/A4-floor.jpeg');
         $('#change-floor-lightbox').attr('href', 'resources/A4-floor.jpeg');
         $('#change-app-plan-lightbox').attr('href', 'resources/A4.jpg');
     }
});

$('.button-for-a5').on({
    'click': function(){
        $('#change-app-plan').attr('src','resources/A5.jpg');
        $('#change-floor').attr('src','resources/A5-floor.jpeg');
        $('#change-floor-lightbox').attr('href', 'resources/A5-floor.jpeg');
        $('#change-app-plan-lightbox').attr('href', 'resources/A5.jpg');
    }
});

$('.button-for-a6').on({
    'click': function(){
        $('#change-app-plan').attr('src','resources/A6.jpg');
        $('#change-floor').attr('src','resources/A6-floor.jpeg');
        $('#change-floor-lightbox').attr('href', 'resources/A6-floor.jpeg');
        $('#change-app-plan-lightbox').attr('href', 'resources/A6.jpg');
    }
});

$('.button-for-a7').on({
    'click': function(){
        $('#change-app-plan').attr('src','resources/A7.jpg');
        $('#change-floor').attr('src','resources/A7-floor.jpeg');
        $('#change-floor-lightbox').attr('href', 'resources/A7-floor.jpeg');
        $('#change-app-plan-lightbox').attr('href', 'resources/A7.jpg');
    }
});
});

