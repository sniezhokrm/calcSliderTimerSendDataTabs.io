function slider() {
  let slideIndex = 1,
    slideItem = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.arrow-left'),
    next = document.querySelector('.arrow-right'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot'),
    sliderWrap = document.querySelectorAll('.wrap');

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slideItem.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slideItem.length;
    }
    slideItem.forEach((item) => {
      item.style.display = 'none';
    });
    dots.forEach((item) => {
      item.classList.remove('dot-active');
    });

    slideItem[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function curentSlide(n) {
    showSlides(slideIndex = n);
  }
  prev.addEventListener('click', () => {
    plusSlides(-1);
  });
  next.addEventListener('click', () => {
    plusSlides(1);
  });
  dotsWrap.addEventListener('click', (ev) => {
    for (let i = 0; i < dots.length + 1; i++) {

      if (ev.target == dots[i - 1] && ev.target.classList.contains('dot')) {
        curentSlide(i);
      }
    }
  });
}
module.exports = slider;
