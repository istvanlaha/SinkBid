import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useBidStore, CATEGORIES } from '../store/bidStore'
import BidCard from '../components/BidCard'
import styles from './Home.module.css'

const SHOWCASE_CATEGORIES = [
  { id: 'orak', label: 'Watches' },
  { id: 'ekszer', label: 'Jewellery' },
  { id: 'divat', label: 'Fashion' },
  { id: 'jarmuvek', label: 'Vehicles' },
  { id: 'muveszet', label: 'Art' },
  { id: 'butor', label: 'Furniture' },
  { id: 'mobil', label: 'Mobile Phones' },
  { id: 'muszaki', label: 'Electronics' },
  { id: 'szamtech', label: 'Computing' },
  { id: 'sport', label: 'Sport' },
  { id: 'otthon', label: 'Home' },
  { id: 'gyujtheto', label: 'Collectibles' },
  { id: 'jatekok', label: 'Games' },
  { id: 'konyvek', label: 'Books' },
  { id: 'ipari', label: 'Industrial' },
  { id: 'szepseg', label: 'Beauty' },
  { id: 'ingatlan', label: 'Real Estate' },
]

export default function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { getFiltered, getByCategory, externalBid, bidStates, products, currency, setCurrency } = useBidStore()
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

  const totalBidders = Object.values(bidStates).reduce((acc, s) => acc + s.biddersCount, 0)

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroTag}>{t('hero.tag')}</div>
        <h1 className={styles.heroTitle}>
          {t('hero.title1')} <em>{t('hero.title2')}</em>
          <br />{t('hero.title3')}
        </h1>
        <p className={styles.heroSub}>{t('hero.subtitle')}</p>
        <div className={styles.heroPulse}>
          {t('hero.pulse')}
        </div>
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

      <main className={styles.main} id="active-bids">

        <div className={styles.currencyBar}>
          <span className={styles.currencyLabel}>{t('bid.currency')}:</span>
          <button
            className={`${styles.currencyBtn} ${currency === 'EUR' ? styles.currencyActive : ''}`}
            onClick={() => setCurrency('EUR')}
          >EUR</button>
          <button
            className={`${styles.currencyBtn} ${currency === 'USD' ? styles.currencyActive : ''}`}
            onClick={() => setCurrency('USD')}
          >USD</button>
        </div>

        {SHOWCASE_CATEGORIES.map(cat => {
          const items = getByCategory(cat.id).slice(0, 3)
          if (items.length === 0) return null
          return (
            <section key={cat.id} className={styles.catSection}>
              <div className={styles.catSectionHead}>
                <h2 className={styles.catSectionTitle}>{t('categories.' + cat.id)}</h2>
                <span
                  className={styles.catSectionLink}
                  onClick={() => navigate(`/category/${cat.id}`)}
                >
                  {t('bid.viewAll')}
                </span>
              </div>
              <div className={styles.catGrid}>
                {items.map(product => (
                  <BidCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )
        })}

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
            <div className={styles.bidStepTitle}>{t('bid.entryFeeTitle')}</div>
           <div className={styles.bidStepGrid}>
  <div className={styles.bidStepItem}><span className={styles.bidStepRange}>100 — 1.000 EUR</span><span className={styles.bidStepVal}>5 EUR</span></div>
  <div className={styles.bidStepItem}><span className={styles.bidStepRange}>1.001 — 10.000 EUR</span><span className={styles.bidStepVal}>10 EUR</span></div>
  <div className={styles.bidStepItem}><span className={styles.bidStepRange}>10.001 — 20.000 EUR</span><span className={styles.bidStepVal}>20 EUR</span></div>
  <div className={styles.bidStepItem}><span className={styles.bidStepRange}>20.001 — 30.000 EUR</span><span className={styles.bidStepVal}>30 EUR</span></div>
  <div className={styles.bidStepItem}><span className={styles.bidStepRange}>30.001 — 40.000 EUR</span><span className={styles.bidStepVal}>40 EUR</span></div>
  <div className={styles.bidStepItem}><span className={styles.bidStepRange}>40.001 — 50.000 EUR</span><span className={styles.bidStepVal}>50 EUR</span></div>
  <div className={styles.bidStepItem}><span className={styles.bidStepRange}>50.001 — 60.000 EUR</span><span className={styles.bidStepVal}>60 EUR</span></div>
  <div className={styles.bidStepItem}><span className={styles.bidStepRange}>60.001 — 70.000 EUR</span><span className={styles.bidStepVal}>70 EUR</span></div>
  <div className={styles.bidStepItem}><span className={styles.bidStepRange}>70.001 — 80.000 EUR</span><span className={styles.bidStepVal}>80 EUR</span></div>
  <div className={styles.bidStepItem}><span className={styles.bidStepRange}>80.001 — 90.000 EUR</span><span className={styles.bidStepVal}>90 EUR</span></div>
  <div className={styles.bidStepItem}><span className={styles.bidStepRange}>90.001 — 100.000 EUR+</span><span className={styles.bidStepVal}>100 EUR</span></div>
</div>
          </div>
        </section>

      </main>
    </div>
  )
}
