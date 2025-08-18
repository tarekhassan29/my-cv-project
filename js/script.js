
const aboutText = document.getElementById("about-me");
if (aboutText) {
    aboutText.addEventListener("click", function() {
        aboutText.textContent = "Thanks for clicking! I’m excited to grow as a developer!";
        console.log("Clicked and changed!");
    });
} else {
    console.log("Error: Element with id 'about-text' not found!");
}

// دالة لتغيير لون الخلفية
function changeBackgroundColor() {
    const skillsSection = document.querySelector(".skills-list");
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    skillsSection.style.backgroundColor = randomColor;
}
// ربط الدالة بالزر
const changeButton = document.getElementById("changeColor");
changeButton.addEventListener("click", changeBackgroundColor);