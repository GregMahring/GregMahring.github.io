$(document).ready(function () {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }

    $.fn.moveIt = function () {
        var $window = $(window);
        var instances = [];

        $(this).each(function () {
            instances.push(new moveItItem($(this)));
        });

        window.onscroll = function () {
            var scrollTop = $window.scrollTop();
            instances.forEach(function (inst) {
                inst.update(scrollTop);
            });
        }
    }

    var moveItItem = function (el) {
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed'));
    };

    moveItItem.prototype.update = function (scrollTop) {
        var pos = scrollTop / this.speed;
        this.el.css('transform', 'translateY(' + -pos + 'px)');
    };

    $(function () {
        $('[data-scroll-speed]').moveIt();
    });


    function cycleBackgrounds() {
        var index = 0;

        $imageEls = $('.toggle-image'); // Get the images to be cycled.

        setInterval(function () {
            // Get the next index.  If at end, restart to the beginning.
            index = index + 1 < $imageEls.length ? index + 1 : 0;
            // Show the next image.
            $imageEls.eq(index).addClass('show');
            // Hide the previous image.
            $imageEls.eq(index - 1).removeClass('show');

        }, 5000);
    };

    // Document Ready.
    $(function () {
        cycleBackgrounds();
    });
});

/* Set the width of the side navigation to 25% and the left margin of the page content to 25% */
function openNav() {
    document.getElementById("mySidenav").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}