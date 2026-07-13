const baseURL = "https://apis.scrimba.com/jsonplaceholder";
const main = document.querySelector("main");

fetch(`${baseURL}/posts`, { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    const postsArray = data.slice(0, 5);
    const allPosts = postsArray.forEach((post) => {
      main.innerHTML += `<div class="card">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr>
        </div>`;
    });
  });
