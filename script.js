var todayDateEl = $("#currentDay")







function displayDate() {
var rightNow = moment().format("MMMM Do, YYYY")
todayDateEl.text(rightNow);
}


setInterval(displayDate);
