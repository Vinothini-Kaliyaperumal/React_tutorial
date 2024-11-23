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


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Jsx from "./Jsx";
import Compo from "./Components/Compo"
import Main from "./Components/Functional component";
import Mynewwebsite from "./Components/Class component";
import Learnreactpropsparant from "./Components/Props";
import Props from "./Components/Props";

function App(){
  
return(
 
<div className="App">
{/* // Components import method */}
 {/* <Header />   */}
 {/* <Content /> */}
 {/* <Footer /> */}
 {/* <Sample /> */}
 {/* <Compo /> */}
 {/* <Functional /> */}
 {/* <Main /> */}
 {/* <Mywebsite /> */}


 {/* Another components import method  */}
 <BrowserRouter>
    <Routes>
        <Route path="/jsx" element={<Jsx />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/content" element={<Content />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/compo" element={<Compo />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/mynewwebsite" element={<Mynewwebsite />}></Route>
        <Route path="/learnreactpropsparant" element={<Learnreactpropsparant />}></Route>
        <Route path="/mynewwebsite" element={<Mynewwebsite />}></Route>
        <Route path="/props" element={<Props />}></Route>


        </Routes>
  </BrowserRouter>

</div>
);
}

export default App;