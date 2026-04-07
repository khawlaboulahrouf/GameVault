import { cart, increaseQty, decreaseQty, removeFromCart, clearCart } from "./cart.js";

const container = document.getElementById("cart-container");
const totalDiv = document.getElementById("total");
const orderBtn = document.getElementById("orderBtn");

function calculateTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  totalDiv.textContent = "Total: " + total + "$";
}

function renderCart() {
  container.innerHTML = "";

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const div = document.createElement("div");
    div.className = "bg-white p-4 rounded shadow flex justify-between items-center";

    div.innerHTML = `
      <div>
        <h3 class="font-bold">${item.title}</h3>
        <p>${item.price}$ x ${item.quantity}</p>
      </div>
      <div class="flex gap-2">
        <button class="dec bg-gray-200 px-2">-</button>
        <button class="inc bg-gray-200 px-2">+</button>
        <button class="del text-red-500">Effacer</button>
      </div>
    `;

    div.querySelector(".inc").onclick = () => { increaseQty(item.id); renderCart(); };
    div.querySelector(".dec").onclick = () => { decreaseQty(item.id); renderCart(); };
    div.querySelector(".del").onclick = () => { removeFromCart(item.id); renderCart(); };

    container.appendChild(div);
  }
  calculateTotal();
}

orderBtn.onclick = () => {
  if (cart.length > 0) {
    clearCart();
    renderCart();
    alert("Merci pour votre achat !");
  } else {
    alert("Votre panier est vide.");
  }
};

renderCart();