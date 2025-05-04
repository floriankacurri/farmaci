document.addEventListener("DOMContentLoaded", function() {

    const signInForm = document.querySelector('.sign-in-container form');
            
    signInForm.onsubmit = (ev) => {
        ev.preventDefault();
        
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;
        console.log(username, password);
        let users = localStorage.getItem('users');
        users = JSON.parse(users) || {};
        let exists = false;
        let allowLogin = false;
        if (users[username]) {
            exists = true;
            const storedPassword = users[username].password;
            if (password === storedPassword){
                allowLogin = true;
            }
        } else {
            return alert('Ky username nuk ekziston!');
        }
        if (allowLogin){
            localStorage.setItem('logedInUser', username);
            location.href = 'index.html';
        } else {
            return alert('Fjalekalim i pasakte!');
        }
    };

});
