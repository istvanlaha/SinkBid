import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useBidStore } from '../store/bidStore'
import i18n from '../i18n/i18n'
import styles from './Navbar.module.css'

const LANGS = [
  { code: 'hu', label: 'HU', dir: 'ltr' },
  { code: 'en', label: 'EN', dir: 'ltr' },
  { code: 'de', label: 'DE', dir: 'ltr' },
];

const CAT_COLUMNS = [
  [
    { id: 'orak', label: { hu: 'Órák', en: 'Watches', de: 'Uhren', zh: '手表' } },
    { id: 'ekszer', label: { hu: 'Ékszer', en: 'Jewellery', de: 'Schmuck', zh: '珠宝' } },
    { id: 'muveszet', label: { hu: 'Művészet / Antik', en: 'Art / Antiques', de: 'Kunst / Antiquitäten', zh: '艺术/古董' } },
    { id: 'gyujtheto', label: { hu: 'Gyűjtemény', en: 'Collectibles', de: 'Sammlerstücke', zh: '收藏品' } },
    { id: 'ingatlan', label: { hu: 'Ingatlan', en: 'Real Estate', de: 'Immobilien', zh: '房产' } },
    { id: 'jarmuvek', label: { hu: 'Jármű', en: 'Vehicles', de: 'Fahrzeuge', zh: '车辆' } },
  ],
  [
    { id: 'szamtech', label: { hu: 'Számítástechnika', en: 'Computing', de: 'Computer', zh: '计算机' } },
    { id: 'mobil', label: { hu: 'Mobiltelefonok', en: 'Mobile Phones', de: 'Mobiltelefone', zh: '手机' } },
    { id: 'muszaki', label: { hu: 'Műszaki / Elektronika', en: 'Electronics', de: 'Elektronik', zh: '电子产品' } },
    { id: 'konyvek', label: { hu: 'Könyvek', en: 'Books', de: 'Bücher', zh: '书籍' } },
    { id: 'jatekok', label: { hu: 'Játék / Videójáték', en: 'Games / Video Games', de: 'Spiele / Videospiele', zh: '游戏' } },
    { id: 'ipari', label: { hu: 'Ipari berendezés', en: 'Industrial', de: 'Industriell', zh: '工业设备' } },
  ],
  [
    { id: 'divat', label: { hu: 'Divat', en: 'Fashion', de: 'Mode', zh: '时装' } },
    { id: 'szepseg', label: { hu: 'Szépség / Egészség', en: 'Beauty / Health', de: 'Schönheit / Gesundheit', zh: '美容/健康' } },
    { id: 'sport', label: { hu: 'Sport / Szabadidő', en: 'Sport / Leisure', de: 'Sport / Freizeit', zh: '运动/休闲' } },
    { id: 'otthon', label: { hu: 'Otthon / Dekoráció', en: 'Home / Décor', de: 'Wohnen / Deko', zh: '家居/装饰' } },
    { id: 'butor', label: { hu: 'Kert / Barkács', en: 'Garden / DIY', de: 'Garten / Heimwerken', zh: '园艺/手工' } },
  ],
]

export default function Navbar() {
  const { lang, setLang } = useBidStore()
  const { t } = useTranslation()
  const [catOpen, setCatOpen] = useState(false)
  const navigate = useNavigate()

  const handleLang = (e) => {
    const selected = e.target.value
    setLang(selected)
    i18n.changeLanguage(selected)
    document.documentElement.dir = selected === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = selected
  }

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
              <div className={styles.dropdownCols}>
                {CAT_COLUMNS.map((col, ci) => (
                  <div key={ci} className={styles.dropdownCol}>
                    {col.map(cat => (
                      <div
                        key={cat.id}
                        className={styles.dropdownItem}
                        onClick={() => {
                          navigate(`/category/${cat.id}`)
                          setCatOpen(false)
                        }}
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

        <Link
          to="/"
          className={styles.link}
          onClick={() => setTimeout(() => document.getElementById('active-bids')?.scrollIntoView({ behavior: 'smooth' }), 100)}
        >
          {t('nav.activeBids')}
        </Link>

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
