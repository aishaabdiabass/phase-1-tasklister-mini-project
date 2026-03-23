document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const taskInput = document.querySelector("#new-task-description");
    const taskText = taskInput.value;
    
    if (taskText.trim() !== "") {
      const taskList = document.querySelector("#tasks");
      const li = document.createElement("li");
      li.textContent = taskText;
      taskList.appendChild(li);
      
      taskInput.value = "";
    }
  });
});
