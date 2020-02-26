'use strict'

class CountdownTimer {
    constructor({selector, targetDate}) {
      this.selector = selector;
      this.targetDate = targetDate;
      this.timerWindow = document.querySelector(selector)
      
      this.seconds = this.timerWindow.querySelector('span[data-value="secs"]');
      this.minutes = this.timerWindow.querySelector('span[data-value="mins"]');;
      this.hours = this.timerWindow.querySelector('span[data-value="hours"]');;
      this.days = this.timerWindow.querySelector('span[data-value="days"]');;;
      this.time = null;
      this.setInterval();
    }

    setInterval() {
      const getTimeRemaining = setInterval(() => {
        this.time = this.targetDate - new Date();
        this.result(getTimeRemaining);
      }, 1000);
      this.result(getTimeRemaining);
    }
  
    result(getTimeRemaining) {
      if(!this.time) return ;
      if(this.time <= 0) {
      clearInterval(getTimeRemaining);
      }
      this.seconds.innerHTML = this.pad(Math.floor((this.time % (1000 * 60)) / 1000));
      this.minutes.innerHTML = this.pad(Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60)));
      this.hours.innerHTML = this.pad(Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.days.innerHTML = this.pad(Math.floor(this.time / (1000 * 60 * 60 * 24)));
    }

      pad(value) {
      return String(value).padStart(2, '0');
    }
  }
  
new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2020'),
  });

  