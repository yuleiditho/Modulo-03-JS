// Usuarios predefinidos
const users = {
    'denior': { name: "Denisse Oliva", username: "denisse", password: "1234", image: "media/profiles/jake.jpg" },
    'marcos1': { name: "Mario Marcos", username: "mario", password: "abc", image: "media/profiles/profile_man.jpg" },
    'luz22': { name: "Luz Casas", username: "luz22", password: "abc", image: "media/profiles/profile_woman.jpg" }
};

// Comentarios predefinidos
const initialComments = [
    { id: 1, text: 'Me encanta este sitio 😁', autor: users['marcos1'], fecha: '25/02/2025 11:00:00' },
    { id: 2, text: 'Ya tengo la demo 😎', autor: users['luz22'], fecha: '26/02/2025 11:00:00' }
];

function logIn(event) {
    event.preventDefault(); // Evita el envío del formulario

    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Buscar usuario
    const userFind = Object.values(users).find(user => user.username === usernameInput && user.password === passwordInput);

    if (userFind) {
        // Guardar usuario logueado
        localStorage.setItem("loggedUser", JSON.stringify(userFind));

        // Verificar si hay comentarios previos
        if (!localStorage.getItem("comments")) {
            localStorage.setItem("comments", JSON.stringify(initialComments)); // Solo guardar si no existen
        }

        // Redirigir a home
        window.location.href = "assets/home.html";
    } else {
        // Mostrar error
        errorMessage.textContent = "Datos incorrectos, inténtelo de nuevo!";
        errorMessage.style.display = "block"; 
    }
}

// Evento para el formulario de login
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".my-form");
    if (loginForm) {
        loginForm.addEventListener("submit", logIn);
    }
});

