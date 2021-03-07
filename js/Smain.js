$(document).ready(function () {
    $(".scrollBox").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

});


$(function () {



    $(".scrollBox").scroll(function () {
        var a = $(".scrollBox").scrollTop();
        $(".posNum").text(a);

        // =========================
        // scroll event section
        //==========================


        if(a >= 350){  //스크롤 값
            $('.suin').addClass('on');

        }else{
            $('.suin').removeClass('on');
        }





    });

});




