$(document).ready(function($) {
    
    var screenPos = 0;
    var page = 1;




    $("#home").on("click", function(e) {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });
        page = 1
        e.preventDefault(); 
    });

    $("#about").on("click", function(e) {
        window.scroll({
            top: 890, 
            left: 0, 
            behavior: 'smooth' 
        });
        page = 2
        e.preventDefault(); 
    });

    
    $(".arrow1").on("click", function(e) {
        window.scroll({
            top: 890, 
            left: 0, 
            behavior: 'smooth' 
        });
        page = 2
        e.preventDefault(); 
    });

    $(".arrow2").on("click", function(e) {
        window.scroll({
            top: 1781, 
            left: 0, 
            behavior: 'smooth' 
        });
        page = 3
        e.preventDefault(); 
    });

    $("#contact").on("click", function(e) {
        window.scroll({
            top: 1780, 
            left: 0, 
            behavior: 'smooth' 
        });
        page = 3
        e.preventDefault(); 
    });

    /*
    $(window).on("scroll",function() {
        var scrollTop = $(document).scrollTop()
        var scrollBottom = scrollTop + $(window).height() 
        var pageBottom = $(document).height()
        var diff = pageBottom - scrollBottom
        var opacity = 1 - scrollTop/1000
        var opacity1 = 1 - (diff - 850)/1500
        var opacity2 = 1 - diff/1000
        var opacity3 = 1 - diff/500
        $("header").css("opacity", opacity)
        $(".intro-section").css("opacity", opacity1)
        $(".contact-section").css("opacity", opacity2)
        $(".footer").css("opacity", opacity3)

        var scrollUp = false;
        if(screenPos > scrollTop) {
            scrollUp = true;
        } else if(screenPos < scrollTop) {
            scrollUp = false;
        } else {}

        
        if(scrollTop < 890 && page == 2 && scrollUp == true) {
            window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth', 
            });
            page = 1
        }
 
        if(scrollTop > 0 && page == 1 && scrollUp == false) {
            window.scroll({
                top: 890, 
                left: 0, 
                behavior: 'smooth', 
            });
            page = 2 
        }

        if(scrollTop < 1780 && page == 3 && scrollUp == true) {
            window.scroll({
                top: 890, 
                left: 0, 
                behavior: 'smooth', 
            });
            page = 2
        }

        if(scrollTop > 890 && page == 2 && scrollUp == false) {
            window.scroll({
                top: 1780, 
                left: 0, 
                behavior: 'smooth', 
            });
            page = 3
        }    

        screenPos = scrollTop;  

    });   */

});