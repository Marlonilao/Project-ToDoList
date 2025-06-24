export default class DOMhandler {
    constructor(element,element2,element3) {
        this.projectsUl = element;
        this.h2 = element2;
        this.tasksUl = element3;
    }

    renderProjects(projects) {
        this.projectsUl.innerHTML = '';
        projects.forEach((project, index) => {
            const li = document.createElement('li');
            li.textContent = project.name;
            li.dataset.index = index;
            this.projectsUl.appendChild(li)
            li.addEventListener('click',(e)=>{
                const index = e.target.dataset.index;
                console.log(projects[index]);
                this.showProjectInMain(projects[index].name);
                this.showAddTaskInput();
            });
        });

    };

    getProjectNameInput() {
        return document.getElementById('project-name').value;
    }

    showProjectInMain(projectName){
        this.h2.textContent = projectName;
    }

    showProjectTasks(projects) {
        this.tasksUl.innerHTML = '';
        projects.forEach(project=>{
            const li = document.createElement('li');
            li.textContent = project.tsk;
            this.tasksUl.appendChild(li);
        })
    }

    showAddTaskInput(projects) {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder','what do you need to do?');
        this.tasksUl.insertAdjacentElement('beforebegin',input);
        const addBtn = document.createElement('button');
        addBtn.innerText = 'Add';
        input.insertAdjacentElement('afterend',addBtn);
        addBtn.addEventListener('click' , (e)=> {
            console.log(e);
        })
    }


}