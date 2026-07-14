const baseURL = "https://apis.scrimba.com/jsonplaceholder";
const main = document.querySelector("#all-post-container");

fetch(`${baseURL}/posts`, { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    allPostDOM(data);
  });

// Show 5 posts
function allPostDOM(data) {
  const postsArray = data.slice(0, 5);
  const allPosts = postsArray.forEach((post) => {
    main.innerHTML += `<div class="card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <hr>
        </div>`;
  });
}

// Combine the title value and body value into an object
function postObject(title, body) {
  return {
    title,
    body,
  };
}

//  Update the DOM with the new blog entry
function newPostDOM(data) {
  main.innerHTML =
    `<div class="card">
            <h2>${data.title}</h2>
            <p>${data.body}</p>
            <hr>
        </div>` + main.innerHTML;
}

document.querySelector("#new-post").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const data = postObject(title, body);
  //  Send this off to the server!
  fetch(`${baseURL}/posts`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => newPostDOM(data));
});
