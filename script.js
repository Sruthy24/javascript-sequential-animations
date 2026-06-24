const box = document.getElementById("box");
const button = document.getElementById("startBtn");

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function playAnimations() {

    button.disabled = true;

    box.classList.remove("move", "grow", "color", "rotate");

    // Restart animation
    void box.offsetWidth;

    box.classList.add("move");
    await wait(1000);

    box.classList.add("grow");
    await wait(800);

    box.classList.add("color");
    await wait(800);

    box.classList.add("rotate");
    await wait(1000);

    button.disabled = false;
}

button.addEventListener("click", playAnimations);
