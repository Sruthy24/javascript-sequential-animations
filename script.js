const box = document.getElementById("box");
const button = document.getElementById("startBtn");

function animateElement(keyframes, options) {
    return new Promise(resolve => {
        const animation = box.animate(keyframes, options);
        animation.onfinish = resolve;
    });
}

async function playAnimations() {

    button.disabled = true;

    await animateElement(
        [
            { transform: "translateX(0)" },
            { transform: "translateX(380px)" }
        ],
        {
            duration: 1000,
            fill: "forwards"
        }
    );

    await animateElement(
        [
            { transform: "translateX(380px) scale(1)" },
            { transform: "translateX(380px) scale(1.5)" }
        ],
        {
            duration: 800,
            fill: "forwards"
        }
    );

    await animateElement(
        [
            { transform: "translateX(380px) scale(1.5)", background: "#2196f3" },
            { transform: "translateX(380px) scale(1.5)", background: "#4caf50" }
        ],
        {
            duration: 700,
            fill: "forwards"
        }
    );

    await animateElement(
        [
            { transform: "translateX(380px) rotate(0deg)" },
            { transform: "translateX(380px) rotate(360deg)" }
        ],
        {
            duration: 1000,
            fill: "forwards"
        }
    );

    button.disabled = false;
}

button.addEventListener("click", playAnimations);
