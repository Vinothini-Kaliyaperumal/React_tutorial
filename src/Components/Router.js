// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import Home from './Home';
// // import About from './About';

// // function App() {
// //   return (
// //     <Router>
// //       <Switch>
// //         <Route path="/about">
// //           <About />
// //         </Route>
// //         <Route path="/">
// //           <Home />
// //         </Route>
// //       </Switch>
// //     </Router>
// //   );
// // }

// // export default App;


// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/contact">Contact</Link>
//     </nav>
//   );
// }

import React from 'react'

function Routers() {
  return (
    <div>
      <h1>Router Home, About, Contact, Customer, Dashboard, Login </h1>
    </div>
  )
}

export default Routers;
