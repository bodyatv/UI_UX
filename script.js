

$(document).ready(function(){
    $(".night").toggle();


    $(".day").click(function(){
        $(".day").animate({
            right: "1000px"
        },500);


        setTimeout(function(){
            $(".day").hide();
            $(".wrap_time").show();
            $(".wrap_time").animate({
                left:"10%"
            },500);
        }, 1000);
    });

    $(".switch").click(function(){
        $(".daytime").toggle();
        $(".night").toggle();
    });

    $(".go_back").click(function(){

        $(".wrap_time").animate({
            left:"250%"
        },1000);

        setTimeout(function(){
            $(".wrap_time").hide();
            $(".day").show();
            $(".day").animate({
                left:"0"
            },500);
        }, 1000);

    });

    $(".time_before_noon,.time_after_noon,.time_after_midnight").click(function(){
        if($(this).hasClass("checked")){
            $(this).removeClass("checked");
        }
        else $(this).addClass("checked");
               
    });

   




});
