import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/QuantityInput.css';

const QuantityInput = ({ initialQuantity = 1, onQuantityChange, min = 1, max = 99 }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value) || min;
    const clampedValue = Math.max(min, Math.min(max, value));
    setQuantity(clampedValue);
    onQuantityChange(clampedValue);
  };

  return (
    <div className="quantity-input">
      <button
        className="quantity-btn"
        onClick={handleDecrement}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        -
      </button>
      <input
        type="number"
        className="quantity-value"
        value={quantity}
        onChange={handleInputChange}
        min={min}
        max={max}
        aria-label="Quantity"
      />
      <button
        className="quantity-btn"
        onClick={handleIncrement}
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

QuantityInput.propTypes = {
  initialQuantity: PropTypes.number,
  onQuantityChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default QuantityInput;