// Setting ticking interval
const interval = setInterval(setClock, 1000);

// Selecting clock's hands
const secHand = document.querySelector("#seconds");
const minHand = document.querySelector("#minutes");
const hrHand = document.querySelector("#hours");

// Setting current time of the clock
function setClock() {

    // Getting the current date and times
    const date = new Date();

    // Setting clock hands to the current time by calculating their angles
    const secAngle = date.getSeconds() * 6;
    const minAngle = (date.getMinutes() + date.getSeconds() / 60) * 6;
    const hrAngle = (date.getHours() + date.getMinutes() / 60)* 30; 

    // Calling clock hand rotation functions
    rotateClock(secHand, secAngle);
    rotateClock(minHand, minAngle);
    rotateClock(hrHand, hrAngle);
}

setClock();

// Setting clock's rotation
function rotateClock(timeElement, rotationAngle) {
    // timeElement.style.transformOrigin = "243.869px 250.796px";
    // timeElement.style.transform = `rotate(${rotationAngle}deg)`;
    timeElement.setAttribute("transform", `rotate(${rotationAngle} 243.869 250.796)`);
}
