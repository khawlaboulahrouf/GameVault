import { games } from "./data.js";

const container = document.getElementById("games-container");

function displayGames(list) {
  container.innerHTML = "";

  list.forEach(game => {
    const card = document.createElement("div");

    card.className =
      "bg-white rounded-xl shadow-md overflow-hidden p-3";

    card.innerHTML = `
      <img src="${game.image}" 
           class="w-full h-40 object-cover rounded-lg mb-3">

      <h3 class="font-bold text-lg">${game.title}</h3>

      <p class="text-blue-500 text-sm mb-2">
        ${game.category}
      </p>

      <div class="flex justify-between items-center">
        <span class="font-semibold">${game.price}$</span>

        <button class="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm">
          Panier 🛒
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

// afficher
displayGames(games);

