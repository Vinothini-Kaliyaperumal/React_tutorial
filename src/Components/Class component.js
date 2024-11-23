import React from 'react'
import ReactDOM from 'react-dom'

class Mywebsite extends React.Component
{
    render()
    {
        return <h1>Welcome</h1>
    }
}

class Mynewwebsite extends React.Component
{
    render(){
        return <div>
            <Mywebsite />
            <h1>Welcome World</h1>
        </div>
        
    }
}
ReactDOM.render(<Mynewwebsite />, document.getElementById('root'));

export default Mynewwebsite;