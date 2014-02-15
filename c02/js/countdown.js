//from: http://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer

// documentation: https://github.com/mikesherov/jquery-idletimer 
function Countdown(options) {
  var timer,
  instance = this,
  seconds = options.seconds || 10,
  updateStatus = options.onUpdateStatus || function () {},
  counterEnd = options.onCounterEnd || function () {};

  function decrementCounter() {
    updateStatus(seconds);
    if (seconds === 0) {
      counterEnd();
      instance.stop();
    }
    seconds--;
  }

  this.start = function () {
    clearInterval(timer);
    timer = 0;
    seconds = options.seconds;
    timer = setInterval(decrementCounter, 1000);
  };

  this.stop = function () {
    clearInterval(timer);
  };
}

//lia
    var idleTime = 10000; //millis
    var countdownTime = 10; //seconds

    $(document).idleTimer( idleTime );
    $(document).on( "idle.idleTimer", function() {
      //window.location.href = "home.html";
      $("#modIdle").modal('show');
      idleCounter.start(); 
    });

    var idleCounter = new Countdown({  
        seconds:countdownTime,  // number of seconds to count down
        onUpdateStatus: function(sec){$('#count').text(sec);}, // callback for each second
        onCounterEnd: function(){ window.location.href = "home.html";} // final action
    });

    $("#stopCount").on('click', function(){
      idleCounter.stop(); 
      $("#count").text(countdownTime);
      $(document).idleTimer( idleTime );
    });

