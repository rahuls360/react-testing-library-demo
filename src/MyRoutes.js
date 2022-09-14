import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';

function MyRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/page1' element={<Page1 />} />
    </Routes>
  );
}

export default MyRoutes;
