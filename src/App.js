import React from 'react';

import { Counter } from './features/counter/Counter';
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
import Form from "./pages/Form";

function App() {
  return (

    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="form" element={<Form />} /> 
        </Routes>
    </div>

  );
}

export default App;
