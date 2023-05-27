$(document).ready(function () {
    console.log("Your index.js file is loaded correctly")

    $(window).scroll(function () {
        if ($(this).scrollBottom() > 0) {
            $('.fade').fadeIn("slow");
          } else {
            $('.fade').fadeOut();
          }

        $('.fadein').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).fadeIn();
            }
        });
    });
  
});