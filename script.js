// Capturamos el nombre de usuario al iniciar sesión
let username = '';

document.getElementById('enter-chat').addEventListener('click', function() {
    username = document.getElementById('username-input').value;
    if (username) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('chat-container').style.display = 'block';
    } else {
        alert('Por favor, ingresa un nombre de usuario');
    }
});

document.getElementById('send-message').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    const chatBox = document.getElementById('chat-box');

    if (message) {
        // El nombre de usuario se muestra junto con "kali"
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `<span class="username">${username}@kali</span>:<span class="prompt">~/Desktop#</span> ${message}`;
        chatBox.appendChild(messageElement);
        messageInput.value = '';  // Limpiar el campo del mensaje
    }

    chatBox.scrollTop = chatBox.scrollHeight;  // Desplaza hacia abajo
});