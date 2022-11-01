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
    simpleButton.style.borderBottom = "4px solid hsl(0, 94%, 66%)";
    speedyButton.style.borderBottom = "0.5px solid rgb(199, 199, 199)";
    easyButton.style.borderBottom = "0.5px solid rgb(199, 199, 199)";
};

speedyButton.onclick = function () {
    simpleSlide.style.display = "none";
    speedySlide.style.display = "flex";
    easySlide.style.display = "none";
    simpleButton.style.borderBottom = "0.5px solid rgb(199, 199, 199)";
    speedyButton.style.borderBottom = "4px solid hsl(0, 94%, 66%)";
    easyButton.style.borderBottom = "0.5px solid rgb(199, 199, 199)";
};

easyButton.onclick = function () {
    simpleSlide.style.display = "none";
    speedySlide.style.display = "none";
    easySlide.style.display = "flex";
    simpleButton.style.borderBottom = "0.5px solid rgb(199, 199, 199)";
    speedyButton.style.borderBottom = "0.5px solid rgb(199, 199, 199)";
    easyButton.style.borderBottom = "4px solid hsl(0, 94%, 66%)";
};
