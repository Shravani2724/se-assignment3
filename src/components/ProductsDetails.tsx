// // src/components/ProductDetails.tsx
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../api';

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
// }

// const ProductDetails: React.FC<{ addToCart: (product: Product) => void; addToWishlist: (product: Product) => void; }> = ({ addToCart, addToWishlist }) => {
//   const { id } = useParams<{ id: string }>(); // Get product ID from URL
//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     // Fetch product details from backend
//     api.get(`/products/${id}`)
//       .then(response => setProduct(response.data))
//       .catch(error => console.error('Error fetching product details:', error));
//   }, [id]);

//   if (!product) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="product-details">
//       <h2>{product.name}</h2>
//       <img src={product.image} alt={product.name} />
//       <p>{product.description}</p>
//       <p>Price: ${product.price.toFixed(2)}</p>
//       <button onClick={() => addToCart(product)}>Add to Cart</button>
//       <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
//     </div>
//   );
// };

// export default ProductDetails;




// src/components/ProductDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductDetails: React.FC<{
  addToCart: (product: Product) => void;
  addToWishlist: (product: Product) => void;
}> = ({ addToCart, addToWishlist }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [authToken] = useState<string | null>(localStorage.getItem('token'));

  useEffect(() => {
    // Fetch product details from backend
    api
      .get(`/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]);

  const handleAddToCart = () => {
    if (!authToken) {
      alert('Please login before adding to cart');
      navigate('/login');
    } else {
      addToCart(product!);
    }
  };

  const handleAddToWishlist = () => {
    if (!authToken) {
      alert('Please login before adding to wishlist');
      navigate('/login');
    } else {
      addToWishlist(product!);
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleAddToWishlist}>Add to Wishlist</button>
    </div>
  );
};

export default ProductDetails;
