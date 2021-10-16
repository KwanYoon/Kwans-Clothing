export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
  
  if (existingCartItem) { // if cart item exists in array
    return cartItems.map(
      cartItem => cartItem.id === cartItemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1} // add to quantity if matching id
        : cartItem
      );
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}]; // adding new cart item to array
}
