import { useParams, Link } from "react-router-dom";

function ProductDetailPage({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
        <main className="products">
            <h2>Product not found</h2>
            <p>sorry, the product you are looking for does not exist.</p>
            <Link to="/products">Back to Products</Link>
        </main>
    );
  }

    return (
        <main className="product-detail">
            <h2>{product.name}</h2>

            <img 
            src={product.image} 
            alt={product.name}
            width="300"
             />

            <p>{product.description}</p>
            <h3>${product.price.toFixed(2)}</h3>

            <button onClick={() => addToCart(product)}>
                Add to Cart
                </button>

        <p>
            <Link to="/products">Back to Products</Link>
        </p>
    </main>
    );
}

export default ProductDetailPage;