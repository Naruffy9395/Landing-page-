/* ==========================================
   KPR PG COLLEGE
   SCRIPT.JS PART 1
========================================== */

// Scroll Reveal Animation

const reveals = document.querySelectorAll(
".about-card,.course-card,.gallery img,.hero,.cta"
);

function revealOnScroll(){

reveals.forEach((item)=>{

const top=item.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-100){

item.classList.add("fade-up");
item.classList.add("show");

}

});

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();


// Navbar Shadow

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>30){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";
header.style.background="rgba(255,255,255,.95)";

}else{

header.style.boxShadow="none";
header.style.background="rgba(255,255,255,.85)";

}

});


// Smooth Button Animation

document.querySelectorAll(".btn1,.btn2").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px) scale(1)";

});

});

/* ==========================================
   SCRIPT.JS PART 2
========================================== */

// 3D Hover Effect

const cards = document.querySelectorAll(
".college-card,.about-card,.course-card"
);

cards.forEach((card)=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateY = ((x / rect.width) - 0.5) * 18;

const rotateX = ((y / rect.height) - 0.5) * -18;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.04)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

});

});


// Floating Animation

document.querySelectorAll(".college-card").forEach(card=>{

let up=true;

setInterval(()=>{

card.style.transform=up
?"translateY(-8px)"
:"translateY(0px)";

up=!up;

},1800);

});


// WhatsApp Button

document.querySelectorAll("a[href*='wa.me']").forEach(btn=>{

btn.addEventListener("click",()=>{

console.log("Opening WhatsApp...");

});

});


// Console Message

console.log("%cKPR PG College Website Loaded",
"color:#800020;font-size:18px;font-weight:bold;");
