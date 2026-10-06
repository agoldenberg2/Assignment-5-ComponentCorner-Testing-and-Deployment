import "./Footer.css";

function Footer({ storeName, email, phone }) {
  return (
    <footer className="footer">
      <h2>{storeName}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>&copy; 2026 {storeName}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;