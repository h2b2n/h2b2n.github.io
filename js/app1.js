//const title = document.getElementById("title");

//title.innerText ="Got u!"
//console.log(title.id);
//console.log(title.className);
//console.log(title.autofocus);

const hellos = document.getElementsByClassName("hello");
console.log(hellos);
const dtitle = document.getElementsByClassName("h1");
console.log(dtitle);

const stitle = document.querySelector(".hello h1");
console.log(stitle);
stitle.innerText = "HELLOS";
const ftitle = document.querySelector(".hello:first-child h1");
console.log(ftitle);
//console.dir(ftitle);
ftitle.style.color = "red" ;

function hadleTitleClick()
{
    console.log("title was clicked.");
    ftitle.style.color = "blue";
}

function mouseIsHere() {
  hello.innerText = "The mouse is here!";
  hello.style.color = "green";
}
function mouseLeave() {
  hello.innerText = "The mouse is gone!";
  hello.style.color = "blue";
}
function handleWindowResize(){
    document.body.style.backgroundColor ="tomato";
}
//ftitle.onclick = hadleTitleClick;
ftitle.addEventListener("mouseenter", mouseIsHere);
//ftitle.onmouseenter = mouseIsHere;
ftitle.addEventListener("mouseleave", mouseLeave);
ftitle.addEventListener("click", hadleTitleClick);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);

function handleTitleCliick(){
//  const currentColor = h1.style.color ;
//  let newColor ;
//  if(currentColor == "blue"){
//      newColor = "tomato";
//  }else{
//      newColor = "blue" ;
//  }
//  h1.style.color = newColor ;
  if(h1.classList.contains("active"))
{
    //h1.className ="";
    h1.classList.remove("active");
  }else{
    //h1.className = "active";
    h1.classList.add("active");
  }
//-> h1.classList.toggle("active");
}

