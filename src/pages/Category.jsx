import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
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

const PRICE_RANGES = [
  { key: 'under1k',  label: 'Under €1,000',        min: 0,       max: 1000 },
  { key: '1k-10k',   label: '€1,000 — €10,000',    min: 1000,    max: 10000 },
  { key: '10k-100k', label: '€10,000 — €100,000',  min: 10000,   max: 100000 },
  { key: '100k-1m',  label: '€100,000 — €1M',      min: 100000,  max: 1000000 },
  { key: 'over1m',   label: 'Over €1M',             min: 1000000, max: Infinity },
]

export default function Category() {
  const { t } = useTranslation()
  const { catId } = useParams()
  const { products, bidStates, currency } = useBidStore()
  const [activeSub, setActiveSub] = useState('all')
  const [activePriceRange, setActivePriceRange] = useState(null)
  const [sortBy, setSortBy] = useState('default')

  const subcats = SUBCATEGORIES[catId] || []
  const catProducts = products.filter(p => p.category === catId)

  const filtered = catProducts
    .filter(p => activeSub === 'all' || p.name.toLowerCase().includes(activeSub.toLowerCase()))
    .filter(p => {
      if (!activePriceRange) return true
      const range = PRICE_RANGES.find(r => r.key === activePriceRange)
      if (!range) return true
      const price = bidStates[p.id].currentPrice
      return price >= range.min && price < range.max
    })

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
    if (sortBy === 'newest') return b.id - a.id
    return 0
  })

  const catLabel = t(`categories.${catId}`, catId)
  const seoTitle = t('seo.categoryTitle', { cat: catLabel })
  const seoDesc = t('seo.categoryDesc', { cat: catLabel })

  const handlePriceRange = (key) => {
    setActivePriceRange(prev => prev === key ? null : key)
  }

  return (
    <div className={styles.wrap}>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={t('seo.siteName')} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className={styles.header}>
        <div className={styles.headerTag}>{t('category.tag')}</div>
        <h1 className={styles.headerTitle}>{catLabel}</h1>
        <p className={styles.headerSub}>{t('category.itemsAvailable', { count: sorted.length })}</p>
      </div>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>

          <div className={styles.sidebarSection}>
            <div className={styles.sidebarTitle}>{t('category.filterTitle')}</div>
            <div
              className={`${styles.subItem} ${activeSub === 'all' ? styles.subActive : ''}`}
              onClick={() => setActiveSub('all')}
            >
              {t('category.allItems', { cat: catLabel })}
              <span className={styles.subCount}>{catProducts.length}</span>
            </div>
            {subcats.filter(s => !s.startsWith('All ')).map(sub => (
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
            <div className={styles.sidebarTitle}>{t('category.priceRange')}</div>
            <div className={styles.priceRanges}>
              {PRICE_RANGES.map(range => {
                const count = catProducts.filter(p => {
                  const price = bidStates[p.id].currentPrice
                  return price >= range.min && price < range.max
                }).length
                const isActive = activePriceRange === range.key
                return (
                  <div
                    key={range.key}
                    className={`${styles.priceRange} ${isActive ? styles.subActive : ''}`}
                    onClick={() => handlePriceRange(range.key)}
                  >
                    <span>{range.label}</span>
                    <span className={styles.subCount}>{count}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className={styles.sidebarSection}>
            <div className={styles.sidebarTitle}>{t('category.bidStep')}</div>
            <div className={styles.stepInfo}>
              {[
                { range: '€100 — €1,000',       step: '€5' },
                { range: '€1,001 — €10,000',     step: '€10' },
                { range: '€10,001 — €20,000',    step: '€20' },
                { range: '€20,001 — €50,000',    step: '€50' },
                { range: '€50,001 — €100,000+',  step: '€100' },
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
              <span className={styles.resultCount}>{t('category.itemsAvailable', { count: sorted.length })}</span>
            </div>
            <div className={styles.toolbarRight}>
              <select
                className={styles.sortSelect}
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
              >
                <option value="default">{t('category.sortDefault')}</option>
                <option value="price-asc">{t('category.sortPriceAsc')}</option>
                <option value="price-desc">{t('category.sortPriceDesc')}</option>
                <option value="saving">{t('category.sortSaving')}</option>
                <option value="newest">{t('category.sortNewest')}</option>
              </select>
            </div>
          </div>

          {sorted.length === 0 ? (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>🔍</div>
              <div className={styles.emptyText}>{t('category.noResults')}</div>
              <div className={styles.emptySub}>{t('category.noResultsSub')}</div>
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
