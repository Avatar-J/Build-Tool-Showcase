import "./style.scss";
import * as packageJson from "../package.json";

const mainContainer = document.getElementById("tool-section");
const themeSwitchBtn = document.getElementById("toggleTheme");

function createToolElement(data: string, element: HTMLElement) {
  const listContainer = document.createElement("div");
  listContainer.classList.add("tool-container");

  const list = document.createElement("h2");
  list.textContent = data;

  if (listContainer && list) {
    listContainer.appendChild(list);
    element.appendChild(listContainer);
  }
}

function displayTools(data: { [key: string]: string }, element: HTMLElement) {
  const toolName = Object.keys(data);

  toolName.forEach((tool) => {
    createToolElement(tool, element);
  });
}

function addListenerToThemeSwitch(element: HTMLElement) {
  element.addEventListener("click", () => {
    console.log("theme");
    document.body.classList.toggle("darkTheme");
  });
}

displayTools(packageJson.devDependencies, mainContainer as HTMLElement);
addListenerToThemeSwitch(themeSwitchBtn as HTMLElement);
