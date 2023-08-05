function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");
    newTask.innerHTML = `
      <span>${taskText}</span>
      <button onclick="removeTask(this)">Remove</button>
    `;
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
}

function removeTask(button) {
  const taskList = document.getElementById("taskList");
  taskList.removeChild(button.parentElement);
}
