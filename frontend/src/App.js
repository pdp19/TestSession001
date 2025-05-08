import React from 'react';
import LoginPage from './components/LoginPage';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
  );
};

export default App;