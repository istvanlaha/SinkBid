import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useBidStore } from '../store/bidStore'
import styles from './Auctions.module.css'

const CATEGORIES = [
  'orak', 'ekszer', 'muveszet', 'gyujtheto', 'ingatlan', 'jarmuvek',
  'szamtech', 'mobil', 'muszaki', 'konyvek', 'jatekok', 'ipari',
  'divat', 'szepseg', 'sport', 'otthon', 'butor',
]

export default function Auctions() {
  const { t } = useTranslation()
  const { getByCategory } = useBidStore()
  const navigate = useNavigate()

  const title = t('seo.auctionsTitle')
  const desc = t('seo.auctionsDesc')

  return (
    <div className={styles.wrap}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={t('seo.siteName')} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className={styles.header}>
        <div className={styles.headerTag}>{t('auctions.tag')}</div>
        <h1 className={styles.headerTitle}>{t('auctions.title')}</h1>
        <p className={styles.headerSub}>{t('auctions.subtitle')}</p>
      </div>

      <div className={styles.main}>
        <div className={styles.grid}>
          {CATEGORIES.map(catId => {
            const items = getByCategory(catId)
            const cover = items[0]
            const count = items.length
            return (
              <div
                key={catId}
                className={styles.card}
                onClick={() => navigate(`/category/${catId}`)}
              >
                <div className={styles.cardImg}>
                  {cover?.image ? (
                    <img
                      src={cover.image}
                      alt={t(`categories.${catId}`)}
                      className={styles.img}
                    />
                  ) : (
                    <div className={styles.imgPlaceholder}>
                      {cover?.emoji || '📦'}
                    </div>
                  )}
                  <div className={styles.overlay} />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.catName}>{t(`categories.${catId}`)}</div>
                  <div className={styles.catCount}>
                    <span className={styles.countNum}>{count}</span>
                    {' '}{t('auctions.activeCount')}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
