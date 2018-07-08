
const mq = window.matchMedia( "(max-width: 650px)" );

$(document).ready(function(){
    if (mq.matches) {
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
            $(".daytime").toggle("slow");
            $(".night").toggle("slow");
        });
    
        $(".go_back").click(function(){
    
            $(".wrap_time").animate({
                left:"250%"
            },500);
    
            setTimeout(function(){
                $(".wrap_time").hide();
                $(".day").show();
                $(".day").animate({
                    left:"0"
                },500);
            }, 600);
    
            setTimeout(function(){
                location.reload();
            },2500);
    
        });
    
        $(".time_before_noon,.time_after_noon,.time_after_midnight").click(function(){
            if($(this).hasClass("checked")){
                $(this).removeClass("checked");
            }
            else $(this).addClass("checked");
                   
        });
    
      } 
      
      
      
      
      else {
        $(".night").toggle();


        $(".day").click(function(){
            $(".day").animate({
                bottom: "1000px"
            },500);
    
    
            setTimeout(function(){
                $(".day").hide();
                $(".wrap_time").show();
                $(".wrap_time").animate({
                    top:"12%"
                },1000);
    
            }, 1500);
           
        });
    
        $(".switch").click(function(){
            $(".daytime").toggle("slow");
            $(".night").toggle("slow");
        });
    
        $(".go_back").click(function(){
    
            $(".wrap_time").animate({
                top:"150%"
            },500);
    
            setTimeout(function(){
                $(".wrap_time").hide();
                $(".day").show();
                $(".day").animate({
                    top:"0"
                },500);
            }, 600);
    
            setTimeout(function(){
                location.reload();
            },2500);
    
        });
    
        $(".time_before_noon,.time_after_noon,.time_after_midnight").click(function(){
            if($(this).hasClass("checked")){
                $(this).removeClass("checked");
            }
            else $(this).addClass("checked");
                   
        });






      }
   
    

   




});
