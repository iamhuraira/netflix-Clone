import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Netflix from './pages/Netflix'
import Signup from './pages/Signup'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exect path="/login" element={<Login />} />
        <Route exect path="/signup" element={<Signup />} />
        <Route exect path="/" element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  )
}
