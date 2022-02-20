const loginForm = document.querySelector("#login-form");
//const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

 
//const loginButton = loginForm.querySelector("button");
//const loginInput = loginForm.querySelector("#login-form input");
//const loginButton = loginForm.querySelector("#login-form button");
/*****
function loginButtonClick(){
   console.log("hello", loginInput.value);
   const userName = loginInput.value;
   if(userName === "") 
        alert("Plz write ur name.");
   else if (userName.length > 15) 
        alert("Your name is too long.");
}
loginButton.addEventListener("click",loginButtonClick);
******/

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY ="userName";
//localStorage.remove(USERNAME_KEY);..?
const savedUserName = localStorage.getItem(USERNAME_KEY);

function loginSubmit(info){
    info.preventDefault();
    //console.log(info);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    //console.log(userName);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    //greeting.innerText = "Hello "+userName ;
    greeting.innerText =`Hello, ${userName} Welcome!` ;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
}
else{
    greeting.innerText =`Hello, ${savedUserName} Welcome!` ;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}  
const link = document.querySelector("a");
function linkClick(info){
    info.preventDefault();
    console.dir(info);
    //alert("clicked!");
}
link.addEventListener("click", linkClick);
