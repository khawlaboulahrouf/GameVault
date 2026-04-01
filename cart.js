export let cart = [];

export function addToCart(game){
    const exist = cart.find(item => item.id === game.id );
    if(exist){
        exist.quantity += 1;
    }else{
        cart.push({...game, quantity : 1});
    }
    console.log(cart);
}