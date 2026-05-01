import React from 'react'
import { useTranslation } from 'react-i18next'
import { useBidStore } from '../store/bidStore'
import styles from './Sold.module.css'

export default function Sold() {
  const { t } = useTranslation()
  const { products, bidStates } = useBidStore()

  const soldItems = products.filter(p => bidStates[p.id]?.sold)

  const grouped = {}
  soldItems.forEach(p => {
    if (!grouped[p.category]) grouped[p.category] = []
    grouped[p.category].push(p)
  })

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.headerTag}>Archívum</div>
        <h1 className={styles.headerTitle}>Eladott tárgyak</h1>
        <p className={styles.headerSub}>Minden lezárt licit és az elért vételár.</p>
      </div>

      <div className={styles.main}>
        {soldItems.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>⏳</div>
            <div className={styles.emptyText}>Még nincs eladott tétel.</div>
            <div className={styles.emptySub}>Az első lezárt licitek itt jelennek meg.</div>
          </div>
        ) : (
          Object.entries(grouped).map(([cat, items]) => (
            <div key={cat} className={styles.catGroup}>
              <div className={styles.catGroupLabel}>{t(`categories.${cat}`)}</div>
              <div className={styles.soldGrid}>
                {items.map(p => {
                  const state = bidStates[p.id]
                  const saving = Math.round((1 - state.soldPrice / p.originalPrice) * 100)
                  return (
                    <div key={p.id} className={styles.soldCard}>
                      <div className={styles.soldEmoji}>{p.emoji}</div>
                      <div className={styles.soldInfo}>
                        <div className={styles.soldName}>{p.name}</div>
                        <div className={styles.soldPrices}>
                          <span className={styles.soldFinal}>
                            {state.soldPrice.toLocaleString('de-DE')} EUR
                          </span>
                          <span className={styles.soldOrig}>
                            {p.originalPrice.toLocaleString('de-DE')} EUR
                          </span>
                        </div>
                      </div>
                      <div className={styles.soldBadge}>-{saving}%</div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
