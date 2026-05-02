import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  const { t } = useTranslation()

  return (
    <div className={styles.wrap}>

      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Hogyan működik a SinkBid?</h1>
      </div>

      <div className={styles.sections}>

        <div className={styles.section}>
          <div className={styles.num}>01</div>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Válassz terméket</h2>
            <p className={styles.sectionText}>Böngéssz a kategóriák között és válaszd ki ami érdekel. Minden kategóriában prémium termékeket találsz.</p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.num}>02</div>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Fizess betekintési díjat — Ezzel már csökkentve az ár</h2>
            <p className={styles.sectionText}>A betekintési díj befizetésével belépsz a licitbe és élőben látod az aktuális árat.</p>
            <p className={styles.sectionHighlight}>Ez az összeg beleszámít a végső vételárba.</p>
            <p className={styles.sectionText}>Fontos: egyetlen betekintési díj befizetésével már jogod van a terméket bármely áron elvinni — akkor is, ha az ár azóta tovább csökkent mások befizetései miatt. Ha úgy döntesz hogy megveszed, 5 percen belül ki kell fizetned a fennmaradó összeget.</p>
            <p className={styles.sectionText}>A betekintési díj mértéke a termék árától függ:</p>

            <div className={styles.table}>
              <div className={styles.tableRow}><span>100 — 1.000 EUR</span><span>5 EUR</span></div>
              <div className={styles.tableRow}><span>1.001 — 10.000 EUR</span><span>10 EUR</span></div>
              <div className={styles.tableRow}><span>10.001 — 20.000 EUR</span><span>20 EUR</span></div>
              <div className={styles.tableRow}><span>20.001 — 30.000 EUR</span><span>30 EUR</span></div>
              <div className={styles.tableRow}><span>30.001 — 40.000 EUR</span><span>40 EUR</span></div>
              <div className={styles.tableRow}><span>40.001 — 50.000 EUR</span><span>50 EUR</span></div>
              <div className={styles.tableRow}><span>50.001 — 60.000 EUR</span><span>60 EUR</span></div>
              <div className={styles.tableRow}><span>60.001 — 70.000 EUR</span><span>70 EUR</span></div>
              <div className={styles.tableRow}><span>70.001 — 80.000 EUR</span><span>80 EUR</span></div>
              <div className={styles.tableRow}><span>80.001 — 90.000 EUR</span><span>90 EUR</span></div>
              <div className={styles.tableRow}><span>90.001 — 100.000 EUR+</span><span>100 EUR</span></div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.num}>03</div>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Figyeld az árat</h2>
            <p className={styles.sectionText}>Minden új licitáló csökkenti az árat a licit lépcső összegével. Te döntöd el mikor megfelelő az ár — nincs időkorlát, a licit addig megy amíg valaki el nem viszi a terméket.</p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.num}>04</div>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Vedd el — vagy kockáztass</h2>
            <p className={styles.sectionText}>Ha megfelelő az ár, kattints a <strong>Megveszem most</strong> gombra. 5 percen belül ki kell fizetned a fennmaradó összeget kártyával.</p>
            <p className={styles.sectionText}>Ha nem fizetsz 5 percen belül, a licit folytatódik onnan ahol tartott. Ha vársz, más is elviheti előled — ez a játék lényege!</p>
          </div>
        </div>

      </div>

      <div className={styles.modelBox}>
        <h2 className={styles.modelTitle}>A SinkBid pénzügyi modellje</h2>
        <div className={styles.modelGrid}>
          <div className={styles.modelItem}>
            <div className={styles.modelLabel}>BETEKINTÉSI DÍJ</div>
            <div className={styles.modelVal}>Ártól függő</div>
            <div className={styles.modelSub}>Beleszámít a végső vételárba</div>
          </div>
          <div className={styles.modelItem}>
            <div className={styles.modelLabel}>ÁRCSÖKKENTÉS / BELÉPÉS</div>
            <div className={styles.modelVal}>Licit lépcső</div>
            <div className={styles.modelSub}>Az eladóhoz kerül komponzációként</div>
          </div>
          <div className={styles.modelItem}>
            <div className={styles.modelLabel}>PLATFORM DÍJ / BELÉPÉS</div>
            <div className={styles.modelVal}>0,20 EUR</div>
            <div className={styles.modelSub}>Üzemeltetési cost és profit</div>
          </div>
          <div className={styles.modelItem}>
            <div className={styles.modelLabel}>ELADÓI JUTALÉK</div>
            <div className={styles.modelVal}>2,5%</div>
            <div className={styles.modelSub}>A végső eladási árból levonva</div>
          </div>
        </div>
      </div>

      <div className={styles.example}>
        <div className={styles.exampleTag}>PÉLDA — OMEGA SEAMASTER 5.600 EUR</div>
        <div className={styles.exampleRow}><span>Indulóár</span><span>5.600 EUR</span></div>
        <div className={styles.exampleRow}><span>Licit lépcső (1.001–10.000 EUR sávban)</span><span>10 EUR</span></div>
        <div className={styles.exampleRow}><span>80 licitáló belép</span><span>− 800 EUR (80 × 10)</span></div>
        <div className={styles.exampleRow}><span>Te fizetsz (10 EUR már beleszámít)</span><span>4.790 EUR</span></div>
        <div className={styles.exampleRowFinal}><span>Megtakarításod</span><span>800 EUR (14%)</span></div>
      </div>

    </div>
  )
}
