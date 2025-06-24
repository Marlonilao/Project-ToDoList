import "./style.css";
import ProjectsClass from "./projects.js";
import DOMhandler from "./domHandler.js";



const projectList = document.querySelector('body div > .projects');
const dialogProject = document.querySelector('.side-bar > dialog');
const h2 = document.querySelector('.main h2');
const taskList = document.querySelector('body > div.main .tasks');

const openProjectDialogBtn = document.getElementById('openProjectDialog');
openProjectDialogBtn.addEventListener('click' , () => {
    dialogProject.showModal();
})

const addProjectNameBtn = document.getElementById('add-project')


const projectsClass = new ProjectsClass();
const domHandler = new DOMhandler(projectList,h2,taskList);



addProjectNameBtn.addEventListener('click',(e) => {
    e.preventDefault();
    projectsClass.addProject(domHandler.getProjectNameInput())
    domHandler.renderProjects(projectsClass.getProjects());
    dialogProject.close();
    document.querySelector('dialog form').reset();
})

// TRY INTEGRATING LOCAL STORAGE IN THIS PROJECT INSTEAD OF ARRAYS!







