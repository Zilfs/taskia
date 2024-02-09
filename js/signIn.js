//this file will act more like the controller for signin operation service

document.addEventListener('DOMContentLoaded', () => {

    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const usernameByInput = document.getElementById('username').value;

        const result = userManager.signInUser(usernameByInput);

        if(result.success){
            return window.location.href = '../tasks.html';
        }else{
            alert("username is not found");
            console.log(result.message);
        }

        console.log('submited');
    });

});