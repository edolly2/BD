const hamburgerIconBox = $('.hamburger-icon-cont');
const hamburgerIcon = $('.hamburger-icon');
const hamburgerMenu = $('.mobile-nav-cont');
let menuOpen = false;

// HAMBURGER BUTTON
$(document).ready(() => {
    $(hamburgerIconBox).on('click', () => {
        if(!menuOpen) {
            $(hamburgerIconBox).addClass('open');
            $(hamburgerMenu).slideDown(600);
            $(hamburgerIconBox).addClass('gray');
            // $(hamburgerIcon).css('background', 'white');
            // $('.logo-text').addClass('white');
            // $('.logo-text').addClass('green-outline');
            menuOpen = true; 
        }
        else {
            $(hamburgerIconBox).removeClass('open');
            $(hamburgerMenu).slideUp(600);
            $(hamburgerIconBox).removeClass('gray');
            // $(hamburgerIcon).css('background', 'black');
            // $('.logo-text').removeClass('white');
            // $('.logo-text').removeClass('green-outline');
            menuOpen = false;
        }
    })
})

// TOOLTIPS
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


// $(document).ready(() => {
//     $(".emergency-service-cont").hover(() => {
//         $(this).css("background-color", "red");
//         }, function(){
//         $(this).css("background-color", "pink");
//       })
//     });
  
$(document).ready(() => {
    $('.nav-item').on('click', (event) => {
        if ($(event.currentTarget).hasClass('home')) {
            window.location.replace("/");
        }
        else if ($(event.currentTarget).hasClass('about')) {
            window.location.replace("/about.html");
        }
        else if ($(event.currentTarget).hasClass('services')) {
            window.location.replace("/services.html");
        }
        else if ($(event.currentTarget).hasClass('work')) {
            window.location.replace("/work.html");
        }
        else if ($(event.currentTarget).hasClass('contact')) {
            window.location.replace("/contact.html");
        }
    })
});