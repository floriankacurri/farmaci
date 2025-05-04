document.addEventListener('DOMContentLoaded', function(){

    const send = document.querySelector('#send');
    const input = document.querySelector('input');
    
    function sendMessage(){
        const messageInput = document.querySelector('#messageInput');
        const text = messageInput.value;
        const today = new Date();
        console.log(text, text.length)
        if (text.length){
            let messageHtml = `
                <li class="clearfix">
                    <div class="message-data" style="text-align:right;">
                        <span class="message-data-time">${today.toLocaleTimeString()}, Today</span>
                    </div>
                    <div class="message other-message float-right">${text}</div>
                </li>`;
            document.querySelector('.chat-history ul').innerHTML += messageHtml;
            messageInput.value = '';
        }
    }

    send.onclick = (ev) => {
        sendMessage();
    };

    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            sendMessage();
        }
    });

});