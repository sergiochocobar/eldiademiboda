
//STICKY NAVBAR! tiene en css la clas .sticky

$(document).ready(function() {
// grab the initial top offset of the navigation 
var stickyNavTop = $('.nav').offset().top;

// our function that decides weather the navigation bar should have "fixed" css position or not.
var stickyNav = function(){
    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
            
    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
    // otherwise change it back to relative
    if (scrollTop > stickyNavTop) { 
        $('.nav').addClass('sticky');
    } else {
        $('.nav').removeClass('sticky'); 
    }
};

stickyNav();
// and run it again every time you scroll
$(window).scroll(function() {
    stickyNav();
});
});








    



//FUNCION DE MOSTRAR Y ESCONDER NAV PHONE
    var slider = $('.nav-phone').slideReveal({
    trigger: $("#trigger"),
    position: "right",
    overlay: true,
    push: false,
    width: 240
})

$("#hide-btn").click(function(){
    slider.slideReveal("hide");
});







$("ul.service-tabs li a:first").addClass("tab-active"); 
$(".articles-content article").hide();
$(".articles-content article:first").show();

$("ul.service-tabs li a").click(function(){
    $("ul.service-tabs li a").removeClass("tab-active");
    $(this).addClass("tab-active");
    $(".articles-content article").fadeIn(500).hide();

    var activeTab = $(this).attr('href');
    $(activeTab).show();
    return false;
});



