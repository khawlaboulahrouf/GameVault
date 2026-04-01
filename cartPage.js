import { cart, increaseQty, decreaseQty, removeFromCart } from "./cart.js";

const container = document.getElementById("cart-container");

function renderCart() {
  container.innerHTML = "";

  cart.forEach(item => {
    const div = document.createElement("div");

    div.className =
      "bg-white p-4 rounded-lg shadow flex justify-between items-center";

    div.innerHTML = `
      <div>
        <h3 class="font-bold">${item.title}</h3>
        <p class="text-gray-500">${item.price}$</p>
      </div>

      <div class="flex items-center gap-2">
        
        <button class="dec bg-gray-300 px-2 rounded">-</button>

        <span>${item.quantity}</span>

        <button class="inc bg-gray-300 px-2 rounded">+</button>

        <button class="del text-red-500 ml-3">🗑️</button>
      </div>
    `;

    // ➕
    div.querySelector(".inc").addEventListener("click", () => {
      increaseQty(item.id);
      renderCart();
    });

    // ➖
    div.querySelector(".dec").addEventListener("click", () => {
      decreaseQty(item.id);
      renderCart();
    });

    // 🗑️
    div.querySelector(".del").addEventListener("click", () => {
      removeFromCart(item.id);
      renderCart();
    });

    container.appendChild(div);
  });
}

renderCart();