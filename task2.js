// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const errorMsg = document.getElementById("formError");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email) {
    errorMsg.textContent = "Please fill in all required fields.";
    return;
  }

  if (!emailRegex.test(email)) {
    errorMsg.textContent = "Please enter a valid email address.";
    return;
  }

  errorMsg.textContent = "";
  alert("Form submitted successfully!");
  this.reset();
});

// To-Do List
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  const taskList = document.getElementById("taskList");

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
