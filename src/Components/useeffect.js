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

import { useEffect, useState } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Increment time by 1 second after every second
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Time: {time} seconds</p>
    </div>
  );
}

export default Timer;
import React, { useEffect } from 'react';

function MyComponent() {
    useEffect(() => {
        console.log('Component mounted');

        // Cleanup function (optional)
        return () => {
            console.log('Component unmounted');
        };
    }, []); // Empty array: effect runs only once

    return <div>Hello, World!</div>;
}
import React, { useEffect, useState } from 'react';

function DataFetchingComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(json => setData(json));
    }, []); // Run only once, when the component mounts

    return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
import React, { useState } from 'react';

function SimpleForm() {
  // State to store form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // Handle change for each input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;
import React, { useState, useEffect } from 'react';

function FormWithEffect() {
  // State to store form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // Handle change for each input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    // Here we could call an API or perform some action with form data
    console.log('Form Data Submitted:', formData);
  };

  // useEffect to run side effects when formData changes
  useEffect(() => {
    if (formData.name || formData.email) {
      console.log('Form data updated:', formData);
    }
  }, [formData]); // Runs when formData changes

  return (
    <div>
      <h2>Form with useEffect</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
  
