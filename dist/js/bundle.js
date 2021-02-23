/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/parts/calc.js":
/*!**************************!*\
  !*** ./js/parts/calc.js ***!
  \**************************/
/***/ ((module) => {

function calc() {
  let people = document.querySelectorAll('.counter-block-input')[0],
    day = document.querySelectorAll('.counter-block-input')[1],
    total = document.getElementById('total'),
    places = document.querySelector('#select'),
    peopleSum = 0,
    daySum = 0,
    totalSum = 0;
  total.innerHTML = 0;
  people.addEventListener('change', function() {
    peopleSum = this.value;
    totalSum = peopleSum * daySum * 1000;
    if (daySum == '') {
      total.innerHTML = 0;
    } else {
      total.innerHTML = totalSum;
    }
  });
  day.addEventListener('change', function() {
    daySum = this.value;
    totalSum = peopleSum * daySum * 1000;
    if (peopleSum == '') {
      total.innerHTML = 0;
    } else {
      total.innerHTML = totalSum;
    }
  });
  places.addEventListener('change', function() {
    if (daySum == '' || peopleSum == '') {
      total.innerHTML = 0;
    } else {
      total.innerHTML = this.options[this.selectedIndex].value * totalSum;
    }

  });
}
module.exports = calc;


/***/ }),

/***/ "./js/parts/more.js":
/*!**************************!*\
  !*** ./js/parts/more.js ***!
  \**************************/
/***/ ((module) => {

function more() {

  let blockMore = document.querySelector('.overlay'),
    closeCross = document.querySelector('.popup-close'),
    moreBtn = document.querySelector('.more');

  moreBtn.addEventListener('click', () => {
    blockMore.classList.remove('hide');
    blockMore.classList.add('show');
  });

  closeCross.addEventListener('click', () => {
    blockMore.classList.remove('show');
    blockMore.classList.add('hide');
  });

}
module.exports = more;


/***/ }),

/***/ "./js/parts/senddata.js":
/*!******************************!*\
  !*** ./js/parts/senddata.js ***!
  \******************************/
/***/ ((module) => {

function sendData() {

  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  let form = document.querySelector('.main-form, .contact-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

  statusMessage.classList.add('status');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    let formData = new FormData(form);
    request.send(formData);
    request.addEventListener('readystatechange', function() {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    for (let i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  });
}
module.exports = sendData;


/***/ }),

/***/ "./js/parts/setcheckbox.js":
/*!*********************************!*\
  !*** ./js/parts/setcheckbox.js ***!
  \*********************************/
/***/ ((module) => {

  function setCheckbox() {
    /*
    let checkbox = document.getElementById('checkbox');
    if (localStorage.getItem('isChecked') === 'true') {
      checkbox.checked = true;
    }
    checkbox.addEventListener('click', () => {
      localStorage.setItem('isChecked', true);
    });
  if (!name.user) {
    throw new Error('В даних немає імя');
  }    */



}
module.exports = setCheckbox;


/***/ }),

/***/ "./js/parts/slider.js":
/*!****************************!*\
  !*** ./js/parts/slider.js ***!
  \****************************/
/***/ ((module) => {

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


/***/ }),

/***/ "./js/parts/tabs.js":
/*!**************************!*\
  !*** ./js/parts/tabs.js ***!
  \**************************/
/***/ ((module) => {

function tabs() {

  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', (event) => {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}
module.exports = tabs;


/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/***/ ((module) => {

function timer() {

  let deadLine = '2021-03-07';

  function getTimeRemaining(endtime) { //- визначаємо скільки
    //часу залишилось, в мілісекундах
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60) % 24));
    return { //- записуємо дані ключ-значення
      'total': t,
      'seconds': seconds,
      'minutes': minutes,
      'hours': hours
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function addZero(num) { //- додаємо нуль, якщо менше 9
      if (num <= 9) {
        return '0' + num;
      } else {
        return num;
      }
    }

    function updateClock() { //- обновляємо час в браузері
      let t = getTimeRemaining(endtime);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);
      if (t.total < 0) { // -  прописуємо 00 якщо менше 0
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }
  setClock('timer', deadLine);
}
module.exports = timer;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
window.addEventListener('DOMContentLoaded', function() {
  'use strict';
  let calc = __webpack_require__(/*! ./parts/calc.js */ "./js/parts/calc.js"),
    more = __webpack_require__(/*! ./parts/more.js */ "./js/parts/more.js"),
    senddata = __webpack_require__(/*! ./parts/senddata.js */ "./js/parts/senddata.js"),
    setcheckbox = __webpack_require__(/*! ./parts/setcheckbox.js */ "./js/parts/setcheckbox.js"),
    slider = __webpack_require__(/*! ./parts/slider.js */ "./js/parts/slider.js"),
    tabs = __webpack_require__(/*! ./parts/tabs.js */ "./js/parts/tabs.js"),
    timer = __webpack_require__(/*! ./parts/timer.js */ "./js/parts/timer.js");
  calc();
  more();
  senddata();
  setcheckbox();
  slider();
  tabs();
  timer();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map