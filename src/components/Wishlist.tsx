import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Product {
  _id: string;
  description: string;
  image: string;
  name: string;
  price: number;
}

interface WishlistItem {
  _id: string;
  productId: Product; // Nested product details
}

interface WishlistProps {
  wishlistItems: WishlistItem[];
  removeFromWishlist: (id: string) => void;
  moveToCart: (product: Product) => void;
}

const Wishlist: React.FC<WishlistProps> = ({ wishlistItems, removeFromWishlist, moveToCart }) => {
  const navigate = useNavigate(); // For programmatic navigation

  if (wishlistItems.length === 0) {
    return <h2>Your Wishlist is Empty</h2>;
  }

  const handleMoveToCart = (item: WishlistItem) => {
    if (item.productId) {
      moveToCart(item.productId);
      navigate("/cart"); // Navigate to cart after moving item
    }
  };

  return (
    <div className="wishlist">
      <h2>Your Wishlist</h2>
      <div className="wishlist-items">
        {wishlistItems.map((item) => (
          <div key={item._id} className="wishlist-item">
            {item.productId ? (
              <>
                <img src={item.productId.image} alt={item.productId.name} className="wishlist-image" />
                <div className="wishlist-details">
                  <h3>{item.productId.name}</h3>
                  <p>{item.productId.description}</p>
                  <p className="price">${item.productId.price.toFixed(2)}</p>
                  <div className="button-group">
                    <button onClick={() => handleMoveToCart(item)} className="button">
                      Move to Cart
                    </button>
                    <button onClick={() => removeFromWishlist(item._id)} className="button">
                      Remove
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <p>Product details not available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
