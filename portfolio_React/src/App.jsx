
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contacts from './components/contacts/contacts';
import Porjects from './components/Porjects/Porjects';
import Loader from './components/Loader/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <>
      {isLoading ? (
       
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/projects" element={<Porjects />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

