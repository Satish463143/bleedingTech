import React from 'react'
import Layout from './pages/layout/layout'
import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App