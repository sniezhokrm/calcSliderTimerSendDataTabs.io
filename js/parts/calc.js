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
