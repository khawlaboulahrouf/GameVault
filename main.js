import { games } from "./data.js";
import { addToCart } from "./cart.js";

const container = document.getElementById("games-container");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentCategory = "All";

function displayGames(list) {
  container.innerHTML = "";

  list.forEach(game => {
    const card = document.createElement("div");

    card.className = "bg-white p-3 rounded-xl shadow";

    card.innerHTML = `
      <img src="${game.image}" class="w-full h-40 object-cover rounded mb-2">
      <h3 class="font-bold">${game.title}</h3>
      <p class="text-blue-500 text-sm">${game.category}</p>
      <div class="flex justify-between items-center mt-2">
        <span>${game.price}$</span>
        <button class="add-btn bg-orange-500 text-white px-3 py-1 rounded">
          Panier
        </button>
      </div>
    `;

    card.querySelector(".add-btn").addEventListener("click", () => {
      addToCart(game);
      alert("Ajouté ✅");
    });

    container.appendChild(card);
  });
}

function applyFilters() {
  const value = searchInput.value.toLowerCase();

  const filtered = games.filter(game => {
    const matchTitle = game.title.toLowerCase().includes(value);
    const matchCategory =
      currentCategory === "All" || game.category === currentCategory;

    return matchTitle && matchCategory;
  });

  displayGames(filtered);
}

searchInput.addEventListener("input", applyFilters);

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentCategory = btn.dataset.category;
    applyFilters();

    filterButtons.forEach(b => b.classList.remove("bg-green-500","text-white"));
    btn.classList.add("bg-green-500","text-white");
  });
});

displayGames(games);