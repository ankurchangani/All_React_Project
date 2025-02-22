import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/siderbar/Siderbar';
import Createnote from './components/Createnote/Createnote';
import Viewnotes from './components/Viewnotes/Viewnotes';
import Trash from './components/Trash/Trash';
import Archive from './components/Archive/ARchive';
import Reminders from './components/Reminders/Reminders';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Header />
        <Routes>
          <Route path="/" element={<><Createnote /><Viewnotes /></>} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
