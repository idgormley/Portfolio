$(document).ready(function () {
    console.log("Your index.js file is loaded correctly")

   $(window).scroll(function () {
    console.log($(window).scrollTop());
    var topDivHeight = $(this).height();
    var viewPortSize = $(window).height();
    var triggerAt = 150;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
        $('.fade').css('visibility', 'visible').hide().fadeIn();
        $(this).off('scroll');
    }
});
});