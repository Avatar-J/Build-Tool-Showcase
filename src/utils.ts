export function createToolElement(
  data: { name: string; description: string },
  element: HTMLElement,
  index: number,
) {
  const listContainer = document.createElement('div');
  listContainer.classList.add('tool-container');

  const info = document.createElement('div');
  info.classList.add('info');

  const toolNumber = document.createElement('h2');
  toolNumber.classList.add('toolNumber');
  toolNumber.textContent = index.toString();

  const title = document.createElement('h2');
  title.textContent = data.name;

  const desc = document.createElement('p');
  desc.textContent = data.description;

  listContainer.appendChild(toolNumber);
  info.appendChild(title);
  info.appendChild(desc);
  listContainer.appendChild(info);
  if (element) {
    element.appendChild(listContainer);
  }
}
