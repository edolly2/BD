const hamburgerIconBox = $(".hamburger-icon-cont");
const hamburgerIcon = $(".hamburger-icon");
const hamburgerMenu = $(".mobile-nav-cont");
let menuOpen = false;

// HAMBURGER BUTTON
$(document).ready(() => {
  $(hamburgerIconBox).on("click", () => {
    if (!menuOpen) {
      $(hamburgerIconBox).addClass("open");
      $(hamburgerMenu).slideDown(600);
      $(hamburgerIconBox).addClass("gray");
      // $(hamburgerIcon).css('background', 'white');
      // $('.logo-text').addClass('white');
      // $('.logo-text').addClass('green-outline');
      menuOpen = true;
    } else {
      $(hamburgerIconBox).removeClass("open");
      $(hamburgerMenu).slideUp(600);
      $(hamburgerIconBox).removeClass("gray");
      // $(hamburgerIcon).css('background', 'black');
      // $('.logo-text').removeClass('white');
      // $('.logo-text').removeClass('green-outline');
      menuOpen = false;
    }
  });
});

// TOOLTIPS
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// $(document).ready(() => {
//     $(".emergency-service-cont").hover(() => {
//         $(this).css("background-color", "red");
//         }, function(){
//         $(this).css("background-color", "pink");
//       })
//     });

$(document).ready(() => {
  $(".nav-item").on("click", (event) => {
    if ($(event.currentTarget).hasClass("home")) {
      window.location.replace("/");
    } else if ($(event.currentTarget).hasClass("about")) {
      window.location.replace("/about.html");
    } else if ($(event.currentTarget).hasClass("services")) {
      window.location.replace("/services.html");
    } else if ($(event.currentTarget).hasClass("work")) {
      window.location.replace("/work.html");
    } else if ($(event.currentTarget).hasClass("contact")) {
      window.location.replace("/contact.html");
    }
  });
});

let isOpen = false;
$(document).ready(() => {
  $(".sp-service").on("click", function (event) {
    $(this).children("div").toggle(700);
    $(this).siblings().children("div").hide(700);
  });
});

$(document).ready(() => {
  $(".hero-cont").css("height", "100vh");
  $(".hero").css("height", "100vh");
  //   $('.punchline-cont').css('display', 'none');
  setTimeout(() => {
    $(".hero-cont").css("height", "");
    $(".hero").css("height", "20vh");
    $(".hero-cont").css("display", "block");
  }, 1000);
});

const servicesEmblem = $(".services-emblems-item");
const servicesInfo = $(".services-emblems-info");
const servicesInfoTitle = $(".services-emblems-info-title");
const servicesInfoPara = $(".services-emblems-info-para");
let infoOpen = false;
$(document).ready(() => {
  $(servicesEmblem).on("click", (event) => {
    if ($(infoOpen)) {
      if ($(event.currentTarget).is(".fire")) {
        $(event.currentTarget).toggleClass("toggled");
        $(event.currentTarget).siblings().removeClass("toggled");
        if ($(event.currentTarget).hasClass("toggled")) {
          $(servicesInfo).show(700);
          $(servicesInfoTitle).html("<h3>Fire Damage</h3>");
          $(servicesInfoPara).html(
            "<p>A fire is always a very unfortunate and traumatic situation. Our trained techs are committed to making an already devastating moment in your life, as easy and smooth as possible by removing all smoke damaged material and doing any repairs needed to the structure in a efficient and respectful manner. Letting you get back to a normal life as soon as possible.</p>"
          );
          infoOpen = true;
        } else {
          $(servicesInfo).hide(700);
        }
      } else if ($(event.currentTarget).is(".tint")) {
        $(event.currentTarget).toggleClass("toggled");
        $(event.currentTarget).siblings().removeClass("toggled");
        if ($(event.currentTarget).hasClass("toggled")) {
          $(servicesInfo).show(700);
          $(servicesInfoTitle).html("<h3>Water Damage</h3>");
          $(servicesInfoPara).html(
            "<p>Water Damage can be a unpleasant surprise. We at Bailey Demolition specialize in complete water extraction and repair of the affected area. As well as a prevention process so you never have to experience it again.</p>"
          );
          infoOpen = true;
        } else {
          $(servicesInfo).hide(700);
        }
      } else if ($(event.currentTarget).is(".bolt")) {
        $(event.currentTarget).toggleClass("toggled");
        $(event.currentTarget).siblings().removeClass("toggled");
        if ($(event.currentTarget).hasClass("toggled")) {
          $(servicesInfo).show(700);
          $(servicesInfoTitle).html("<h3>Storm Damage</h3>");
          $(servicesInfoPara).html(
            "<p>Storms can strike at any moment without warning, indiscriminately causing much unneeded damage that can make your feel hopeless. We will take all worry you may have and give you back the hope you deserve by assessing the damage, and quickly making any repairs necessary. Bringing your home back to new.</p>"
          );
          infoOpen = true;
        } else {
          $(servicesInfo).hide(700);
        }
      }
      // else if ($(event.currentTarget).is(".biohazard")) {
      //
      //     $(servicesInfoTitle).html("<h3>Biohazard Cleanup</h3>");
      //     infoOpen = true;
      //     } else {
      //           $(servicesInfo).hide(700);
      else if ($(event.currentTarget).is(".clock")) {
        $(event.currentTarget).toggleClass("toggled");
        $(event.currentTarget).siblings().removeClass("toggled");
        if ($(event.currentTarget).hasClass("toggled")) {
          $(servicesInfo).show(700);
          $(servicesInfoTitle).html("<h3>24/7 Emergency Service</h3>");
          $(servicesInfoPara).html(
            "<p>Emergencies can happen at any time of the day or night to anyone. Bailey Demolition will always be there for you at a moments notice. We understand these times can weigh heavy on your mind and body. We will be by your side through the entire process. We will take the burden off of you with the promise of getting you back on your feet in no time.</p>"
          );
          infoOpen = true;
        } else {
          $(servicesInfo).hide(700);
        }
      } else if ($(event.currentTarget).is(".hammer")) {
        $(event.currentTarget).toggleClass("toggled");
        $(event.currentTarget).siblings().removeClass("toggled");
        if ($(event.currentTarget).hasClass("toggled")) {
          $(servicesInfo).show(700);
          $(servicesInfoTitle).html("<h3>Post Damage Reconstruction</h3>");
          $(servicesInfoPara).html(
            "<p>With any unexpected events that may happen in life comes the rebuild stage. Not only will we alleviate you from any sudden and unwanted burdens in the form of fire, water and mold, but we will also repair, rebuild and reconstruct any and every affected area back to pristine condition.</p>"
          );
          infoOpen = true;
        } else {
          $(servicesInfo).hide(700);
        }
      } else if ($(event.currentTarget).is(".viruses")) {
        $(event.currentTarget).toggleClass("toggled");
        $(event.currentTarget).siblings().removeClass("toggled");
        if ($(event.currentTarget).hasClass("toggled")) {
          $(servicesInfo).show(700);
          $(servicesInfoTitle).html("<h3>Mold remediation</h3>");
          $(servicesInfoPara).html(
            "<p>We remove, clean, sanitize, demolish, or treat mold or mold-contaminated matter, live or dead, leaving the area 100% mold free.</p>"
          );
          infoOpen = true;
        } else {
          $(servicesInfo).hide(700);
        }
      } else {
        $(servicesInfo).hide(700);
        infoOpen = false;
      }
    }
  });
});
