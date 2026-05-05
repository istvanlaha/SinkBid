import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './HelpCenter.module.css'

const FAQ = {
  hu: [
    { q: 'Hogyan működik a fordított aukció?', a: 'A SinkBid fordított aukción az árak felülről lefelé csökkennek. Az eladó meghatározza az induló árat. Minden vásárló, aki betekintési díjat fizet, csökkenti az aktuális árat az aukció lépcső összegével. Bármelyik belépett vásárló bármikor megvásárolhatja a terméket a „Megveszem most" gombbal az aktuális áron.' },
    { q: 'Mi az a betekintési díj?', a: 'A betekintési díj egy belépési összeg, amellyel a vásárló csatlakozik az aukcióhoz. Ez az összeg csökkenti a termék aktuális árát, és beleszámít a végső vételárba — tehát nem elveszett pénz. A betekintési díj mértéke az aktuális ártól függ (5 EUR–100 EUR között).' },
    { q: 'Mi történik, ha megnyomom a „Megveszem most" gombot?', a: 'Az aukció 5 percre szünetel, és Önnek ennyi ideje van a fennmaradó összeg (aktuális ár mínusz a már befizetett betekintési díj) megfizetésére. Ha 5 percen belül nem fizet, az aukció automatikusan folytatódik — a befizetett betekintési díj nem jár vissza.' },
    { q: 'Visszakapom a betekintési díjat, ha nem veszem meg a terméket?', a: 'A betekintési díj általában nem kerül visszatérítésre. Kivételek: technikai hiba esetén, ha a termékleírás lényegesen eltér a valóságtól (és a SinkBid ezt megállapítja), vagy ha az eladó az aukció megkezdése előtt visszavonja a terméket.' },
    { q: 'Hogyan regisztrálhatok eladóként?', a: 'Az eladói regisztrációhoz szükséges: teljes név/cégnév, cím, adószám (vállalkozásoknál), bankszámlaszám, e-mail cím, telefonszám és személyazonosító okmány másolata. A regisztrációt a SinkBid ellenőrzi és jóváhagyja — ez akár néhány napot is igénybe vehet.' },
    { q: 'Mekkora a SinkBid jutaléka?', a: 'A SinkBid jutaléka 12%, amelyet a nettó eladási árból és a nettó betekintési díjak összegéből számítanak. A jutalékszámlát minden hétfőn küldjük, és 8 munkanapon belül esedékes.' },
    { q: 'Mennyi idő alatt kell szállítanom eladóként?', a: 'A kifizetés visszaigazolásától számított, a termék adatlapján megjelölt határidőn belül (alapértelmezés: 5 munkanap). 500 EUR feletti tárgyaknál szállítási biztosítás is kötelező.' },
    { q: 'Van-e minimális induló ár?', a: 'Igen, a minimális induló ár 200 EUR. Ennél alacsonyabb értékű tárgyak nem tölthetők fel a platformra.' },
    { q: 'Milyen termékek nem értékesíthetők a platformon?', a: 'Tiltott termékek közé tartoznak: hamisított áruk, illegális tárgyak, felnőtt tartalom, kábítószerek, fegyverek (kivéve engedéllyel rendelkező gyűjtői darabok), CITES dokumentáció nélküli védett fajok termékei, és minden 200 EUR alatti értékű tárgy.' },
    { q: 'Hogyan jelentsek gyanús terméket?', a: 'Küldjön e-mailt a support@sinkbid.com címre a termék link-jével és a gyanú leírásával. Minden bejelentést kivizsgálunk és szükség esetén intézkedünk.' },
  ],
  en: [
    { q: 'How does the reverse price auction work?', a: 'In SinkBid\'s reverse price auction, prices decrease progressively from a starting level. The seller sets the opening price. Every buyer who pays an entry fee reduces the current price by the applicable bid step. Any buyer who has joined the auction may purchase the item at any time by clicking "Buy Now" at the prevailing price.' },
    { q: 'What is the entry fee?', a: 'The entry fee is an amount paid by the buyer to join the auction. This fee reduces the current price of the item and is counted toward the final purchase price — it is not lost money. The entry fee amount depends on the current price (between €5 and €100).' },
    { q: 'What happens when I click "Buy Now"?', a: 'The auction is paused for 5 minutes, during which you must pay the outstanding amount (current price minus the entry fee already paid). If payment is not completed within 5 minutes, the auction resumes automatically — the entry fee is non-refundable.' },
    { q: 'Will I get my entry fee back if I do not buy the item?', a: 'Entry fees are generally non-refundable. Exceptions apply in the event of: a technical error on the platform, a material discrepancy between the item description and its actual condition (as determined by SinkBid), or if the seller withdraws the item before the auction commences.' },
    { q: 'How do I register as a seller?', a: 'Seller registration requires: full name or company name, address, tax number (for businesses), bank account number, email address, telephone number and a copy of a government-issued identity document. Registration is reviewed and approved by SinkBid, which may take several days.' },
    { q: 'What is SinkBid\'s commission?', a: 'SinkBid\'s commission is 12%, calculated on the net sale price and the net sum of entry fees. Commission invoices are issued every Monday and are due within 8 business days.' },
    { q: 'How quickly must I ship as a seller?', a: 'Within the shipping deadline stated on the product listing, counted from payment confirmation (default: 5 business days). Shipping insurance is mandatory for items valued above €500.' },
    { q: 'Is there a minimum starting price?', a: 'Yes, the minimum starting price is €200. Items valued below this threshold cannot be listed on the platform.' },
    { q: 'Which products are prohibited on the platform?', a: 'Prohibited items include: counterfeit goods, illegal items, adult content, narcotics, weapons (except licensed collectibles), products of protected species without CITES documentation, and any item with a value below €200.' },
    { q: 'How do I report a suspicious listing?', a: 'Send an email to support@sinkbid.com with the item link and a description of your concern. Every report is investigated and action is taken where necessary.' },
  ],
  de: [
    { q: 'Wie funktioniert die Rückwärtsauktion?', a: 'Bei der SinkBid-Rückwärtsauktion sinken die Preise schrittweise von einem Startpreis nach unten. Der Verkäufer legt den Eröffnungspreis fest. Jeder Käufer, der eine Teilnahmegebühr entrichtet, senkt den aktuellen Preis um den geltenden Bietschritt. Jeder eingetragene Käufer kann den Artikel jederzeit über die Schaltfläche „Jetzt kaufen" zum aktuellen Preis erwerben.' },
    { q: 'Was ist die Teilnahmegebühr?', a: 'Die Teilnahmegebühr ist ein Betrag, den der Käufer entrichtet, um an der Auktion teilzunehmen. Dieser Betrag reduziert den aktuellen Preis des Artikels und wird auf den endgültigen Kaufpreis angerechnet — es handelt sich nicht um verlorenes Geld. Die Höhe der Teilnahmegebühr richtet sich nach dem aktuellen Preis (zwischen 5 € und 100 €).' },
    { q: 'Was passiert, wenn ich auf „Jetzt kaufen" klicke?', a: 'Die Auktion wird für 5 Minuten angehalten. In dieser Zeit müssen Sie den Restbetrag (aktueller Preis abzüglich der bereits gezahlten Teilnahmegebühr) begleichen. Erfolgt keine Zahlung innerhalb von 5 Minuten, wird die Auktion automatisch fortgesetzt — die Teilnahmegebühr wird nicht erstattet.' },
    { q: 'Erhalte ich die Teilnahmegebühr zurück, wenn ich den Artikel nicht kaufe?', a: 'Die Teilnahmegebühr wird grundsätzlich nicht erstattet. Ausnahmen gelten bei: einem technischen Fehler auf der Plattform, einer wesentlichen Abweichung der Artikelbeschreibung vom tatsächlichen Zustand (wie von SinkBid festgestellt), oder wenn der Verkäufer den Artikel vor Auktionsbeginn zurückzieht.' },
    { q: 'Wie registriere ich mich als Verkäufer?', a: 'Für die Verkäuferregistrierung sind erforderlich: vollständiger Name oder Firmenname, Adresse, Steuernummer (für Unternehmen), Bankkontonummer, E-Mail-Adresse, Telefonnummer sowie eine Kopie eines amtlichen Lichtbildausweises. Die Registrierung wird von SinkBid geprüft und genehmigt — dies kann mehrere Tage in Anspruch nehmen.' },
    { q: 'Wie hoch ist die SinkBid-Provision?', a: 'Die SinkBid-Provision beträgt 12 %, berechnet auf den Netto-Verkaufspreis und die Nettosumme der Teilnahmegebühren. Provisionsrechnungen werden jeden Montag ausgestellt und sind innerhalb von 8 Werktagen fällig.' },
    { q: 'Wie schnell muss ich als Verkäufer versenden?', a: 'Innerhalb der auf der Produktseite angegebenen Frist ab Zahlungsbestätigung (Standard: 5 Werktage). Für Artikel mit einem Wert über 500 € ist eine Transportversicherung verpflichtend.' },
    { q: 'Gibt es einen Mindest-Startpreis?', a: 'Ja, der Mindest-Startpreis beträgt 200 €. Artikel mit einem niedrigeren Wert können nicht auf der Plattform eingestellt werden.' },
    { q: 'Welche Produkte sind auf der Plattform verboten?', a: 'Zu den verbotenen Artikeln zählen: Fälschungen, illegale Gegenstände, Inhalte für Erwachsene, Betäubungsmittel, Waffen (ausgenommen lizenzierte Sammlerstücke), Produkte geschützter Arten ohne CITES-Dokumentation sowie alle Artikel mit einem Wert unter 200 €.' },
    { q: 'Wie melde ich einen verdächtigen Artikel?', a: 'Senden Sie eine E-Mail an support@sinkbid.com mit dem Artikellink und einer Beschreibung Ihres Anliegens. Jede Meldung wird untersucht und bei Bedarf werden Maßnahmen ergriffen.' },
  ],
}

const PROHIBITED = {
  hu: [
    { title: 'Felnőtt tartalom', desc: 'Kiskorúakat ábrázoló tartalmak, pornográf anyagok, használt intim tárgyak' },
    { title: 'Kábítószer és dohány', desc: 'Ellenőrzött anyagok, drogkellékek, cigaretta, gyűjtői célú alkohol kivételével' },
    { title: 'Gyűlölet és erőszak', desc: 'Gyűlöletcsoportokat vagy terrorizmust propagáló tárgyak' },
    { title: 'Védett fajok', desc: 'CITES dokumentáció nélküli elefántcsont, krokodilbőr, védett növények' },
    { title: 'Veszélyes tárgyak', desc: 'Illegális fegyverek, lőszerek, robbanóanyagok, radioaktív anyagok' },
    { title: 'Illegális tárgyak', desc: 'Lopott, hamisított, szankcionált területekről (Irán, É-Korea) származó tárgyak' },
    { title: 'Forgalomban lévő valuták', desc: 'Jelenleg forgalomban lévő bankjegyek és valuták (gyűjtői érmék kivételével)' },
    { title: '200 EUR alatti tárgyak', desc: 'Ennél alacsonyabb induló árú termékek nem tölthetők fel (kivételek az útmutatókban)' },
  ],
  en: [
    { title: 'Adult content', desc: 'Content depicting minors, pornographic material, used intimate items' },
    { title: 'Narcotics and tobacco', desc: 'Controlled substances, drug paraphernalia, cigarettes (collector\'s alcohol excepted)' },
    { title: 'Hatred and violence', desc: 'Items promoting hate groups or terrorism' },
    { title: 'Protected species', desc: 'Ivory, crocodile skin, protected plants without CITES documentation' },
    { title: 'Hazardous items', desc: 'Illegal weapons, ammunition, explosives, radioactive materials' },
    { title: 'Illegal items', desc: 'Stolen, counterfeit or items originating from sanctioned territories (Iran, North Korea)' },
    { title: 'Legal tender', desc: 'Currently circulating banknotes and currencies (collector\'s coins excepted)' },
    { title: 'Items below €200', desc: 'Items with a starting price below €200 cannot be listed (see guides for exceptions)' },
  ],
  de: [
    { title: 'Inhalte für Erwachsene', desc: 'Inhalte mit Minderjährigen, pornografisches Material, gebrauchte Intimgegenstände' },
    { title: 'Betäubungsmittel und Tabak', desc: 'Kontrollierte Substanzen, Drogenzubehör, Zigaretten (Sammlerspirituosen ausgenommen)' },
    { title: 'Hass und Gewalt', desc: 'Gegenstände, die Hassgruppen oder Terrorismus propagieren' },
    { title: 'Geschützte Arten', desc: 'Elfenbein, Krokodilleder, geschützte Pflanzen ohne CITES-Dokumentation' },
    { title: 'Gefährliche Gegenstände', desc: 'Illegale Waffen, Munition, Sprengstoffe, radioaktive Materialien' },
    { title: 'Illegale Gegenstände', desc: 'Gestohlene, gefälschte oder aus sanktionierten Gebieten (Iran, Nordkorea) stammende Artikel' },
    { title: 'Gesetzliche Zahlungsmittel', desc: 'Derzeit im Umlauf befindliche Banknoten und Währungen (Sammlermünzen ausgenommen)' },
    { title: 'Artikel unter 200 €', desc: 'Artikel mit einem Startpreis unter 200 € können nicht eingestellt werden (Ausnahmen siehe Leitfäden)' },
  ],
}

const PAGE = {
  hu: {
    pageTitle: 'Súgó Központ — SinkBid',
    metaDesc: 'Válaszok a leggyakoribb kérdésekre, tiltott termékek listája és kapcsolati információk.',
    tag: 'Súgó',
    title: 'Súgó Központ',
    sub: 'Válaszok a leggyakoribb kérdésekre, platform irányelvek és kapcsolati információk.',
    links: [
      { to: '/how', title: 'Hogyan működik?', sub: 'A fordított aukció részletes bemutatója' },
      { to: '/seller-guide', title: 'Eladói útmutató', sub: 'Feltöltési szabályok kategóriánként' },
      { to: '/terms', title: 'ÁSZF', sub: 'Általános Szerződési Feltételek' },
      { to: '/privacy', title: 'Adatvédelem', sub: 'GDPR tájékoztató és adatkezelés' },
    ],
    faqTitle: 'Gyakran ismételt kérdések',
    prohibitedTitle: 'Tiltott és korlátozott termékek',
    prohibitedIntro: 'A SinkBid platformon kizárólag valódi, jó minőségű és jogszerűen értékesíthető termékek kerülhetnek fel. Az alábbi tárgyak feltöltése és értékesítése tilos:',
    restrictedTitle: 'Korlátozott (feltételesen engedélyezett) termékek',
    restrictedItems: [
      <><strong>Gyűjtői alkohol:</strong> eredeti csomagolásban, az eladónak és vevőnek egyaránt 18+ korúnak kell lennie</>,
      <><strong>Kulturális műtárgyak és régészeti leletek:</strong> kötelező proveniencia igazolás és jogi megfelelőség dokumentálása</>,
      <><strong>Történelmi és díszfegyverek:</strong> nem működőképes, dekorációs darabok — engedélyekkel és jogszerű eredettel</>,
      <><strong>CITES dokumentációval rendelkező tárgyak:</strong> érvényes export/import engedéllyel és csatolt dokumentációval</>,
    ],
    aiTitle: 'MI-generált tartalmak',
    aiText: 'Az MI-generált képek és szövegek csak korlátozottan engedélyezettek. Az eladónak a leírásban egyértelműen jelölnie kell, ha a tartalom részben vagy egészben MI által generált. Felnőtt tartalmú MI-képek és azonosítható valós személyek ábrázolásai tilosak.',
    reportTitle: 'Szabálysértés bejelentése',
    reportText: 'Ha olyan terméket észlel platformunkon, amely véleménye szerint megsérti irányelveinket, kérjük jelezze ügyfélszolgálatunknak. Minden bejelentést kivizsgálunk és szükség esetén intézkedünk.',
    contactTitle: 'Kapcsolat',
    contactLine: <>support@sinkbid.com — Bejelentések, kérdések, panaszok<br />Válaszidő: 5 munkanapon belül</>,
  },
  en: {
    pageTitle: 'Help Centre — SinkBid',
    metaDesc: 'Answers to frequently asked questions, prohibited items policy and contact information.',
    tag: 'Help',
    title: 'Help Centre',
    sub: 'Answers to frequently asked questions, platform policies and contact information.',
    links: [
      { to: '/how', title: 'How it works', sub: 'A detailed guide to the reverse price auction' },
      { to: '/seller-guide', title: 'Seller guide', sub: 'Listing requirements by category' },
      { to: '/terms', title: 'Terms & Conditions', sub: 'General Terms and Conditions' },
      { to: '/privacy', title: 'Privacy', sub: 'GDPR notice and data processing' },
    ],
    faqTitle: 'Frequently asked questions',
    prohibitedTitle: 'Prohibited and restricted items',
    prohibitedIntro: 'Only authentic, high-quality and lawfully saleable items may be listed on the SinkBid platform. The following items are prohibited from listing and sale:',
    restrictedTitle: 'Restricted items (conditionally permitted)',
    restrictedItems: [
      <><strong>Collector\'s alcohol:</strong> in original packaging; both seller and buyer must be aged 18 or over</>,
      <><strong>Cultural artefacts and archaeological finds:</strong> mandatory provenance documentation and legal compliance certification</>,
      <><strong>Historical and decorative weapons:</strong> non-functional, decorative pieces only — with permits and documented lawful provenance</>,
      <><strong>CITES-documented items:</strong> with valid export/import permits and attached documentation</>,
    ],
    aiTitle: 'AI-generated content',
    aiText: 'AI-generated images and texts are only permitted with restrictions. The seller must clearly indicate in the description if the content is partially or entirely AI-generated. Adult-content AI images and depictions of identifiable real persons are prohibited.',
    reportTitle: 'Reporting a policy violation',
    reportText: 'If you notice an item on our platform that you believe violates our policies, please notify our customer service team. Every report is investigated and action is taken where necessary.',
    contactTitle: 'Contact',
    contactLine: <>support@sinkbid.com — Reports, enquiries, complaints<br />Response time: within 5 business days</>,
  },
  de: {
    pageTitle: 'Hilfe-Center — SinkBid',
    metaDesc: 'Antworten auf häufig gestellte Fragen, Liste verbotener Artikel und Kontaktinformationen.',
    tag: 'Hilfe',
    title: 'Hilfe-Center',
    sub: 'Antworten auf häufig gestellte Fragen, Plattformrichtlinien und Kontaktinformationen.',
    links: [
      { to: '/how', title: 'So funktioniert es', sub: 'Ausführliche Erläuterung der Rückwärtsauktion' },
      { to: '/seller-guide', title: 'Verkäufer-Leitfaden', sub: 'Einstellungsanforderungen nach Kategorie' },
      { to: '/terms', title: 'AGB', sub: 'Allgemeine Geschäftsbedingungen' },
      { to: '/privacy', title: 'Datenschutz', sub: 'DSGVO-Hinweis und Datenverarbeitung' },
    ],
    faqTitle: 'Häufig gestellte Fragen',
    prohibitedTitle: 'Verbotene und eingeschränkte Artikel',
    prohibitedIntro: 'Auf der SinkBid-Plattform dürfen ausschließlich authentische, hochwertige und rechtmäßig verkäufliche Artikel eingestellt werden. Das Einstellen und der Verkauf folgender Artikel ist untersagt:',
    restrictedTitle: 'Eingeschränkte Artikel (bedingt zugelassen)',
    restrictedItems: [
      <><strong>Sammlerspirituosen:</strong> in Originalverpackung; Verkäufer und Käufer müssen jeweils mindestens 18 Jahre alt sein</>,
      <><strong>Kulturgüter und archäologische Funde:</strong> Pflichtnachweis der Provenienz und Dokumentation der rechtlichen Konformität</>,
      <><strong>Historische und Dekorationswaffen:</strong> ausschließlich nicht funktionsfähige Dekorationsstücke — mit Genehmigungen und nachgewiesener rechtmäßiger Herkunft</>,
      <><strong>CITES-dokumentierte Gegenstände:</strong> mit gültigen Export-/Importgenehmigungen und angehängter Dokumentation</>,
    ],
    aiTitle: 'KI-generierte Inhalte',
    aiText: 'KI-generierte Bilder und Texte sind nur eingeschränkt zulässig. Der Verkäufer muss in der Beschreibung eindeutig angeben, wenn der Inhalt ganz oder teilweise KI-generiert ist. Bilder mit Erwachseneninhalten sowie Darstellungen identifizierbarer realer Personen sind verboten.',
    reportTitle: 'Meldung eines Regelverstoßes',
    reportText: 'Wenn Sie einen Artikel auf unserer Plattform entdecken, der nach Ihrer Einschätzung gegen unsere Richtlinien verstößt, informieren Sie bitte unseren Kundendienst. Jede Meldung wird untersucht und bei Bedarf werden Maßnahmen ergriffen.',
    contactTitle: 'Kontakt',
    contactLine: <>support@sinkbid.com — Meldungen, Anfragen, Beschwerden<br />Antwortzeit: innerhalb von 5 Werktagen</>,
  },
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
      <button className={styles.faqQ} onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <span className={styles.faqIcon}>{open ? '−' : '+'}</span>
      </button>
      {open && <div className={styles.faqA}>{a}</div>}
    </div>
  )
}

export default function HelpCenter() {
  const { i18n } = useTranslation()
  const lang = (i18n.language || 'hu').split('-')[0]
  const c = PAGE[lang] || PAGE.hu
  const faq = FAQ[lang] || FAQ.hu
  const prohibited = PROHIBITED[lang] || PROHIBITED.hu

  return (
    <div className={styles.wrap}>
      <Helmet>
        <title>{c.pageTitle}</title>
        <meta name="description" content={c.metaDesc} />
      </Helmet>

      <div className={styles.hero}>
        <div className={styles.tag}>{c.tag}</div>
        <h1 className={styles.title}>{c.title}</h1>
        <p className={styles.sub}>{c.sub}</p>
      </div>

      <div className={styles.quickLinks}>
        {c.links.map(link => (
          <Link key={link.to} to={link.to} className={styles.quickCard}>
            <div className={styles.quickTitle}>{link.title}</div>
            <div className={styles.quickSub}>{link.sub}</div>
          </Link>
        ))}
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{c.faqTitle}</h2>
        <div className={styles.faqList}>
          {faq.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{c.prohibitedTitle}</h2>
        <p className={styles.para}>{c.prohibitedIntro}</p>
        <div className={styles.tiltottGrid}>
          {prohibited.map(item => (
            <div key={item.title} className={styles.tiltottCard}>
              <div className={styles.tiltottTitle}>{item.title}</div>
              <div className={styles.tiltottDesc}>{item.desc}</div>
            </div>
          ))}
        </div>

        <div className={styles.infoBox}>
          <div className={styles.infoTitle}>{c.restrictedTitle}</div>
          <ul className={styles.infoList}>
            {c.restrictedItems.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        <div className={styles.infoBox}>
          <div className={styles.infoTitle}>{c.aiTitle}</div>
          <p className={styles.infoText}>{c.aiText}</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{c.reportTitle}</h2>
        <p className={styles.para}>{c.reportText}</p>
        <div className={styles.contactBox}>
          <div className={styles.contactTitle}>{c.contactTitle}</div>
          <div className={styles.contactLine}>{c.contactLine}</div>
        </div>
      </section>
    </div>
  )
}
