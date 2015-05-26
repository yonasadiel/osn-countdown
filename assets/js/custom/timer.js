var OSNCountdown = {
  lastTime: null,
  remainingMilis: 0,
  timer: null,
  hexa: null,
  state: '',
  stopAction: null,
  
  STATE_PAUSED: '',
  STATE_TICKING: '',
  
  init: function(hexaElmt) {
    console.log('init');
    var instance = this;
    
    //initialization
    hexa = hexaElmt;
    remainingMilis = 0;
    STATE_PAUSED = 'paused';
    STATE_TICKING = 'ticking';
  },
  
  start: function(initialTime) {
    if (initialTime && !this.isTimerRunning() ) {
      console.log('start');
      var instance = this;
      instance.lastTime = new Date();
      
      remainingMilis  = initialTime;
      hexa.setValue(this.formatTime(remainingMilis));
      timer = setInterval(function(){instance.countdown()}, 1000);
    }
  },
  
  resume: function() {
    if (!this.isTimerRunning()) {
      console.log('resume');
      var instance = this;
      instance.lastTime = new Date();

      timer = setInterval(function(){instance.countdown()}, 1000);
      state = STATE_TICKING;
    }
  },
  
  pause: function() {
    if (this.isTimerRunning()) {
      console.log('pause');
      clearInterval(timer);
      timer = false;
      state = STATE_PAUSED;
    }
  },
  
  stop: function() {
    if (this.isTimerRunning() || (this.state == this.STATE_PAUSED) ) {
      console.log('stop');
      clearInterval(timer);
      timer = false;
      remainingMilis = 0;
      
      //update view
      hexa.setValue(this.formatTime(remainingMilis));
    }
  },
  
  countdown: function() {
    var instance = this;
    var currentTime = new Date();
  
    //remainingTime reaches zero
    if (remainingMilis <= 0) {
      $('#start-btn').css('display', 'inline-block');
      $('#pause-btn').css('display', 'none');
      $('#resume-btn').css('display', 'none');
      $('#stop-btn').css('display', 'none');
      instance.stop();
    } else {
      remainingMilis -= currentTime.getTime() - instance.lastTime.getTime();
      instance.lastTime = currentTime;
      if(remainingMilis <= 3600) {
        
      }
    }
    
    //update view
    hexa.setValue(this.formatTime(remainingMilis));
  },
  
  formatTime: function(milis) {
   var retval = {};
   
   retval.hour = Math.floor(milis / 3600) + '';
   milis -= retval.hour * 3600;
   
   retval.minute = Math.floor(milis / 60) + '';
   milis -= retval.minute * 60;

   retval.second = milis + '';
   return retval;
  },
  
  isTimerRunning: function() {
    return (typeof timer !== 'undefined') && (timer !== false);
  },
  
  isPaused: function() {
    return (typeof state !== 'undefined') && state === STATE_PAUSED;
  }
}

