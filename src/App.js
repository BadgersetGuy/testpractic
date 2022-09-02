import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';



import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";

import Home from "./pages/Home";

import Login from "./pages/Login";
import Logout from "./pages/Logout";
import FormComponent from "./pages/Form";
import Movies from "./pages/Movies";

function App() {
  let dispatch = useDispatch();


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
          <Route path="movies" element={<Movies />} /> 

        </Routes>
    </div>

  );
}

export default App;
