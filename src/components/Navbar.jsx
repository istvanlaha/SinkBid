import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useBidStore } from '../store/bidStore'
import i18n from '../i18n/i18n'
import styles from './Navbar.module.css'

const LANGS = [
  { code: 'hu', label: 'HU' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
]

const CAT_COLUMNS = [
  [
    { id: 'orak', label: { hu: 'Órák', en: 'Watches', de: 'Uhren' } },
    { id: 'ekszer', label: { hu: 'Ékszer', en: 'Jewellery', de: 'Schmuck' } },
    { id: 'muveszet', label: { hu: 'Művészet / Antik', en: 'Art / Antiques', de: 'Kunst / Antiquitäten' } },
    { id: 'gyujtheto', label: { hu: 'Gyűjtemény', en: 'Collectibles', de: 'Sammlerstücke' } },
    { id: 'ingatlan', label: { hu: 'Ingatlan', en: 'Real Estate', de: 'Immobilien' } },
    { id: 'jarmuvek', label: { hu: 'Jármű', en: 'Vehicles', de: 'Fahrzeuge' } },
  ],
  [
    { id: 'szamtech', label: { hu: 'Számítástechnika', en: 'Computing', de: 'Computer' } },
    { id: 'mobil', label: { hu: 'Mobiltelefonok', en: 'Mobile Phones', de: 'Mobiltelefone' } },
    { id: 'muszaki', label: { hu: 'Műszaki / Elektronika', en: 'Electronics', de: 'Elektronik' } },
    { id: 'konyvek', label: { hu: 'Könyvek', en: 'Books', de: 'Bücher' } },
    { id: 'jatekok', label: { hu: 'Játék / Videójáték', en: 'Games / Video Games', de: 'Spiele / Videospiele' } },
    { id: 'ipari', label: { hu: 'Ipari berendezés', en: 'Industrial', de: 'Industriell' } },
  ],
  [
    { id: 'divat', label: { hu: 'Divat', en: 'Fashion', de: 'Mode' } },
    { id: 'szepseg', label: { hu: 'Szépség / Egészség', en: 'Beauty / Health', de: 'Schönheit / Gesundheit' } },
    { id: 'sport', label: { hu: 'Sport / Szabadidő', en: 'Sport / Leisure', de: 'Sport / Freizeit' } },
    { id: 'otthon', label: { hu: 'Otthon / Dekoráció', en: 'Home / Décor', de: 'Wohnen / Deko' } },
    { id: 'butor', label: { hu: 'Kert / Barkács', en: 'Garden / DIY', de: 'Garten / Heimwerken' } },
  ],
]

const ALL_CATS = CAT_COLUMNS.flat()

export default function Navbar() {
  const { lang, setLang } = useBidStore()
  const { t } = useTranslation()
  const [catOpen, setCatOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileCatOpen, setMobileCatOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleLang = (e) => {
    const selected = e.target.value
    setLang(selected)
    i18n.changeLanguage(selected)
    document.documentElement.lang = selected
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <img src="/images/logo.png" alt="" className={styles.logoImg} />
          <span className={styles.logoText}>
            S<span className={styles.logoArrow}>↓</span>NK<span className={styles.logoBid}>Bid</span>
          </span>
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
                <div className={styles.dropdownHeader}>{t('nav.categoriesTitle')}</div>
                <div className={styles.dropdownCols}>
                  {CAT_COLUMNS.map((col, ci) => (
                    <div key={ci} className={styles.dropdownCol}>
                      {col.map(cat => (
                        <div
                          key={cat.id}
                          className={styles.dropdownItem}
                          onClick={() => { navigate(`/category/${cat.id}`); setCatOpen(false) }}
                        >
                          {cat.label[lang] || cat.label.en}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/sold" className={styles.link}>{t('nav.activeBids')}</Link>

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

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span className={menuOpen ? styles.bar1Open : ''} />
          <span className={menuOpen ? styles.bar2Open : ''} />
          <span className={menuOpen ? styles.bar3Open : ''} />
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" className={styles.mobileLink} onClick={closeMenu}>Home</Link>
          <Link to="/how" className={styles.mobileLink} onClick={closeMenu}>{t('nav.howItWorks')}</Link>
          <Link to="/sold" className={styles.mobileLink} onClick={closeMenu}>{t('nav.activeBids')}</Link>

          <button
            className={styles.mobileCatToggle}
            onClick={() => setMobileCatOpen(o => !o)}
          >
            {t('nav.categories')}
            <span className={styles.mobileCatArrow}>{mobileCatOpen ? '▴' : '▾'}</span>
          </button>

          {mobileCatOpen && (
            <div className={styles.mobileCatList}>
              {ALL_CATS.map(cat => (
                <div
                  key={cat.id}
                  className={styles.mobileCatItem}
                  onClick={() => { navigate(`/category/${cat.id}`); closeMenu() }}
                >
                  {cat.label[lang] || cat.label.en}
                </div>
              ))}
            </div>
          )}

          <div className={styles.mobileAuth}>
            <Link to="/login" className={styles.mobileLinkBtn} onClick={closeMenu}>
              {t('nav.login')}
            </Link>
            <Link to="/register" className={styles.mobileLinkBtnPrimary} onClick={closeMenu}>
              {t('nav.register')}
            </Link>
          </div>

          <select className={styles.mobileLangSelect} value={lang} onChange={handleLang}>
            {LANGS.map(l => (
              <option key={l.code} value={l.code}>{l.label}</option>
            ))}
          </select>
        </div>
      )}
    </>
  )
}
