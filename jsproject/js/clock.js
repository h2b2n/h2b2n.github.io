const clock = document.querySelector("#time span:first-child");
const dayInfo = document.querySelector("#time span:last-child")
const Month = ["Jan","Feb","Mar","Apr","May", "Jun", "Jul","Aug", "Sep", "Oct","Nov","Dec"]
const Day = ["Sun","Mon","Tue","Wed","Thu", "Fri", "Sat"];

const time = new Date();
dayInfo.innerText ="It's "+Day[time.getDay()]+"day!";

function getClock() {
    const time = new Date();
    const year = String(time.getFullYear());
    const month = Month[time.getMonth()];
    const date = String(time.getDate()).padStart(2,"0");
    const hour = String(time.getHours()).padStart(2, "0");
    const minute = String(time.getMinutes()).padStart(2, "0");
    const second = String(time.getSeconds()).padStart(2, "0");
    clock.innerText = `${date} ${month}. ${year} ${hour}:${minute}:${second}`;
}

getClock();
setInterval(getClock, 1000);

