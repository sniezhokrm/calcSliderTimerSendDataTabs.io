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
