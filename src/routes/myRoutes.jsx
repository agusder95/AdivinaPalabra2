import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home/home'))
const NormalMode = lazy(() => import('../pages/Normal/normal'))

const MyRoutes = () => {
  
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/normalMode' element={<NormalMode />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default MyRoutes