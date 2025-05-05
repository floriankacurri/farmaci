document.addEventListener("DOMContentLoaded", function(ev) {

    let header = document.createElement('header');
    let body = document.querySelector('body');

    header.innerHTML = `
        <a href="../html/index.html"><img src="../media/LOGOOO.png" alt="Logo-Farmacia_Jote" id="logo" style="height: 60px;"></a>
        <nav>
            <a href="../html/index.html">Faqja Kryesore</a>
            <a href="../html/kategorite.html">Produktet</a>
            <a href="../html/sherbimet.html">Sherbimet</a>
            <a href="../html/rreth_nesh.html">Rreth Nesh</a>
            <a href="../html/na_kontaktoni.html">Na kontaktoni</a>
            <a href="../html/takim_me_farmacistin.html">Takim me Farmacistin </a>
            <a href="#"><i class="fa fa-user-o" aria-hidden="true"></i><span class="login-span" style="padding-left: 5px;">Hyr / Regjistrohu</span></a>
            <a href="../html/chat_me_farmacistin.html">
              <i class="fa fa-commenting-o"></i>
            </a>
            <a href="../html/karroca.html">
              <i class="fa fa-shopping-cart"></i>
            </a>
         </nav>`;

    body.prepend(header);

    const currentUser = localStorage.getItem('logedInUser') || '';
    if (currentUser.length){
        document.querySelector('nav .login-span').innerText = ` ${currentUser}`;
    }

    document.querySelector('nav .login-span').onclick = (ev) => {
        if (currentUser.length){
            let response = confirm('Deshironi te dilni nga llogaria juaj ?');
            console.log(response);
            if (response){
                localStorage.setItem('logedInUser', '');
                return location.href = 'login.html';
            }
            return;
        }
        return this.location.href = 'login.html';
    };

});
