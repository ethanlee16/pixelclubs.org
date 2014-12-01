/** ANIMATION SEQUENCES **/

$(document).ready(function () {
    $(".main").css("top", "-" + document.documentElement.clientHeight * 3 + "px");
    
    /** 
     * Resets the height of the animated pillars based on the client browser's height.
     * Occurs on load and every resize event.
    **/ 
    function reset() {
        $("#intro-row-container").css("height", $("body").css("height"));
        $("#header").css("height", (document.documentElement.clientHeight * 0.8) + "px");
    }
    reset();
    $(window).resize(function () {reset(); });
    
    // Swoop up!
    $(".intro-row").each(function (index) {
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
    
    // Aaaand collapse!
    setTimeout(function () {
        $(".intro-row").each(function (index) {
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
            $("#intro-row-container").hide();
        }, 600);
    }, 2500);
    
    // Show that beautiful background!
    setTimeout(function () {
        $(".bg").fadeIn(1000);
        $(".expand-row").delay(4000).animate({
            height: (window.innerHeight * 0.6) + 'px'
        }, 300);
    }, 3000);
});
