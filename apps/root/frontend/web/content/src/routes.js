import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './pages/signin';

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
    </Routes>
  );
};

export default RoutePage;
