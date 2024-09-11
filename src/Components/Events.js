function ButtonClick() {
    const handleClick = () => {
      alert('Button clicked!');
    };
  
    return <button onClick={handleClick}>Click me</button>;
  }
  
  export default ButtonClick;
  

  import React from 'react';

function ButtonClick() {
  function handleClick() {
    alert('Button was clicked!');
  }

  return <button onClick={handleClick}>Click Me</button>;
}

export default ButtonClick;
