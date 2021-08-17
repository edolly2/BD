const hamburgerIconBox = $('.hamburger-icon-cont');
const hamburgerIcon = $('.hamburger-icon');
const hamburgerMenu = $('.nav-cont');
let menuOpen = false;

// HAMBURGER BUTTON
$(document).ready(() => {
    $(hamburgerIconBox).on('click', () => {
        if(!menuOpen) {
            $(hamburgerIconBox).addClass('open');
            $(hamburgerMenu).slideDown(600);
            // $(hamburgerIcon).css('background', 'white');
            $('.logo-text').addClass('white');
            $('.logo-text').addClass('green-outline');
            menuOpen = true; 
        }
        else {
            $(hamburgerIconBox).removeClass('open');
            $(hamburgerMenu).slideUp(600);
            // $(hamburgerIcon).css('background', 'black');
            $('.logo-text').removeClass('white');
            $('.logo-text').removeClass('green-outline');
            menuOpen = false;
        }
    })
})


// $(document).ready(() => {
//     $(".emergency-service-cont").hover(() => {
//         $(this).css("background-color", "red");
//         }, function(){
//         $(this).css("background-color", "pink");
//       })
//     });
  