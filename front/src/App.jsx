import React from 'react'
import { AuthProvider } from './context/authContext'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoute from './components/protectedRoute'
import { Navigate } from 'react-router-dom'


const App = () => {
  return (
  <AuthProvider>
        <Navbar />
    <Routes>
    <Route path='/' element={
      <ProtectedRoute>
          <Home />
    </ProtectedRoute>}>
    </Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/register' element={<Register />}></Route>
    <Route path="*" element={<Navigate to="/" replace />} />
   </Routes>
  </AuthProvider>
)
}

export default App