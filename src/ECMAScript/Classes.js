import React from 'react'
import ReactDOM from 'react-dom'

class Demo{
    methodone(){
        var a = 5;
        var b = 10
        var c = a + b;
        document.getElementById('root').innerHTML=c;
        
    }
    methodtwo(){
        var a = 25;
        var b = 100
        var c = a + b;
        document.getElementById('root').innerHTML=c;
        
    }
}

let  mydemo =new Demo();
mydemo.methodone();

export default Demo




 
