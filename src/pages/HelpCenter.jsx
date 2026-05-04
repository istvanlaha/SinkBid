import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import styles from './HelpCenter.module.css'

const FAQ = [
  {
    q: 'Hogyan működik a fordított aukció?',
    a: 'A SinkBid fordított aukción az árak felülről lefelé csökkennek. Az eladó meghatározza az induló árat. Minden vásárló, aki betekintési díjat fizet, csökkenti az aktuális árat az aukció lépcső összegével. Bármelyik belépett vásárló bármikor megvásárolhatja a terméket a „Megveszem most" gombbal az aktuális áron.',
  },
  {
    q: 'Mi az a betekintési díj?',
    a: 'A betekintési díj egy belépési összeg, amellyel a vásárló csatlakozik az aukcióhoz. Ez az összeg csökkenti a termék aktuális árát, és beleszámít a végső vételárba — tehát nem elveszett pénz. A betekintési díj mértéke az aktuális ártól függ (5 EUR–100 EUR között).',
  },
  {
    q: 'Mi történik, ha megnyomom a „Megveszem most" gombot?',
    a: 'Az aukció 5 percre szünetel, és Önnek ennyi ideje van a fennmaradó összeg (aktuális ár mínusz a már befizetett betekintési díj) megfizetésére. Ha 5 percen belül nem fizet, az aukció automatikusan folytatódik — a befizetett betekintési díj nem jár vissza.',
  },
  {
    q: 'Visszakapom a betekintési díjat, ha nem veszem meg a terméket?',
    a: 'A betekintési díj általában nem kerül visszatérítésre. Kivételek: technikai hiba esetén, ha a termékleírás lényegesen eltér a valóságtól (és a SinkBid ezt megállapítja), vagy ha az eladó az aukció megkezdése előtt visszavonja a terméket.',
  },
  {
    q: 'Hogyan regisztrálhatok eladóként?',
    a: 'Az eladói regisztrációhoz szükséges: teljes név/cégnév, cím, adószám (vállalkozásoknál), bankszámlaszám, e-mail cím, telefonszám és személyazonosító okmány másolata. A regisztrációt a SinkBid ellenőrzi és jóváhagyja — ez akár néhány napot is igénybe vehet.',
  },
  {
    q: 'Mekkora a SinkBid jutaléka?',
    a: 'A SinkBid jutaléka 12%, amelyet a nettó eladási árból és a nettó betekintési díjak összegéből számítanak. A jutalékszámlát minden hétfőn küldjük, és 8 munkanapon belül esedékes.',
  },
  {
    q: 'Mennyi idő alatt kell szállítanom eladóként?',
    a: 'A kifizetés visszaigazolásától számított, a termék adatlapján megjelölt határidőn belül (alapértelmezés: 5 munkanap). 500 EUR feletti tárgyaknál szállítási biztosítás is kötelező.',
  },
  {
    q: 'Van-e minimális induló ár?',
    a: 'Igen, a minimális induló ár 200 EUR. Ennél alacsonyabb értékű tárgyak nem tölthetők fel a platformra.',
  },
  {
    q: 'Milyen termékek nem értékesíthetők a platformon?',
    a: 'Tiltott termékek közé tartoznak: hamisított áruk, illegális tárgyak, felnőtt tartalom, kábítószerek, fegyverek (kivéve engedéllyel rendelkező gyűjtői darabok), CITES dokumentáció nélküli védett fajok termékei, és minden 200 EUR alatti értékű tárgy.',
  },
  {
    q: 'Hogyan jelentsek gyanús terméket?',
    a: 'Küldjön e-mailt a support@sinkbid.com címre a termék link-jével és a gyanú leírásával. Minden bejelentést kivizsgálunk és szükség esetén intézkedünk.',
  },
]

const TILTOTT = [
  { icon: '🔞', title: 'Felnőtt tartalom', desc: 'Kiskorúakat ábrázoló tartalmak, pornográf anyagok, használt intim tárgyak' },
  { icon: '💊', title: 'Kábítószer és dohány', desc: 'Ellenőrzött anyagok, drogkellékek, cigaretta, gyűjtői célú alkohol kivételével' },
  { icon: '🗡️', title: 'Gyűlölet és erőszak', desc: 'Gyűlöletcsoportokat vagy terrorizmust propagáló tárgyak' },
  { icon: '🐘', title: 'Védett fajok', desc: 'CITES dokumentáció nélküli elefántcsont, krokodilbőr, védett növények' },
  { icon: '💣', title: 'Veszélyes tárgyak', desc: 'Illegális fegyverek, lőszerek, robbanóanyagok, radioaktív anyagok' },
  { icon: '🚫', title: 'Illegális tárgyak', desc: 'Lopott, hamisított, szankcionált területekről (Irán, É-Korea) származó tárgyak' },
  { icon: '💸', title: 'Forgalomban lévő valuták', desc: 'Jelenleg forgalomban lévő bankjegyek és valuták (gyűjtői érmék kivételével)' },
  { icon: '📉', title: '200 EUR alatti tárgyak', desc: 'Ennél alacsonyabb induló árú termékek nem tölthetők fel (kivételek az útmutatókban)' },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
      <button className={styles.faqQ} onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <span className={styles.faqIcon}>{open ? '−' : '+'}</span>
      </button>
      {open && <div className={styles.faqA}>{a}</div>}
    </div>
  )
}

export default function HelpCenter() {
  return (
    <div className={styles.wrap}>
      <Helmet>
        <title>Súgó Központ — SinkBid</title>
        <meta name="description" content="Válaszok a leggyakoribb kérdésekre, tiltott termékek listája és kapcsolati információk." />
      </Helmet>

      <div className={styles.hero}>
        <div className={styles.tag}>Súgó</div>
        <h1 className={styles.title}>Súgó Központ</h1>
        <p className={styles.sub}>Válaszok a leggyakoribb kérdésekre, platform irányelvek és kapcsolati információk.</p>
      </div>

      <div className={styles.quickLinks}>
        <Link to="/how" className={styles.quickCard}>
          <div className={styles.quickIcon}>🎯</div>
          <div className={styles.quickTitle}>Hogyan működik?</div>
          <div className={styles.quickSub}>A fordított aukció részletes bemutatója</div>
        </Link>
        <Link to="/seller-guide" className={styles.quickCard}>
          <div className={styles.quickIcon}>📋</div>
          <div className={styles.quickTitle}>Eladói útmutató</div>
          <div className={styles.quickSub}>Feltöltési szabályok kategóriánként</div>
        </Link>
        <Link to="/terms" className={styles.quickCard}>
          <div className={styles.quickIcon}>📄</div>
          <div className={styles.quickTitle}>ÁSZF</div>
          <div className={styles.quickSub}>Általános Szerződési Feltételek</div>
        </Link>
        <Link to="/privacy" className={styles.quickCard}>
          <div className={styles.quickIcon}>🔒</div>
          <div className={styles.quickTitle}>Adatvédelem</div>
          <div className={styles.quickSub}>GDPR tájékoztató és adatkezelés</div>
        </Link>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Gyakran ismételt kérdések</h2>
        <div className={styles.faqList}>
          {FAQ.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Tiltott és korlátozott termékek</h2>
        <p className={styles.para}>A SinkBid platformon kizárólag valódi, jó minőségű és <strong>jogszerűen értékesíthető</strong> termékek kerülhetnek fel. Az alábbi tárgyak feltöltése és értékesítése tilos:</p>
        <div className={styles.tiltottGrid}>
          {TILTOTT.map(item => (
            <div key={item.title} className={styles.tiltottCard}>
              <div className={styles.tiltottIcon}>{item.icon}</div>
              <div className={styles.tiltottTitle}>{item.title}</div>
              <div className={styles.tiltottDesc}>{item.desc}</div>
            </div>
          ))}
        </div>

        <div className={styles.infoBox}>
          <div className={styles.infoTitle}>Korlátozott (feltételesen engedélyezett) termékek</div>
          <ul className={styles.infoList}>
            <li><strong>Gyűjtői alkohol:</strong> eredeti csomagolásban, az eladónak és vevőnek egyaránt 18+ korúnak kell lennie</li>
            <li><strong>Kulturális műtárgyak és régészeti leletek:</strong> kötelező proveniencia igazolás és jogi megfelelőség dokumentálása</li>
            <li><strong>Történelmi és díszfegyverek:</strong> nem működőképes, dekorációs darabok — engedélyekkel és jogszerű eredettel</li>
            <li><strong>CITES dokumentációval rendelkező tárgyak:</strong> érvényes export/import engedéllyel és csatolt dokumentációval</li>
          </ul>
        </div>

        <div className={styles.infoBox}>
          <div className={styles.infoTitle}>MI-generált tartalmak</div>
          <p className={styles.infoText}>Az MI-generált képek és szövegek csak korlátozottan engedélyezettek. Az eladónak a leírásban egyértelműen jelölnie kell, ha a tartalom részben vagy egészben MI által generált. Felnőtt tartalmú MI-képek és azonosítható valós személyek ábrázolásai tilosak.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Szabálysértés bejelentése</h2>
        <p className={styles.para}>Ha olyan terméket észlel platformunkon, amely véleménye szerint megsérti irányelveinket, kérjük jelezze ügyfélszolgálatunknak. Minden bejelentést kivizsgálunk és szükség esetén intézkedünk.</p>
        <div className={styles.contactBox}>
          <div className={styles.contactTitle}>Kapcsolat</div>
          <div className={styles.contactLine}>
            <a href="mailto:support@sinkbid.com">support@sinkbid.com</a> — Bejelentések, kérdések, panaszok<br />
            Válaszidő: 5 munkanapon belül
          </div>
        </div>
      </section>
    </div>
  )
}
