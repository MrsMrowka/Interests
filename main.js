if (window.innerWidth < 900) {
    document.getElementsByClassName("break").innerHTML = "<br>";
}

setInterval(function () {
    let date1 = new Date("10/12/2018");
    let date2 = new Date();

    let diffInTime = date2.getTime() - date1.getTime();

    //                                       The number of milliseconds in one day
    let diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

    document.querySelector(".days").innerHTML = " for: " + diffInDays + "days " + date2.getHours() + "h " + date2.getMinutes() + "m " + date2.getSeconds() + "s";
}, 1000);