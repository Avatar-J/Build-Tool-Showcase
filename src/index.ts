import './style.scss';
import * as tools from '../tools.json';
import moment from 'moment';

const mainContainer = document.getElementById('tool-section');
const themeSwitchBtn = document.getElementById('toggleTheme');

function createToolElement(
  data: { name: string; description: string },
  element: HTMLElement
) {
  const listContainer = document.createElement('div');
  listContainer.classList.add('tool-container');

  const title = document.createElement('h2');
  title.textContent = data.name;

  const desc = document.createElement('p');
  desc.textContent = data.description;

  listContainer.appendChild(title);
  listContainer.appendChild(desc);
  element.appendChild(listContainer);
}

function displayTools(
  data: { tools: { name: string; description: string }[] },
  element: HTMLElement
) {
  data.tools.forEach((tool) => {
    createToolElement(tool, element);
  });
}

function addListenerToThemeSwitch(element: HTMLElement) {
  element.addEventListener('click', () => {
    console.log('theme');
    document.body.classList.toggle('darkTheme');
  });
}

const year = moment().format('YYYY');
const copyRight = document.getElementById('year');

function updateCurrentYear(element: HTMLElement, year: string) {
  element.textContent = year;
}

displayTools(tools, mainContainer as HTMLElement);
addListenerToThemeSwitch(themeSwitchBtn as HTMLElement);
updateCurrentYear(copyRight as HTMLElement, year);
