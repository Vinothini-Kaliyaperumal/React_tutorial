import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Customer from './Components/Customer';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Old from './Components/Old';
import New from './Components/New';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';


function App() {
 const name = "vino"
 const empid = "1001"
  return (
    <div className='App'>
     <BrowserRouter>
     <ul>
      <li><Link to='/'>Home</Link></li>
      {/* <li><Link to='/about'>About</Link></li> */}
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/customer/1'>Customer 1</Link></li>
      <li><Link to='/customer/2'>Customer 2</Link></li>
      <li><Link to='/books/old'>Old</Link></li>
      {/* <li><Link to='/books/new'>New</Link></li> */}
      <li><Link to='/login'>Login</Link></li>
    </ul>
     <Routes>
      <Route path='/' element={<Home name1={name}/>}/>
      {/* <Route path='/about' element={<About/>}/> */}
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/customer/:id' element={<Customer/>}/>
      <Route path='/books'>
      <Route path='old' element={<Old/>}/>
      {/* <Route path='new' element={<New/>}/> */}
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      
     </Routes>
     </BrowserRouter>
    </div>
    
  );
}

export default App;
