import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');

const play = new Player(iframe);
var throttle = require('lodash.throttle');
let time;
play.on('timeupdate', throttle(fnTime, 1000));

function fnTime(data) {
  time = data.seconds;
  localStorage.setItem('videoplayer-current-time', time);
}
const saveTime = localStorage.getItem('videoplayer-current-time');
if (saveTime) {
  play.setCurrentTime(saveTime);
}
