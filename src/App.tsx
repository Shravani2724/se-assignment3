
// import React, { useState } from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import ProductList from './components/ProductsList';
// import ProductsDetails from './components/ProductsDetails';
// import Cart from './components/Cart';
// import Wishlist from './components/Wishlist';
// import Navbar from './components/Navbar';
// import './style.css';

// const App: React.FC = () => {
//   const [cart, setCart] = useState<any[]>([]);
//   const [wishlist, setWishlist] = useState<any[]>([]);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);

//   // items are added to the cart
//   // const addToCart = (product: any) => {
//   //   const existing = cart.find(item => item.id === product.id);
//   //   if (existing) {
//   //     setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
//   //     setSuccessMessage("Item quantity increased successfully in the cart.");
//   //   } else {
//   //     setCart([...cart, { ...product, quantity: 1 }]);
//   //     setSuccessMessage("Item added successfully to the cart.");
//   //   }
//   //   setTimeout(() => {
//   //     setSuccessMessage(null);
//   // }, 3000);
//   // };

//   const addToCart = (product: any) => {
//     const existing = cart.find(item => item._id === product._id);
//     if (existing) {
//       setCart(cart.map(item => item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item));
//       setSuccessMessage("Item quantity increased successfully in the cart.");
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//       setSuccessMessage("Item added successfully to the cart.");
//     }
//     setTimeout(() => {
//       setSuccessMessage(null);
//     }, 3000);
//   }; k
  
//  // updation of quantity items
//   const updateQuantity = (id: number, quantity: number) => {
//     setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
//   };

//   // removal of items from the cart
//   const removeFromCart = (id: number) => {
//     setCart(cart.filter(item => item.id !== id));
//     setSuccessMessage("Item successfully removed from cart.");
//     setTimeout(() => {
//       setSuccessMessage(null);
//   }, 3000);
//   };

//   // moving the items to the wishlist
//   const moveToWishlist = (product: any) => {
//     removeFromCart(product.id);
//     setWishlist([...wishlist, product]);
//     setSuccessMessage("Item successfully moved to wishlist from the cart.");
//     setTimeout(() => {
//       setSuccessMessage(null);
//   }, 3000);
//   };

//   //moving the items to the wishlist from the product details
//   const addToWishlist = (product: any) => {
//   if (!wishlist.find(item => item._id === product._id)) {
//     setWishlist([...wishlist, product]);
//     setSuccessMessage("Item added successfully to the wishlist.");
//   } else {
//     setSuccessMessage("Item is already in the wishlist.");
//   }
//   setTimeout(() => {
//     setSuccessMessage(null);
//   }, 3000);
// };

//   // Removing the item from the wishlist
//   const removeFromWishlist = (id: number) => {
//     setWishlist(wishlist.filter(item => item.id !== id));
//     setSuccessMessage("Item successfully removed from wishlist.");
//     setTimeout(() => {
//       setSuccessMessage(null);
//   }, 3000);
//   };
  
//     // Determine which class to apply based on the current route
//     const backgroundClass =
//       location.pathname === '/' ? 'homebackground' : 'App';

  
//   return (
//     <div className={backgroundClass}>
//       <div>
//        {successMessage && <div className="success-message">{successMessage}</div>}
//       </div>
//       <h1 className =" header ">WELCOME TO FASHION CRUSH</h1>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<ProductList />} />
//         <Route path="/product/:id" element={<ProductsDetails addToCart={addToCart} addToWishlist={moveToWishlist}/>} />
//         <Route path="/cart" element={<Cart cartItems={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} moveToWishlist={moveToWishlist} />} />
//         <Route path="/wishlist" element={<Wishlist wishlistItems={wishlist} removeFromWishlist={removeFromWishlist} moveToCart={addToCart} />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;











// import React, { useState } from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import ProductList from './components/ProductsList';
// import ProductsDetails from './components/ProductsDetails';
// import Cart from './components/Cart';
// import Wishlist from './components/Wishlist';
// import Navbar from './components/Navbar';
// import './style.css';
// import axios from 'axios';

// const App: React.FC = () => {
//   const [cart, setCart] = useState<any[]>([]);
//   const [wishlist, setWishlist] = useState<any[]>([]);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);

//   const addToCart = async (product: any) => {
//     try {
//       const response = await axios.post('/api/cart', { productId: product._id, quantity: 1 });
//       setCart([...cart, { ...product, quantity: response.data.quantity }]);
//       setSuccessMessage("Item added successfully to the cart.");
//     } catch (error) {
//       console.error("Error adding to cart", error);
//     }
//   };

//   const updateQuantity = (id: string, quantity: number) => {
//     setCart(cart.map(item => item._id === id ? { ...item, quantity } : item));
//   };

//   const removeFromCart = (id: string) => {
//     setCart(cart.filter(item => item._id !== id));
//     setSuccessMessage("Item successfully removed from cart.");
//     setTimeout(() => {
//       setSuccessMessage(null);
//     }, 3000);
//   };


//   const moveToWishlist = (product: any) => {
//     removeFromCart(product._id);
//     if (!wishlist.find(item => item._id === product._id)) {
//       setWishlist([...wishlist, product]);
//       setSuccessMessage("Item successfully moved to wishlist from the cart.");
//     } else {
//       setSuccessMessage("Item is already in the wishlist.");
//     }
//     setTimeout(() => {
//       setSuccessMessage(null);
//     }, 3000);
//   };

//   const addToWishlist = (product: any) => {
//     if (!wishlist.find(item => item._id === product._id)) {
//       setWishlist([...wishlist, product]);
//       setSuccessMessage("Item added successfully to the wishlist.");
//     } else {
//       setSuccessMessage("Item is already in the wishlist.");
//     }
//     setTimeout(() => {
//       setSuccessMessage(null);
//     }, 3000);
//   };


//   const removeFromWishlist = (id: string) => {
//     setWishlist(wishlist.filter(item => item._id !== id));
//     setSuccessMessage("Item successfully removed from wishlist.");
//     setTimeout(() => {
//       setSuccessMessage(null);
//     }, 3000);
//   };

//   const backgroundClass = useLocation().pathname === '/' ? 'homebackground' : 'App';

//   return (
//     <div className={backgroundClass}>
//       <div>
//         {successMessage && <div className="success-message">{successMessage}</div>}
//       </div>
//       <h1 className="header">WELCOME TO FASHION CRUSH</h1>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<ProductList />} />
//         <Route path="/product/:id" element={<ProductsDetails addToCart={addToCart} addToWishlist={addToWishlist} />} />
//         <Route path="/cart" element={<Cart cartItems={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} moveToWishlist={moveToWishlist} />} />
//         <Route path="/wishlist" element={<Wishlist wishlistItems={wishlist} removeFromWishlist={removeFromWishlist} moveToCart={addToCart} />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;







import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import ProductList from './components/ProductsList';
import ProductsDetails from './components/ProductsDetails';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import './style.css';
import api from './api';

const App: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(localStorage.getItem('token'));

  
    useEffect(() => {
      setAuthToken(localStorage.getItem('token'));
    }, []);

  // Fetch initial data for cart and wishlist from the backend
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await api.get('/cart');
        setCart(response.data);
      } catch (error) {
        console.error("Error fetching cart data", error);
      }
    };
  
    const fetchWishlist = async () => {
      try {
        const response = await api.get('/wishlist');
        setWishlist(response.data);
      } catch (error) {
        console.error("Error fetching wishlist data", error);
      }
    };
  
    fetchCart();
    fetchWishlist();
  }, [cart, wishlist]); // Empty dependency array to ensure it runs only once
  

  const addToCart = async (product: any) => {
    try {
      const response = await api.post('/cart', { productId: product._id, quantity: 1 });
      setCart([...cart, { ...product, quantity: response.data.quantity }]);
      setSuccessMessage("Item added successfully to the cart.");
    } catch (error) {
      console.error("Error adding to cart", error);
    }
    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
  };

  const updateQuantity = async (id: string, quantity: number) => {
    try {
      const response = await api.put(`/cart/${id}`, { quantity });
      setCart(cart.map(item => item._id === id ? { ...item, quantity: response.data.quantity } : item));
    } catch (error) {
      console.error("Error updating cart item quantity", error);
    }
  };

  const removeFromCart = async (id: string) => {
    try {
      await api.delete(`/cart/${id}`);
      setCart(cart.filter(item => item._id !== id));
      setSuccessMessage("Item successfully removed from cart.");
    } catch (error) {
      console.error("Error removing from cart", error);
    }
    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
  };

  const addToWishlist = async (product: any) => {
    try {
      const response = await api.post('/wishlist', { productId: product._id });
      
      // Only update the wishlist if the item is not already present
      setWishlist(prevWishlist => {
        if (!prevWishlist.find(item => item._id === product._id)) {
          return [...prevWishlist, response.data];
        }
        setSuccessMessage("Item is already in the wishlist.");
        return prevWishlist;
      });
  
      setSuccessMessage("Item added successfully to the wishlist.");
    } catch (error) {
      console.error("Error adding to wishlist", error);
    }
    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
  };

  const removeFromWishlist = async (id: string) => {
    try {
      await api.delete(`/wishlist/${id}`);
      setWishlist(wishlist.filter(item => item._id !== id));
      setSuccessMessage("Item successfully removed from wishlist.");
    } catch (error) {
      console.error("Error removing from wishlist", error);
    }
    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
  };

  const backgroundClass = useLocation().pathname === '/' ? 'homebackground' : 'App';

  return (
    <div className={backgroundClass}>
      <div>
        {successMessage && <div className="success-message">{successMessage}</div>}
      </div>
      <h1 className="header">WELCOME TO FASHION CRUSH</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductsDetails addToCart={addToCart} addToWishlist={addToWishlist} />} />
        {/* <Route path="/cart" element={<Cart cartItems={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} /> */}
        <Route path="/wishlist" element={<Wishlist wishlistItems={wishlist} removeFromWishlist={removeFromWishlist} moveToCart={addToCart} />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setAuthToken={setAuthToken} />} />
        <Route
          path="/"
          element={authToken ? <ProductList /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={authToken ? <Cart cartItems={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} /> : <Navigate to="/login" />}
        />
        <Route
          path="/wishlist"
          element={authToken ? <Wishlist wishlistItems={wishlist} removeFromWishlist={removeFromWishlist} moveToCart={addToCart} /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          // element={authToken ? <Profile /> : <Navigate to="/login" />}
          element ={<Profile/>}
        />
      </Routes>
    </div>
  );
};

export default App;