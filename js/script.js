window.addEventListener('DOMContentLoaded', function() {
  'use strict';
  let calc = require('./parts/calc.js'),
    more = require('./parts/more.js'),
    senddata = require('./parts/senddata.js'),
    setcheckbox = require('./parts/setcheckbox.js'),
    slider = require('./parts/slider.js'),
    tabs = require('./parts/tabs.js'),
    timer = require('./parts/timer.js');
  calc();
  more();
  senddata();
  setcheckbox();
  slider();
  tabs();
  timer();
});
