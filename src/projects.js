export default class ProjectsClass {
    constructor(nameOfProject) {
        this.name = nameOfProject,
        this.tasks = [];
    }

    addTask(task,due,prio) {
        this.tasks.push({task,due,prio});
    }

    removeTaskfromArray(task){
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }

}