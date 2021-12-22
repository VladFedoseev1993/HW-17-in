let contfirst = document.querySelector('#time');
let contsec = document.querySelector('#clock');
let contthir = document.querySelector('#timer');
let Time = function (element) {
  this.element = element;
}

Time.prototype.render = function () {
  let now = new Date();
  let h = now.getHours().toString();
  let m = now.getMinutes().toString();
  let s = now.getSeconds().toString();
  if (h < 10) {
    h = '0' + h;
  }
  if (m < 10) {
    m = '0' + m;
  }
  if (s < 10) {
    s = '0' + s;
  }
  if (this.isFormat) {
    this.element.innerHTML = h + ':' + m;
  } else {
    this.element.innerHTML = h + ':' + m + ':' + s;
  }
}
Time.prototype.toggle = function () {
  this.isFormat = !this.isFormat;
}
let time = new Time(contfirst);

function ShotClock(element) {
  Time.call(this, element);
}
ShotClock.prototype = Object.create(Time.prototype);
let shotClock = new ShotClock(contsec);
contsec.addEventListener('click', () => {
  shotClock.toggle()
});

function LongClock(element) {
  Time.call(this, element);
}
LongClock.prototype = Object.create(Time.prototype);
let longClock = new LongClock(contthir);
contthir.addEventListener('click', () => {
  longClock.toggle()
});

setInterval(() => {
  longClock.render();
  shotClock.render();
}, 100);