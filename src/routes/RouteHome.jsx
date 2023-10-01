import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home'; 


function RouteHome(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default RouteHome;