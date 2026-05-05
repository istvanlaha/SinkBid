import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import styles from './Vasarlas.module.css'

const MENU = [
  { id: 'regisztracio', label: 'Regisztrálás eladóként' },
  { id: 'feltetelek', label: 'Eladói feltételek' },
  { id: 'dijak', label: 'Díjak & jutalék' },
  { id: 'utmutato', label: 'Eladói útmutató' },
]

// --- Accordion component ---
function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
      <button className={styles.faqQ} onClick={() => setOpen(o => !o)}>
        <span>{title}</span>
        <span className={styles.faqChevron}>{open ? '▲' : '▼'}</span>
      </button>
      {open && <div className={styles.faqA}>{children}</div>}
    </div>
  )
}

// --- Regisztrálás eladóként ---
function ContentRegisztracio() {
  return (
    <>
      <div className={styles.contentTitle}>Regisztrálás eladóként</div>
      <div className={styles.faqList}>

        <AccordionItem title="Ki lehet eladó a SinkBid-en?">
          <p className={styles.para}>A SinkBid kizárólag hivatásos eladók számára elérhető platform. Hivatásos eladónak minősül, aki:</p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Kereskedelmi, üzleti vagy szakmai tevékenységével kapcsolatos tárgyakat értékesít</li>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Évente több mint 250 tárgyat kínál, vagy évente legalább 75.000 EUR értékben értékesít</li>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>ÁFA alanynak minősül a lakóhelye szerinti országban</li>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Rendszeresen azonos típusú tárgyakat értékesít</li>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Más személyek ügynökeként kínál tárgyakat</li>
          </ul>
          <p className={styles.para}>A SinkBid fenntartja a jogot, hogy a regisztrációt indoklás nélkül megtagadja.</p>
        </AccordionItem>

        <AccordionItem title="Regisztráció lépései">
          <p className={styles.para}>A regisztrációhoz az alábbi adatok szükségesek:</p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Teljes cégnév és székhely</li>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Adószám és ÁFA azonosító</li>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Bankszámlaszám (jutalék elszámoláshoz)</li>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Érvényes e-mail cím és telefonszám</li>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Elfogadott személyazonosító okmány másolata</li>
          </ul>
          <p className={styles.para}>A SinkBid minden regisztrációt ellenőriz és hagy jóvá. A jóváhagyás után az eladó termékfeltöltési hozzáférést kap, amely mindaddig érvényes, amíg a fiókja aktív.</p>
        </AccordionItem>

        <AccordionItem title="Termék feltöltési szabályok">
          <p className={styles.para}>A jóváhagyott regisztráció után az eladó feltöltheti termékeit. Minden termékadatlapon kötelező megadni:</p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>1–8 fotó (megfelelő minőségű, valósághű felvételek)</li>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Részletes leírás (maximum 1.000 karakter)</li>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Kiegészítő részletek (maximum 500 karakter)</li>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Termékkategória</li>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Induló ár (bruttó összegben — az árnak tartalmaznia kell az ÁFÁ-t és a szállítási költséget, ezeket nem lehet külön felszámítani)</li>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Szállítási vállalások: földrajzi terület és határidő</li>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Szállítási mód: futárszolgálat / személyes átadás / vevő szervezi</li>
          </ul>
          <p className={styles.para}>Minimum induló ár: 200 EUR.</p>
        </AccordionItem>

        <AccordionItem title="Felfüggesztési szabályok">
          <p className={styles.para}>Az eladói fiók felfüggesztésre kerülhet az alábbi esetekben:</p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Nem szállítás a 72 órás határidőn belül</li>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Hamis vagy félrevezető termékleírás</li>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Vevői panaszok</li>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>CITES vagy egyéb jogi szabálysértés</li>
            <li style={{ fontSize: '0.88rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>Jutalék nem fizetése 8 napon belül</li>
          </ul>
          <p className={styles.para}>A SinkBid figyelmeztetést küld, ismételt szabálysértés esetén ideiglenes vagy végleges felfüggesztést alkalmaz.</p>
        </AccordionItem>

      </div>
    </>
  )
}

// --- Placeholder sections ---
function ContentFeltetelek() {
  return (
    <>
      <div className={styles.contentTitle}>Eladói feltételek</div>
      <p className={styles.para}>Az eladói feltételek részletei hamarosan elérhetők.</p>
    </>
  )
}

function ContentDijak() {
  return (
    <>
      <div className={styles.contentTitle}>Díjak & jutalék</div>
      <p className={styles.para}>A díjstruktúra és jutalékrendszer részletei hamarosan elérhetők.</p>
    </>
  )
}

function ContentUtmutato() {
  return (
    <>
      <div className={styles.contentTitle}>Eladói útmutató</div>
      <p className={styles.para}>A részletes eladói útmutató kategóriánkénti feltöltési szabályokkal az <a href="/seller-guide" style={{ color: 'var(--gold)' }}>Eladói útmutató</a> oldalon érhető el.</p>
    </>
  )
}

const CONTENT_MAP = {
  regisztracio: <ContentRegisztracio />,
  feltetelek: <ContentFeltetelek />,
  dijak: <ContentDijak />,
  utmutato: <ContentUtmutato />,
}

export default function Ertekesites() {
  const [searchParams] = useSearchParams()
  const tabParam = searchParams.get('tab')
  const validTabs = MENU.map(m => m.id)
  const [active, setActive] = useState(
    validTabs.includes(tabParam) ? tabParam : 'regisztracio'
  )

  useEffect(() => {
    if (validTabs.includes(tabParam)) setActive(tabParam)
  }, [tabParam])

  return (
    <div className={styles.wrap}>
      <Helmet>
        <title>Értékesítés — SinkBid</title>
        <meta name="description" content="Regisztráció eladóként, eladói feltételek, díjak és útmutató a SinkBid platformon." />
      </Helmet>

      <div className={styles.hero}>
        <div className={styles.tag}>Eladóknak</div>
        <h1 className={styles.title}>Értékesítés</h1>
        <p className={styles.sub}>Minden tudnivaló a SinkBid platformon történő értékesítéshez.</p>
      </div>

      <div className={styles.layout}>
        <nav className={styles.sidebar}>
          {MENU.map(item => (
            <button
              key={item.id}
              className={`${styles.navItem} ${active === item.id ? styles.navItemActive : ''}`}
              onClick={() => setActive(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className={styles.content}>
          {CONTENT_MAP[active]}
        </div>
      </div>
    </div>
  )
}
