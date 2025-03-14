let list = document.getElementById("list");
let btn_dd = document.getElementById("btn-add");
let message = document.getElementById("message");

// Load saved tasks from LocalStorage, or start with an empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Add new task when the button is clicked
btn_dd.addEventListener("click", () => {
  let textform = document.getElementById("textform").value;
  if (textform.trim() === "") {
    message.innerHTML = `<span class="msg">Please add some new task! 😊</span>`;
    return;
  }

  // Add task as object (this is better for future flexibility)
  tasks.push({ text: textform, completed: false });

  // Save updated tasks to LocalStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));

  document.getElementById("textform").value = "";
  renderTasks();
});

// Function to render all tasks in the list
function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    let className = task.completed ? "completed" : ""; // Check if task is completed
    list.innerHTML += `
            <li class="item ${className}">
                <a href="#" class="item-link ${className}" onclick="completeTask(${index})">${task.text}</a>
                <button class="btn-del"  onclick="deleteTask(${index})">
                    <i class="ri-delete-bin-6-fill"></i>
                </button>
            </li>
        `;
  });
  message.innerHTML = "Got something to add today? 😊";
}

// Function to delete a task by index
function deleteTask(index) {
  tasks.splice(index, 1);

  // Save updated tasks to LocalStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTasks();
}

// Function to mark task as completed
function completeTask(index) {
  tasks[index].completed = !tasks[index].completed; // Toggle completed status

  // Save updated tasks to LocalStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTasks();
}

// Important: Render tasks when the page loads to display saved tasks
renderTasks();
