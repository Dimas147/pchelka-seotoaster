// Document ready
$(function () {
    $("#main-menu").on("click", ".category-title", function () {
        $("#main-menu .category-title").removeClass('current');
        $("#main-menu .category-title + ul").slideUp();
        $(this).toggleClass('current').next('ul').slideToggle('fast');
    });
});