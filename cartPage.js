import { cart, increaseQty, decreaseQty, removeFromCart, clearCart } from "./cart.js";

const container = document.getElementById("cart-container");
const totalDiv = document.getElementById("total");
const orderBtn = document.getElementById("orderBtn");

function calculateTotal() {
  let total = 0;
  cart.forEach(item => total += item.price * item.quantity);
  totalDiv.textContent = "Total: " + total.toFixed(2) + "$";
}

function renderCart() {
  container.innerHTML = "";

  cart.forEach(item => {
    const div = document.createElement("div");

    div.className = "bg-white p-4 rounded shadow flex justify-between items-center";

    div.innerHTML = `
      <div>
        <h3 class="font-bold">${item.title}</h3>
        <p>${item.price}$</p>
      </div>

      <div class="flex items-center gap-2">
        <button class="dec bg-gray-300 px-2">-</button>
        <span>${item.quantity}</span>
        <button class="inc bg-gray-300 px-2">+</button>
        <button class="del text-red-500">🗑️</button>
      </div>
    `;

    div.querySelector(".inc").addEventListener("click", () => {
      increaseQty(item.id);
      renderCart();
    });

    div.querySelector(".dec").addEventListener("click", () => {
      decreaseQty(item.id);
      renderCart();
    });

    div.querySelector(".del").addEventListener("click", () => {
      removeFromCart(item.id);
      renderCart();
    });

    container.appendChild(div);
  });

  calculateTotal();
}

orderBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Panier vide ❌");
    return;
  }

  clearCart();
  renderCart();
  alert("Commande réussie 🎉");
});

renderCart();