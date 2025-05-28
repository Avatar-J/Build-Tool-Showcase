import "./style.scss";
import * as packageJson from "../package.json";

const mainContainer = document.getElementById("mainContainer");

console.log(packageJson.devDependencies);

function createListElement(data: string, element: HTMLElement) {
  const list = document.createElement("li");
  list.textContent = data;

  if (list) {
    element.appendChild(list);
  }
}

function displayTools(data: { [key: string]: string }, element: HTMLElement) {
  const toolName = Object.keys(data);

  toolName.forEach((tool) => {
    createListElement(tool, element);
  });
}

displayTools(packageJson.devDependencies, mainContainer as HTMLElement);
