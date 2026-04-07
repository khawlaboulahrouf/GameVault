export let cart = loadCart();

function loadCart() {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(game) {
  let found = false;
  // Boucle simple pour chercher si le jeu existe
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === game.id) {
      cart[i].quantity++;
      found = true;
      break; 
    }
  }

  if (!found) {
    // On ajoute manuellement la propriété quantity
    game.quantity = 1;
    cart.push(game);
  }
  saveCart();
}

export function increaseQty(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity++;
      break;
    }
  }
  saveCart();
}

export function decreaseQty(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity--;
      // Si la quantité tombe à 0, on supprime
      if (cart[i].quantity <= 0) {
        removeFromCart(id);
        return; // On sort de la fonction
      }
      break;
    }
  }
  saveCart();
}

export function removeFromCart(id) {
  let newCart = [];
  // On reconstruit un tableau sans l'élément à supprimer
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id !== id) {
      newCart.push(cart[i]);
    }
  }
  cart = newCart;
  saveCart();
}

export function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
}