import React from 'react'
import { useTranslation } from 'react-i18next'
import { useBidStore, CATEGORIES } from '../store/bidStore'
import styles from './CategoryNav.module.css'

export default function CategoryNav() {
  const { t } = useTranslation()
  const { activeCategory, setCategory } = useBidStore()

  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`${styles.tab} ${activeCategory === cat.id ? styles.active : ''}`}
            onClick={() => setCategory(cat.id)}
          >
            {t(`categories.${cat.key}`)}
          </button>
        ))}
      </div>
    </div>
  )
}
