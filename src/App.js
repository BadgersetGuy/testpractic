import React from 'react';

import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,

  Link
} from "react-router-dom";

import Home from "./pages/Home";

import Login from "./pages/Login";
import Logout from "./pages/Logout";
import FormComponent from "./pages/Form";

function App() {
  return (

    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="form" element={<FormComponent />} /> 
        </Routes>
    </div>

  );
}

export default App;
