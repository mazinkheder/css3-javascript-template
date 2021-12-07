/*global $, alert, console*/

$(function () {
    'use strict';
    
});

$('.header .arrow i').click(function() {
    $('html, body').animate({
        scrollTop: $('.services').offset().top
    },100);
});


$('.hire').click(function() {
    $('html, body').animate({
        scrollTop: $('.say-hello').offset().top
    },100);
});


let leftArrow =document.querySelector("#left");
let rightArrow =document.querySelector("#right");
console.log(rightArrow);
function checkClient () {
    if ($('.show-info:first').hasClass('active')) {
        leftArrow.style.cssText="display: none;";
    }else {
        leftArrow.style.cssText="display: block;";
    }

    if ($('.show-info:last').hasClass('active')) {
        rightArrow.style.cssText="display: none;";
    }else {
        rightArrow.style.cssText="display: block;";
    }
}


checkClient();

$(rightArrow).click (function () {

    
    $('.show-info.active').fadeOut(100, function () {
        $(this).removeClass("active").next(".show-info").addClass("active").fadeIn();
        checkClient();
    });

});


$(leftArrow).click (function () {

    
    $('.show-info.active').fadeOut(100, function () {
        $(this).removeClass("active").prev(".show-info").addClass("active").fadeIn();
        checkClient();
    });

});