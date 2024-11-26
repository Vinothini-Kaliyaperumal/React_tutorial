import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    // Perform login logic
    navigate('/dashboard'); // Redirect to the dashboard
  }

  return <button onClick={handleLogin}>Login</button>;
}
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams(); // Access the "id" parameter from the URL
  return <h1>Product ID: {id}</h1>;
}
function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Outlet />
      </div>
    );
  }
  
  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Contact Page</h1>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
