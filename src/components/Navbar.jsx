import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useBidStore, CATEGORIES } from '../store/bidStore'
import i18n from '../i18n/i18n'
import styles from './Navbar.module.css'

const LANGS = [
  { code: 'hu', label: 'HU', dir: 'ltr' },
  { code: 'en', label: 'EN', dir: 'ltr' },
  { code: 'ru', label: 'RU', dir: 'ltr' },
  { code: 'ar', label: 'AR', dir: 'rtl' },
]

export default function Navbar() {
  const { t } = useTranslation()
  const { lang, setLang } = useBidStore()
  const [catOpen, setCatOpen] = useState(false)

  const handleLang = (e) => {
    const selected = e.target.value
    setLang(selected)
    i18n.changeLanguage(selected)
    document.documentElement.dir = LANGS.find(l => l.code === selected)?.dir || 'ltr'
    document.documentElement.lang = selected
  }

  const sortedCats = [...CATEGORIES]
    .filter(c => c.id !== 'all')
    .sort((a, b) => t(`categories.${a.key}`).localeCompare(t(`categories.${b.key}`), 'hu'))

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        Sink<span>Bid</span>
      </Link>
      <div className={styles.right}>

        <Link to="/how" className={styles.link}>{t('nav.howItWorks')}</Link>

        <div
          className={styles.dropdown}
          onMouseEnter={() => setCatOpen(true)}
          onMouseLeave={() => setCatOpen(false)}
        >
          <span className={styles.link}>{t('nav.categories')} ▾</span>
          {catOpen && (
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownGrid}>
                {sortedCats.map(cat => (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.id}`}
                    className={styles.dropdownItem}
                    onClick={() => setCatOpen(false)}
                  >
                    {t(`categories.${cat.key}`)}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <Link to="/" className={styles.link}>{t('nav.activeBids')}</Link>
        <Link to="/sold" className={styles.link}>{t('nav.sold')}</Link>

        <div className={styles.authLinks}>
          <Link to="/login" className={styles.linkBtn}>{t('nav.login')}</Link>
          <Link to="/register" className={styles.linkBtnPrimary}>{t('nav.register')}</Link>
        </div>
        <select className={styles.langSelect} value={lang} onChange={handleLang}>
          {LANGS.map(l => (
            <option key={l.code} value={l.code}>{l.label}</option>
          ))}
        </select>
      </div>
    </nav>
  )
}
