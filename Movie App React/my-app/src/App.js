import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Profile from './Profile'


export default function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='movies/:id' element={<Profile />}></Route>
      </Routes>
  )
}
