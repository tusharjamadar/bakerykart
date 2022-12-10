const Root = document.querySelector(".banner");
const BG = document.querySelector(".bg");

Root.addEventListener("mousemove", function (e) {
    BG.style.left = `${e.clientX}px`;
    BG.style.top = `${e.clientY}px`;
});
