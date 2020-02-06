var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.arrow',
    // prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 540px
    540: {
      slidesPerView: 2,
      // spaceBetween: 40
    }
  }
});

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');

menuButton.addEventListener('click', function () {
  //console.log('click!!');
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
})