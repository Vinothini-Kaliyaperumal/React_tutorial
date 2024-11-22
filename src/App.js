// import './App.css';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Customer from './Components/Customer';
// import Home from './Components/Home';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Old from './Components/Old';
// import New from './Components/New';
// import Login from './Components/Login';
// import Dashboard from './Components/Dashboard';
// import Arrowfunction from './Components/Arrowfunction';

// function App() {
//  const name = "vino"
//  const empid = "1001"
//   return (
//     <div className='App'>
//      <BrowserRouter>
//      <ul>
//       <li><Link to='/'>Home</Link></li>
//       {/* <li><Link to='/about'>About</Link></li> */}
//       <li><Link to='/contact'>Contact</Link></li>
//       <li><Link to='/customer/1'>Customer 1</Link></li>
//       <li><Link to='/customer/2'>Customer 2</Link></li>
//       <li><Link to='/books/old'>Old</Link></li>
//       {/* <li><Link to='/books/new'>New</Link></li> */}
//       <li><Link to='/login'>Login</Link></li>
//       <li><Link to='/arrowfunction'>Arrowfunction</Link></li>
//     </ul>
//      <Routes>
//       <Route path='/' element={<Home name1={name}/>}/>
//       {/* <Route path='/about' element={<About/>}/> */}
//       <Route path='/contact' element={<Contact/>}/>
//       <Route path='/customer/:id' element={<Customer/>}/>
//       <Route path='/books'>
//       <Route path='old' element={<Old/>}/>
//       {/* <Route path='new' element={<New/>}/> */}
//       </Route>
//       <Route path='/login' element={<Login/>}/>
//       <Route path='/dashboard' element={<Dashboard/>}/>
//       <Route path='/Arrowfunction' element={<Arrowfunction/>}/>
//      </Routes>
//      </BrowserRouter>
//     </div>
    
//   );
// }

// export default App;



// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Sample from "./sample";
import Compo from "./Components/Compo"
import Functional from "./Components/Functional component";
import Mywebsite from "./Components/Class component";
import Learnreactprops from "./Components/Props";


function App(){
  
return(
  // Components import method
<div className="App">
 <Header /> 
 <Content />
 <Footer />
 <Sample />
 <Compo />
 <Functional />
<Mywebsite />
{/* <Learnreactprops /> */}
<Learnreactprops />

 {/* Another component import method  */}

  {/* <BrowserRouter>
    <Routes>
        <Route path="/sample" element={<Sample />}></Route>
        
    </Routes>
  </BrowserRouter> */}

</div>
);
}

export default App;