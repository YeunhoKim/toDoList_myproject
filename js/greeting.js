const logInForm = document.querySelector("#login-form");
const logInInput = logInForm.querySelector("input");
const greeting = document.querySelector(".greeting");
const welcome = document.querySelector("#welcome");
const quo = document.querySelector("#quotes");
const wther = document.querySelector("#weather");

const HIDDEN_KEY = "hidden";
const USERNAME_KEY = "username";

const handleLogin = (event) => {
  event.preventDefault();
  const username = logInInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintUserName(username);
};

const paintUserName = (username) => {
  const h2 = greeting.querySelector("h2");
  const toDoFrom = document.querySelector("#todo-form");
  toDoFrom.classList.remove(HIDDEN_KEY);
  logInForm.classList.add(HIDDEN_KEY);
  welcome.classList.add(HIDDEN_KEY);
  greeting.classList.remove(HIDDEN_KEY);
  quo.classList.remove(HIDDEN_KEY);
  wther.classList.remove(HIDDEN_KEY);
  h2.innerText = `Hello! ${username}`;
};

if (localStorage.getItem(USERNAME_KEY)) {
  paintUserName(localStorage.getItem(USERNAME_KEY));
}

logInForm.addEventListener("submit", handleLogin);
