import './style.scss';
import { createToolElement } from './utils';
import * as tools from '../tools.json';
import moment from 'moment';

const mainContainer = document.getElementById('tool-section');
const themeSwitchBtn = document.getElementById('toggleTheme');

export function displayTools(
  data: { tools: { name: string; description: string }[] },
  element: HTMLElement
) {
  data.tools.forEach((tool, index) => {
    const newIndex: number = index + 1;
    createToolElement(tool, element, newIndex);
  });
}

export function addListenerToThemeSwitch(element: HTMLElement) {
  element?.addEventListener('click', () => {
    document.body.classList.toggle('darkTheme');
  });
}

const copyRight = document.getElementById('year');

export function updateCurrentYear(element: HTMLElement) {
  const year = moment().format('YYYY');
  if (element) {
    element.textContent = year;
  }
}

displayTools(tools, mainContainer as HTMLElement);
addListenerToThemeSwitch(themeSwitchBtn as HTMLElement);
updateCurrentYear(copyRight as HTMLElement);
