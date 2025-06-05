import React from 'react';
import LandingPage from './pages/landing_page';
import { Route, Routes } from 'react-router-dom';
import ProjectDetail from './pages/work_project_detail';
import PersonalProjectDetail from './pages/personal_project_detail';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/work-project/:id' element={<ProjectDetail/>} />
          <Route path='/personal-project/:id' element={<PersonalProjectDetail/>} />
        </Routes>
    </div>
  );
}

export default App;
