
import React  from 'react';
// import { Link } from 'react-router-dom';

interface CartItem {
  _id: string;
  productId: {
    _id: string;
    name: string;
    price: number;
    image: string;
  } | null; // Allow productId to be null in case of missing data
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  // moveToWishlist: (item: CartItem) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, updateQuantity, removeFromCart }) => {

  const handleQuantityChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const total = cartItems.reduce((sum, item) => {
    if (item.productId && item.productId.price) {
      return sum + item.productId.price * item.quantity;
    }
    return sum;
  }, 0);



  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item._id} className="cart-item">
              {item.productId ? (
                <>
                  <img src={item.productId.image} alt={item.productId.name} />
                  <div className="item-details">
                    <h3>{item.productId.name}</h3>
                    <p>${(item.productId.price ?? 0).toFixed(2)}</p>
                    <div className="quantity-controls">
                      <label htmlFor={`quantity-${item._id}`}>Quantity:</label>
                      <input
                        id={`quantity-${item._id}`}
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) => handleQuantityChange(item._id, e)}
                      />
                    </div>
                    <div className="cart-buttons">
                      <button onClick={() => removeFromCart(item._id)}>Remove</button>
                      {/* <button onClick={() => moveToWishlist(item)}>
                        <Link to="/wishlist">Move to Wishlist</Link>
                      </button> */}
                    </div>
                  </div>
                </>
              ) : (
                <p>Product details not available</p>
              )}
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
