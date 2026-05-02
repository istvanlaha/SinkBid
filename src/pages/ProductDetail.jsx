import React, { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useBidStore, getBidStep, EUR_TO_USD } from '../store/bidStore'
import styles from './ProductDetail.module.css'

function formatPrice(price, currency) {
  if (currency === 'USD') return '$' + Math.round(price * EUR_TO_USD).toLocaleString('de-DE')
  return '€' + Math.round(price).toLocaleString('de-DE')
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function ProductDetail() {
  const { productId } = useParams()
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const { products, bidStates, joinBid, startBuy, cancelBuy, tickTimer, completePurchase, currency } = useBidStore()
  const { t } = useTranslation()
  const [activeImg, setActiveImg] = useState(0)
  const timerRef = useRef(null)

  const product = products.find(p => p.id === parseInt(productId))
  const state = product ? bidStates[product.id] : null

  useEffect(() => {
    if (!state) return
    if (state.buying) {
      timerRef.current = setInterval(() => tickTimer(product.id), 1000)
    } else {
      clearInterval(timerRef.current)
    }
    return () => clearInterval(timerRef.current)
  }, [state?.buying])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [productId])

  if (!product || !state) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundText}>Product not found</div>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>← Back</button>
      </div>
    )
  }

  const step = getBidStep(product.originalPrice)
  const savings = Math.round((1 - state.currentPrice / product.originalPrice) * 100)
  const images = [product.image, product.image, product.image, product.image].filter(Boolean)
  const isUrgent = state.timerSeconds <= 60 && state.buying
  const lang = i18n.language || 'hu'

  const TERMS_URL = {
    hu: '#vasarlasi-feltetelek',
    en: '#terms-of-purchase',
    de: '#kaufbedingungen',
    zh: '#购买条款',
  }

  const LABELS = {
    hu: {
      live: 'ÉLŐ LICIT',
      currentPrice: 'Jelenlegi ár',
      originalPrice: 'Eredeti ár',
      saving: 'Megtakarítás',
      step: 'Licit lépcső',
      entryFee: 'Betekintési díj',
      bidNow: `Licitálok — ${formatPrice(step, currency)}`,
      entered: 'Belépve ✓',
      buyNow: 'Megveszem most',
      buying: 'Vásárlás folyamatban',
      payNow: 'Kifizetés most',
      cancel: 'Mégse',
      timerNote: 'A licit nem záródik le a kifizetésig. Ha 5 percen belül nem fizet, a licit folytatódik.',
      sold: 'Elvitték!',
      details: 'Részletek',
      moreDetails: 'További részletek',
      terms: 'Vásárlási feltételek',
      payment: 'Fizetési módok',
      paymentVal: 'Bankkártya',
      detailsDesc: 'Részletes leírás a termékről...',
      moreDetailsDesc: 'További információk...',
      back: '← Vissza',
    },
    en: {
      live: 'LIVE BID',
      currentPrice: 'Current price',
      originalPrice: 'Original price',
      saving: 'Saving',
      step: 'Bid step',
      entryFee: 'Entry fee',
      bidNow: `Enter bid — ${formatPrice(step, currency)}`,
      entered: 'Entered ✓',
      buyNow: 'Buy now',
      buying: 'Purchase in progress',
      payNow: 'Pay now',
      cancel: 'Cancel',
      timerNote: 'The auction does not close until payment. If not paid within 5 minutes, the auction continues.',
      sold: 'Sold!',
      details: 'Details',
      moreDetails: 'Further details',
      terms: 'Terms of purchase',
      payment: 'Payment methods',
      paymentVal: 'Credit card',
      detailsDesc: 'Detailed product description...',
      moreDetailsDesc: 'Additional information...',
      back: '← Back',
    },
    de: {
      live: 'LIVE GEBOT',
      currentPrice: 'Aktueller Preis',
      originalPrice: 'Originalpreis',
      saving: 'Ersparnis',
      step: 'Gebotsschritt',
      entryFee: 'Eintrittsgebühr',
      bidNow: `Bieten — ${formatPrice(step, currency)}`,
      entered: 'Eingetreten ✓',
      buyNow: 'Jetzt kaufen',
      buying: 'Kauf läuft',
      payNow: 'Jetzt bezahlen',
      cancel: 'Abbrechen',
      timerNote: 'Die Auktion schliesst nicht bis zur Zahlung.',
      sold: 'Verkauft!',
      details: 'Details',
      moreDetails: 'Weitere Details',
      terms: 'Kaufbedingungen',
      payment: 'Zahlungsmethoden',
      paymentVal: 'Kreditkarte',
      detailsDesc: 'Detaillierte Produktbeschreibung...',
      moreDetailsDesc: 'Weitere Informationen...',
      back: '← Zurück',
    },
    zh: {
      live: '实时竞拍',
      currentPrice: '当前价格',
      originalPrice: '原始价格',
      saving: '节省',
      step: '竞拍步骤',
      entryFee: '入场费',
      bidNow: `参与竞拍 — ${formatPrice(step, currency)}`,
      entered: '已参与 ✓',
      buyNow: '立即购买',
      buying: '购买进行中',
      payNow: '立即付款',
      cancel: '取消',
      timerNote: '拍卖在付款前不会关闭。如果5分钟内未付款，拍卖将继续。',
      sold: '已售出！',
      details: '详情',
      moreDetails: '更多详情',
      terms: '购买条款',
      payment: '付款方式',
      paymentVal: '信用卡',
      detailsDesc: '详细产品描述...',
      moreDetailsDesc: '更多信息...',
      back: '← 返回',
    },
  }

  const L = LABELS[lang] || LABELS.en

  if (state.sold) {
    return (
      <div className={styles.wrap}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>{L.back}</button>
        <div className={styles.soldPage}>
          <div className={styles.soldIcon}>🏆</div>
          <div className={styles.soldTitle}>{L.sold}</div>
          <div className={styles.soldPrice}>{formatPrice(state.soldPrice, currency)}</div>
          <div className={styles.soldSaving}>-{savings}% {L.saving}</div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.wrap}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>{L.back}</button>

      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.mainImg}>
            {images[activeImg] ? (
              <img src={images[activeImg]} alt={product.name} className={styles.mainImgEl} />
            ) : (
              <div className={styles.mainImgPlaceholder}>{product.emoji}</div>
            )}
            <div className={styles.liveBanner}>
              <span className={styles.liveBadge}>
                <span className={styles.liveDot} />
                {L.live}
              </span>
              <span className={styles.savingBadge}>-{savings}%</span>
            </div>
          </div>
          <div className={styles.thumbs}>
            {images.map((img, i) => (
              <div
                key={i}
                className={`${styles.thumb} ${activeImg === i ? styles.thumbActive : ''}`}
                onClick={() => setActiveImg(i)}
              >
                <img src={img} alt="" className={styles.thumbImg} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.catLabel}>{t(`categories.${product.category}`)}</div>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.desc}>{product.description}</p>

          <div className={styles.priceBox}>
            <div className={styles.priceRow}>
              <div>
                <div className={styles.priceLabel}>{L.currentPrice}</div>
                <div className={styles.price}>{formatPrice(state.currentPrice, currency)}</div>
              </div>
              <div className={styles.priceRight}>
                <div className={styles.priceOrig}>{formatPrice(product.originalPrice, currency)}</div>
                <div className={styles.savingPill}>-{savings}%</div>
              </div>
            </div>
            <div className={styles.stepRow}>
              <span className={styles.stepLabel}>{L.step}:</span>
              <span className={styles.stepVal}>{formatPrice(step, currency)}</span>
              <span className={styles.stepLabel} style={{marginLeft: '1rem'}}>{L.entryFee}:</span>
              <span className={styles.stepVal}>{formatPrice(step, currency)}</span>
            </div>
          </div>

          {state.buying ? (
            <div className={styles.timerBox}>
              <div className={styles.timerTitle}>{L.buying}</div>
              <div className={`${styles.timer} ${isUrgent ? styles.urgent : ''}`}>
                {formatTime(state.timerSeconds)}
              </div>
              <div className={styles.timerNote}>{L.timerNote}</div>
              <button className={styles.btnPay} onClick={() => completePurchase(product.id)}>
                {L.payNow}
              </button>
              <button className={styles.btnCancel} onClick={() => cancelBuy(product.id)}>
                {L.cancel}
              </button>
            </div>
          ) : (
            <div className={styles.btnGroup}>
              {!state.joined ? (
                <button className={styles.btnBid} onClick={() => joinBid(product.id)}>
                  {L.bidNow}
                </button>
              ) : (
                <>
                  <button className={styles.btnJoined} disabled>{L.entered}</button>
                  <button className={styles.btnBuy} onClick={() => startBuy(product.id)}>
                    {L.buyNow}
                  </button>
                </>
              )}
            </div>
          )}

          <div className={styles.detailsSection}>
            <div className={styles.detailsTitle}>{L.details}</div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>{L.payment}</span>
              <span className={styles.detailVal}>{L.paymentVal}</span>
            </div>
            <div className={styles.detailsTextBox}>
              <p className={styles.detailsPlaceholder}>{product.details || L.detailsDesc}</p>
            </div>
          </div>

          <div className={styles.detailsSection}>
            <div className={styles.detailsTitle}>{L.moreDetails}</div>
            <div className={styles.detailsTextBox}>
              <p className={styles.detailsPlaceholder}>{product.moreDetails || L.moreDetailsDesc}</p>
            </div>
          </div>

          <a href={TERMS_URL[lang] || '#terms'} className={styles.termsLink}>
            {L.terms} →
          </a>
        </div>
      </div>
    </div>
  )
}
