// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/** blinkingCursor by Nathan Allen **/
function blinkingCursor (elem) {
    var elem = elem || document.querySelector('#blinking-cursor');
    setInterval(function(){
        elem.style.visibility = 'hidden';
        setTimeout(function(){
            elem.style.visibility = '';
        }, 600);
    }, 1200);
}

setTimeout(function () {
    $("h1#explain").typetype(
        "programmers + innovators * entrepreneurs + leaders.", {
            t: 30,
            e: 0,
            keypress: function () {
                $("span#blinking-cursor").remove();
                $("h1#explain").delay(1000).append("<span id=\"blinking-cursor\">|</span>");
            },
            callback: function () {
                blinkingCursor(document.querySelector("span#blinking-cursor"));
                $("span#blinking-cursor").delay(4800).remove();
                $("h2#cta").append("<span id=\"blinking-cursor\">|</span>");
            }
        });
    $("h2#cta").delay(5000).typetype("Become a Charter Member today.", {
        t: 60,
        e: 0,
        keypress: function () {
            $("span#blinking-cursor").remove();
            $("h2#cta").delay(1000).append("<span id=\"blinking-cursor\">|</span>");
            blinkingCursor(document.querySelector("span#blinking-cursor"));
        },
        callback: function () {
            blinkingCursor(document.querySelector("span#blinking-cursor"));
        }
    });
}, 3000);
