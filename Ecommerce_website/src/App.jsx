
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Contacts from "./components/contacts/Contacts";
import Home from "./components/Home/Home"
function App() {


  return (
    <>
   <Header />
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/contacts" element={<Contacts />} />
   </Routes>
   <Footer/>
    </>
  )
}

export default App
