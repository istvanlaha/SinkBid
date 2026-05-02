import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  const { t } = useTranslation()

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.headerTag}>Útmutató</div>
        <h1 className={styles.headerTitle}>{t('how.title')}</h1>
      </div>

      <div className={styles.main}>
        <div className={styles.steps}>

          <div className={styles.step}>
            <div className={styles.stepN}>01</div>
            <div className={styles.stepContent}>
              <div className={styles.stepTitle}>Válassz terméket</div>
              <div className={styles.stepDesc}>
                Böngéssz a kategóriák között és válaszd ki ami érdekel.
                Minden kategóriában prémium, ellenőrzött termékeket találsz.
              </div>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepN}>02</div>
            <div className={styles.stepContent}>
              <div className={styles.stepTitle}>Fizess betekintési díjat</div>
              <div className={styles.stepDesc}>
                A betekintési díj befizetésével belépsz a licitbe és élőben látod az aktuális árat.
                <strong> Ez az összeg beleszámít a végső vételárba.</strong>
                <br /><br />
                Fontos: egyetlen betekintési díj befizetésével már jogod van a terméket
                bármely áron elvinni — akkor is, ha az ár azóta tovább csökkent mások befizetései miatt.
                Ha úgy döntesz hogy megveszed, 5 percen belül ki kell fizetned a fennmaradó összeget.
                <br /><br />
                A betekintési díj mértéke a termék árától függ:
              </div>
              <div className={styles.bidStepTable}>
                <div className={styles.bidStepRow}>
                  <span>100 — 1.000 EUR</span>
                  <span className={styles.bidStepVal}>10 EUR</span>
                </div>
                <div className={styles.bidStepRow}>
                  <span>1.001 — 10.000 EUR</span>
                  <span className={styles.bidStepVal}>20 EUR</span>
                </div>
                <div className={styles.bidStepRow}>
                  <span>10.001 — 100.000 EUR</span>
                  <span className={styles.bidStepVal}>50 EUR</span>
                </div>
                <div className={styles.bidStepRow}>
                  <span>100.001 — 1.000.000 EUR</span>
                  <span className={styles.bidStepVal}>100 EUR</span>
                </div>
                <div className={styles.bidStepRow}>
                  <span>1.000.001 — 2.000.000 EUR</span>
                  <span className={styles.bidStepVal}>200 EUR</span>
                </div>
                <div className={styles.bidStepRow}>
                  <span>2.000.001 EUR felett</span>
                  <span className={styles.bidStepVal}>500 EUR</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepN}>03</div>
            <div className={styles.stepContent}>
              <div className={styles.stepTitle}>Figyeld az árat</div>
              <div className={styles.stepDesc}>
                Minden új licitáló csökkenti az árat a licit lépcső összegével.
                Te döntöd el mikor megfelelő az ár — nincs időkorlát, a licit addig megy
                amíg valaki el nem viszi a terméket.
              </div>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepN}>04</div>
            <div className={styles.stepContent}>
              <div className={styles.stepTitle}>Vedd el — vagy kockáztass</div>
              <div className={styles.stepDesc}>
                Ha megfelelő az ár, kattints a <strong>Megveszem most</strong> gombra.
                5 percen belül ki kell fizetned a fennmaradó összeget kártyával.
                <br /><br />
                Ha nem fizetsz 5 percen belül, a licit folytatódik onnan ahol tartott.
                Ha vársz, más is elviheti előled — ez a játék lényege!
              </div>
            </div>
          </div>

        </div>

        <div className={styles.modelBox}>
          <div className={styles.modelTitle}>A SinkBid pénzügyi modellje</div>
          <div className={styles.modelGrid}>
            <div className={styles.modelItem}>
              <div className={styles.modelLabel}>Betekintési díj</div>
              <div className={styles.modelVal}>Ártól függő</div>
              <div className={styles.modelDesc}>Beleszámít a végső vételárba</div>
            </div>
            <div className={styles.modelItem}>
              <div className={styles.modelLabel}>Árcsökkentés / belépés</div>
              <div className={styles.modelVal}>Licit lépcső</div>
              <div className={styles.modelDesc}>Az eladóhoz kerül kompenzációként</div>
            </div>
            <div className={styles.modelItem}>
              <div className={styles.modelLabel}>Platform díj / belépés</div>
              <div className={styles.modelVal}>0,20 EUR</div>
              <div className={styles.modelDesc}>Üzemeltetési cost és profit</div>
            </div>
            <div className={styles.modelItem}>
              <div className={styles.modelLabel}>Eladói jutalék</div>
              <div className={styles.modelVal}>2,5%</div>
              <div className={styles.modelDesc}>A végső eladási árból levonva</div>
            </div>
          </div>
        </div>

        <div className={styles.example}>
          <div className={styles.exampleTitle}>Példa — Omega Seamaster 5.600 EUR</div>
          <div className={styles.exampleRows}>
            <div className={styles.exRow}>
              <span>Indulóár</span>
              <span>5.600 EUR</span>
            </div>
            <div className={styles.exRow}>
              <span>Licit lépcső (1.001–10.000 EUR sávban)</span>
              <span>20 EUR</span>
            </div>
            <div className={styles.exRow}>
              <span>80 licitáló belép</span>
              <span>− 1.600 EUR (80 × 20)</span>
            </div>
            <div className={styles.exRow}>
              <span>Te fizetsz (20 EUR már beleszámít)</span>
              <span>3.980 EUR</span>
            </div>
            <div className={styles.exRowTotal}>
              <span>Megtakarításod</span>
              <span>1.600 EUR (29%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
