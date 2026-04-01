import { games } from "./data.js";

const container = document.getElementById("games-container");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentCategory = "All";

// display
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

// 🎮 FILTER
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    currentCategory = btn.dataset.category;

    applyFilters();

    // UI (active button)
    filterButtons.forEach(b => b.classList.remove("bg-green-500","text-white"));
    btn.classList.add("bg-green-500","text-white");
  });
});

// 🔍 + 🎮 COMBINED FILTER
function applyFilters() {
  const searchValue = searchInput.value.toLowerCase();

  let filtered = games.filter(game => {
    const matchTitle = game.title.toLowerCase().includes(searchValue);
    const matchCategory =
      currentCategory === "All" || game.category === currentCategory;

    return matchTitle && matchCategory;
  });

  displayGames(filtered);
}

// 🔍 SEARCH
searchInput.addEventListener("input", applyFilters);

// initial
displayGames(games);