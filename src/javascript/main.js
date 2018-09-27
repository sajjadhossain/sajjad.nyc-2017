document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome fellow developer or Web Inspector connoisseur.');
    console.log('Contact me via sajjad@withpulp.com.');
    console.log('Fork me from https://github.com/sajjadhossain/twoPoint0.');
    // Smooth scroll https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});
