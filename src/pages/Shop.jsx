import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(['all', ...data]);
    } catch (err) {
      console.error('Failed to fetch categories:', err);
    }
  };

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  if (loading) {
    return (
      <div className="shop-loading">
        <div className="spinner"></div>
        <p>Loading amazing products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="shop-error">
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
        <button onClick={fetchProducts} className="retry-btn">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="shop">
      <div className="shop-header">
        <h1>Our Products</h1>
        <p>Browse our collection of quality items</p>
      </div>

      <div className="shop-filters">
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? 'All Products' : category}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">
          <p>No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;