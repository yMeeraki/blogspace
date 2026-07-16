const baseURL = "https://apis.scrimba.com/jsonplaceholder";
const main = document.querySelector("#all-post-container");

fetch(`${baseURL}/posts`, { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    postsArray = data.slice(0, 5);

    allPostDOM(postsArray);
  });

let postsArray = [];

// Show 5 posts
function allPostDOM(posts) {
  let html = "";

  posts.forEach((post) => {
    html += postDOM(post);
  });

  main.innerHTML = html;
}

// Combine the title value and body value into an object
function postObject(title, body) {
  return {
    title,
    body,
  };
}

//  the DOM for blog entry
function postDOM(post) {
  return `<div class="card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <hr>
        </div>`;
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
    .then((data) => {
      postsArray.unshift(data);
      allPostDOM(postsArray);
      e.target.reset()
    });
});
