const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const TODO_KEY = "todo";
let toDos = [];

const handleTodo = (event) => {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const toDosObj = {
    todo: newTodo,
    id: Date.now(),
  };
  toDos.push(toDosObj);

  paintTodos(toDosObj);
  saveTodoItem(toDos);
};

const paintTodos = (toDosObj) => {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  const span = document.createElement("span");

  btn.innerText = " ❌";
  span.innerText = toDosObj.todo;
  li.id = toDosObj.id;

  li.appendChild(span);
  li.appendChild(btn);

  toDoList.appendChild(li);

  btn.addEventListener("click", deleteToDo);
};

const saveTodoItem = (toDosObj) => {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDosObj));
};

const deleteToDo = (event) => {
  const li = event.target.parentNode;
  toDos = toDos.filter((item) => parseInt(li.id) !== item.id);
  saveTodoItem(toDos);
  li.remove();
};

if (localStorage.getItem(TODO_KEY)) {
  toDos = JSON.parse(localStorage.getItem(TODO_KEY));
  toDos.forEach((todo) => paintTodos(todo));
}

toDoForm.addEventListener("submit", handleTodo);
