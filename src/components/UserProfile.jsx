// src/components/UserProfile.js
import { useEffect, useState } from 'react';

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
        try {
            const res = await fetch('/api/user'); // Fetch the user data
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const user = await res.json(); // Extract JSON data directly
            setUser(user); // Set the user state
        } catch (error) {
            setError(error.message); // Set the error state
        }
    };

    fetchUserData(); // Call the async function
}, []);

  if (error) return <div>Error loading user data</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}