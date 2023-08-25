// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteButton">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
        
        // Attach event listener to delete button
        const deleteButton = li.querySelector('.deleteButton');
        deleteButton.addEventListener('click', deleteTask);
    }
}

// Function to delete a task
function deleteTask(event) {
    const taskItem = event.target.parentNode;
    taskList.removeChild(taskItem);
}

// Attach event listener to the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Attach event listener to the Enter key in the input field
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});