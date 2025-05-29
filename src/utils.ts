export function createToolElement(
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
  if (element) {
    element.appendChild(listContainer);
  }
}
