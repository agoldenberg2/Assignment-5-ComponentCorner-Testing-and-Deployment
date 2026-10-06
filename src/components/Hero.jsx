import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero({ title, subtitle, callToAction }) {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button onClick={() => navigate("/products")}>
          {callToAction}
        </button>
      </div>
    </section>
  );
}

export default Hero;