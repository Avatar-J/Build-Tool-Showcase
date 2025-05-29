/**
 * @jest-environment jsdom
 */

import {
  updateCurrentYear,
  addListenerToThemeSwitch,
  displayTools,
} from '../src/index';
import { createToolElement } from '../src/utils';
import moment from 'moment';

const data = {
  name: 'Webpack',
  description: 'A module bundler for modern JavaScript applications.',
};
const tools = [
  {
    name: 'Webpack',
    description: 'A module bundler for modern JavaScript applications.',
  },
  {
    name: 'Sass',
    description: 'Jummai is awesome',
  },
];

describe('test createToolCard', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <section id="tool-section"></section>
    `;
  });

  test('should create and append a tool element with title and description', () => {
    const parentElement = document.getElementById(
      'tool-section'
    ) as HTMLElement;

    createToolElement(data, parentElement);

    const toolContainer = parentElement.querySelector('.tool-container');
    expect(toolContainer).not.toBeNull();

    const title = toolContainer?.querySelector('h2');
    const desc = toolContainer?.querySelector('p');

    expect(title?.textContent).toBe('Webpack');
    expect(desc?.textContent).toBe(
      'A module bundler for modern JavaScript applications.'
    );
  });

  test('should call createToolElement for each tool', () => {
    const parentElement = document.getElementById(
      'tool-section'
    ) as HTMLElement;

    const createToolElementSpy = jest.spyOn(
      require('../src/utils'),
      'createToolElement'
    );

    displayTools({ tools }, parentElement);

    expect(createToolElementSpy).toHaveBeenCalledTimes(2);
    expect(createToolElementSpy).toHaveBeenCalledWith(tools[0], parentElement);
    expect(createToolElementSpy).toHaveBeenCalledWith(tools[1], parentElement);
  });
});

describe('change theme', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="toggleTheme"></button>
    `;
  });

  test('should toggle darkTheme class on body when clicked', () => {
    const themeSwitchBtn = document.getElementById(
      'toggleTheme'
    ) as HTMLElement;

    addListenerToThemeSwitch(themeSwitchBtn);
    themeSwitchBtn.click();

    expect(document.body.classList.contains('darkTheme')).toBe(true);
  });
});

test('updates the copyright to the current year', () => {
  const element = document.createElement('span');

  updateCurrentYear(element);

  const expectedYear = moment().format('YYYY');
  expect(element.textContent).toBe(expectedYear);
});
