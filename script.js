const orb=document.getElementById("orb");

const btn=document.getElementById("startBtn");

const particles=document.querySelectorAll(".particle");

const msg=document.getElementById("message");

function wait(ms){

return new Promise(resolve=>setTimeout(resolve,ms));

}

async function play(){

btn.disabled=true;

msg.classList.remove("showText");

msg.innerHTML="";

orb.className="";

particles.forEach(p=>p.classList.remove("show"));

await wait(300);

orb.classList.add("glow");

await wait(1000);

orb.classList.add("pulse");

await wait(900);

orb.classList.add("move");

await wait(900);

particles.forEach(p=>p.classList.add("show"));

await wait(1000);

msg.innerHTML="✨ Energy Released Successfully!";

msg.classList.add("showText");

btn.disabled=false;

}

btn.addEventListener("click",play);
