
import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product, name, price, image, description, onAddToCart }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={image} alt={name} className="product-image" />
      </Link>

      <div className="product-info">
        <Link
          to={`/product/${product.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h2>{name}</h2>
        </Link>

        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>

        <button onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

// I used AI to help me with this step with the navigation so customers can click a product to view its details.
// I was running into a lot of trouble with this step and watching videos still didnt help so i gave AI the code that I had wrote and help me fix it so the naviagtion would work appropriately. 