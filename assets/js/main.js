console.log(
"%cPortfolio Loaded",
"color:#2563eb;font-size:18px;font-weight:bold;"
);

/*==============================
Current Year
==============================*/

const footer =
document.querySelector("footer");

if(footer){

footer.innerHTML=

`© ${new Date().getFullYear()} Nguyen Hoang Huy`;

}

/*==============================
Back To Top
==============================*/

const button=
document.createElement("button");

button.innerHTML=
"<i class='fa-solid fa-arrow-up'></i>";

button.className=
"back-top";

document.body.appendChild(button);

button.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

window.addEventListener(

"scroll",

()=>{

if(window.scrollY>400){

button.classList.add("active");

}

else{

button.classList.remove("active");

}

}

);

/*==============================
Active Menu
==============================*/

const sections=
document.querySelectorAll("section");

const navLinks=
document.querySelectorAll(".menu a");

window.addEventListener(

"scroll",

()=>{

let current="";

sections.forEach(section=>{

const top=
section.offsetTop-120;

if(window.scrollY>=top){

current=section.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(

link.getAttribute("href")==="#"+current

){

link.classList.add("active");

}

});

}

);