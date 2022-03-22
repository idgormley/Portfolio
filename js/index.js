$(document).ready(function () {
    console.log("Your index.js file is loaded correctly")

    $('#skill').hide();

    $('#work').hide();
    $('#case1').hide();
    $('#case2').hide();
    $('#case3').hide();
   
    $('#skillNav').click(function () {
    $('#skill').show();
    });

    $('#workNav').click(function () {
    $('#work').show();
    $('#case1').show();
    $('#case2').show();
    $('#case3').show();
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('#skill').fadeIn();

        } else {
            $('#skill').fadeOut();
        }
        if ($(this).scrollTop() > 400) {
            $('#work').fadeIn();
        } else {
            $('#work').fadeOut();
        }

        if ($(this).scrollTop() > 500) {
            $('#case1').fadeIn();
        } else {
            $('#case1').fadeOut();
        }

        if ($(this).scrollTop() > 1000) {
            $('#case2').fadeIn();
        } else {
            $('#case2').fadeOut();
        }

        if ($(this).scrollTop() > 1500) {
            $('#case3').fadeIn();
        } else {
            $('#case3').fadeOut();
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