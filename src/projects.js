export default class ProjectsClass {

    constructor() {
        this.projects = [];
    }

    addProject(projectName) {
        this.projects.push({name: projectName, tasks: []});
    }

    getProjects() {
        return this.projects;
    }

    addTaskToProject(index, task) {
        this.projects[index].tasks.push(task);
    }

    removeProject(projectName) {
        this.projects.splice(this.projects.indexOf(projectName), 1);
    }

    removeTask(index, task) {
        this.projects[index].tasks.splice(this.projects[index].tasks.indexOf(task), 1);
    }
};