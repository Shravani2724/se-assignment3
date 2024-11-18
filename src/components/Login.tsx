
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Login: React.FC<{ setAuthToken: (token: string | null) => void }> = ({ setAuthToken }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', formData);
      localStorage.setItem('token', response.data.token);
      setAuthToken(response.data.token);
      navigate('/');
    // } catch (error) {
    //   console.error(error);
    //   alert('Error logging in');
    }catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Login;

