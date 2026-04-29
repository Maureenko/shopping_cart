import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to ShopEasy</h1>
          <p className="hero-subtitle">
            Discover amazing products at unbeatable prices
          </p>
          <Link to="/shop" className="cta-button">
            Start Shopping
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Free Shipping</h3>
            <p>On orders over $50</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Secure Payment</h3>
            <p>100% secure transactions</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">↩️</div>
            <h3>Easy Returns</h3>
            <p>30-day return policy</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Quality Products</h3>
            <p>Curated selection of items</p>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-content">
          <h2>Why Choose ShopEasy?</h2>
          <p>
            We bring you a carefully curated selection of products from trusted brands.
            Shop with confidence knowing that every item has been handpicked for quality
            and value.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>10K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Products</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;