import { games } from "./data.js";
import { addToCart } from "./cart.js";

const container = document.getElementById("games-container");

function displayGames(list) {
  container.innerHTML = "";

  // Boucle simple au lieu de forEach
  for (let i = 0; i < list.length; i++) {
    const game = list[i];
    const card = document.createElement("div");
    card.className = "bg-white p-3 rounded-xl shadow";

    card.innerHTML = `
      <img src="${game.image}" class="w-full h-40 object-cover rounded mb-2">
      <h3 class="font-bold">${game.title}</h3>
      <p class="text-blue-500 text-sm">${game.category}</p>
      <div class="flex justify-between items-center mt-2">
        <span>${game.price}$</span>
        <button class="add-btn bg-orange-500 text-white px-3 py-1 rounded">Ajouter</button>
      </div>
    `;

    card.querySelector(".add-btn").onclick = () => {
      addToCart(game);
      alert("Ajouté au panier !");
    };

    container.appendChild(card);
  }
}

// Lancement au démarrage
displayGames(games);