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

function insertProject(name) {
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
insertProject(`House chores`);
