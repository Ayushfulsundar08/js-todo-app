document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input[type="text"]');
  const addBtn = document.querySelector('button');
  const ul = document.querySelector('ul');
  const toggleThemeBtn = document.querySelector('.toggle-theme button');

  // Add Task
  addBtn.addEventListener('click', () => {
    if (input.value.trim() === '') return;

    const li = document.createElement('li');
    li.textContent = input.value;
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    ul.appendChild(li);
    input.value = '';
  });

  // Enter key functionality
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addBtn.click();
  });

  // Toggle Theme
  toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');

    const theme = document.body.classList.contains('light') ? '🌞' : '🌙';
    toggleThemeBtn.textContent = theme;
  });

  // Set initial icon
  toggleThemeBtn.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
});
