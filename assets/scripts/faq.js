const question1 = document.querySelector(".q1-question");
const question2 = document.querySelector(".q2-question");
const question3 = document.querySelector(".q3-question");
const question4 = document.querySelector(".q4-question");

const response1 = document.querySelector(".q1-response");
const response2 = document.querySelector(".q2-response");
const response3 = document.querySelector(".q3-response");
const response4 = document.querySelector(".q4-response");

const arrow1 = document.querySelector(".faq-arrow1")
const arrow2 = document.querySelector(".faq-arrow2")
const arrow3 = document.querySelector(".faq-arrow3")
const arrow4 = document.querySelector(".faq-arrow4")


question1.addEventListener ("click", function() {
    if (response1.style.display === "inline-block") {
        response1.style.display = "none";
        arrow1.style.rotate = "0deg"
    }else if(response1.style.display === "none"){
        response1.style.display = "inline-block";
        arrow1.style.rotate = "-180deg"
    }
    response2.style.display = "none";
    response3.style.display = "none";
    response4.style.display = "none";
    arrow2.style.rotate = "0deg"
    arrow3.style.rotate = "0deg"
    arrow4.style.rotate = "0deg"
});
question2.onclick = function () {
    if (response2.style.display === "inline-block") {
        response2.style.display = "none";
        arrow2.style.rotate = "0deg"
    }else if(response2.style.display === "none"){
        response2.style.display = "inline-block";
        arrow2.style.rotate = "-180deg"
    }
    response1.style.display = "none";
    response3.style.display = "none";
    response4.style.display = "none";
    arrow1.style.rotate = "0deg"
    arrow3.style.rotate = "0deg"
    arrow4.style.rotate = "0deg"
};
question3.onclick = function () {
    if (response3.style.display === "inline-block") {
        response3.style.display = "none";
        arrow3.style.rotate = "0deg"
    }else if(response3.style.display === "none"){
        response3.style.display = "inline-block";
        arrow3.style.rotate = "-180deg"
    }
    response2.style.display = "none";
    response1.style.display = "none";
    response4.style.display = "none";
    arrow2.style.rotate = "0deg"
    arrow1.style.rotate = "0deg"
    arrow4.style.rotate = "0deg"
};
question4.onclick = function () {
    if (response4.style.display === "inline-block") {
        response4.style.display = "none";
        arrow4.style.rotate = "0deg"
    }else if(response4.style.display === "none"){
        response4.style.display = "inline-block";
        arrow4.style.rotate = "-180deg"
    }
    response2.style.display = "none";
    response3.style.display = "none";
    response1.style.display = "none";
    arrow2.style.rotate = "0deg"
    arrow3.style.rotate = "0deg"
    arrow1.style.rotate = "0deg"
};
