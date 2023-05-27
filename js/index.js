$(document).ready(function () {
    console.log("Your index.js file is loaded correctly")

    $(window).scroll(function () {
        $('.fade').each(function (i) {
            var bottom_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + ($(window).height()/2);
            if (bottom_of_window > bottom_of_element) {
                $(this).fadeIn("slow");
            }
        });
    });
 

});