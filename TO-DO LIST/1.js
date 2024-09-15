document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return;
    
    const taskList = document.getElementById('task-list');
    
    const listItem = document.createElement('li');
    listItem.className = 'task-item';
    
    const textNode = document.createElement('span');
    textNode.className = 'task-text';
    textNode.textContent = taskText;
    
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-task';
    deleteButton.innerHTML = '&times;'; // HTML entity for the cross symbol
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });
    
    listItem.appendChild(textNode);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    
    taskInput.value = '';
});
