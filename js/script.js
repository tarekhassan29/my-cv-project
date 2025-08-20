
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

/*
function addNewSkill() {
    const skillsList = document.querySelector(".skills-list");
    const newSkill = document.createElement("li");
    newSkill.textContent = "New Skill " + (skillsList.children.length + 1);
    skillsList.appendChild(newSkill);
}
const addButton = document.getElementById("addSkill");
addButton.addEventListener("click", addNewSkill);
*/
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

function showProjectsDelayed() {
    const projectsSection = document.querySelector(".projects");
    projectsSection.style.opacity = "0";
    setTimeout(() => {
        projectsSection.style.opacity = "1";
        console.log("Projects shown after delay");
    }, 2000); // عرض بعد 2 ثانية
}
const delayButton1 = document.getElementById("delayedShow1");
delayButton1.addEventListener("click", showProjectsDelayed);


const projectsData = {
    project1: { name: "CV Webpage", year: "2025" },
    project2: { name: "ToDo", year: "2024" },
    project3: { name: "ERP Project", year: "2023" },
    project4: { name: "aspire Project", year: "2022" }
};

function displayProjects() {
    const projectsSection = document.querySelector(".projects");
    projectsSection.innerHTML = "<h2>Previous Projects</h2>";
    for (let project in projectsData) {
        projectsSection.innerHTML += `<div class="project-item">${projectsData[project].name} (${projectsData[project].year})</div>`;
    }
}
// استدعاء الدالة عند تحميل الصفحة
window.onload = displayProjects;

function highlightSkills() {
    const skillsList = document.querySelector(".skills-list");
    const skills = skillsList.children;
    for (let skill of skills) {
        skill.style.backgroundColor = "yellow";
    }
}
function resetSkills() {
    const skillsList = document.querySelector(".skills-list");
    const skills = skillsList.children;
    for (let skill of skills) {
        skill.style.backgroundColor = "";
    }
}
const highlightButton = document.getElementById("highlightSkills");
const resetButton = document.getElementById("resetSkills");
highlightButton.addEventListener("click", highlightSkills);
resetButton.addEventListener("click", resetSkills);


function addNewSkill() {
    const skillsList = document.querySelector(".skills-list");
    const newSkill = document.createElement("li");
    newSkill.textContent = "New Skill " + (skillsList.children.length + 1);
    skillsList.appendChild(newSkill);
    saveSkills();
}
function saveSkills() {
    const skillsList = document.querySelector(".skills-list");
    const skills = Array.from(skillsList.children).map(li => li.textContent);
    localStorage.setItem("skills", JSON.stringify(skills));
}
function loadSkills() {
    const skills = JSON.parse(localStorage.getItem("skills")) || [];
    const skillsList = document.querySelector(".skills-list");
    skills.forEach(skill => {
        if (!skillsList.querySelector(`li:contains("${skill}")`)) { // ملاحظة: هذا مثال، قد تحتاج تعديلًا
            const li = document.createElement("li");
            li.textContent = skill;
            skillsList.appendChild(li);
        }
    });
}
// استدعاء التحميل عند بدء الصفحة
window.onload = loadSkills;
const addButton1 = document.getElementById("addSkill");
addButton1.addEventListener("click", addNewSkill);


const skillForm = document.getElementById("skillForm");
skillForm.addEventListener("submit", function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    const newSkillInput = document.getElementById("newSkillInput");
    const skillText = newSkillInput.value.trim();
    if (skillText && !Array.from(skillsList.children).some(li => li.textContent === skillText)) {
        const newSkill = document.createElement("li");
        newSkill.textContent = skillText;
        skillsList.appendChild(newSkill);
        saveSkills();
        newSkillInput.value = "";
    } else if (skillText) {
        alert("Skill already exists!");
    }
});
// استمرار الدوال saveSkills وloadSkills من المهمة السابقة

function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(data => {
            const apiResult = document.getElementById("apiResult");
            apiResult.textContent = `Title: ${data.title}, Body: ${data.body.substring(0, 50)}...`;
        })
        .catch(error => console.log("Error fetching data: ", error));
}
// استدعاء الدالة عند تحميل الصفحة
window.onload = fetchData;


function fetchData() {
    const apiResult = document.getElementById("apiResult");
    apiResult.textContent = "Loading...";
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(data => {
            apiResult.textContent = `Title: ${data.title}, Body: ${data.body.substring(0, 50)}...`;
        })
        .catch(error => console.log("Error fetching data: ", error));
}
window.onload = fetchData;
const refreshButton = document.getElementById("refreshData");
refreshButton.addEventListener("click", fetchData);


function updateSummary() {
    const skillsCount = document.querySelector(".skills-list").children.length;
    const summaryText = document.getElementById("summaryText");
    summaryText.textContent = `You have ${skillsCount} skills, and the last project is ${Object.values(projectsData)[0].name} (${Object.values(projectsData)[0].year}).`;
}
const updateButton = document.getElementById("updateSummary");
updateButton.addEventListener("click", updateSummary);
// استدعاء الدالة عند التحميل
window.onload = updateSummary;