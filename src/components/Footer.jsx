import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>SinkBid</div>
        <div className={styles.links}>
          <Link to="/" className={styles.link}>Aktív licitek</Link>
          <Link to="/sold" className={styles.link}>Eladott tárgyak</Link>
          <Link to="/how" className={styles.link}>Hogyan működik</Link>
        </div>
        <div className={styles.copy}>© 2026 By C & Kormi Minden jog fenntartva.</div>
      </div>
    </footer>
  )
}
