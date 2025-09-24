import { FaArrowUp } from "react-icons/fa"; 
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contacts from "./components/contacts/contacts";
import Projects from "./components/Projects/projects";
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

          {/* Back to Top Button with Best Hover & Cursor Effect */}
          {showScrollButton && (
            <button
              className="fixed bottom-5 right-5 bg-gradient-to-r from-[#635985] to-[#443C68] text-white 
                         p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center 
                         cursor-pointer hover:scale-110 hover:shadow-xl hover:from-[#393053] hover:to-[#18122B]"
              onClick={scrollToTop}
            >
              <FaArrowUp size={24} className="animate-bounce" />
            </button>
          )}
        </>
      )}
    </>
  );
}

export default App;

