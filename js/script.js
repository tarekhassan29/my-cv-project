
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


function addNewSkill() {
    const skillsList = document.querySelector(".skills-list");
    const newSkill = document.createElement("li");
    newSkill.textContent = "New Skill " + (skillsList.children.length + 1);
    skillsList.appendChild(newSkill);
}
const addButton = document.getElementById("addSkill");
addButton.addEventListener("click", addNewSkill);

let isVisible = true;
function hideShowElement(){
    const element = document.querySelector('.about-text');
    if (isVisible){
        element.style.display='none';
    }
    else{
        element.style.display='grid';
    }
    isVisible = !isVisible;
    
};
const aboutMeBtn = document.getElementById('aboutMeBtn');
aboutMeBtn.addEventListener('click',hideShowElement);

function countSkills() {
    const skillsList = document.querySelector(".skills-list");
    const skills = skillsList.children.length;
    const countElement = document.getElementById("skillCount");
    countElement.textContent = "Total Skills: " + skills;
}
const countButton = document.getElementById("countSkills");
countButton.addEventListener("click", countSkills);

function filterSkills() {
    const skillsList = document.querySelector(".skills-list");
    const skills = Array.from(skillsList.children).map(li => li.textContent);
    const filtered = skills.filter(skill => skill.toLowerCase().includes("p"));
    const filteredList = document.getElementById("filteredSkills");
    filteredList.innerHTML = filtered.map(skill => `<li>${skill}</li>`).join("");
}
const filterButton = document.getElementById("filterSkills");
filterButton.addEventListener("click", filterSkills);


function showProjectsDelayed() {
    const projectsSection = document.querySelector(".projects");
    projectsSection.style.opacity = "0";
    setTimeout(() => {
        projectsSection.style.opacity = "1";
    }, 2000); // عرض بعد 2 ثانية
}
const delayButton = document.getElementById("delayedShow");
delayButton.addEventListener("click", showProjectsDelayed);