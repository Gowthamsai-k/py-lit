import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import NavigationBar from './navigationBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NavigationBar  position="fixed"/>
    <App />
  </BrowserRouter>
 
  </StrictMode>,
)
