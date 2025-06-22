export default class ProjectsClass {

    constructor() {
        this.projects = [];
    }

        
    // static createLiElement(project){
    //     const li = document.createElement('li');
    //     li.textContent = project.name;
    //     return li;
    // }

    // update() {
    //     while(this.listElement.firstChild) {
    //         this.listElement.removeChild(this.listElement.firstChild)
    //     }

    //     this.projects.forEach(project => {
    //         this.listElement.appendChild(ProjectsClass.createLiElement(project))
    //     })
    // }

    addProject(projectName) {
        this.projects.push({name: projectName});
    }

    getProjects() {
        return this.projects;
    }

};