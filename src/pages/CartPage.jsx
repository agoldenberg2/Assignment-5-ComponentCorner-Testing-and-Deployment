import CartItem from "../components/Cartitem";

function CartPage({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price || 0);
  }, 0);

  return (
    <section className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <CartItem
            key={`${item.id}-${index}`}
            item={item}
            onRemove={removeFromCart}
          />
        ))
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </section>
  );
}

export default CartPage;