const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

// Load tasks from local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Add a task to the list
function addTask() {
  const task = taskInput.value;
  if (task !== "") {
    tasks.push(task);
    taskInput.value = "";
    updateTasks();
  }
}

// Remove a task from the list
function removeTask(index) {
  tasks.splice(index, 1);
  updateTasks();
}

// Update the list of tasks
function updateTasks() {
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const li = document.createElement("li");
    li.innerText = task;
    const button = document.createElement("button");
    button.innerText = "Done";
    button.addEventListener("click", () => {
      removeTask(i);
    });
    li.appendChild(button);
    taskList.appendChild(li);
  }
  // Save tasks to local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Initialize the list of tasks
updateTasks();

