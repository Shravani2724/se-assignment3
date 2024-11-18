
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../api';

// const Register: React.FC = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await api.post('/auth/register', formData);
//       alert('User registered successfully');
//       navigate('/login');
//     } catch (error) {
//       console.error(error);
//       alert('Error registering user');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="name" placeholder="Name" onChange={handleChange} required />
//       <input name="email" placeholder="Email" onChange={handleChange} required />
//       <input
//         name="password"
//         type="password"
//         placeholder="Password"
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', formData);
      navigate('/login'); // Redirect to login after successful registration
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <p>If you are already registered, <span onClick={() => navigate('/login')} className="link">Login here</span></p>
      <form onSubmit={handleRegister}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </div>
        <button type="submit">Register</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;

