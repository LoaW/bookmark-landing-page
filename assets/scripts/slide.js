const simpleButton = document.querySelector(".bookmarking");
const simpleSlide = document.querySelector(".s1");
const speedyButton = document.querySelector(".searching");
const speedySlide = document.querySelector(".s2");
const easyButton = document.querySelector(".sharing");
const easySlide = document.querySelector(".s3");

simpleButton.onclick = function () {
    simpleSlide.style.display = "flex";
    speedySlide.style.display = "none";
    easySlide.style.display = "none";
};

speedyButton.onclick = function () {
    simpleSlide.style.display = "none";
    speedySlide.style.display = "flex";
    easySlide.style.display = "none";
};

easyButton.onclick = function () {
    simpleSlide.style.display = "none";
    speedySlide.style.display = "none";
    easySlide.style.display = "flex";
};
