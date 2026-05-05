import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import styles from './Vasarlas.module.css'

const MENU = [
  { id: 'regisztracio', label: 'Regisztráció vevőként' },
  { id: 'aukciok', label: 'Aukciók' },
  { id: 'hogyan', label: 'Hogyan működik?' },
  { id: 'feltetelek', label: 'Vásárlói feltételek' },
  { id: 'tajekoztato', label: 'Vásárlói tájékoztató' },
]

const BUYER_INFO_ITEMS = [
  {
    id: 'eladorol',
    q: 'Az eladóról',
    a: 'A SinkBid platformon kizárólag ellenőrzött, regisztrált eladók hirdethetnek. Minden eladó azonosítása megtörtént, és elfogadta a platformszabályzatot. Az eladó nevét és értékeléseit a termék oldalán találod.',
  },
  {
    id: 'tobbet',
    q: 'Hogyan tudhatok meg többet egy tárgyról?',
    a: 'A termékoldalon részletes leírást, fotókat és állapotinformációkat találsz. Ha további kérdésed van, a termékoldal alján található kapcsolatfelvételi űrlapon közvetlenül írhatsz az eladónak.',
  },
  {
    id: 'kapcsolat',
    q: 'Kapcsolatfelvétel az eladóval',
    a: 'Az aukció megkezdése előtt és után is lehetőséged van kapcsolatba lépni az eladóval a termékoldalon keresztül. A SinkBid felügyeli az üzenetváltásokat, hogy biztonságos maradjon a kommunikáció.',
  },
  {
    id: 'visszajelzes',
    q: 'Visszajelzés az eladónak',
    a: 'A vásárlás lezárása után értékelheted az eladót. Az értékelések segítenek a közösségnek a megalapozott döntésben. Kérjük, tárgyilagos és részletes visszajelzést adj.',
  },
]

function FaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
      <button className={styles.faqQ} onClick={() => setOpen(o => !o)}>
        <span>{item.q}</span>
        <span className={styles.faqChevron}>{open ? '▲' : '▼'}</span>
      </button>
      {open && <div className={styles.faqA}>{item.a}</div>}
    </div>
  )
}

function ContentRegisztracio() {
  return (
    <>
      <div className={styles.contentTitle}>Regisztráció vevőként</div>
      <p className={styles.para}>A SinkBid platformon vásárolni regisztráció után lehetséges. A regisztráció ingyenes és néhány percet vesz igénybe.</p>
      <p className={styles.para}>A regisztrációhoz érvényes e-mail-cím és telefonszám szükséges. Az azonosítás SMS-kód segítségével történik.</p>
      <p className={styles.para}>Regisztrált vevőként részt vehetsz az aukciókban, nyomon követheted az általad megtekintett tételeket, és hozzáférhetsz a vásárlási előzményeidhez.</p>
    </>
  )
}

function ContentAukciok() {
  return (
    <>
      <div className={styles.contentTitle}>Aukciók</div>
      <p className={styles.para}>A SinkBid fordított licit rendszert alkalmaz: az ár minden egyes betekintési díj befizetésével csökken. Az aukció addig tart, amíg valaki úgy dönt, hogy elveszi a terméket az aktuális áron.</p>
      <p className={styles.para}>Minden aukción csak ellenőrzött, prémium tárgyak szerepelnek. Az induló ár minimum 200 EUR.</p>
      <p className={styles.para}>A betekintési díj mértéke a termék aktuális árától függ, és beleszámít a végső vételárba.</p>
    </>
  )
}

function ContentHogyan() {
  return (
    <>
      <div className={styles.contentTitle}>Hogyan működik?</div>
      <p className={styles.para}><strong>1. Választasz egy terméket</strong> — Böngéssz a kategóriák között és válaszd ki ami érdekel.</p>
      <p className={styles.para}><strong>2. Fizetsz betekintési díjat</strong> — A díj befizetésével belépsz az aukció felületére. Az ár azonnal csökken a díj összegével. Ez az összeg beleszámít a végső vételárba.</p>
      <p className={styles.para}><strong>3. Figyeled az árat</strong> — Minden újabb befizetés tovább csökkenti az árat. Te döntöd el, mikor megfelelő az ár számodra.</p>
      <p className={styles.para}><strong>4. Megveszed vagy vársz</strong> — Ha megfelelő az ár, kattints a "Megveszem most" gombra. 5 percen belül ki kell fizetned a fennmaradó összeget. Ha nem fizetsz, az aukció folytatódik.</p>
    </>
  )
}

function ContentFeltetelek() {
  return (
    <>
      <div className={styles.contentTitle}>Vásárlói feltételek</div>
      <p className={styles.para}>A SinkBid platformon történő vásárláshoz el kell fogadnod az általános vásárlói feltételeket. A feltételek tartalmazzák a betekintési díj visszatérítési szabályait, a fizetési határidőket és a szállítási feltételeket.</p>
      <p className={styles.para}>A betekintési díj nem visszatérítendő, ha a vásárló nem él az azonnali vásárlás lehetőségével. Ha a vásárló a "Megveszem most" gombot megnyomta, de 5 percen belül nem fizet, elveszíti az előnyét, de a betekintési díja továbbra is beleszámít a végső árba, ha később visszatér.</p>
      <p className={styles.para}>A teljes vásárlói feltételrendszer a platform Általános Szerződési Feltételei között érhető el.</p>
    </>
  )
}

function ContentTajekoztato() {
  return (
    <>
      <div className={styles.contentTitle}>Vásárlói tájékoztató</div>
      <p className={styles.para}>Ebben a részben válaszokat találsz a vásárlással kapcsolatos leggyakoribb kérdésekre.</p>
      <div className={styles.faqList}>
        {BUYER_INFO_ITEMS.map(item => (
          <FaqItem key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}

const CONTENT_MAP = {
  regisztracio: <ContentRegisztracio />,
  aukciok: <ContentAukciok />,
  hogyan: <ContentHogyan />,
  feltetelek: <ContentFeltetelek />,
  tajekoztato: <ContentTajekoztato />,
}

export default function Vasarlas() {
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
        <title>Vásárlóknak — SinkBid</title>
        <meta name="description" content="Regisztráció, aukciók, vásárlói feltételek és tájékoztató vevőknek a SinkBid platformon." />
      </Helmet>

      <div className={styles.hero}>
        <div className={styles.tag}>Vevőknek</div>
        <h1 className={styles.title}>Vásárlóknak</h1>
        <p className={styles.sub}>Minden tudnivaló a SinkBid platformon történő vásárláshoz.</p>
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
