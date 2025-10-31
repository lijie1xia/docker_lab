


import React from 'react'
import AxiosUserList from './components/AxiosUserList'
import AxiosPost from './components/AxiosPost'
import { Routes,Route } from 'react-router-dom'
import UserList from './pages/UserList'
import UserDetail from './pages/UserDetail'
import Home from './pages/Home'



function App() {

  
  return (
 
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/users' element={<UserList/>}/>
    <Route path='/users/:id' element={<UserDetail/>}/>
  </Routes>
    
  )
}

export default App
