import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Sold from './pages/Sold'
import HowItWorks from './pages/HowItWorks'
import Category from './pages/Category'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
         <Route path="/" element={<Home />} />
<Route path="/active" element={<Home />} />
          <Route path="/sold" element={<Sold />} />
          <Route path="/how" element={<HowItWorks />} />
          <Route path="/category/:catId" element={<Category />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
