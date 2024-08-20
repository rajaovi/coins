import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashbaord from './pages/dashboard';

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashbaord />} />
    </Routes>
  );
};

export default RoutePage;
