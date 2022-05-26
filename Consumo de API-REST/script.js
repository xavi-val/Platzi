const URL = "https://api.thecatapi.com/v1/images/search";
const URL_FAV = "https://api.thecatapi.com/v1/favourites";

let arrayID = [];

async function getKitty(URL) {
  const res = await fetch(`${URL}?limit=3`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": " 6870c183-0268-4451-8dc0-d0ffd8419db1",
    },
  });
  const data = await res.json();
  return data;
}

async function addKittyToFavorites(id) {
  const res = await fetch(URL_FAV, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": " 6870c183-0268-4451-8dc0-d0ffd8419db1",
    },
    body: JSON.stringify({
      image_id: id,
    }),
  });

  const container1 = document.querySelector(".three-michis");
  const container2 = document.querySelector(".favorites");
  container1.innerHTML = "";
  container2.innerHTML = "";
  showThreeKittys();
  showFavoritesKittys();
}

async function showThreeKittys() {
  const data = await getKitty(URL);
  const container = document.querySelector(".three-michis");
  arrayID = [];
  let iterator = 0;

  for (item of data) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const button3 = document.createElement("button");
    const button_text = document.createTextNode("Favorito");

    div.appendChild(img);
    div.classList.add("card-container");
    img.src = item.url;

    switch (iterator) {
      case 0:
        button1.appendChild(button_text);
        button1.onclick = () => addKittyToFavorites(data[0].id);
        div.appendChild(button1);
        break;
      case 1:
        button2.appendChild(button_text);
        button2.onclick = () => addKittyToFavorites(data[1].id);
        div.appendChild(button2);
        break;
      case 2:
        button3.appendChild(button_text);
        button3.onclick = () => addKittyToFavorites(data[2].id);
        div.appendChild(button3);
        break;
      default:
        break;
    }

    iterator++;

    container.appendChild(div);
  }
}

async function getFavoritesKittys() {
  const res = await fetch(URL_FAV, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": " 6870c183-0268-4451-8dc0-d0ffd8419db1",
    },
  });
  const data = await res.json();
  return data;
}

async function deleteFavorite(id) {
  const res = await fetch(`${URL_FAV}/${id}`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": " 6870c183-0268-4451-8dc0-d0ffd8419db1",
    },    
  });
  
  const container2 = document.querySelector(".favorites");  
  container2.innerHTML = "";  
  showFavoritesKittys();
}

async function showFavoritesKittys() {
  const data = await getFavoritesKittys();
  const container = document.querySelector(".favorites");
  let iterator = 1;

  const col1 = document.createElement("div");
  const col2 = document.createElement("div");
  const col3 = document.createElement("div");

  container.appendChild(col1);
  container.appendChild(col2);
  container.appendChild(col3);

  col1.classList.add("col");
  col2.classList.add("col");
  col3.classList.add("col");

  for (let item of data) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const button = document.createElement("button");
    const button_text = document.createTextNode("Eliminar");

    button.appendChild(button_text);
    div.appendChild(img);
    div.appendChild(button);

    switch (iterator) {
      case 1:
        col1.appendChild(div);
        iterator++;
        break;
      case 2:
        col2.appendChild(div);
        iterator++;
        break;
      case 3:
        col3.appendChild(div);
        iterator = 1;
        break;
    }

    img.src = item.image.url;
    button.onclick = () => deleteFavorite(item.id);
  }
}

showThreeKittys();
showFavoritesKittys();
