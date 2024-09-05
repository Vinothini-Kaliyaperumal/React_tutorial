class Car extends React.Component {
    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

class Car extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {
      return <h2>I am a Car!</h2>;
    }
  }

  class Car extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {
      return <h2>I am a {this.state.color} Car!</h2>;
    }
  }

  class Car extends React.Component {
    render() {
      return <h2>I am a {this.props.color} Car!</h2>;
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Car color="red"/>);

  class Car extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <h2>I am a {this.props.model}!</h2>;
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Car model="Mustang"/>);