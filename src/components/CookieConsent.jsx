import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useBidStore } from '../store/bidStore'
import styles from './CookieConsent.module.css'

const STORAGE_KEY = 'sinkbid_cookies'

export default function CookieConsent() {
  const { t } = useTranslation()
  const { cookieModalOpen, setCookieModalOpen } = useBidStore()
  const [visible, setVisible] = useState(false)
  const [toggles, setToggles] = useState({
    functional: false,
    performance: false,
    targeted: false,
  })

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) setVisible(true)
  }, [])

  useEffect(() => {
    if (cookieModalOpen) setVisible(true)
  }, [cookieModalOpen])

  const close = () => {
    setVisible(false)
    setCookieModalOpen(false)
  }

  const save = (prefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...prefs,
      timestamp: new Date().toISOString(),
    }))
    close()
  }

  const acceptAll = () => save({ functional: true, performance: true, targeted: true })
  const rejectAll = () => save({ functional: false, performance: false, targeted: false })
  const confirmChoices = () => save(toggles)

  const toggle = (key) => setToggles(prev => ({ ...prev, [key]: !prev[key] }))

  if (!visible) return null

  const rows = [
    { key: 'functional', label: t('cookies.functional'), desc: t('cookies.functionalDesc') },
    { key: 'performance', label: t('cookies.performance'), desc: t('cookies.performanceDesc') },
    { key: 'targeted', label: t('cookies.targeted'), desc: t('cookies.targetedDesc') },
  ]

  return (
    <div className={styles.overlay} onClick={(e) => { if (e.target === e.currentTarget) close() }}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={close}>✕</button>

        <h2 className={styles.title}>{t('cookies.title')}</h2>

        <p className={styles.intro}>{t('cookies.intro')}</p>

        <button className={styles.btnAcceptAll} onClick={acceptAll}>
          {t('cookies.acceptAll')}
        </button>

        <div className={styles.sectionTitle}>{t('cookies.manageTitle')}</div>

        <div className={styles.rows}>
          <div className={styles.row}>
            <div className={styles.rowInfo}>
              <div className={styles.rowLabel}>{t('cookies.necessary')}</div>
              <div className={styles.rowDesc}>{t('cookies.necessaryDesc')}</div>
            </div>
            <div className={styles.alwaysOn}>{t('cookies.alwaysActive')}</div>
          </div>

          {rows.map(({ key, label, desc }) => (
            <div key={key} className={styles.row}>
              <div className={styles.rowInfo}>
                <div className={styles.rowLabel}>{label}</div>
                <div className={styles.rowDesc}>{desc}</div>
              </div>
              <button
                className={`${styles.toggle} ${toggles[key] ? styles.toggleOn : ''}`}
                onClick={() => toggle(key)}
                aria-checked={toggles[key]}
                role="switch"
              >
                <span className={styles.toggleKnob} />
              </button>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <button className={styles.btnReject} onClick={rejectAll}>
            {t('cookies.rejectAll')}
          </button>
          <button className={styles.btnConfirm} onClick={confirmChoices}>
            {t('cookies.confirm')}
          </button>
        </div>
      </div>
    </div>
  )
}
