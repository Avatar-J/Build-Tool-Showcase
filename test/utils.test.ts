/**
 * @jest-environment jsdom
 */

import { createToolElement } from '../src/utils';

const data = {
  name: 'Webpack',
  description: 'A module bundler for modern JavaScript applications.',
};

describe('test createToolElement function', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <section id="tool-section"></section>
    `;
  });

  test('should create and append a tool element with title and description', () => {
    const parentElement = document.getElementById(
      'tool-section',
    ) as HTMLElement;

    createToolElement(data, parentElement, 1);

    const toolContainer = parentElement.querySelector('.tool-container');
    expect(toolContainer).not.toBeNull();

    const toolNumber = toolContainer?.querySelector('.toolNumber');
    expect(toolNumber?.textContent).toBe('1');

    const info = toolContainer?.querySelector('.info');
    expect(info).not.toBeNull();

    const title = info?.querySelector('h2');
    const desc = info?.querySelector('p');

    expect(title?.textContent).toBe('Webpack');
    expect(desc?.textContent).toBe(
      'A module bundler for modern JavaScript applications.',
    );
  });
});
