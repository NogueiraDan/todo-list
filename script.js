const form = document.getElementById("task-form");
const tasksAdded = document.getElementById("tasks");

form.onsubmit = (event) => {
  event.preventDefault();
  const task = document.querySelector("#task-input");
  const text = task.value;
  //Resetando o formulario
  form.reset();
  showTask(text);
};

const showTask = (text) => {
  const taskContainer = document.createElement("div");
  const taskAdded = document.createElement("input");
  const taskLabel = document.createElement("label");
  const taskTextNode = document.createTextNode(text);

  // Adicionando o Checkbox
  taskAdded.setAttribute("type", "checkbox");
  taskAdded.setAttribute("name", text);
  taskAdded.setAttribute("id", text);

  // Setando o texto do input na Label
  taskLabel.setAttribute("for", text);
  taskLabel.appendChild(taskTextNode);

  // Adicionando as tasks na div criada
  taskContainer.appendChild(taskAdded);
  taskContainer.appendChild(taskLabel);
  tasksAdded.appendChild(taskContainer);
  //taskAdded.onclick(underlineText());
};

const underlineText = () => {
  const checkbox = document.getElementsById("text");
  if (checkbox.checked) {
    tasksAdded.setAttribute("style", "text-decoration: line-through");
  }
};
