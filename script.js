$(document).ready(function($) {
    
    
    $("#home").on("click", function() {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
          });
    });

    $("#about").on("click", function() {
        window.scroll({
            top: 892, 
            left: 0, 
            behavior: 'smooth' 
          });
    });

    $("#contact").on("click", function() {
        window.scroll({
            top: 1781, 
            left: 0, 
            behavior: 'smooth' 
          });
    });

    $(".menu").on("click", function(e) {
        e.preventDefault(); 
    });
    
    $(document).on("scroll",function() {
        var scrollTop = $(document).scrollTop()
        var scrollBottom = scrollTop + $(window).height() 
        var pageBottom = $(document).height()
        var diff = pageBottom - scrollBottom
        var opacity = 1 - scrollTop/1000
        var opacity1 = 1 - (diff - 850)/1500
        var opacity2 = 1 - diff/1000
        var opacity3 = 1 - diff/150
        $("header").css("opacity", opacity)
        $(".intro-section").css("opacity", opacity1)
        $(".contact-section").css("opacity", opacity2)
        $(".footer").css("opacity", opacity3)
    });

});