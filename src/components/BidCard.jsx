import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useBidStore } from '../store/bidStore'
import styles from './BidCard.module.css'

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

function formatPrice(price) {
  return price.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
}

export default function BidCard({ product }) {
  const { t } = useTranslation()
  const { bidStates, joinBid, startBuy, cancelBuy, tickTimer, completePurchase } = useBidStore()
  const state = bidStates[product.id]
  const timerRef = useRef(null)
  const prevPrice = useRef(state.currentPrice)
  const priceRef = useRef(null)

  useEffect(() => {
    if (state.buying) {
      timerRef.current = setInterval(() => tickTimer(product.id), 1000)
    } else {
      clearInterval(timerRef.current)
    }
    return () => clearInterval(timerRef.current)
  }, [state.buying])

  useEffect(() => {
    if (state.currentPrice < prevPrice.current && priceRef.current) {
      priceRef.current.classList.remove(styles.priceAnimate)
      void priceRef.current.offsetWidth
      priceRef.current.classList.add(styles.priceAnimate)
    }
    prevPrice.current = state.currentPrice
  }, [state.currentPrice])

  const savings = Math.round((1 - state.currentPrice / product.originalPrice) * 100)
  const isUrgent = state.timerSeconds <= 60 && state.buying

  if (state.sold) {
    return (
      <div className={`${styles.card} ${styles.soldCard}`}>
        <div className={styles.soldOverlay}>
          <div className={styles.soldEmoji}>{product.emoji}</div>
          <div className={styles.soldLabel}>{t('bid.sold')}</div>
          <div className={styles.soldPrice}>
            {formatPrice(state.soldPrice)} EUR
          </div>
          <div className={styles.soldSaving}>
            {savings}% megtakarítás
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.card}>
      {state.buying && (
        <div className={styles.overlay}>
          <div className={styles.overlayInner}>
            <div className={styles.overlayTitle}>{t('bid.buying')}</div>
            <div className={`${styles.overlayTimer} ${isUrgent ? styles.urgent : ''}`}>
              {formatTime(state.timerSeconds)}
            </div>
            <div className={styles.overlayNote}>{t('bid.timerNote')}</div>
            <button className={styles.btnPay} onClick={() => completePurchase(product.id)}>
              {t('bid.payNow')}
            </button>
            <button className={styles.btnCancel} onClick={() => cancelBuy(product.id)}>
              {t('bid.cancel')}
            </button>
          </div>
        </div>
      )}

      <div className={styles.imgWrap}>
        {product.image ? (
          <img src={product.image} alt={product.name} className={styles.img} />
        ) : (
          <div className={styles.imgPlaceholder}>{product.emoji}</div>
        )}
        <div className={styles.liveBadge}>
          <span className={styles.liveDot} />
          {t('bid.live')}
        </div>
        <div className={styles.biddersBadge}>
          {state.biddersCount} {t('bid.bidders')}
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.catLabel}>{t(`categories.${product.category}`)}</div>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.desc}>{product.description}</p>

        <div className={styles.priceRow}>
          <span className={styles.priceLabel}>{t('bid.currentPrice')}</span>
          <div className={styles.priceGroup}>
            <span className={styles.price} ref={priceRef}>
              {formatPrice(state.currentPrice)}
            </span>
            <span className={styles.priceCurrency}> EUR</span>
            <span className={styles.priceOrig}>{formatPrice(product.originalPrice)} EUR</span>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <div className={styles.statVal}>{state.biddersCount}×</div>
            <div className={styles.statLbl}>{t('bid.insight')}</div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <div className={styles.statVal}>{product.bidStep.toFixed(2).replace('.', ',')} EUR</div>
            <div className={styles.statLbl}>{t('bid.step')}</div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <div className={styles.statVal}>{savings}%</div>
            <div className={styles.statLbl}>{t('bid.saving')}</div>
          </div>
        </div>

        {!state.joined ? (
          <button className={styles.btnJoin} onClick={() => joinBid(product.id)}>
            {t('bid.joinBid')}
          </button>
        ) : (
          <>
            <button className={styles.btnJoined} disabled>
              {t('bid.joined')}
            </button>
            <button className={styles.btnBuyNow} onClick={() => startBuy(product.id)}>
              {t('bid.buyNow')}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
