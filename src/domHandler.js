export default class DOMhandler {
    constructor(element,element2,element3) {
        this.projectsUl = element;
        this.h2 = element2;
        this.tasksUl = element3;
    }

    renderProjects(projects) {
        this.projectsUl.innerHTML = '';
        projects.forEach(project => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = project.name;
            li.appendChild(a);
            this.projectsUl.appendChild(li);
        });

    };

    getProjectNameInput() {
        return document.getElementById('project-name').value;
    }

    showProjectMain(projects){


    }
}