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


        if(a >= 900){  //스크롤 값
            $('.suin').addClass('on');

        }else{
            $('.suin').removeClass('on');
        }

        if(a >= 1700){  //스크롤 값
            $('#scene03 .contents .title01, #scene03 .contents .title02, #scene03 .contents .title03, #scene03 .contents .typo, #scene03 .contents .aa, #scene03 .contents .aa .font01, #scene03 .contents .font02').addClass('on');

        }else{
            $('#scene03 .contents .title01, #scene03 .contents .title02, #scene03 .contents .title03, #scene03 .contents .typo, #scene03 .contents .aa, #scene03 .contents .aa .font01, #scene03 .contents .font02').removeClass('on');
        }

        if(a >= 3000){  //스크롤 값
            $('#scene04 .contents .title01, #scene04 .contents .title02, #scene04 .contents .typo, #scene04 .contents .phone').addClass('on');

        }else{
            $('#scene04 .contents .title01, #scene04 .contents .title02, #scene04 .contents .typo, #scene04 .contents .phone').removeClass('on');
        }

        if(a >= 4000){  //스크롤 값
            $('#scene05 .contents .title01, #scene05 .contents .title02, #scene05 .contents .title03, #scene05 .contents .big, #scene05 .contents .pictogram').addClass('on');

        }else{
            $('#scene05 .contents .title01, #scene05 .contents .title02, #scene05 .contents .title03, #scene05 .contents .big, #scene05 .contents .pictogram').removeClass('on');
        }

        if(a >= 4600){  //스크롤 값
            $('#scene06 .contents .title01, #scene06 .contents .title02, #scene06 .contents .title03, #scene06 .user_flow').addClass('on');

        }else{
            $('#scene06 .contents .title01, #scene06 .contents .title02, #scene06 .contents .title03, #scene06 .user_flow').removeClass('on');
        }

        if(a >= 7800){  //스크롤 값
            $('#scene09 .contents .title01, #scene09 .contents .title02, #scene09 .contents .typo, #scene09 .phone01, #scene09 .phone02').addClass('on');

        }else{
            $('#scene09 .contents .title01, #scene09 .contents .title02, #scene09 .contents .typo, #scene09 .phone01, #scene09 .phone02').removeClass('on');
        }

        if(a >= 8100){  //스크롤 값
            $('#scene09 .phone01, #scene09 .phone02').addClass('on');

        }else{
            $('#scene09 .phone01, #scene09 .phone02').removeClass('on');
        }

        if(a >= 8500){  //스크롤 값
            $('#scene09 .phone02 .typo .name01, #scene09 .phone02 .typo .explain01, #scene09 .phone02 .typo .name02, #scene09 .phone02 .typo .explain02,#scene09 .phone02 .typo .name03, #scene09 .phone02 .typo .explain03, #scene09 .phone02 .typo .name04, #scene09 .phone02 .typo .explain04').addClass('on');

        }else{
            $('#scene09 .phone02 .typo .name01, #scene09 .phone02 .typo .explain01, #scene09 .phone02 .typo .name02, #scene09 .phone02 .typo .explain02,#scene09 .phone02 .typo .name03, #scene09 .phone02 .typo .explain03, #scene09 .phone02 .typo .name04, #scene09 .phone02 .typo .explain04').removeClass('on');
        }

        if(a >= 9700){  //스크롤 값
            $('#scene10 .contents .title01, #scene10 .contents .title02, #scene10 .contents .typo, #scene10 .contents .phone').addClass('on');

        }else{
            $('#scene10 .contents .title01, #scene10 .contents .title02, #scene10 .contents .typo, #scene10 .contents .phone').removeClass('on');
        }

        if(a >= 10900){  //스크롤 값
            $('#scene11 .contents .title01, #scene11 .contents .title02, #scene11 .contents .typo').addClass('on');

        }else{
            $('#scene11 .contents .title01, #scene11 .contents .title02, #scene11 .contents .typo').removeClass('on');
        }

        if(a >= 12150){  //스크롤 값
            $('#scene12 .phone01, #scene12 .phone02, #scene12 .phone03').addClass('on');

        }else{
            $('#scene12 .phone01, #scene12 .phone02, #scene12 .phone03').removeClass('on');
        }

        if(a >= 13500){  //스크롤 값
            $('#scene13 .contents .title01, #scene13 .contents .title02, #scene13 .contents .typo').addClass('on');

        }else{
            $('#scene13 .contents .title01, #scene13 .contents .title02, #scene13 .contents .typo').removeClass('on');
        }

        if(a >= 14000){  //스크롤 값
            $('#scene13 .contents .phone01 .left .left01, #scene13 .contents .phone01 .left .left02,#scene13 .contents .phone01 .left .left03, #scene13 .contents .phone02 .right .right01, #scene13 .contents .phone02 .right .right02, #scene13 .contents .phone02 .right .right03, #scene13 .contents .phone02 .right .right04').addClass('on');

        }else{
            $('#scene13 .contents .phone01 .left .left01, #scene13 .contents .phone01 .left .left02,#scene13 .contents .phone01 .left .left03, #scene13 .contents .phone02 .right .right01, #scene13 .contents .phone02 .right .right02, #scene13 .contents .phone02 .right .right03, #scene13 .contents .phone02 .right .right04').removeClass('on');
        }

        if(a >= 16000){  //스크롤 값
            $('#scene15 .contents .title01, #scene15 .contents .title02, #scene15 .contents .typo').addClass('on');

        }else{
            $('#scene15 .contents .title01, #scene15 .contents .title02, #scene15 .contents .typo').removeClass('on');
        }

        if(a >= 16500){  //스크롤 값
            $('#scene15 .contents .phone01, #scene15 .contents .screen').addClass('on');

        }else{
            $('#scene15 .contents .phone01, #scene15 .contents .screen').removeClass('on');
        }

        if(a >= 18830){  //스크롤 값
            $('#scene17 .pic01, #scene17 .pic02, #scene17 .pic03, #scene17 .phone').addClass('on');

        }else{
            $('#scene17 .pic01, #scene17 .pic02, #scene17 .pic03, #scene17 .phone').removeClass('on');
        }












    });

});




