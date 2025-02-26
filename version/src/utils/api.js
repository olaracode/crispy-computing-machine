import { baseUrl } from "./constants";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getFavorites() {
  return fetch(`${baseUrl}/favorites`).then(checkResponse);
}

function addFavorite(data) {
  return fetch(`${baseUrl}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
}

function removeFavorite(id) {
  return fetch(`${baseUrl}/favorites/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}

export { addFavorite, getFavorites, removeFavorite };
