$(document).ready(function () {
    console.log("Your index.js file is loaded correctly")

    $(window).scroll(function () {
        $('.fade').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).fadeIn();
            }
        });
    });
 

    // function menuButton{
    //     console.log('clicked button');

    //     let menubar = document.getElementById('menubar')

    //     console.log(menubar)

    //     // if (menubar.style.visibility === 'visible') {
    //     //     menubar.style.visibility = 'hidden';
    //     // } else if (menubar.style.visibility === 'hidden') {
    //     //     menubar.style.visibility = 'visible';
    //     // }
    //     menubar.style.visibility='visible'? resume.style.visibility='hidden' : resume.style.visibility='visible';
    // }
});