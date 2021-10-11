function reload() {
    mytime = setTimeout('showTimeDate()', 1000)
  }
  
  function showTimeDate() {
    var present = new Date();
    document.getElementById('Time_Date').innerHTML = present;
    reload();
  }