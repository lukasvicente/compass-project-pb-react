import React from "react";
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

function Routers() {
  
  return(
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Dashboard />}/>
    </Routes>
  )
}

export default Routers;
