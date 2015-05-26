$(document).ready(function(){
  var hexaDemo3 = new HexaFlip(document.getElementById('hexaflip-demo3'), {hour: hour, minute: minute, second: second});
  OSNCountdown.init(hexaDemo3);
    
  $('#start-btn').click(function(e) {
    var seconds = makeTimeFromHexaFlip(hexaDemo3.getValue());
    if (seconds > 0) {
      OSNCountdown.start(seconds);
      $('#start-btn').css('display', 'none');
      $('#pause-btn').css('display', 'inline-block');
      $('#resume-btn').css('display', 'none');
      $('#stop-btn').css('display', 'inline-block');
    }
    e.preventDefault();
    return false;
  });

  $('#pause-btn').click(function(e) {
    OSNCountdown.pause();
    $('#pause-btn').css('display', 'none');
    $('#start-btn').css('display', 'none');
    $('#resume-btn').css('display', 'inline-block');
    $('#stop-btn').css('display', 'inline-block');
    e.preventDefault();
    return false;
  });
  
  $('#resume-btn').click(function(e) {
    OSNCountdown.resume();
    $('#resume-btn').css('display', 'none');
    $('#start-btn').css('display', 'none');
    $('#pause-btn').css('display', 'inline-block');
    $('#stop-btn').css('display', 'inline-block');
    e.preventDefault();
    return false;
  });
  
  $('#stop-btn').click(function(e) {
    var response = confirm("Are you sure you want to STOP the timer ?");
    if (response == true) {
      OSNCountdown.stop();
      $('#start-btn').css('display', 'inline-block');
      $('#stop-btn').css('display', 'none');
      $('#resume-btn').css('display', 'none');
      $('#pause-btn').css('display', 'none');
    }
    
    e.preventDefault();
    return false;
  });
});

