import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import { ResumeProvider } from "./contexts/ResumeContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResumeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ResumeProvider>
  </StrictMode>,
)
