import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>Sink<span>Bid</span></div>
          <p className={styles.tagline}>{t('footer.tagline')}</p>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <div className={styles.colTitle}>{t('footer.buyCol')}</div>
            <Link to="/active" className={styles.colLink}>{t('footer.activeBids')}</Link>
            <Link to="/how" className={styles.colLink}>{t('footer.howItWorks')}</Link>
            <Link to="/buyer-registration" className={styles.colLink}>{t('footer.buyerReg')}</Link>
            <Link to="/buyer-terms" className={styles.colLink}>{t('footer.buyerTerms')}</Link>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>{t('footer.sellCol')}</div>
            <Link to="/seller-registration" className={styles.colLink}>{t('footer.sellerReg')}</Link>
            <Link to="/seller-terms" className={styles.colLink}>{t('footer.sellerTerms')}</Link>
            <Link to="/how" className={styles.colLink}>{t('footer.sellerGuide')}</Link>
            <Link to="/fees" className={styles.colLink}>{t('footer.fees')}</Link>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>{t('footer.categoriesCol')}</div>
            <Link to="/category/orak" className={styles.colLink}>{t('footer.watches')}</Link>
            <Link to="/category/ekszer" className={styles.colLink}>{t('footer.jewellery')}</Link>
            <Link to="/category/muveszet" className={styles.colLink}>{t('footer.art')}</Link>
            <Link to="/category/jarmuvek" className={styles.colLink}>{t('footer.vehicles')}</Link>
            <Link to="/category/ingatlan" className={styles.colLink}>{t('footer.realestate')}</Link>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>{t('footer.aboutCol')}</div>
            <Link to="/about" className={styles.colLink}>{t('footer.about')}</Link>
            <Link to="/contact" className={styles.colLink}>{t('footer.contact')}</Link>
            <Link to="/privacy" className={styles.colLink}>{t('footer.privacy')}</Link>
            <Link to="/terms" className={styles.colLink}>{t('footer.terms')}</Link>
            <Link to="/cookies" className={styles.colLink}>{t('footer.cookies')}</Link>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>{t('footer.supportCol')}</div>
            <Link to="/faq" className={styles.colLink}>{t('footer.faq')}</Link>
            <Link to="/help" className={styles.colLink}>{t('footer.help')}</Link>
            <Link to="/dispute" className={styles.colLink}>{t('footer.dispute')}</Link>
            <Link to="/accessibility" className={styles.colLink}>{t('footer.accessibility')}</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>{t('footer.copyright')}</div>
        <div className={styles.bottomRight}>
          <Link to="/terms" className={styles.bottomLink}>{t('footer.termsLink')}</Link>
          <Link to="/privacy" className={styles.bottomLink}>{t('footer.privacyLink')}</Link>
          <Link to="/cookies" className={styles.bottomLink}>{t('footer.cookiesLink')}</Link>
        </div>
      </div>
    </footer>
  )
}
