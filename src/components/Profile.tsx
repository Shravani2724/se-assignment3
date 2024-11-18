// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../api';

// interface User {
//   name: string;
//   email: string;
// }

// const Profile: React.FC = () => {
//   const [user, setUser] = useState<User | null>(null);
//   const [formData, setFormData] = useState({ name: '', email: '' });
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await api.get('/profile', {
//           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//         });
//         setUser(response.data);
//         setFormData({ name: response.data.name, email: response.data.email });
//       } catch (error) {
//         console.error('Error fetching profile:', error);
//         navigate('/login'); // Redirect if not authenticated
//       }
//     };
//     fetchProfile();
//   }, [navigate]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleUpdate = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await api.put('/profile', formData, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       setUser(response.data);
//       setSuccessMessage('Profile updated successfully.');
//     } catch (error) {
//       console.error('Error updating profile:', error);
//     }
//     setTimeout(() => setSuccessMessage(null), 3000);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   if (!user) return <p>Loading...</p>;

//   return (
//     <div className="profile">
//       <h2>Profile Page</h2>
//       <form onSubmit={handleUpdate}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Update Profile</button>
//       </form>
//       {successMessage && <p>{successMessage}</p>}
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Profile;



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

interface UserProfile {
    name: string;
    email: string;
}

const Profile: React.FC = () => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/login'); 
                    return;
                }

                const response = await api.get('/profile', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setProfile(response.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
                navigate('/login'); 
            }
        };

        fetchProfile();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear JWT
        navigate('/register'); // Redirect to register page
    };

    if (!profile) {
        return <p>Loading...</p>;
    }

    return (
        <div className="profile">
            <h2>User Profile</h2>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Profile;
