import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useBidStore } from '../store/bidStore'
import CategoryNav from '../components/CategoryNav'
import BidCard from '../components/BidCard'
import styles from './Home.module.css'

export default function Home() {
  const { t } = useTranslation()
  const { getFiltered, externalBid, bidStates, products } = useBidStore()
  const intervalRef = useRef(null)

  useEffect(() => {
    const simulate = () => {
      const activeProducts = products.filter(p => !bidStates[p.id]?.sold)
      if (activeProducts.length === 0) return
      const random = activeProducts[Math.floor(Math.random() * activeProducts.length)]
      externalBid(random.id)
    }
    intervalRef.current = setInterval(simulate, Math.random() * 4000 + 4000)
    return () => clearInterval(intervalRef.current)
  }, [products, bidStates])

  const filtered = getFiltered()
  const totalBidders = Object.values(bidStates).reduce((acc, s) => acc + s.biddersCount, 0)

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroTag}>{t('hero.tag')}</div>
        <h1 className={styles.heroTitle}>
          {t('hero.title1')} <em>{t('hero.title2')}</em>
          <br />
          {t('hero.title3')}
        </h1>
        <p className={styles.heroSub}>{t('hero.subtitle')}</p>
        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <div className={styles.heroStatN}>{products.length}</div>
            <div className={styles.heroStatL}>{t('hero.statActive')}</div>
          </div>
          <div className={styles.heroStat}>
            <div className={styles.heroStatN}>{totalBidders.toLocaleString()}</div>
            <div className={styles.heroStatL}>{t('hero.statBidders')}</div>
          </div>
          <div className={styles.heroStat}>
            <div className={styles.heroStatN}>62%</div>
            <div className={styles.heroStatL}>{t('hero.statSaved')}</div>
          </div>
        </div>
      </section>

      <CategoryNav />

      <main className={styles.main}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>{t('nav.activeBids')}</h2>
          <span className={styles.sectionCount}>{filtered.length} tétel</span>
        </div>
        <div className={styles.grid}>
          {filtered.map(product => (
            <BidCard key={product.id} product={product} />
          ))}
        </div>

       <section className={styles.how}>
          <h2 className={styles.howTitle}>{t('how.title')}</h2>
          <div className={styles.howSteps}>
            {[1, 2, 3, 4].map(n => (
              <div key={n} className={styles.howStep}>
                <div className={styles.howN}>0{n}</div>
                <div className={styles.howStepTitle}>{t(`how.s${n}t`)}</div>
                <div className={styles.howStepDesc}>{t(`how.s${n}d`)}</div>
              </div>
            ))}
          </div>
          <div className={styles.bidStepBox}>
            <div className={styles.bidStepTitle}>Betekintési díj és licit lépcső</div>
            <div className={styles.bidStepGrid}>
              <div className={styles.bidStepItem}>
                <span className={styles.bidStepRange}>100 — 1.000 EUR</span>
                <span className={styles.bidStepVal}>10 EUR</span>
              </div>
              <div className={styles.bidStepItem}>
                <span className={styles.bidStepRange}>1.001 — 10.000 EUR</span>
                <span className={styles.bidStepVal}>20 EUR</span>
              </div>
              <div className={styles.bidStepItem}>
                <span className={styles.bidStepRange}>10.001 — 100.000 EUR</span>
                <span className={styles.bidStepVal}>50 EUR</span>
              </div>
              <div className={styles.bidStepItem}>
                <span className={styles.bidStepRange}>100.001 — 1.000.000 EUR</span>
                <span className={styles.bidStepVal}>100 EUR</span>
              </div>
              <div className={styles.bidStepItem}>
                <span className={styles.bidStepRange}>1.000.001 — 2.000.000 EUR</span>
                <span className={styles.bidStepVal}>200 EUR</span>
              </div>
              <div className={styles.bidStepItem}>
                <span className={styles.bidStepRange}>2.000.001 EUR felett</span>
                <span className={styles.bidStepVal}>500 EUR</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
