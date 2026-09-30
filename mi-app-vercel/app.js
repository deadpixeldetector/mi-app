// Persistencia con localStorage
const STORAGE_KEY = "tareas";

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const emptyMsg = document.getElementById("empty-msg");

let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function render() {
  list.innerHTML = "";
  emptyMsg.style.display = tasks.length ? "none" : "block";

  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    if (task.done) li.classList.add("done");

    const span = document.createElement("span");
    span.textContent = task.text;

    const actions = document.createElement("div");
    actions.className = "actions";

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "toggle";
    toggleBtn.textContent = task.done ? "↩️" : "✔️";
    toggleBtn.title = "Marcar como hecha";
    toggleBtn.addEventListener("click", () => {
      tasks[i].done = !tasks[i].done;
      save();
      render();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "🗑️";
    deleteBtn.title = "Eliminar";
    deleteBtn.addEventListener("click", () => {
      tasks.splice(i, 1);
      save();
      render();
    });

    actions.appendChild(toggleBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(actions);
    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  tasks.push({ text, done: false });
  input.value = "";
  save();
  render();
});

render();
