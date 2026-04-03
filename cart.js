export let cart = loadCart();


export function clearCart() {
  cart.length = 0;
  localStorage.removeItem("cart");
}

// 💾 load from localStorage
function loadCart() {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
}


// 💾 save to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ➕ ajouter
export function addToCart(game) {
  const exist = cart.find(item => item.id === game.id);

  if (exist) {
    exist.quantity += 1;
  } else {
    cart.push({ ...game, quantity: 1 });
  }

  saveCart();
}

// ➕ increase
export function increaseQty(id) {
  const item = cart.find(p => p.id === id);
  if (item) item.quantity++;

  saveCart();
}

// ➖ decrease
export function decreaseQty(id) {
  const item = cart.find(p => p.id === id);

  if (item) {
    item.quantity--;

    if (item.quantity <= 0) {
      cart = cart.filter(p => p.id !== id);
    }
  }

  saveCart();
}

// 🗑️ remove
export function removeFromCart(id) {
  cart = cart.filter(p => p.id !== id);

  saveCart();
}