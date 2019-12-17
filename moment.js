const realTime = document.getElementById("currentDay")


setInterval(() => {
    const now = moment()
    const theTime = now.format('dddd H:mm:ss A')
    // console.log(theTime);
    realTime.textContent = theTime;
}, 1000);
