const clockTime = document.querySelector(".time");
const clockDay = document.querySelector(".day");
const clockDate = document.querySelector(".date");
const visual = document.querySelector(".visual");

function clock() {
    const now = new Date();
    const day = now.getDay();
    const date = now.toDateString();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    if (day == 1) {clockDay.innerHTML = "Monday"};
    if (day == 2) {clockDay.innerHTML = "Tuesday"};
    if (day == 3) {clockDay.innerHTML = "Wednesday"};
    if (day == 4) {clockDay.innerHTML = "Thursday"};
    if (day == 5) {clockDay.innerHTML = "Friday"};
    if (day == 6) {clockDay.innerHTML = "Saturday"};
    if (day == 7) {clockDay.innerHTML = "Sunday"};

    clockTime.innerHTML = `${hours}:${minutes}:${seconds}`
    clockDate.innerHTML = `${date.slice(3)}`

    visual.classList.add("loaded");
    clockTime.classList.add("loaded");
    clockDay.classList.add("loaded");
    clockDate.classList.add("loaded");
}

setInterval(clock, 1000)