export let cart = loadCart();

function loadCart() {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(game) {
  const exist = cart.find(item => item.id === game.id);

  if (exist) {
    exist.quantity++;
  } else {
    cart.push({ ...game, quantity: 1 });
  }

  saveCart();
}

export function increaseQty(id) {
  const item = cart.find(p => p.id === id);
  if (item) item.quantity++;
  saveCart();
}

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

export function removeFromCart(id) {
  cart = cart.filter(p => p.id !== id);
  saveCart();
}

export function clearCart() {
  cart.length = 0;
  localStorage.removeItem("cart");
}