export default class DOMhandler {
    constructor(element) {
        this.element = element;
    }

    renderProjects(projects) {
        this.element.innerHTML = '';
        projects.forEach(project => {
            const li = document.createElement('li');
            li.textContent = project.name;
            this.element.appendChild(li);
        });

    };

    getProjectNameInput() {
        return document.getElementById('project-name').value;
  }
}