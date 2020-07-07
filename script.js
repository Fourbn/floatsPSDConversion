
// Toggle some classes to make the mobile nav button work
$(function () {
   $(".fa-bars").on("click", function () {
      $("nav").toggleClass("nav-slide-in");
      $(".fa-bars").toggleClass("bars-slide");
   })
});