document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    $('#navigation-menu').click(function(){
        $('#display_advance').toggle('1000');
        $("i",this).toggleClass("icon-circle-arrow-up icon-circle-arrow-down");
    });

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

    // Show hide navigation
    var iScrollPos = 0;
    $(window).scroll(function () {
        var iCurScrollPos = $(this).scrollTop();
        if (iCurScrollPos > iScrollPos) {
            $('#navigation').fadeOut();
        } else {
            $('#navigation').fadeIn();
        }
        iScrollPos = iCurScrollPos;
    });

    // Fade out navigation after 3 seconds
    setTimeout( function(){$('#navigation').fadeOut();} , 3000);
});
// Close FAB on menu click
function closeFABOnClick () {
    $('.fixed-action-btn').closeFAB();
}
// Close FAB on body click
function bodyClick () {
    $('.fixed-action-btn').closeFAB();
}