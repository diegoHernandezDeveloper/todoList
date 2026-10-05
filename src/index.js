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
import { createProjectForm, createTodoForm } from "./formsCreation.js";
const main = document.querySelector(`main`);

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

let defaultProject = {
  projectName: `default`,
  todos: [
    {
      title: `do the dishhes`,
      description: `before wife comes`,
      dueDate: `today`,
      priority: `high`,
    },
  ],
};

const projects = [defaultProject];

function addProject() {
  let name = document.querySelector(`input[inputProject]`).value;
  let project = {
    projectName: `${name}`,
    todos: [],
  };
  projects.push(project);
}

function displayTodos() {
  for (let project of projects) {
    const main = document.querySelector(`main`);
    const projectDivContainer = document.createElement("div");
    const projectHeader = document.createElement(`h2`);
    const table = tableCreation();

    projectHeader.innerText = project.projectName;
    projectDivContainer.setAttribute(`project`, `"${project.projectName}"`);
    for (let todo of project.todos) {
      let row = document.createElement(`tr`);
      let tdName = completeElement(`td`, `${todo.title}`);
      let tdDescription = completeElement(`td`, `${todo.description}`);
      let tdDueDAte = completeElement(`td`, `${todo.dueDate}`);
      let tdPriority = completeElement(`td`, `${todo.priority}`);
      row.append(tdName, tdDescription, tdDueDAte, tdPriority);
      table.append(row);
    }

    projectDivContainer.appendChild(projectHeader);
    projectDivContainer.appendChild(table);

    main.appendChild(projectDivContainer);
  }
}

function tableCreation(
  nameValue,
  descriptionValue,
  dueDatevalue,
  priorityValue,
) {
  const table = document.createElement(`table`);
  const row = document.createElement(`tr`);
  const headerName = completeElement(`th`, `Name`);
  const headerDescription = completeElement(`th`, `Description`);
  const headerDueDate = completeElement(`th`, `Due date`);
  const headerPriority = completeElement(`th`, `Priority`);
  row.append(headerName, headerDescription, headerDueDate, headerPriority);
  table.append(row);
  return table;
}

function completeElement(name, value) {
  let result = document.createElement(`${name}`);
  result.innerText = value;
  return result;
}

createProjectForm();
createTodoForm();
displayTodos();

export { addProject, completeElement, projects };

//things to do
//update the select element to show the new projects when the create boton is presss
