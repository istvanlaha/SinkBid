import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useBidStore, getBidStep, EUR_TO_USD } from '../store/bidStore'
import styles from './BidCard.module.css'
function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

function formatPrice(price, currency) {
  if (currency === 'USD') {
    return '$' + Math.round(price * EUR_TO_USD).toLocaleString('de-DE')
  }
  return '€' + Math.round(price).toLocaleString('de-DE')
}

export default function BidCard({ product }) {
  const { t } = useTranslation()
  const { bidStates, joinBid, startBuy, cancelBuy, tickTimer, completePurchase, currency } = useBidStore()
  const navigate = useNavigate()
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

  const [watchers, setWatchers] = useState(() =>
    Math.round(state.biddersCount * (2.5 + Math.random() * 1.5))
  )

  useEffect(() => {
    let timeout
    function tick() {
      const delay = (8 + Math.random() * 7) * 1000
      timeout = setTimeout(() => {
        setWatchers(w => {
          const delta = Math.floor(Math.random() * 3) + 1
          const change = Math.random() < 0.5 ? delta : -delta
          return Math.max(state.biddersCount, w + change)
        })
        tick()
      }, delay)
    }
    tick()
    return () => clearTimeout(timeout)
  }, [state.biddersCount])

  const savings = Math.round((1 - state.currentPrice / product.originalPrice) * 100)
  const step = getBidStep(product.originalPrice)
  const isUrgent = state.timerSeconds <= 60 && state.buying

  if (state.sold) {
    return (
      <div className={`${styles.card} ${styles.soldCard}`}>
        <div className={styles.soldOverlay}>
          <div className={styles.soldEmoji}>{product.emoji}</div>
          <div className={styles.soldLabel}>{t('bid.sold')}</div>
          <div className={styles.soldPrice}>{formatPrice(state.soldPrice, currency)}</div>
          <div className={styles.soldSaving}>-{savings}%</div>
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

     <div className={styles.imgWrap} onClick={() => navigate(`/product/${product.id}`)} style={{cursor: 'pointer'}}>
        {product.image ? (
          <img src={product.image} alt={product.name} className={styles.img} />
        ) : (
          <div className={styles.imgPlaceholder}>{product.emoji}</div>
        )}
        <div className={styles.liveBanner}>
          <div className={styles.liveBadge}>
            <span className={styles.liveDot} />
            {t('bid.live')}
          </div>
          <div className={styles.savingBadge}>-{savings}%</div>
        </div>
      </div>

      <div className={styles.tensionBar}>
        <div className={styles.tensionLeft}>
          <span className={styles.tensionDot} />
          <span className={styles.tensionCount}>{state.biddersCount}</span>
          <span className={styles.tensionText}>{t('bid.watchers')}</span>
        </div>
        <div className={styles.tensionRight}>
          <span className={styles.tensionEye}>👁</span>
          <span className={styles.tensionText}>{t('bid.watching')}</span>
          <span className={styles.tensionCount}>{watchers}</span>
        </div>
      </div>

      <div className={styles.body}>
       <div className={styles.catLabel}>{t(`categories.${product.category}`)}</div>
        <h3 className={styles.name} onClick={() => navigate(`/product/${product.id}`)} style={{cursor: 'pointer'}}>{product.name}</h3>
        <p className={styles.desc}>{product.description.substring(0, 80)}...</p>

        <div className={styles.priceRow}>
          <div>
            <div className={styles.priceLabel}>{t('bid.currentPrice')}</div>
            <div className={styles.priceGroup}>
              <span className={styles.price} ref={priceRef}>
                {formatPrice(state.currentPrice, currency)}
              </span>
              <span className={styles.priceOrig}>{formatPrice(product.originalPrice, currency)}</span>
            </div>
          </div>
          <div className={styles.stepBox}>
            <div className={styles.stepLabel}>{t('bid.step')}</div>
            <div className={styles.stepVal}>{formatPrice(step, currency)}</div>
          </div>
        </div>

        <div className={styles.btnRow}>
          {!state.joined ? (
            <>
              <button className={styles.btnJoin} onClick={() => joinBid(product.id)}>
                {t('bid.joinAction')} — {formatPrice(step, currency)}
              </button>
              <div className={styles.microCopy}>{t('bid.microCopy')}</div>
            </>
          ) : (
            <>
              <button className={styles.btnJoined} disabled>
                {t('bid.joined')} ✓
              </button>
              <button className={styles.btnBuyNow} onClick={() => startBuy(product.id)}>
                {t('bid.buyNow')}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
