const baseURL = "https://apis.scrimba.com/jsonplaceholder";

fetch(`${baseURL}/posts`, { method: "GET" })
  .then((response) => response.json())
  .then((data) => console.log(data.slice(0, 5)));
