document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const input = document.getElementById('todo-input');
    const newTask = input.value.trim();

    if (newTask) {
        addTaskToList(newTask);
        input.value = '';
    }
});

function addTaskToList(task) {
    const ul = document.getElementById('todo-list');
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = task;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', function() {
        ul.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeButton);
    ul.appendChild(li);
}
