function App() {
    const name = "React";
    return <h1>Welcome to {name}!</h1>;  // JSX allows embedding JavaScript expressions inside curly braces
  }
  
  export default App;
  



  import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const parentData = 'Hello from parent!';

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={parentData} />
    </div>
  );
};

export default ParentComponent;

import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{props.message}</p>
    </div>
  );
};

export default ChildComponent;
