
import {Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import ResumeBuilder from './pages/ResumeBuilder'
import ProfileSettings from './pages/ProfileSettings'

const App = () => {
  return (
    <>
      <div className='app'>
        <main className='content'>
        <Routes>
          <Route path="/" element={< LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resumebuilder" element={<ResumeBuilder />} />
          <Route path="/profilesettings" element={<ProfileSettings />} />
        </Routes>
        </main>
      </div>
    </>
  );
}

export default App
