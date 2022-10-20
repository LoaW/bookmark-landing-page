const arrow1 = document.querySelector(".faq-button1");
const arrow2 = document.querySelector(".faq-button2");
const arrow3 = document.querySelector(".faq-button3");
const arrow4 = document.querySelector(".faq-button4");

const response1 = document.querySelector(".q1-response");
const response2 = document.querySelector(".q2-response");
const response3 = document.querySelector(".q3-response");
const response4 = document.querySelector(".q4-response");



arrow1.onclick = function () {
    response1.style.display = "inline-block";
    response2.style.display = "none";
    response3.style.display = "none";
    response4.style.display = "none";
};
arrow2.onclick = function () {
    response2.style.display = "inline-block";
    response1.style.display = "none";
    response3.style.display = "none";
    response4.style.display = "none";
};
arrow3.onclick = function () {
    response3.style.display = "inline-block";
    response2.style.display = "none";
    response1.style.display = "none";
    response4.style.display = "none";
};
arrow4.onclick = function () {
    response4.style.display = "inline-block";
    response2.style.display = "none";
    response3.style.display = "none";
    response1.style.display = "none";
};
