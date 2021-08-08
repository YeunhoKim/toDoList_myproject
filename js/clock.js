const clockDiv = document.querySelector("#clock");
const clock = clockDiv.querySelector("h4");


const paintClock = () => {
    const date = new Date();
    let afterNoon = "PM";
    let hours = date.getHours();

    if ( hours > 12 ) {
        hours = hours - 12; 
    } else {
        afterNoon = "AM"
    }

    hours = String(hours).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds} ${afterNoon}`
}

paintClock()

setInterval(paintClock, 1000);