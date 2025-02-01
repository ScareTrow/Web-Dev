function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { 7
      day = 7;
    }
  
    return day;
  }