function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
  }