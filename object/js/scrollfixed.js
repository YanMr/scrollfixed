; (function($) {
    $.fn.scrollFixed = function(options) {
        var opt = $.extend({
            top: "500"
        },
        options);
        var kk = 0,
        scrolltop = 0;
        var _this = $(this);
        _this.css("top", opt.top + "px");
        scrollTop();
        $(window).scroll(function() {
            scrollTop();
            var scrolltop = $(window).scrollTop();
            if (scrolltop <= kk) {
                if (scrolltop < 500) {
                    _this.css({
                        "top": -(scrolltop - opt.top) + "px"
                    });
                }
            }
            setTimeout(function() {
                kk = scrolltop
            },
            0);
        });
        function scrollTop() {
            var scrolltop = $(window).scrollTop();
            var xian = _this.css("top");
            if (xian <= "0px") {
                _this.css("top", "0px");
            } else {
                _this.css({
                    "top": (opt.top - scrolltop) + "px"
                });

            }

        }
    }

})(jQuery)