// Función para agregar un nuevo comentario
function addComment() {
    const commentText = document.getElementById("comment").value;
    const commentBox = document.getElementById("comment-box");

    if (commentText.trim() === "") {
        alert("El comentario no puede ir vacío");
        return;
    }

    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    const userIcon = document.createElement("div");
    userIcon.classList.add("user-icon");
    userIcon.textContent = "👤";

    const commentContent = document.createElement("div");
    commentContent.classList.add("cmt-content");

    const userInfo = document.createElement("div");
    userInfo.classList.add("user-info");

    const userName = document.createElement("h2");
    userName.textContent = "Usuario"; 

    const commentDate = document.createElement("span");
    commentDate.textContent = `✔️ ${new Date().toLocaleString()}`;

    userInfo.appendChild(userName);
    userInfo.appendChild(commentDate);

    const commentParagraph = document.createElement("p");
    commentParagraph.textContent = commentText;

    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("actions");

    const likeButton = document.createElement("button");
    likeButton.classList.add("like-btn");
    likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i> <span>0</span>';

    const dislikeButton = document.createElement("button");
    dislikeButton.classList.add("dislike-btn");
    dislikeButton.innerHTML = '<i class="fas fa-thumbs-down"></i> <span>0</span>';
    
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "🗑️ Eliminar";

    const likeDislikeDiv = document.createElement("div");
    likeDislikeDiv.classList.add("like-dislike");
    likeDislikeDiv.appendChild(likeButton);
    likeDislikeDiv.appendChild(dislikeButton);

    actionsDiv.appendChild(likeDislikeDiv);
    actionsDiv.appendChild(deleteButton);
 
    commentContent.appendChild(userInfo);
    commentContent.appendChild(commentParagraph);
    commentContent.appendChild(actionsDiv);

    commentDiv.appendChild(userIcon);
    commentDiv.appendChild(commentContent);

    // Añadir el nuevo comentario al principio del contenedor de comentarios
    commentBox.insertBefore(commentDiv, commentBox.firstChild);


    document.getElementById('comment').value = "";

    addEventListenersToComment(commentDiv);
}


document.getElementById('comment-form').addEventListener('submit', function (e) {// evento al formulario para enviar comentarios
    e.preventDefault(); // Evitar que el formulario se envíe
    addComment(); // Llamar a la función para agregar el comentario
}); 
