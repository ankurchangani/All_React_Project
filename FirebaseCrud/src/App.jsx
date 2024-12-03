import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import AddData from './components/AddData/AddData';
import Header from './components/Header/Header';
import ViewData from './components/ViewData/ViewData';
import Home from './components/Home/Home';
import EditEmployee from './components/UpdateData/UpdateData';
import RegisterForm from './components/Registrar/Registrar';
import LoginForm from './components/LoginForm/LoginForm';
import withLogin from './components/HocLoginpage/HocLogin';

function App() {
  const ProtectedAddData = withLogin(AddData);
  const ProtectedViewData = withLogin(ViewData);
  const ProtectedEditData = withLogin(EditEmployee);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/registerform" element={<RegisterForm />} />
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/" element={<Home/>} />
        <Route path="/add-data" element={<ProtectedAddData/>} /> 
        <Route path="/view-data" element={<ProtectedViewData />} /> 
        <Route path="/edit-employee" element={<ProtectedEditData />} />
      </Routes>
    </>
  );
}

export default App;
