import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";


function App() {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("componentCorner-Cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.warn("Cannot load cart:", error);
      return [];
    }
  });

useEffect(() => {
    try {
      localStorage.setItem(
        "componentCorner-Cart",
        JSON.stringify(cart)
      );
    } catch (error) {
      console.warn("Can not save cart:", error);
    }
  }, [cart]);
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 79.99,
      image: "https://placehold.co/600x400/667eea/ffffff?text=Headphones",
      description: "Comfortable wireless headphones with great sound.",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 59.99,
      image: "https://placehold.co/600x400/764ba2/ffffff?text=Keyboard",
      description: "A stylish mechanical keyboard for work and gaming.",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 99.99,
      image: "https://placehold.co/600x400/4facfe/ffffff?text=Smart+Watch",
      description: "Track your activity and stay connected on the go.",
    },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  return (
    <BrowserRouter>
      <Header
        storeName="ComponentCorner"
        cartCount={cart.length}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/products"
          element={
            <ProductsPage
              products={products}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetailPage
              products={products}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>

      <Footer
        storeName="ComponentCorner"
        email="support@componentcorner.com"
        phone="367-758-1111"
      />
    </BrowserRouter>
  );
}

export default App;
