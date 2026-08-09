import { useState } from 'react'
import './App.css'
import Profile from './components/profile'
import Settings from './components/Settings'
import Notifications from './components/Notifications'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [activeTab, setActiveTab] = useState('profile');

  return (
    <>
      
      <p>You are viewing: <b>{activeTab}</b></p>

      <button onClick={()=>setActiveTab('profile')} className={activeTab === 'profile' ? "btn btn-primary" : "btn btn-light"}>Profile</button>
      <button onClick={()=>setActiveTab('settings')} className={activeTab === 'settings' ? "btn btn-secondary" : "btn btn-light"}>Settings</button>
      <button onClick={()=>setActiveTab('notifications')} className={activeTab === 'notifications' ? "btn btn-info" : "btn btn-light"}>Notifications</button>

      {activeTab === 'profile' && <Profile/>}
      {activeTab === 'notifications' && <Notifications />}
      {activeTab === 'settings' && <Settings />}
      
    </>
  )
}

export default App