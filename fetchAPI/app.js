const img = document.querySelector("#img");
const btn = document.querySelector("#btn");

btn.addEventListener("click", fetchUsers);

let req = new Request("hp.jpg");

//fetch using Request()
fetch(req)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP Error! Status ${res.status}`);
    } else {
      return res.blob();
    }
  })
  .then((res) => {
    img.src = URL.createObjectURL(res);
  });

//fetch api using async-await
async function fetchUsers() {
  let res = await fetch("https://randomuser.me/api/");
  let data = await res.json();
  console.log(data.results[0].name.first);
  console.log(res.status); //200
  console.log(res.statusText); //OK
}

//fetch from a local file

async function getPeople() {
  try {
    let res = await fetch("people.json");
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

(async function renderPeople() {
  let people = await getPeople();
  let html = "";

  people.forEach((person) => {
    let htmlSegment = `<div class="user">
                        <img src="${person.profileURL}/>
                        <h2>${person.firstName} ${person.lastName}</h2>
                        <div class="email">
                          <a href="email:${person.email}">${person.email}</a>
                        </div>
                    </div>`;
    html += htmlSegment;
  });
  let container = document.querySelector(".container");
  container.innerHTML = html;
})();
