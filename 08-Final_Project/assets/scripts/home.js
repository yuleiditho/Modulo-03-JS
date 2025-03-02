document.addEventListener("DOMContentLoaded", function () {
    loadUserData();
    loadComments();
    likedButton();

    document.getElementById("comment-form").addEventListener("submit", addComment);
});

function loadUserData() {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    if (loggedUser) {
        document.getElementById('profileImage').src = loggedUser.image;
        document.getElementById('profile-avatar').src = loggedUser.image;
        document.getElementById('profile-name').textContent = loggedUser.name;
    }
}

// Cargar comentarios al iniciar
function loadComments() {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    const commentsContainer = document.querySelector("#all-comments");

    commentsContainer.innerHTML = ""; 

    comments.forEach(comment => {
        commentsContainer.appendChild(createCommentElement(comment)); 
    });
}

// Agregar comentario
function addComment(event) {
    event.preventDefault();

    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (!loggedUser) return;

    const commentText = document.getElementById("comment").value.trim();
    if (commentText === "") return;

    // Obtener comentarios previos
    const comments = JSON.parse(localStorage.getItem("comments")) || [];

    // Crear nuevo comentario
    const newComment = {
        id: self.crypto.randomUUID(),
        text: commentText,
        autor: loggedUser,
        fecha: new Date().toLocaleString()
    };


    comments.unshift(newComment);
    localStorage.setItem("comments", JSON.stringify(comments));


    const commentsContainer = document.querySelector("#all-comments");
    commentsContainer.prepend(createCommentElement(newComment));

    document.getElementById("comment").value = "";
}

// Crear elemento de comentario
function createCommentElement(comment) {
    const commentElement = document.createElement("div");
    commentElement.classList.add("show-comment");
    commentElement.dataset.id = comment.id;

    const userImageContainer = document.createElement("div");
    const userImage = document.createElement("img");
    userImage.src = comment.autor.image;
    userImage.classList.add("user-avatar");
    userImage.setAttribute("alt", "Profile Picture");
    userImageContainer.appendChild(userImage);

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("cmt-content");

    const userInfo = document.createElement("div");
    userInfo.classList.add("user-info");
    const userName = document.createElement("h2");
    userName.textContent = comment.autor.name;
    const commentDate = document.createElement("span");
    commentDate.textContent = `✔️ ${comment.fecha}`;
    userInfo.appendChild(userName);
    userInfo.appendChild(commentDate);

    const commentText = document.createElement("p");
    commentText.textContent = comment.text;

    contentContainer.appendChild(userInfo);
    contentContainer.appendChild(commentText);

    commentElement.appendChild(userImageContainer);
    commentElement.appendChild(contentContainer);


    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser && loggedUser.username === comment.autor.username) {
        const actionsContainer = document.createElement("div");
        actionsContainer.classList.add("actions");

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn", "fa-solid", "fa-trash");
        deleteBtn.addEventListener("click", () => deleteComment(comment.id));

        actionsContainer.appendChild(deleteBtn);
        contentContainer.appendChild(actionsContainer);
    }

    return commentElement;
}

// Eliminar comentario
function deleteComment(commentId) {
    const confirmation = window.confirm("¿Seguro que deseas eliminar tu comentario?");
    if (!confirmation) return;

    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments = comments.filter(comment => comment.id !== commentId);

    localStorage.setItem("comments", JSON.stringify(comments));

    // Eliminar de la interfaz
    document.querySelector(`[data-id="${commentId}"]`).remove();
}

function likedButton(){
    const likeBtn = document.getElementById("like-btn");
    const likeCount = document.getElementById("like-count");

  
    const userId = localStorage.getItem("currentUser"); 

    const storageKey = `likeStatus_${userId}`;


    const storedData = localStorage.getItem(storageKey);
    let likeData = storedData ? JSON.parse(storedData) : { liked: false, count: 15 }; // Valor inicial


    if (likeData.liked) {
        likeBtn.classList.add("liked");
        likeBtn.style.color = "red"; 
    }
    likeCount.textContent = likeData.count;


    likeBtn.addEventListener("click", function () {
        if (likeData.liked) {
            likeData.count -= 1;
            likeData.liked = false;
            likeBtn.classList.remove("liked");
            likeBtn.style.color = ""; 
        } else {
            likeData.count += 1;
            likeData.liked = true;
            likeBtn.classList.add("liked");
            likeBtn.style.color = "red";
        }

        likeCount.textContent = likeData.count;

        localStorage.setItem(storageKey, JSON.stringify(likeData));
    });
}

// Cerrar sesión
function logOut() {
    const confirmation = window.confirm("¿Estás seguro de que deseas cerrar sesión?");
    
    if (confirmation) {
        localStorage.removeItem("loggedUser");
        window.location.href = "login.html"; 
    }
}
