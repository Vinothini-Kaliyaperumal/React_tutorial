import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);  // Empty dependency array means this runs once after initial render

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default DataFetcher;


import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return <p>Timer: {seconds} seconds</p>;
}

export default Timer;

import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentData: 'Hello from parent!'
    };
  }

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <ChildComponent message={this.state.parentData} />
      </div>
    );
  }
}

export default ParentComponent;

import React, { Component } from 'react';

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <h2>Child Component</h2>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default ChildComponent;
