// this file handle the bussiness logic of user data (more like User model)

class User {

    constructor() {
        this.users = this.getUsers() || [];
    }

    saveUser(userData){
        const newUser = {
            id: Date.now(),
            ...userData,
        };

        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));

        // return window.location.href = '../signin.html';

        return {
            success: true,
        };

    }

    signInUser(usernameByInput){

        const userExist = this.users.some(user => user.username.toLowerCase() === usernameByInput.toLowerCase())

        if(userExist){

              return{
               success:true,
               username
            }; 
        }else{
            
            return {
                success:false, 
                message:'Data is not found',
            }
        }
    };

    getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
    }

}