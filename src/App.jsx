
import {BrowserRouter,Routes, Route} from 'react-dom'

import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import ResumeBuilder from './pages/ResumeBuilder'
import ProfileSettings from './pages/ProfileSettings'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landingpage" element={< LandingPage/>} />
        <Route path="/resumebuilder" element={<ResumeBuilder />} />
        <Route path="/profilesettings" element={<ProfileSettings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
