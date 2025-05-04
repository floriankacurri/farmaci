document.addEventListener("DOMContentLoaded", function(ev) {

    let header = document.createElement('header');
    let body = document.querySelector('body');

    header.classList.add('header');
    header.innerHTML = `
        <a href='#' class='logo'>
            <img src='/Users/arlindhajdari/Desktop/projekt_web_final/media/LOGOOO.png' alt='' style='height: 60px; width: 60px;'>
        </a>
        <nav class='headbar'>
            <a href='index.html'>Kryefaqja</a>
            <a href='#'>Produktet</a>
            <a href='#'>Sherbimet</a>
            <a href='medical_advice.html'>Linja e Kujdesit</a>
            <a href='na_kontaktoni.html'>Na kontaktoni</a>
        </nav>
        <div class='menubtn'>
            <button><i class='fa fa-user'></i> <span style="padding-left: 5px;">Hyr / Regjistrohu</span></button>
        </div>`;

    body.prepend(header);

    const currentUser = localStorage.getItem('logedInUser') || '';
    if (currentUser.length){
        document.querySelector('.header .menubtn button span').innerText = ` ${currentUser}`;
    }

    document.querySelector('.header .menubtn').onclick = (ev) => {
        if (currentUser.length){
            let response = confirm('Deshironi te dilni nga llogaria juaj ?');
            console.log(response);
            if (response){
                localStorage.setItem('logedInUser', '');
                return location.href = 'register.html';
            }
            return;
        }
        return this.location.href = 'login.html';
    };

});
