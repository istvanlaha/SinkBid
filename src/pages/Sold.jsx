import React from 'react'
import { useTranslation } from 'react-i18next'
import { useBidStore, getBidStep, EUR_TO_USD } from '../store/bidStore'
import styles from './Sold.module.css'

const SHOWCASE_CATEGORIES = [
  { id: 'orak' }, { id: 'ekszer' }, { id: 'divat' }, { id: 'jarmuvek' },
  { id: 'muveszet' }, { id: 'butor' }, { id: 'mobil' }, { id: 'muszaki' },
  { id: 'szamtech' }, { id: 'sport' }, { id: 'otthon' }, { id: 'gyujtheto' },
  { id: 'jatekok' }, { id: 'konyvek' }, { id: 'ipari' }, { id: 'szepseg' },
  { id: 'ingatlan' },
]

function formatPrice(price, currency) {
  if (currency === 'USD') {
    return '$' + Math.round(price * EUR_TO_USD).toLocaleString('de-DE')
  }
  return '€' + price.toLocaleString('de-DE')
}

export default function Sold() {
  const { t } = useTranslation()
  const { getByCategory, bidStates, currency } = useBidStore()

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.headerTag}>{t('nav.activeBids')}</div>
        <h1 className={styles.headerTitle}>{t('nav.activeBids')}</h1>
      </div>

      <div className={styles.main}>
        {SHOWCASE_CATEGORIES.map(cat => {
          const items = getByCategory(cat.id).slice(0, 8)
          if (items.length === 0) return null
          return (
            <section key={cat.id} className={styles.catSection}>
              <div className={styles.catSectionHead}>
                <h2 className={styles.catSectionTitle}>{t('categories.' + cat.id)}</h2>
              </div>
              <div className={styles.catGrid}>
                {items.map(product => {
                  const state = bidStates[product.id]
                  const step = getBidStep(product.originalPrice)
                  const savings = Math.round((1 - state.currentPrice / product.originalPrice) * 100)
                  return (
                    <div key={product.id} className={styles.miniCard}>
                      <div className={styles.miniCardImg}>
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        ) : (
                          <div className={styles.miniCardEmoji}>{product.emoji}</div>
                        )}
                        <div className={styles.miniLiveBanner}>
                          <div className={styles.miniLiveBadge}>
                            <span className={styles.miniLiveDot} />
                            {t('bid.live')}
                          </div>
                          <div className={styles.miniSavingBadge}>-{savings}%</div>
                        </div>
                      </div>
                      <div className={styles.miniCardBody}>
                        <div className={styles.miniCardName}>{product.name}</div>
                        <div className={styles.miniCardDesc}>
                          {product.description.substring(0, 60)}...
                        </div>
                        <div className={styles.miniCardPriceRow}>
                          <span className={styles.miniCardPrice}>
                            {formatPrice(state.currentPrice, currency)}
                          </span>
                          <span className={styles.miniCardOrig}>
                            {formatPrice(product.originalPrice, currency)}
                          </span>
                        </div>
                        <div className={styles.miniCardFooter}>
                          <span className={styles.miniCardStep}>
                            {t('bid.step')}: {formatPrice(step, currency)}
                          </span>
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
      </div>
    </div>
  )
}
