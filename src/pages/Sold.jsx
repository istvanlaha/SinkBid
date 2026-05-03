import React from 'react'
import { useTranslation } from 'react-i18next'
import { useBidStore } from '../store/bidStore'
import styles from './Sold.module.css'

const SHOWCASE_CATEGORIES = [
  { id: 'orak' }, { id: 'ekszer' }, { id: 'divat' }, { id: 'jarmuvek' },
  { id: 'muveszet' }, { id: 'butor' }, { id: 'mobil' }, { id: 'muszaki' },
  { id: 'szamtech' }, { id: 'sport' }, { id: 'otthon' }, { id: 'gyujtheto' },
  { id: 'jatekok' }, { id: 'konyvek' }, { id: 'ipari' }, { id: 'szepseg' },
  { id: 'ingatlan' },
]

function getSalePrice(originalPrice) {
  const seed = originalPrice % 100
  const pct = 25 + (seed % 31)
  return Math.round(originalPrice * pct / 100)
}

export default function Sold() {
  const { t } = useTranslation()
  const { getByCategory } = useBidStore()

  const hasItems = SHOWCASE_CATEGORIES.some(cat => getByCategory(cat.id).length > 0)

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.headerTag}>{t('sold.tag')}</div>
        <h1 className={styles.headerTitle}>{t('sold.title')}</h1>
        <p className={styles.headerSub}>{t('sold.subtitle')}</p>
      </div>

      <div className={styles.main}>
        {!hasItems ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>⏳</div>
            <div className={styles.emptyText}>{t('sold.empty')}</div>
            <div className={styles.emptySub}>{t('sold.emptySub')}</div>
          </div>
        ) : (
          SHOWCASE_CATEGORIES.map(cat => {
            const items = getByCategory(cat.id).slice(0, 8)
            if (items.length === 0) return null
            return (
              <div key={cat.id} className={styles.catSection}>
                <div className={styles.catSectionHead}>
                  <h2 className={styles.catSectionTitle}>{t('categories.' + cat.id)}</h2>
                </div>
                <div className={styles.catGrid}>
                  {items.map(product => {
                    const salePrice = getSalePrice(product.originalPrice)
                    const saving = Math.round((1 - salePrice / product.originalPrice) * 100)
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
                          <div className={styles.soldOverlay} />
                        </div>
                        <div className={styles.miniCardBody}>
                          <div className={styles.miniCardName}>{product.name}</div>
                          <div className={styles.priceBlock}>
                            <div className={styles.priceRow}>
                              <span className={styles.priceLabel}>{t('sold.startingPrice')}</span>
                              <span className={styles.priceValOrig}>
                                {product.originalPrice.toLocaleString('de-DE')} EUR
                              </span>
                            </div>
                            <div className={styles.priceRow}>
                              <span className={styles.priceLabel}>{t('sold.salePrice')}</span>
                              <span className={styles.salePrice}>
                                {salePrice.toLocaleString('de-DE')} EUR
                              </span>
                            </div>
                          </div>
                          <div className={styles.cardFooter}>
                            <div className={styles.savingBadge}>-{saving}%</div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
