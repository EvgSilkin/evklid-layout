document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 3000,
    },
    speed: 1200,
  });

  tab();
  burgerMenuShow();
  burgerMenuHide();

  function tab() {
    const tabButtons = document.querySelectorAll('.work__item');

    tabButtons.forEach((tabBtn) => {
      tabBtn.addEventListener('click', (event) => {

        const allBtn = document.querySelectorAll('.item__btn');
        allBtn.forEach((btn) => {
          btn.classList.remove('item__btn-active')
        })


        const activeBtn = event.currentTarget;

        activeBtn.querySelector('.item__btn').classList.add('item__btn-active');
        const activePath = activeBtn.dataset.path;
        console.log(activePath)

        const tabContents = document.querySelectorAll('.tab__content');
        tabContents.forEach((content) => {
          content.classList.remove('tab__content-active');
        })
        const activeContent = document.querySelector(`[data-target=${activePath}]`);
        activeContent.classList.add('tab__content-active');


      });
    });
  }

  function burgerMenuShow() {
    const burgerBtn = document.querySelector('.header__burger');
    burgerBtn.addEventListener('click', () => {
      const burgerMenu = document.querySelector('.header-nav-mobile');
      burgerMenu.classList.add('header-nav-mobile-active');

    });
  }
  function burgerMenuHide() {
    const closeBtn = document.querySelector('.nav__close');
    closeBtn.addEventListener('click', () => {
      const closeBtn = document.querySelector('.header-nav-mobile');
      closeBtn.classList.remove('header-nav-mobile-active');

    });
  }
})