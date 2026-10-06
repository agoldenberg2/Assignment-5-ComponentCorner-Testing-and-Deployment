
import ProductCard from "../components/ProductCard";

function ProductsPage({ products, addToCart }) {
  return (
    <main className="products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          name={product.name}
          price={product.price}
          image={product.image}
          description={product.description}
          onAddToCart={addToCart}
        />
      ))}
    </main>
  );
}

export default ProductsPage;
