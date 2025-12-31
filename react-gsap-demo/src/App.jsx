import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Route change par loader hide karo
    setLoading(false);
  }, [location]);

  const handleLinkClick = () => {
    setLoading(true);
  };

  return (
    <div>
      <Loader loading={loading} />
      <nav style={{ padding: '20px', backgroundColor: '#eee' }}>
        <Link to="/" style={{ margin: '10px' }} onClick={handleLinkClick}>Home</Link>
        <Link to="/about" style={{ margin: '10px' }} onClick={handleLinkClick}>About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
