
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;




// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar: React.FC = () => {
//   const token = localStorage.getItem('token');
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <nav>
//       <ul className="navbar">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/cart">Cart</Link>
//         </li>
//         <li>
//           <Link to="/wishlist">Wishlist</Link>
//         </li>
//         {!token ? (
//           <>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/register">Register</Link>
//             </li>
//           </>
//         ) : (
//           <li>
//             <button onClick={handleLogout} className="logout-button">
//               Logout
//             </button>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
