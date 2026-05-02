import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useBidStore, SUBCATEGORIES, EUR_TO_USD, getBidStep } from '../store/bidStore'
import BidCard from '../components/BidCard'
import styles from './Category.module.css'

function formatPrice(price, currency) {
  if (currency === 'USD') {
    return '$' + Math.round(price * EUR_TO_USD).toLocaleString('de-DE')
  }
  return '€' + price.toLocaleString('de-DE')
}

export default function Category() {
  const { t } = useTranslation()
  const { catId } = useParams()
  const { products, bidStates, currency } = useBidStore()
  const [activeSub, setActiveSub] = useState('all')
  const [sortBy, setSortBy] = useState('default')

  const subcats = SUBCATEGORIES[catId] || []
  const catProducts = products.filter(p => p.category === catId)

  const filtered = activeSub === 'all'
    ? catProducts
    : catProducts.filter(p => p.name.toLowerCase().includes(activeSub.toLowerCase()))

  const sorted = [...filtered].sort((a, b) => {
    const sa = bidStates[a.id]
    const sb = bidStates[b.id]
    if (sortBy === 'price-asc') return sa.currentPrice - sb.currentPrice
    if (sortBy === 'price-desc') return sb.currentPrice - sa.currentPrice
    if (sortBy === 'saving') {
      const savA = (a.originalPrice - sa.currentPrice) / a.originalPrice
      const savB = (b.originalPrice - sb.currentPrice) / b.originalPrice
      return savB - savA
    }
    return 0
  })

  const catLabel = t(`categories.${catId}`, catId)

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.headerTag}>Active Bids</div>
        <h1 className={styles.headerTitle}>{catLabel}</h1>
        <p className={styles.headerSub}>{sorted.length} items available</p>
      </div>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <div className={styles.sidebarTitle}>Categories</div>
            <div
              className={`${styles.subItem} ${activeSub === 'all' ? styles.subActive : ''}`}
              onClick={() => setActiveSub('all')}
            >
              All {catLabel}
              <span className={styles.subCount}>{catProducts.length}</span>
            </div>
            {subcats.filter(s => s !== 'All Watches' && s !== 'All Jewellery' && s !== 'All Fashion' && s !== 'All Vehicles' && s !== 'All Art' && s !== 'All Furniture' && s !== 'All Phones' && s !== 'All Electronics' && s !== 'All Computing' && s !== 'All Collectibles' && s !== 'All Games' && s !== 'All Sport' && s !== 'All Home' && s !== 'All Books' && s !== 'All Industrial' && s !== 'All Beauty' && s !== 'All Properties').map(sub => (
              <div
                key={sub}
                className={`${styles.subItem} ${activeSub === sub ? styles.subActive : ''}`}
                onClick={() => setActiveSub(sub)}
              >
                {sub}
              </div>
            ))}
          </div>

          <div className={styles.sidebarSection}>
            <div className={styles.sidebarTitle}>Price Range</div>
            <div className={styles.priceRanges}>
              {[
                { label: 'Under €1,000', min: 0, max: 1000 },
                { label: '€1,000 — €10,000', min: 1000, max: 10000 },
                { label: '€10,000 — €100,000', min: 10000, max: 100000 },
                { label: '€100,000 — €1M', min: 100000, max: 1000000 },
                { label: 'Over €1M', min: 1000000, max: Infinity },
              ].map(range => {
                const count = catProducts.filter(p => {
                  const state = bidStates[p.id]
                  return state.currentPrice >= range.min && state.currentPrice < range.max
                }).length
                return (
                  <div key={range.label} className={styles.priceRange}>
                    <span>{range.label}</span>
                    <span className={styles.subCount}>{count}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className={styles.sidebarSection}>
            <div className={styles.sidebarTitle}>Bid Step</div>
            <div className={styles.stepInfo}>
              {[
                { range: '€100 — €1,000', step: '€10' },
                { range: '€1,001 — €10,000', step: '€20' },
                { range: '€10,001 — €100,000', step: '€50' },
                { range: '€100,001 — €1M', step: '€100' },
                { range: '€1M — €2M', step: '€200' },
                { range: '€2M+', step: '€500' },
              ].map(s => (
                <div key={s.range} className={styles.stepRow}>
                  <span>{s.range}</span>
                  <span className={styles.stepVal}>{s.step}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className={styles.content}>
          <div className={styles.toolbar}>
            <div className={styles.toolbarLeft}>
              <span className={styles.resultCount}>{sorted.length} results</span>
            </div>
            <div className={styles.toolbarRight}>
              <select
                className={styles.sortSelect}
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="saving">Biggest Saving</option>
              </select>
            </div>
          </div>

          {sorted.length === 0 ? (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>🔍</div>
              <div className={styles.emptyText}>No items found</div>
              <div className={styles.emptySub}>Try selecting a different subcategory</div>
            </div>
          ) : (
            <div className={styles.grid}>
              {sorted.map(product => (
                <BidCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
