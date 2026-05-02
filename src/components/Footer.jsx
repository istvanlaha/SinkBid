import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>SinkBid</div>
            <div className={styles.tagline}>Fordított licit platform</div>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Navigáció</div>
            <Link to="/" className={styles.link}>Aktív licitek</Link>
            <Link to="/sold" className={styles.link}>Eladott tárgyak</Link>
            <Link to="/how" className={styles.link}>Hogyan működik</Link>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Betekintési díj / Licit lépcső</div>
            <div className={styles.stepRow}><span>100 — 1.000 EUR</span><span>10 EUR</span></div>
            <div className={styles.stepRow}><span>1.001 — 10.000 EUR</span><span>20 EUR</span></div>
            <div className={styles.stepRow}><span>10.001 — 100.000 EUR</span><span>50 EUR</span></div>
            <div className={styles.stepRow}><span>100.001 — 1.000.000 EUR</span><span>100 EUR</span></div>
            <div className={styles.stepRow}><span>1.000.001 — 2.000.000 EUR</span><span>200 EUR</span></div>
            <div className={styles.stepRow}><span>2.000.001 EUR felett</span><span>500 EUR</span></div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copy}>© 2025 SinkBid. Minden jog fenntartva.</div>
          <div className={styles.by}>By C & Kormi</div>
        </div>
      </div>
    </footer>
  )
}
