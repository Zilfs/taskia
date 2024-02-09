//this file will act more like the controller for task data

document.addEventListener('DOMContentLoaded', () => {

    const userForm = document.getElementById('taskForm');
    const taskManager = new Task();

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskData = {
            taskName: document.getElementById('taskName').value,
            taskPriority: document.getElementById('taskPriority').value,
        };

        const result = taskManager.saveTask(taskData);

        if(result.success){
            // return window.location.href = '../signin.html';
            alert('data is submited');
        }else{
            console.log('store data user procces is failed')
        }

        console.log('submited');
    });

});