
import './App.css'
import { Routes, Route, } from 'react-router-dom';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import CreateRecipe from './components/CreateRecipe/CreateRecipe'
import ViewData from './components/VIewData/ViewData';
import Footer from './components/Footer/Footer';


function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/createrecipe" element={<CreateRecipe/>} />
      <Route path="/viewrecipe" element={<ViewData/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
