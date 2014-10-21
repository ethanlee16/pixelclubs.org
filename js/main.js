$(document).ready(function () {
    $(".main").css("top", "-" + document.documentElement.clientHeight * 3 + "px");
    function reset() {
        $("#pillars").css("height", $("body").css("height"));
        $("#header").css("height", (document.documentElement.clientHeight * 0.8) + "px");
    }
    reset();
    $(window).resize(function () {reset(); });
    
    $(".pillar-row").each(function (index) {
        var that = this;
        setTimeout(function () {
            $(that).animate({
                opacity: '1',
                marginTop: '0px'
            }, {
                duration: 400,
                queue: false
            });
        }, index * 100);
    });
    setTimeout(function () {
        $(".pillar-row").each(function (index) {
            var that = this;
            $(that).animate({
                marginTop: window.innerHeight + ((index + 2) * 10) + 'px'
            }, {
                duration: 500,
                queue: false
            });
            $(".main").animate({
                top: "20%"
            }, 900);
        });


        setTimeout(function () {
            $("#pillars").hide();
        }, 600);
    }, 2500);
    
    setTimeout(function () {
        $(".bg").fadeIn(1000);
        $(".expand-row").delay(5000).animate({
            height: (window.innerHeight * 0.6) + 'px'
        }, 300);
    }, 3000);
    
   
  
});
