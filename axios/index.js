const userName = document.getElementById("user-name");
const type = document.getElementById("type");
const img = document.getElementById("img");
const btn = document.getElementById("btn");

const fetchUsers = async () => {
  const response = await fetch(`https://randomuser.me/api/`);
  const user = await response.json();

  userName.innerHTML = user.results[0].name.first;
  type.innerHTML = user.results[0].name.last;
  img.setAttribute("src", user.results[0].picture.large);
};

btn.addEventListener("click", fetchUsers);
