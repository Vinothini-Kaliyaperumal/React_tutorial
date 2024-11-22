import React from 'react';
import ReactDom from 'react-dom';

class Learnreactprops extends React.Component{
   render(){
        return <h1>Learn{this.props.topic} in {this.props.language}</h1>
    }
}
ReactDom.render( <Learnreactprops  topic="React.js" language="tamil"/>, document.getElementById('root'));