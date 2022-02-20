const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY ="username";
const colors = [
    "#E0BBE4"
    ,"#957DAD"
    ,"#D291BC"
    ,"#FEC8D8"
    ,"#FFDFD3"
    ,"#C5E1E8"
    ,"#DAF2DF"
    ,"#FFF3C9"
    ,"#FFC7C9"
    ,"#AB9CC2"
    ,"#E2AEB2"
    ,"#F9C1B4"
    ,"#EED4C0"
    ,"#E6BFCE"
    ,"#D2B6CF"
  ];
const body = document.body;
body.style.background =   "linear-gradient(to right, " +
            colors[Math.round(Math.random() * colors.length)] +
            ", " +
            colors[Math.round(Math.random() * colors.length)] +
            ")";
function greetings(username){
    greeting.innerText = `Hello, ${username} 🧡`;
    greeting.classList.remove("hidden");
}

function submitEvent(info){
    info.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    loginInput.value ="";
    localStorage.setItem(USERNAME_KEY, username);
    greetings(username);
}
            const savedUser = localStorage.getItem(USERNAME_KEY);
if(savedUser === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", submitEvent);
}else{
  greetings(savedUser);
}