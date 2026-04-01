export let cart = [];

// ➕ ajouter
export function addToCart(game) {
  const exist = cart.find(item => item.id === game.id);

  if (exist) {
    exist.quantity += 1;
  } else {
    cart.push({ ...game, quantity: 1 });
  }
}

// ➕ augmenter quantité
export function increaseQty(id) {
  const item = cart.find(p => p.id === id);
  if (item) item.quantity++;
}

// ➖ diminuer quantité
export function decreaseQty(id) {
  const item = cart.find(p => p.id === id);

  if (item) {
    item.quantity--;

    if (item.quantity <= 0) {
      cart = cart.filter(p => p.id !== id);
    }
  }
}

// 🗑️ supprimer produit
export function removeFromCart(id) {
  cart = cart.filter(p => p.id !== id);
}