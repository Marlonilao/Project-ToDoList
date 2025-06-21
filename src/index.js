import "./style.css";
import ProjectsClass from "./projects.js";




const projectList = document.getElementById('projects');
const personal = new ProjectsClass('personal');
personal.addTask('Study','tonight','high');
personal.addTask('Exercise','tommorrow','high');
console.log(personal);  
