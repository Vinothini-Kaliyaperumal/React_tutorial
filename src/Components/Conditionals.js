function Welcome(props) {
    if (props.isLoggedIn) {
      return <h1>Welcome back!</h1>;
    } else {
      return <h1>Please sign up.</h1>;
    }
  }
  
  export default Welcome;
  

  import React from 'react';

function Greeting() {
  return <h1>Hello, World!</h1>;
}

export default Greeting;


import React, { useState } from 'react';

function LoginButton() {
  return <button>Login</button>;
}

function LogoutButton() {
  return <button>Logout</button>;
}

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <LogoutButton /> : <LoginButton />}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Switch to Login' : 'Switch to Logout'}
      </button>
    </div>
  );
}

export default ConditionalRendering;
