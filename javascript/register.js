document.addEventListener("DOMContentLoaded", function() {

    const signUpForm = document.querySelector('.sign-up-container form');
            
    signUpForm.onsubmit = (ev) => {
        ev.preventDefault();
        
        const username = document.querySelector('#username').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const userData = {
            username: username,
            email: email,
            password: password,
        }; 
        console.log(userData);
        let users = localStorage.getItem('users');
        users = JSON.parse(users) || {};
        if (users[username]) {
            return alert('Ky username ekziston!\nJu lutem vendosni nje tjeter!');
        }
        users[username] = userData;
        console.log('users', users);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('logedInUser', username);
        location.href = 'index.html';
    };
});
