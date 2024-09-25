import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define a function to fetch data
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data); // Update state with fetched data
      } catch (error) {
        setError(error.message); // Set error message in case of failure
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchUsers(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs only once

  // Render loading state, error message, or user list
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
