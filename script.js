const addTaskBtn = document.getElementById('add-task-btn');
const deskTaskInput = document.getElementById('text-task');
const todosWrapper = document.querySelector('.todos-wrapper');
showTasks();
function showTasks() {
    let tasks = JSON.parse(localStorage.getItem('todos')) || [];
    let todoItemElems;
    if (tasks == null){
        todoItemElems = [];
    } else{
        todoItemElems = tasks;
    }
    let tasksHTML = '';
    todoItemElems.forEach(function (task, index) {
        tasksHTML += `
    <div id = "${task.id}" class="todo-item ${task.completed ? "checked" : ''}">
        <div class="text">${task.text} </div>
        <div class="date">${task.date}</div>
        <div class="buttons">
            <input class="btn-complete" id="item_${index}" type="checkbox" ${task.completed ? 'checked' : ''}>
            <button onclick="deleteTask(${index})" class="btn-delete">Delete</button>
        </div>
    </div>
    `
    })
    if(!tasksHTML) tasksHTML = 'Please create a note';
    todosWrapper.innerHTML = tasksHTML;

}

function Task(text) {
    this.id = (Math.floor(Math.random()*2022)),
    this.date = new Date().toLocaleDateString();
    this.text = text,
    this.completed = false;
}

todosWrapper.addEventListener('click',function (e) {
    let tasks = JSON.parse(localStorage.getItem('todos')) || [];
    let target = e.target;
    const isCheckbox = target.classList.contains('btn-complete')
    if(isCheckbox){
        const parent = target.parentElement.parentElement;
        const taskId = parent.getAttribute('id')
        changeTaskStatus(taskId, tasks);
        localStorage.setItem('todos', JSON.stringify(tasks));
        showTasks();
    }
})

function changeTaskStatus(id, list){
    list.forEach((tasks) => {
        if (tasks.id == id){
            tasks.completed = !tasks.completed;
        }
    })
}

addTaskBtn.addEventListener('click', function()  {
    let tasks = JSON.parse(localStorage.getItem('todos')) || [];
    tasks.push(new Task(deskTaskInput.value));
    localStorage.setItem('todos', JSON.stringify(tasks));
    showTasks();
    deskTaskInput.value = '';
})

let deleteAllBtn = document.getElementById('delete-task-btn');
deleteAllBtn.addEventListener('click', function () {
    localStorage.clear();
    showTasks();
})

function deleteTask (index ) {
    let tasks = JSON.parse(localStorage.getItem('todos')) || [];
    tasks.splice(index,1)
    localStorage.setItem('todos', JSON.stringify(tasks));
    showTasks();
}