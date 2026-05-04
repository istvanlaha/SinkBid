import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Sold from './pages/Sold'
import HowItWorks from './pages/HowItWorks'
import Category from './pages/Category'
import ProductDetail from './pages/ProductDetail'
import Auctions from './pages/Auctions'
import CookieConsent from './components/CookieConsent'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import HelpCenter from './pages/HelpCenter'
import SellerGuide from './pages/SellerGuide'

export default function App() {
  return (
    <HelmetProvider>
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/active" element={<Home />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/sold" element={<Sold />} />
          <Route path="/how" element={<HowItWorks />} />
          <Route path="/category/:catId" element={<Category />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/seller-guide" element={<SellerGuide />} />
        </Routes>
      </div>
      <Footer />
      <CookieConsent />
    </div>
    </HelmetProvider>
  )
}
