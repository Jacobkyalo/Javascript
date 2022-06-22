// fetch("sample.txt")
//   .then(function (res) {
//     return res.text();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

//with arrow functions

fetch("sample.txt")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("text").innerHTML = data;
  });

fetch("users.json")
  .then((res) => res.json())
  .then((data) => {
    //let output = "<h2>Users</h2>";
    data.forEach((user) => {
      // output += `
      // <ul>
      // <li>ID: ${user.id}</li>
      // <li>Name: ${user.name}</li>
      // <li>Email: ${user.email}</li>
      // </ul>
      // `;
      let para = document.createElement("p");
      para.appendChild(
        document.createTextNode(`${user.id} : ${user.name} : ${user.email}`)
      );
      document.getElementById("users").appendChild(para);
    });
    //document.getElementById("users").innerHTML = output;
  });

//fetch from an external api,,,json placeholder
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    let posts = "";
    data.forEach((post) => {
      // document.getElementById("heading").innerHTML = post.title;
      // document.getElementById("desc").innerHTML = post.body;
      posts += `
      <div class='post'>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </div>
      `;
    });
    document.getElementById("posts").innerHTML = posts;
  });

document.getElementById("form").addEventListener("submit", postMessage);
function postMessage(e) {
  e.preventDefault();
  let title = document.getElementById("title");
  let body = document.getElementById("body");

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

fetch("https://jsonplaceholder.typicode.com/posts?id=1")
  .then((res) => res.json())
  .then((data) => console.log(data));

fetch("https://jsonplaceholder.typicode.com/photos/1")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("img").setAttribute("src", `${data.thumbnailUrl}`);
    //console.log(`${data.url}`);
  });
