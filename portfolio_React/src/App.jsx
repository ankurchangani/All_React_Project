import { FaArrowUp } from "react-icons/fa"; // Import FontAwesome ArrowUp icon
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contacts from "./components/contacts/contacts";
import Projects from "./components/Porjects/Porjects";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);

    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contacts />
          <Footer />

          {/* Back to Top Button with FontAwesome Icon */}
          {showScrollButton && (
            <button
              className="fixed bottom-5 right-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:opacity-80 transition-all duration-300 flex items-center justify-center"
              onClick={scrollToTop}
            >
              <FaArrowUp size={24} />
            </button>
          )}
        </>
      )}
    </>
  );
}

export default App;

