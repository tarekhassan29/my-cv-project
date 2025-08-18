
const aboutText = document.getElementById("about-me");
if (aboutText) {
    aboutText.addEventListener("click", function() {
        aboutText.textContent = "Thanks for clicking! I’m excited to grow as a developer!";
        console.log("Clicked and changed!");
    });
} else {
    console.log("Error: Element with id 'about-text' not found!");
}