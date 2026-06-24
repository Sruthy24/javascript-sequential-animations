const orb = document.getElementById("orb");
const btn = document.getElementById("startBtn");
const message = document.getElementById("message");

function wait(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

btn.addEventListener("click", async ()=>{

    btn.disabled=true;

    orb.classList.remove("glow","move");
    message.classList.remove("show");
    message.textContent="";

    await wait(300);

    orb.classList.add("glow");

    await wait(1000);

    orb.classList.add("move");

    await wait(1000);

    message.textContent="✨ Energy Activated!";
    message.classList.add("show");

    btn.disabled=false;

});
