import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import './components/templates.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
