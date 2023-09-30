document.addEventListener("DOMContentLoaded", function () {
    const postForm = document.getElementById("new-post-form");
    const postList = document.getElementById("post-list");

    postForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const postContent = document.getElementById("post-content").value;

        if (username.trim() === "" || postContent.trim() === "") {
            alert("Please fill out both fields.");
            return;
        }

        const post = document.createElement("div");
        post.classList.add("post");
        post.innerHTML = `
            <h3>${username}</h3>
            <p>${postContent}</p>
        `;

        postList.appendChild(post);

        // Clear the form
        document.getElementById("username").value = "";
        document.getElementById("post-content").value = "";
    });
});
