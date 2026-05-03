import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  const { t } = useTranslation()

  return (
    <div className={styles.wrap}>

      <div className={styles.header}>
        <div className={styles.headerTag}>Fordított licit platform</div>
        <h1 className={styles.headerTitle}>Hogyan működik a SinkBid?</h1>
      </div>

      <div className={styles.main}>

        <div className={styles.modelBox}>
          <h2 className={styles.modelTitle}>A SinkBid működése</h2>
          <div className={styles.modelGrid}>
            <div className={styles.modelItem}>
              <div className={styles.modelLabel}>BETEKINTÉSI DÍJ</div>
              <div className={styles.modelVal}>Ártól függő</div>
              <div className={styles.modelDesc}>Beleszámít a végső vételárba</div>
            </div>
            <div className={styles.modelItem}>
              <div className={styles.modelLabel}>BETEKINTÉSI DÍJ = ÁRCSÖKKENTÉS</div>
              <div className={styles.modelVal}>Aukció</div>
              <div className={styles.modelDesc}>Az eladóhoz kerül a végleges vételárral együtt</div>
            </div>
            <div className={styles.modelItem}>
              <div className={styles.modelLabel}>NYERTES AUKCIÓ</div>
              <div className={styles.modelVal}>A termék kifizetése</div>
              <div className={styles.modelDesc}>Szállítás módjának kiválasztása</div>
            </div>
            <div className={styles.modelItem}>
              <div className={styles.modelLabel}>Termék átvétele</div>
              <div className={styles.modelVal}>Visszajelzés</div>
              <div className={styles.modelDesc}>ÖRÖM-BOLDOGSÁG</div>
            </div>
          </div>
        </div>

        <div className={styles.steps}>

          <div className={styles.step}>
            <div className={styles.stepN}>01</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Válassz terméket</h3>
              <p className={styles.stepDesc}>Böngéssz a kategóriák között és válaszd ki ami érdekel.<br />Megtalálod azt a tárgyat amit szívesen megvásárolnál csökkentett áron.</p>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepN}>02</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle} style={{whiteSpace: 'nowrap'}}>Fizess betekintési díjat — az ár azonnal csökken</h3>
              <p className={styles.stepDesc}>A betekintési díj befizetésével belépsz az aukció felületére és élőben látod<br />az aktuális árat, hogy pillanatnyilag mennyiért viheted el azonnal.</p>
              <p className={styles.stepDesc}><strong>Ez az összeg beleszámít a végső vételárba.</strong></p>
              <p className={styles.stepDesc}>Fontos: egyetlen betekintési díj befizetésével már jogod van a terméket bármely<br />áron elvinni — akkor is, ha az ár azóta tovább csökkent mások befizetései miatt.<br />Ha úgy döntesz hogy megveszed, 5 percen belül ki kell fizetned a fennmaradó összeget.</p>
              <p className={styles.stepDesc}>A betekintési díj mértéke a termék árától függ:</p>
              <div className={styles.bidStepTable}>
                <div className={styles.bidStepRow}><span>100 — 1.000 EUR</span><span className={styles.bidStepVal}>5 EUR</span></div>
                <div className={styles.bidStepRow}><span>1.001 — 10.000 EUR</span><span className={styles.bidStepVal}>10 EUR</span></div>
                <div className={styles.bidStepRow}><span>10.001 — 20.000 EUR</span><span className={styles.bidStepVal}>20 EUR</span></div>
                <div className={styles.bidStepRow}><span>20.001 — 30.000 EUR</span><span className={styles.bidStepVal}>30 EUR</span></div>
                <div className={styles.bidStepRow}><span>30.001 — 40.000 EUR</span><span className={styles.bidStepVal}>40 EUR</span></div>
                <div className={styles.bidStepRow}><span>40.001 — 50.000 EUR</span><span className={styles.bidStepVal}>50 EUR</span></div>
                <div className={styles.bidStepRow}><span>50.001 — 60.000 EUR</span><span className={styles.bidStepVal}>60 EUR</span></div>
                <div className={styles.bidStepRow}><span>60.001 — 70.000 EUR</span><span className={styles.bidStepVal}>70 EUR</span></div>
                <div className={styles.bidStepRow}><span>70.001 — 80.000 EUR</span><span className={styles.bidStepVal}>80 EUR</span></div>
                <div className={styles.bidStepRow}><span>80.001 — 90.000 EUR</span><span className={styles.bidStepVal}>90 EUR</span></div>
                <div className={styles.bidStepRow}><span>90.001 — 100.000 EUR+</span><span className={styles.bidStepVal}>100 EUR</span></div>
              </div>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepN}>03</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Figyeld az árat</h3>
              <p className={styles.stepDesc}>Minden új betekintési díj csökkenti az árat a díj összegével.<br />Te döntöd el mikor megfelelő az ár Neked — nincs időkorlát,<br />az aukció addig tart amíg valaki úgy dönt, Neki jó az ár<br />és elviszi a terméket.</p>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepN}>04</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Vedd el — vagy kockáztass</h3>
              <p className={styles.stepDesc}>Ha megfelelő az ár, kattints a <strong>Megveszem most</strong> gombra. 5 percen belül ki kell fizetned a fennmaradó összeget kártyával.</p>
              <p className={styles.stepDesc}>Ha nem fizetsz 5 percen belül, a licit folytatódik onnan ahol tartott. Ha vársz, más is elviheti előled — ez a játék lényege!</p>
            </div>
          </div>

        </div>

        <div className={styles.example}>
          <div className={styles.exampleTitle}>PÉLDA — OMEGA SEAMASTER 5.600 EUR</div>
          <div className={styles.exampleRows}>
            <div className={styles.exRow}><span>Indulóár</span><span>5.600 EUR</span></div>
            <div className={styles.exRow}><span>Licit lépcső (1.001–10.000 EUR sávban)</span><span>10 EUR</span></div>
            <div className={styles.exRow}><span>80 licitáló belép</span><span>− 800 EUR (80 × 10)</span></div>
            <div className={styles.exRow}><span>Te fizetsz (10 EUR már beleszámít)</span><span>4.790 EUR</span></div>
            <div className={styles.exRowTotal}><span>Megtakarításod</span><span>800 EUR (14%)</span></div>
          </div>
        </div>

      </div>
    </div>
  )
}
