const baseURL = "https://apis.scrimba.com/jsonplaceholder";
const main = document.querySelector("#all-post-container");

fetch(`${baseURL}/posts`, { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    const postsArray = data.slice(0, 5);
    const allPosts = postsArray.forEach((post) => {
      main.innerHTML += `<div class="card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <hr>
        </div>`;
    });
  });
