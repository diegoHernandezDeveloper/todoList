import { addProject, completeElement, projects } from "./index.js";

function createProjectForm() {
  const main = document.querySelector(`main`);
  const form = document.createElement(`form`);
  const projectNameLabel = completeElement(`label`, `Create a new project:`);
  const projectNameinput = document.createElement("input");
  const createBtn = completeElement(`button`, `Create`);

  projectNameinput.setAttribute("inputProject", ``);
  createBtn.addEventListener(`click`, (e) => {
    e.preventDefault();
    addProject();

    refrestSelect();
  });

  form.append(projectNameLabel, projectNameinput, createBtn);
  main.append(form);
}

function createTodoForm() {
  const main = document.querySelector(`main`);
  const form = document.createElement(`form`);

  const inputTitleLabel = completeElement(`label`, `Title`);
  const inputTitle = document.createElement("input");
  const inputDescriptionLabel = completeElement(`label`, `Description`);
  const inputDescription = document.createElement("input");
  const inputDueDateLabel = completeElement(`label`, `Due Date`);
  const inputDueDate = document.createElement("input");
  const selectPriorityLabel = completeElement(`label`, `Priority`);
  const selectPriority = document.createElement("select");
  const optionHigh = completeElement(`option`, `high`);
  const optionMedium = completeElement(`option`, `medium`);
  const optionLow = completeElement(`option`, `low`);
  const selectProjectLabel = completeElement(`label`, `Select project`);
  const selectProject = document.createElement(`select`);
  const addBtn = completeElement(`button`, `Add`);

  optionHigh.value = `high`;
  optionMedium.value = `medium`;
  optionLow.value = `low`;
  selectProject.setAttribute(`selectProjects`, ``);

  for (let project of projects) {
    let option = completeElement(`option`, `${project.projectName}`);
    option.value = project.projectName;
    selectProject.append(option);

    addBtn.addEventListener(`click`, (e) => {
      e.preventDefault();
      console.log(selectProject.value);
    });

    selectPriority.append(optionHigh, optionMedium, optionLow);

    form.append(
      inputTitleLabel,
      inputTitle,
      inputDescriptionLabel,
      inputDescription,
      inputDueDateLabel,
      inputDueDate,
      selectPriorityLabel,
      selectPriority,
      selectProjectLabel,
      selectProject,
      addBtn,
    );

    main.appendChild(form);
  }
}

function refrestSelect() {
  const select = document.querySelector(`select[selectprojects]`);
  select.replaceChildren();
  for (let project of projects) {
    let option = completeElement(`option`, `${project.projectName}`);
    option.value = project.projectName;
    select.append(option);
  }
}

export { createProjectForm, createTodoForm };

//restructure this shit and implement a loop to show every project before the button add
