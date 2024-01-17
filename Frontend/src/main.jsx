import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/LoginPage/login.jsx'
 import './index.css'
 import GeneralEnquiry from './pages/component/FeedbackRelatedto/GeneralEnquiry.jsx'
import Otpverficat from './pages/otpverficaton/Otpverficat.jsx'
import Singupe from './pages/Singupe/Singupe.jsx'
import Main from './pages/RAJASTHAN POLICE FEEDBACK SYSTEM/Main.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Login/> */}
    {/* <Singupe/> */}
    <Main/>
    {/* <GeneralEnquiry/> */}
   {/* <Otpverficat/> */}
  
  </React.StrictMode>,
)
