const questions = document.querySelectorAll(".question");
console.log(questions);
for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", () => {
        const response = document.querySelector(`.q${i + 1}-response`);
        const arrow = document.querySelector(`.faq-arrow${i + 1}`);
        if (response.style.display == "") {
            response.style.display = "flex";
            arrow.style.rotate = "180deg"
            arrow.style.filter = "invert(49%) sepia(56%) saturate(5585%) hue-rotate(334deg) brightness(127%) contrast(116%)"
        } else if (response.style.display == "flex") {
            response.style.display = "";
            arrow.style.rotate = "0deg"
            arrow.style.filter = "invert(44%) sepia(90%) saturate(3186%) hue-rotate(217deg) brightness(91%) contrast(92%)"
        }
    });
}
