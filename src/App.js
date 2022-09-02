import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';



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
  let dispatch = useDispatch();
  let selector = useSelector(state => state);


  useEffect(() => {

    // get the data from local storage and set it in redux
    dispatch({ type: "SET_DATA", payload: JSON.parse(localStorage.getItem("data")) })

  }, [])


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
