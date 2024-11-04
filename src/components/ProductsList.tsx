import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api'; // Import the API configuration file

interface Product {
  _id: string; // Adjusted to match MongoDB's ObjectId type
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');

  // Fetch products from the backend when the component mounts
  useEffect(() => {
    api.get('/products')
      .then(response => {
        setProducts(response.data); // Set products from the backend response
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Event handlers for filtering
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(event.target.value === '' ? '' : Number(event.target.value));
  };

  // Filter products based on search criteria
  const filteredProducts = products.filter(product => {
    const isNameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const isPriceMatch = (minPrice === '' || product.price >= minPrice) && (maxPrice === '' || product.price <= maxPrice);
    return isNameMatch && isPriceMatch;
  });

  return (
    <div className="product">
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice === '' ? '' : minPrice}
          onChange={handleMinPriceChange}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice === '' ? '' : maxPrice}
          onChange={handleMaxPriceChange}
        />
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product._id} className="card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">${product.price.toFixed(2)}</div>
            <Link to={`/product/${product._id}`}>
              <button className="button">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;