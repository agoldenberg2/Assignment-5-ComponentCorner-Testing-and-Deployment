import "./CartItem.css"
function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <strong>{item.name}</strong>
        <span>${item.price}</span>
        </div>
      <button onClick={() => onRemove(item.id)}>
        Remove
        </button>
    </div>
  );
}

export default CartItem;