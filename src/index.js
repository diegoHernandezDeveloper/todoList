// our todos are gonna be dinamic objects (constructors, factories or classes)
// they should have title, description, dueDate and priority (alt: notes, checklist)

// the user should be able to create projects, an array of objects, that contain the name of the project property and an array of the todos, they should be a default project created.
// separate application logic(creation of todos, setting of templates, changin todo priority) from the dom relate stuff, so create separate modules
// user interface:
// view all projects,
// view all todos of each project,
// color for different prorities,
// expand a single todo so see and edit details
// delete a todo
// date-fns library for dates and times
// learn about  Web Storage API
// or learn about localStorage
// things to look up:
// Make sure your app doesn’t crash if the data you may want to retrieve from localStorage isn’t there!
// remember local storage uses JSON, Keep in mind you cannot store functions in JSON, so you’ll have to figure out how to add methods back to your object properties once you fetch them

import "./style.css";
const main = document.querySelector(`main`);

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const newTodo = new Todo(
  `do the dishes`,
  `I have to do the dishes before the wife comes home!!`,
  `today`,
  `important`,
);

let defaultProject = {
  projectName: `default`,
  todos: [],
};
defaultProject.todos.push(newTodo);
const projects = [defaultProject];

function addProject(name) {
  const main = document.querySelector(`main`);
  const projectDivContainer = document.createElement("div");
  const projectHeader = document.createElement(`h2`);
  const ulproject = document.createElement("ul");

  projectHeader.innerText = name;
  projectDivContainer.setAttribute(`project`, `"${name}"`);

  projectDivContainer.appendChild(projectHeader);
  projectDivContainer.appendChild(ulproject);

  main.appendChild(projectDivContainer);
}
function createProjectForm() {
  const form = document.createElement(`form`);
  const projectNameLabel = document.createElement("label");
  const projectName = document.createElement("input");
  const createBtn = document.createElement("button");

  projectNameLabel.innerText = `Create a new project:`;
  createBtn.innerText = `Create`;

  form.appendChild(projectNameLabel);
  form.appendChild(projectName);
  form.appendChild(createBtn);
  main.appendChild(form);
}

function createTodoForm() {
  const form = document.createElement(`form`);
  const inputTitle = document.createElement("input");
  const inputDescription = document.createElement("input");
  const inputDueDate = document.createElement("input");

  const selectPriority = document.createElement("select");
  const optionHigh = document.createElement(`option`);
  const optionMedium = document.createElement(`option`);
  const optionLow = document.createElement(`option`);

  const inputTitleLabel = document.createElement("label");
  const inputDescriptionLabel = document.createElement("label");
  const inputDueDateLabel = document.createElement("label");
  const selectPriorityLabel = document.createElement("label");
  const addBtn = document.createElement("button");

  inputTitleLabel.innerText = `Title`;
  inputDescriptionLabel.innerText = `Description`;
  inputDueDateLabel.innerText = `Due Date`;
  selectPriorityLabel.innerText = `Priority`;
  optionHigh.value = `high`;
  optionHigh.innerText = `high`;
  optionMedium.value = `medium`;
  optionMedium.innerText = `medium`;
  optionLow.value = `low`;
  optionLow.innerText = `low`;

  addBtn.innerText = `Add`;

  selectPriority.appendChild(optionHigh);
  selectPriority.appendChild(optionMedium);
  selectPriority.appendChild(optionLow);
  form.appendChild(inputTitleLabel);
  form.appendChild(inputTitle);
  form.appendChild(inputDescriptionLabel);
  form.appendChild(inputDescription);
  form.appendChild(inputDueDateLabel);
  form.appendChild(inputDueDate);
  form.appendChild(selectPriorityLabel);
  form.appendChild(selectPriority);
  form.appendChild(addBtn);
  main.appendChild(form);
}

createProjectForm();
createTodoForm();
addProject(`House chores`);
