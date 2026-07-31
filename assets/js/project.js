const cards =
document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener(

"mousemove",

event=>{

const rect =
card.getBoundingClientRect();

const x =
event.clientX-rect.left;

const y =
event.clientY-rect.top;

const rotateY =
((x/rect.width)-0.5)*12;

const rotateX =
((y/rect.height)-0.5)*-12;

card.style.transform=

`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;

}

);

card.addEventListener(

"mouseleave",

()=>{

card.style.transform="";

}

);

});