import './scss/index.scss';

const app = document.querySelector('.app');
const divsLength = 3;

function twoDigits(num) {
  return `0${num}`.slice(-2);
}

function renderHTML() {
  for (let i = 0; i < divsLength; i++) {
    const item = document.createElement(`div`);
    item.classList.add('time_item');
    if (i === 1 || i === 2) {
      const colon = document.createElement('div');
      colon.classList.add('time_item_colon');
      colon.innerHTML = ':';
      app.appendChild(colon);
    }
    app.appendChild(item);
  }
}

function setTime() {
  const divs = document.querySelectorAll('.time_item');

  for (let i = 0; i < divs.length; i++) {
    if (i === 0) {
      const hours = new Date().getHours();
      divs[i].innerHTML = twoDigits(hours);
    }
    if (i === 1) {
      const minutes = new Date().getMinutes();
      divs[i].innerHTML = twoDigits(minutes);
    }
    if (i === 2) {
      const seconsds = new Date().getSeconds();
      divs[i].innerHTML = twoDigits(seconsds);
    }
  }
}

renderHTML();
setInterval(setTime, 1000);
