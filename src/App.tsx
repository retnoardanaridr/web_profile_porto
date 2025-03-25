import React from 'react';
import LandingPage from './pages/landing_page';
import { Route, Routes } from 'react-router-dom';
import MyProjectPortofolio from './pages/my-project';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/my-project-portofolio' element={<MyProjectPortofolio />} />
        </Routes>
    </div>
  );
}

export default App;
