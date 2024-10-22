import { useState } from 'react'
import './App.css'
import { Routes, Route, } from 'react-router-dom';

import AddData from './components/AddData/AddData'
import Header from './components/Header/Header'
import ViewData from './components/ViewData/ViewData'
import Home from './components/Home/Home'
import EditEmployee from './components/UpdateData/UpdateData';

function App() {

  return (
    <>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/add-data' element = {<AddData />}/>
        <Route path='/view-data' element = {<ViewData />}/>
        <Route path="/edit-employee" element={<EditEmployee />} />
      </Routes>
    </>
  )
}

export default App
