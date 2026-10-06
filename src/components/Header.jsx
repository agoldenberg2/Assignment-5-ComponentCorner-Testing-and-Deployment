
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <h1>{storeName}</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          🛒 {cartCount}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
