import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'

import './App.css'
import UserContextProvide from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvide>
      <h1>context in react</h1>
      <Login/>
      <Profile/>
    </UserContextProvide>
  )
}

export default App
