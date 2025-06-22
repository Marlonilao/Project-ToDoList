import "./style.css";
import ProjectsClass from "./projects.js";
import DOMhandler from "./domHandler.js";



const projectList = document.getElementById('projects');
const dialogProject = document.querySelector('.side-bar > dialog');

const openProjectDialogBtn = document.getElementById('openProjectDialog');
openProjectDialogBtn.addEventListener('click' , () => {
    dialogProject.showModal();
})

const addProjectNameBtn = document.getElementById('add-project')


const projectsClass = new ProjectsClass();
const domHandler = new DOMhandler(projectList);



addProjectNameBtn.addEventListener('click',(e) => {
    e.preventDefault();
    projectsClass.addProject(domHandler.getProjectNameInput())
    domHandler.renderProjects(projectsClass.getProjects());
    dialogProject.close();
})

