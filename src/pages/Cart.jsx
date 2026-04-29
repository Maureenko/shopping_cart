import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import '../styles/Cart.css';

const Cart = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const total = getCartTotal();

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-content">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some products to get started!</p>
          <Link to="/shop" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <button className="clear-cart-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-details">
            <div className="summary-row">
              <span>Items ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span className="free-shipping">FREE</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
          <Link to="/shop" className="continue-link">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;