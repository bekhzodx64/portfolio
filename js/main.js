new WOW().init();
var mySwiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".projects__pagination",
    bulletClass: "projects__bullet",
    bulletActiveClass: "projects__bullet_active",
    clickable: true,
  },
});

$(window).scroll(function () {
  var top = $(document).scrollTop();
  if (top < 300) $(".top_nav").removeClass("fixed");
  else $(".top_nav").addClass("fixed");
});
