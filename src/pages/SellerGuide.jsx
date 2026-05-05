import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import styles from './SellerGuide.module.css'
import { LABELS, GENERAL_RULES, CATEGORIES } from './SellerGuide.content'

function GuideCard({ guide, labels }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${styles.guideCard} ${open ? styles.guideOpen : ''}`}>
      <button className={styles.guideHeader} onClick={() => setOpen(o => !o)}>
        <span className={styles.guideTitle}>{guide.title}</span>
        <span className={styles.guideChevron}>{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className={styles.guideBody}>
          <div className={styles.guideSection}>
            <div className={styles.guideSectionTitle}>{labels.accept}</div>
            <ul className={styles.guideList}>
              {guide.accept.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          {guide.brands && (
            <div className={styles.guideSection}>
              <div className={styles.guideSectionTitle}>{labels.brands}</div>
              <p className={styles.guidePara}>{guide.brands}</p>
            </div>
          )}
          {guide.condition && (
            <div className={styles.guideSection}>
              <div className={styles.guideSectionTitle}>{labels.condition}</div>
              <p className={styles.guidePara}>{guide.condition}</p>
            </div>
          )}
          <div className={styles.guideSection}>
            <div className={styles.guideSectionTitle}>{labels.required}</div>
            <p className={styles.guidePara}>{guide.required}</p>
          </div>
          {guide.extra && (
            <div className={styles.guideSection}>
              <div className={styles.guideSectionTitle}>{labels.extra}</div>
              <p className={styles.guidePara}>{guide.extra}</p>
            </div>
          )}
          <div className={styles.guideSection}>
            <div className={styles.guideSectionTitle}>{labels.photos}</div>
            <p className={styles.guidePara}>{guide.photos}</p>
          </div>
          <div className={styles.guideSectionRed}>
            <div className={styles.guideSectionTitle}>{labels.reject}</div>
            <p className={styles.guidePara}>{guide.reject}</p>
          </div>
        </div>
      )}
    </div>
  )
}

function CategorySection({ cat, labels }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.catSection}>
      <button className={styles.catHeader} onClick={() => setOpen(o => !o)}>
        <span className={styles.catLabel}>{cat.label}</span>
        <span className={styles.catCount}>{labels.guideCount(cat.guides.length)}</span>
        <span className={styles.catChevron}>{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className={styles.catBody}>
          {cat.guides.map((g, i) => <GuideCard key={i} guide={g} labels={labels} />)}
        </div>
      )}
    </div>
  )
}

export default function SellerGuide() {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language || 'hu').split('-')[0]
  const labels = LABELS[lang] || LABELS.hu
  const cats = CATEGORIES[lang] || CATEGORIES.hu
  const rules = GENERAL_RULES[lang] || GENERAL_RULES.hu

  return (
    <div className={styles.wrap}>
      <Helmet>
        <title>{labels.pageTitle}</title>
        <meta name="description" content={labels.metaDesc} />
      </Helmet>

      <div className={styles.hero}>
        <div className={styles.tag}>{labels.tag}</div>
        <h1 className={styles.title}>{labels.title}</h1>
        <p className={styles.sub}>{labels.sub}</p>
      </div>

      <div className={styles.generalBox}>
        <div className={styles.generalTitle}>{labels.generalTitle}</div>
        <ul className={styles.generalList}>
          {rules.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>

      <div className={styles.catList}>
        {cats.map(cat => (
          <CategorySection key={cat.id} cat={cat} labels={labels} />
        ))}
      </div>

      <div className={styles.contactBox}>
        <div className={styles.contactTitle}>{labels.contactTitle}</div>
        <div className={styles.contactLine}>
          <a href="mailto:support@sinkbid.com">support@sinkbid.com</a> — {labels.contactLine}
        </div>
      </div>
    </div>
  )
}
