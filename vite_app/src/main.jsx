import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Sidebar from './assets/component/sidebar.jsx'
import Serch from './assets/component/Serch.jsx'
import Mainmenu from './assets/component/Mainmenu.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sidebar />
    < Serch />
    < Mainmenu />
    <App />
    
  </StrictMode>,

)
