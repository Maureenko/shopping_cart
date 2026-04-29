import { useState } from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../context/CartContext';
import QuantityInput from './QuantityInput';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <div className="product-rating">
          <span className="rating-stars">⭐ {product.rating?.rate || 'N/A'}</span>
          <span className="rating-count">({product.rating?.count || 0} reviews)</span>
        </div>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="product-actions">
          <QuantityInput
            initialQuantity={quantity}
            onQuantityChange={setQuantity}
          />
          <button
            className={`add-to-cart-btn ${added ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {added ? '✓ Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }).isRequired,
};

export default ProductCard;