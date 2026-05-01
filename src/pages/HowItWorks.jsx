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
          {[1, 2, 3, 4].map(n => (
            <div key={n} className={styles.step}>
              <div className={styles.stepN}>0{n}</div>
              <div className={styles.stepContent}>
                <div className={styles.stepTitle}>{t(`how.s${n}t`)}</div>
                <div className={styles.stepDesc}>{t(`how.s${n}d`)}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.modelBox}>
          <div className={styles.modelTitle}>A SinkBid pénzügyi modellje</div>
          <div className={styles.modelGrid}>
            <div className={styles.modelItem}>
              <div className={styles.modelLabel}>Betekintési díj</div>
              <div className={styles.modelVal}>20 EUR</div>
              <div className={styles.modelDesc}>Beleszámít a végső vételárba</div>
            </div>
            <div className={styles.modelItem}>
              <div className={styles.modelLabel}>Árcsökkentés / belépés</div>
              <div className={styles.modelVal}>19,80 EUR</div>
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
              <span>80 licitáló belép</span>
              <span>− 1.584 EUR (80 × 19,80)</span>
            </div>
            <div className={styles.exRow}>
              <span>Te fizetsz (20 EUR már beleszámít)</span>
              <span>4.016 EUR</span>
            </div>
            <div className={styles.exRowTotal}>
              <span>Megtakarításod</span>
              <span>1.584 EUR (28%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
