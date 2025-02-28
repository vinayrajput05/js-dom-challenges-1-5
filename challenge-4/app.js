/**
 * Write your challenge solution here
 */
const tasks = [];

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');

function deleteTask(e) {
    const span = e.target.previousSibling.previousSibling;
    if (confirm('Are you sure want to delete?')) {
        const taskIndex = tasks.findIndex(task => task.content === span.textContent)
        tasks.splice(taskIndex, 1)
        e.target.parentElement.remove()
    }
    updateStatistics();
}

function updateStatistics() {
    totalTasks.textContent = `Total tasks: ${tasks.length}`
    completedTasks.textContent = `Completed: ${(tasks?.filter(task => task.isCompleted).length) || 0}`
    if (tasks.length === 0) {
        taskList.innerHTML = '<li class="empty-list">No tasks yet. Add one above!</li>'
    }
    console.log(JSON.stringify(tasks, null, 2));

}

function toggleCheckbox(e) {
    const li = e.target.parentElement;
    const span = e.target.previousSibling;
    if (e.target.checked) {
        tasks.map(task => {
            if (task.content === span.textContent) {
                task.isCompleted = true
            }
            return task
        });
        li.className = 'task-item completed';
    } else {
        tasks.map(task => {
            if (task.content === span.textContent) {
                task.isCompleted = false
            }
            return task
        });
        li.className = 'task-item';
    }
    updateStatistics()
}

function addTask() {
    const value = taskInput.value.trim()
    if (value !== 0) {
        if (tasks.some(task => task.content === value)) {
            alert('All ready added in task list');
            taskInput.value = ''
            return;
        }

        tasks.push({
            isCompleted: false,
            content: value
        })

        if (tasks.length === 1) {
            taskList.innerHTML = ''
        }

        const li = document.createElement('li')
        li.className = 'task-item'

        const span = document.createElement('span')
        span.textContent = value;
        span.className = 'task-text'

        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.className = 'complete-checkbox'
        checkbox.addEventListener('click', toggleCheckbox)

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.className = 'delete-button'
        deleteBtn.addEventListener('click', deleteTask)

        li.appendChild(span);
        li.appendChild(checkbox);
        li.appendChild(deleteBtn)

        taskList.appendChild(li)
        taskInput.value = ''

        updateStatistics()
    }
}

addButton.addEventListener('click', addTask)
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addTask();
    }
})