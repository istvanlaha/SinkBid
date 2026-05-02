import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useBidStore, CATEGORIES, EUR_TO_USD } from '../store/bidStore'
import CategoryNav from '../components/CategoryNav'
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
]

function formatPrice(price, currency) {
  if (currency === 'USD') {
    return '$' + Math.round(price * EUR_TO_USD).toLocaleString('de-DE')
  }
  return '€' + price.toLocaleString('de-DE')
}

export default function Home() {
  const { t } = useTranslation()
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

      <main className={styles.main}>

        <div className={styles.currencyBar}>
          <span className={styles.currencyLabel}>Currency:</span>
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
          const items = getByCategory(cat.id).slice(0, 8)
          return (
            <section key={cat.id} className={styles.catSection}>
              <div className={styles.catSectionHead}>
                <h2 className={styles.catSectionTitle}>{cat.label}</h2>
                <span className={styles.catSectionLink}>View all →</span>
              </div>
              <div className={styles.catGrid}>
                {items.map(product => {
                  const state = bidStates[product.id]
                  const step = Math.floor(product.originalPrice <= 1000 ? 10 : product.originalPrice <= 10000 ? 20 : product.originalPrice <= 100000 ? 50 : 100)
                  const savings = Math.round((1 - state.currentPrice / product.originalPrice) * 100)
                  return (
                    <div key={product.id} className={styles.miniCard}>
                      <div className={styles.miniCardImg}>
                        <div className={styles.miniCardEmoji}>{product.emoji}</div>
                        <div className={styles.miniLiveBadge}>
                          <span className={styles.miniLiveDot} />
                          Live
                        </div>
                      </div>
                      <div className={styles.miniCardBody}>
                        <div className={styles.miniCardName}>{product.name}</div>
                        <div className={styles.miniCardDesc}>{product.description.substring(0, 60)}...</div>
                        <div className={styles.miniCardPriceRow}>
                          <span className={styles.miniCardPrice}>
                            {formatPrice(state.currentPrice, currency)}
                          </span>
                          <span className={styles.miniCardOrig}>
                            {formatPrice(product.originalPrice, currency)}
                          </span>
                        </div>
                        <div className={styles.miniCardFooter}>
                          <span className={styles.miniCardStep}>Step: {formatPrice(step, currency)}</span>
                          <span className={styles.miniCardSaving}>-{savings}%</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
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
            <div className={styles.bidStepTitle}>Entry fee & bid step</div>
            <div className={styles.bidStepGrid}>
              <div className={styles.bidStepItem}><span className={styles.bidStepRange}>100 — 1.000 EUR</span><span className={styles.bidStepVal}>10 EUR</span></div>
              <div className={styles.bidStepItem}><span className={styles.bidStepRange}>1.001 — 10.000 EUR</span><span className={styles.bidStepVal}>20 EUR</span></div>
              <div className={styles.bidStepItem}><span className={styles.bidStepRange}>10.001 — 100.000 EUR</span><span className={styles.bidStepVal}>50 EUR</span></div>
              <div className={styles.bidStepItem}><span className={styles.bidStepRange}>100.001 — 1.000.000 EUR</span><span className={styles.bidStepVal}>100 EUR</span></div>
              <div className={styles.bidStepItem}><span className={styles.bidStepRange}>1.000.001 — 2.000.000 EUR</span><span className={styles.bidStepVal}>200 EUR</span></div>
              <div className={styles.bidStepItem}><span className={styles.bidStepRange}>2.000.001 EUR+</span><span className={styles.bidStepVal}>500 EUR</span></div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
