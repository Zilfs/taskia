//this file will act more like the controller for User data

document.addEventListener('DOMContentLoaded', () => {

    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const userData = {
            username: document.getElementById('username').value,
        };

        userManager.saveUser(userData);

        console.log('berhasil tersubmit');
    });

});