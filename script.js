var todayDateEl = $('#currentDay');
var formGroups = $('.form-group');
var saveBtn = $('.saveBtn');
var formContent = $('.form-control')

function saveInformation(index) {
    var newData = formContent[index].value;
    localStorage.setItem("data" + index, newData);
}

for (let i = 0; i < formGroups.length; i++) {
    var data = localStorage.getItem("data" + i);
    if (data == undefined) {
        localStorage.setItem("data" + i, " ");
    } else if (data != " ") {
        formContent[i].value = data
    }
    saveBtn[i].addEventListener("click", function(){
        saveInformation(i);
    })
}



function displayDate() {
var rightNow = moment().format("MMMM Do, YYYY hh:mm:ss")
todayDateEl.text(rightNow + " PM");
}


setInterval(displayDate);
