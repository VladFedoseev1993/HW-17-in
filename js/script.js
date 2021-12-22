let contfirst = document.querySelector('#time');
let contsec = document.querySelector('#clock');
let contthir = document.querySelector('#timer');

class Time {
  constructor(element) {
    this.element = element;
  }
  render() {
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
  toggle() {
    this.isFormat = !this.isFormat;
  }
};

class ShotClock extends Time {
  constructor(element) {
    super(element);
  }
  switch () {
    contsec.addEventListener('click', () => {
      this.toggle()
    })
  }
};

class LongClock extends Time {
  constructor(element) {
    super(element);
  }
  switch () {
    contthir.addEventListener('click', () => {
      this.toggle()
    })
  }
};

let shotClock = new ShotClock(contsec);
shotClock.switch();
let longClock = new LongClock(contthir);
longClock.switch();

setInterval(() => {
  longClock.render();
  shotClock.render();
}, 100);