import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>Sink<span>Bid</span></div>
          <p className={styles.tagline}>The reverse auction platform for exceptional items.</p>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <div className={styles.colTitle}>Buy</div>
            <Link to="/active" className={styles.colLink}>Active Bids</Link>
            <Link to="/sold" className={styles.colLink}>Sold Items</Link>
            <Link to="/how" className={styles.colLink}>How It Works</Link>
            <Link to="/buyer-registration" className={styles.colLink}>Register as Buyer</Link>
            <Link to="/buyer-terms" className={styles.colLink}>Buyer Terms</Link>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Sell</div>
            <Link to="/seller-registration" className={styles.colLink}>Register as Seller</Link>
            <Link to="/seller-terms" className={styles.colLink}>Seller Terms</Link>
            <Link to="/how" className={styles.colLink}>Seller Guide</Link>
            <Link to="/fees" className={styles.colLink}>Fees</Link>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Categories</div>
            <Link to="/category/orak" className={styles.colLink}>Watches</Link>
            <Link to="/category/ekszer" className={styles.colLink}>Jewellery</Link>
            <Link to="/category/muveszet" className={styles.colLink}>Art</Link>
            <Link to="/category/jarmuvek" className={styles.colLink}>Vehicles</Link>
            <Link to="/category/ingatlan" className={styles.colLink}>Real Estate</Link>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>About</div>
            <Link to="/about" className={styles.colLink}>About SinkBid</Link>
            <Link to="/contact" className={styles.colLink}>Contact Us</Link>
            <Link to="/privacy" className={styles.colLink}>Privacy Policy</Link>
            <Link to="/terms" className={styles.colLink}>Terms of Use</Link>
            <Link to="/cookies" className={styles.colLink}>Cookie Policy</Link>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Support</div>
            <Link to="/faq" className={styles.colLink}>FAQ</Link>
            <Link to="/contact" className={styles.colLink}>Help Center</Link>
            <Link to="/dispute" className={styles.colLink}>Dispute Resolution</Link>
            <Link to="/accessibility" className={styles.colLink}>Accessibility</Link>
          </div>
        </div>
      </div>

      <div className={styles.bidStepBar}>
        <div className={styles.bidStepTitle}>Entry fee & Bid step</div>
       <div className={styles.bidStepRow}>
  <span>€100–1.000 <strong>€5</strong></span>
  <span>€1.001–10.000 <strong>€10</strong></span>
  <span>€10.001–20.000 <strong>€20</strong></span>
  <span>€20.001–30.000 <strong>€30</strong></span>
  <span>€30.001–40.000 <strong>€40</strong></span>
  <span>€40.001–50.000 <strong>€50</strong></span>
  <span>€50.001–60.000 <strong>€60</strong></span>
  <span>€60.001–70.000 <strong>€70</strong></span>
  <span>€70.001–80.000 <strong>€80</strong></span>
  <span>€80.001–90.000 <strong>€90</strong></span>
  <span>€90.001–100.000+ <strong>€100</strong></span>
</div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          © 2025 SinkBid. All rights reserved. By C & Kormi.
        </div>
        <div className={styles.bottomRight}>
          <Link to="/terms" className={styles.bottomLink}>Terms of Use</Link>
          <Link to="/privacy" className={styles.bottomLink}>Privacy Policy</Link>
          <Link to="/cookies" className={styles.bottomLink}>Cookie Policy</Link>
        </div>
      </div>
    </footer>
  )
}
