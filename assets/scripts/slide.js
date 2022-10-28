const simpleButton = document.querySelector(".bookmarking");
const simpleSlide = document.querySelector(".s1");
const speedyButton = document.querySelector(".searching");
const speedySlide = document.querySelector(".s2");
const easyButton = document.querySelector(".sharing");
const easySlide = document.querySelector(".s3");
const book_Highlight = document.querySelector(".bookmarking__highlight")
const sear_Highlight = document.querySelector(".searching__highlight")
const shar_Highlight = document.querySelector(".sharing__highlight")

simpleButton.onclick = function () {
    simpleSlide.style.display = "flex";
    speedySlide.style.display = "none";
    easySlide.style.display = "none";
    book_Highlight.style.borderBottom = "4px solid hsl(0, 94%, 66%)";
    sear_Highlight.style.borderBottom = "none";
    shar_Highlight.style.borderBottom = "none";
};

speedyButton.onclick = function () {
    simpleSlide.style.display = "none";
    speedySlide.style.display = "flex";
    easySlide.style.display = "none";
    book_Highlight.style.borderBottom = "none";
    sear_Highlight.style.borderBottom = "4px solid hsl(0, 94%, 66%)";
    shar_Highlight.style.borderBottom = "none";
};

easyButton.onclick = function () {
    simpleSlide.style.display = "none";
    speedySlide.style.display = "none";
    easySlide.style.display = "flex";
    book_Highlight.style.borderBottom = "none";
    sear_Highlight.style.borderBottom = "none";
    shar_Highlight.style.borderBottom = "4px solid hsl(0, 94%, 66%)";
};
