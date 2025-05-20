import React from 'react';
import LandingPage from './pages/landing_page';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
    </div>
  );
}

export default App;
