export default class DOMhandler {
    constructor(element) {
        this.element = element;
    }

    renderProjects(projects) {
        this.element.innerHTML = '';
        projects.forEach(project => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = project.name;
            li.appendChild(a);
            this.element.appendChild(li);
        });

    };

    getProjectNameInput() {
        return document.getElementById('project-name').value;
    }
}