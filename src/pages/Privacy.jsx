import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import styles from './LegalPage.module.css'

function renderBlocks(blocks) {
  return blocks.map((b, i) => {
    switch (b.type) {
      case 'h3': return <h3 key={i} className={styles.subTitle}>{b.text}</h3>
      case 'p': return <p key={i} className={styles.para}>{b.text}</p>
      case 'ul': return <ul key={i} className={styles.list}>{b.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
      case 'retentionTable': return (
        <table key={i} className={styles.table}>
          <thead><tr><th>{b.h1}</th><th>{b.h2}</th></tr></thead>
          <tbody>{b.rows.map(([a, d]) => <tr key={a}><td>{a}</td><td>{d}</td></tr>)}</tbody>
        </table>
      )
      default: return null
    }
  })
}

const CONTENT = {
  hu: {
    pageTitle: 'Adatvédelmi Irányelvek — SinkBid',
    metaDesc: 'A SinkBid adatvédelmi irányelvei és GDPR tájékoztatója.',
    tag: 'Jogi dokumentum',
    title: 'Adatvédelmi Irányelvek',
    meta: 'SinkBid s.r.o. · Hatálybalépés: 2026.01.01. · Verzió: 1.0',
    tocTitle: 'Tartalomjegyzék',
    intro: <>Ez az Adatvédelmi Szabályzat leírja, hogy a SinkBid s.r.o. hogyan gyűjti, kezeli, védi és osztja meg az Ön személyes adatait. Az EU 2016/679 Általános Adatvédelmi Rendeletének (GDPR) alkalmazásában a SinkBid s.r.o. az Ön személyes adatainak <strong>kezelője</strong>. A Webhely elérésével Ön kifejezetten elfogadja a jelen Adatvédelmi Szabályzat feltételeit.</>,
    contactTitle: 'SinkBid s.r.o. — Adatvédelmi kapcsolat',
    contactLine: <>Adatvédelmi e-mail: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a><br />Weboldal: <a href="https://www.sinkbid.com">www.sinkbid.com</a><br />Hatálybalépés: 2026.01.01.</>,
    sections: [
      {
        id: 'p1', title: '1. A gyűjtött információk',
        blocks: [
          { type: 'h3', text: 'Az Ön által megadott információk' },
          { type: 'ul', items: [<><strong>Fiók létrehozása:</strong> neve, szállítási és számlázási cím, telefonszám, e-mail cím, fizetési adatok</>, <><strong>Aukció és vásárlás:</strong> hitelkártya- vagy egyéb fizetési adatok, szállítási adatok</>, <><strong>Eladói regisztráció:</strong> cégnév, adószám, bankszámlaszám, kapcsolattartási adatok</>, <><strong>Vélemények és értékelések:</strong> keresztnév és tranzakció adatok (nyilvánosan látható)</>] },
          { type: 'h3', text: 'Automatikusan gyűjtött információk' },
          { type: 'ul', items: ['Böngésző típusa és verziója, operációs rendszer, IP-cím, eszköztípus', 'Megtekintett oldalak, kattintások, letöltési hibák, oldalon töltött idő', 'Aukció-adatok: megtekintett termékek, belépések, árszintek', 'Helyszíni adatok mobilfelhasználók esetén, kizárólag hozzájárulással'] },
        ],
      },
      {
        id: 'p2', title: '2. Gyermekek magánélete',
        blocks: [
          { type: 'p', text: <>A SinkBid weboldalt nem úgy terveztük, hogy 18 év alatti személyek számára vonzó legyen. A felhasználóknak <strong>18 évesnek vagy idősebbnek</strong> kell lenniük a regisztrációhoz. Ha tudomásunkra jut, hogy 18 év alatti személy adatait kezeljük, haladéktalanul töröljük azokat.</> },
        ],
      },
      {
        id: 'p3', title: '3. Sütik (cookie) használata',
        blocks: [
          { type: 'h3', text: 'Süti típusok' },
          { type: 'ul', items: [<><strong>Szükséges sütik:</strong> a weboldal alapvető működéséhez nélkülözhetetlenek — hozzájárulás nélkül is használjuk</>, <><strong>Teljesítmény sütik:</strong> információkat gyűjtenek a weboldal használatáról — csak hozzájárulással</>, <><strong>Funkcionalitási sütik:</strong> megjegyzik az Ön beállításait — csak hozzájárulással</>, <><strong>Célzott / reklámsütik:</strong> személyre szabott hirdetések megjelenítéséhez — csak hozzájárulással</>] },
          { type: 'h3', text: 'Süti lejárat' },
          { type: 'ul', items: [<><strong>Munkamenet sütik:</strong> a böngésző bezárásakor törlődnek</>, <><strong>Tartós sütik:</strong> előre meghatározott ideig maradnak (pl. 30 nap, 1 év)</>] },
          { type: 'p', text: 'Süti-preferenciáit bármikor módosíthatja a böngésző beállításaiban. Egyes sütik letiltása befolyásolhatja a weboldal működését.' },
        ],
      },
      {
        id: 'p4', title: '4. Személyes adatok felhasználása',
        blocks: [
          { type: 'h3', text: 'Szerződés teljesítése alapján' },
          { type: 'ul', items: ['A fordított aukció folyamat lebonyolítása (betekintési díj kezelése, árcsökkentés)', 'Termékfelvásárlás és értékesítés feldolgozása', 'Számlák elkészítése, eladói kifizetések és jutalék számlázása', 'Ügyfélfiók létrehozása és kezelése'] },
          { type: 'h3', text: 'Jogos érdek alapján' },
          { type: 'ul', items: ['Csalás, visszaélések és jogosulatlan hozzáférés megelőzése', 'Termékeink és szolgáltatásaink fejlesztése és javítása', 'A Webhely adminisztrálása, beleértve a hibaelhárítást'] },
          { type: 'h3', text: 'Hozzájárulás alapján (visszavonható)' },
          { type: 'ul', items: ['Marketingkommunikáció küldése saját termékekről és szolgáltatásokról', 'Hirdetések személyre szabása korábbi keresésen és vásárláson alapulva', 'Promóciók és felmérések lebonyolítása'] },
          { type: 'h3', text: 'Jogi kötelezettség alapján' },
          { type: 'ul', items: ['Adóhatósági megkeresések teljesítéséhez', 'Pénzügyi nyilvántartási kötelezettségek teljesítéséhez'] },
        ],
      },
      {
        id: 'p5', title: '5. Adatok megosztása',
        blocks: [
          { type: 'p', text: <>A SinkBid <strong>nem adja el</strong> és nem osztja meg a személyes adatokat a jelen Adatvédelmi Szabályzatban leírtakon kívül, illetve az Ön előzetes hozzájárulása nélkül.</> },
          { type: 'h3', text: 'Tranzakciós megosztások' },
          { type: 'ul', items: [<><strong>Az eladóval:</strong> vásárló neve, szállítási cím — kizárólag a tranzakcióhoz</>, <><strong>A vásárlóval:</strong> eladó neve, elérhetősége és szállítási adatok</>, <><strong>Fizetési feldolgozóval:</strong> a tranzakció pénzügyi adatai</>, <><strong>Szállítmányozási partnerekkel:</strong> szállításhoz szükséges adatok</>] },
          { type: 'h3', text: 'Gondosan kiválasztott szolgáltatók' },
          { type: 'ul', items: ['IT és hálózati szolgáltatók, ügyfélszolgálati partnerek', 'Számviteli és pénzügyi tanácsadók, jogi szolgálatok', 'Marketing segítség — kizárólag az Ön beleegyezésével'] },
        ],
      },
      {
        id: 'p6', title: '6. Nemzetközi adattovábbítások',
        blocks: [
          { type: 'p', text: <>Az Öntől gyűjtött személyes adatok az <strong>Európai Unióban</strong> található szervereinken tárolódnak (Websupport, s.r.o., Karadžičova 12, 821 08 Bratislava, Szlovákia). Amennyiben adatokat továbbítunk az EU-n kívülre, ezt kizárólag az Európai Bizottság által jóváhagyott Általános Szerződési Feltételek alapján tesszük.</> },
        ],
      },
      {
        id: 'p7', title: '7. Az Ön jogai és adathozzáférés',
        blocks: [
          { type: 'h3', text: 'GDPR szerinti jogai' },
          { type: 'ul', items: [<><strong>Hozzáférési jog:</strong> jogosult megismerni, hogy milyen adatokat kezelünk Önről</>, <><strong>Helyesbítéshez való jog:</strong> kérhet pontatlan adatai helyesbítését</>, <><strong>Törléshez való jog (elfeledtetés):</strong> bizonyos feltételek mellett kérheti adatai törlését</>, <><strong>Adatkezelés korlátozásához való jog</strong></>, <><strong>Adathordozhatósághoz való jog:</strong> kérheti adatai más adatkezelő részére történő továbbítását</>, <><strong>Tiltakozáshoz való jog:</strong> tiltakozhat adatai kezelése ellen, ha az jogos érdeken alapul</>, <><strong>Hozzájárulás visszavonása:</strong> a hozzájáruláson alapuló adatkezelést bármikor visszavonhatja</>] },
          { type: 'p', text: <>Kérelmek bejelentéséhez írjon: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a> — válaszidő: 30 napon belül.</> },
          { type: 'h3', text: 'Adatmegőrzési idő' },
          { type: 'retentionTable', h1: 'Adattípus', h2: 'Megőrzési idő', rows: [['Fiókadatok', 'Fiók törlése után legfeljebb 3 évig'], ['Tranzakciós adatok', '8 évig (számviteli kötelezettség)'], ['Ügyfélszolgálati levelezések', '3 évig'], ['Marketingadatok', 'Hozzájárulás visszavonásáig / 2 év inaktivitás']] },
        ],
      },
      {
        id: 'p8', title: '8. Biztonság',
        blocks: [
          { type: 'p', text: 'Fizikai, elektronikus és adminisztratív biztonsági intézkedéseket alkalmazunk az adatok védelme érdekében:' },
          { type: 'ul', items: ['SSL/TLS titkosítás minden adattovábbítás során', 'Kétfaktoros hitelesítés lehetősége', 'Rendszeres biztonsági auditok', 'Hitelkártya-adatok PCI DSS szabványnak megfelelő feldolgozáson keresztül', 'Korlátozott hozzáférés a személyes adatokhoz — csak jogosult munkavállalók'] },
          { type: 'p', text: <>Adatvédelmi incidens esetén a SinkBid köteles a hatóságokat <strong>72 órán belül</strong> értesíteni. Incidens esetén haladéktalanul értesítsen minket: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a></> },
        ],
      },
      {
        id: 'p9', title: '9. Harmadik feles weboldalak',
        blocks: [
          { type: 'p', text: 'Weboldalunk harmadik feles weboldalakra mutató hivatkozásokat tartalmazhat. Ezeket a weboldalakat nem vizsgáljuk felül, és nem vállalunk felelősséget azok tartalmáért vagy adatvédelmi gyakorlataiért. Javasoljuk, hogy olvassa el az ilyen weboldalak adatvédelmi szabályzatait.' },
        ],
      },
      {
        id: 'p10', title: '10. Hozzájárulás visszavonása és panasztétel',
        blocks: [
          { type: 'p', text: <>Hozzájárulását bármikor visszavonhatja e-mailben: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a></> },
          { type: 'p', text: 'Ha úgy érzékeli, hogy adatkezelésünk megsérti az alkalmazandó adatvédelmi törvényeket, panaszt tehet a felügyeleti hatóságnál:' },
          { type: 'ul', items: [<><strong>Magyarország:</strong> Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH) — <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer">www.naih.hu</a></>, <><strong>Szlovákia:</strong> Úrad pre ochranu osobných údajov — <a href="https://dataprotection.gov.sk" target="_blank" rel="noopener noreferrer">dataprotection.gov.sk</a></>, <><strong>Európai szinten:</strong> az Ön lakóhelye szerinti adatvédelmi hatóságnál</>] },
        ],
      },
      { id: 'p11', title: '11. Kapcsolat és adatvédelmi tisztviselő', blocks: [] },
    ],
  },

  en: {
    pageTitle: 'Privacy Policy — SinkBid',
    metaDesc: 'Privacy Policy and GDPR notice of SinkBid.',
    tag: 'Legal document',
    title: 'Privacy Policy',
    meta: 'SinkBid s.r.o. · Effective date: 1 January 2026 · Version: 1.0',
    tocTitle: 'Table of Contents',
    intro: <>This Privacy Policy describes how SinkBid s.r.o. collects, processes, protects and shares your personal data. For the purposes of Regulation (EU) 2016/679 (the General Data Protection Regulation, "GDPR"), SinkBid s.r.o. is the <strong>controller</strong> of your personal data. By accessing the Website, you expressly accept the terms of this Privacy Policy.</>,
    contactTitle: 'SinkBid s.r.o. — Data protection contact',
    contactLine: <>Data protection email: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a><br />Website: <a href="https://www.sinkbid.com">www.sinkbid.com</a><br />Effective date: 1 January 2026</>,
    sections: [
      {
        id: 'p1', title: '1. Information we collect',
        blocks: [
          { type: 'h3', text: 'Information you provide' },
          { type: 'ul', items: [<><strong>Account creation:</strong> name, shipping and billing address, telephone number, email address, payment details</>, <><strong>Auction and purchase:</strong> credit card or other payment data, shipping details</>, <><strong>Seller registration:</strong> company name, tax number, bank account number, contact details</>, <><strong>Reviews and ratings:</strong> first name and transaction data (publicly visible)</>] },
          { type: 'h3', text: 'Automatically collected information' },
          { type: 'ul', items: ['Browser type and version, operating system, IP address, device type', 'Pages viewed, clicks, download errors, time spent on site', 'Auction data: items viewed, auction entries, price levels', 'Location data for mobile users, with consent only'] },
        ],
      },
      {
        id: 'p2', title: '2. Children\'s privacy',
        blocks: [
          { type: 'p', text: <>The SinkBid website is not designed to appeal to persons under the age of 18. Users must be <strong>18 years of age or older</strong> to register. If we become aware that we are processing the personal data of a person under 18, we will delete it without delay.</> },
        ],
      },
      {
        id: 'p3', title: '3. Use of cookies',
        blocks: [
          { type: 'h3', text: 'Types of cookies' },
          { type: 'ul', items: [<><strong>Strictly necessary cookies:</strong> essential to the basic operation of the website — used without consent</>, <><strong>Performance cookies:</strong> collect information about website usage — consent required</>, <><strong>Functionality cookies:</strong> remember your preferences — consent required</>, <><strong>Targeting / advertising cookies:</strong> deliver personalised advertising — consent required</>] },
          { type: 'h3', text: 'Cookie duration' },
          { type: 'ul', items: [<><strong>Session cookies:</strong> deleted when the browser is closed</>, <><strong>Persistent cookies:</strong> retained for a defined period (e.g. 30 days, 1 year)</>] },
          { type: 'p', text: 'You may modify your cookie preferences at any time in your browser settings. Disabling certain cookies may affect the functionality of the website.' },
        ],
      },
      {
        id: 'p4', title: '4. Use of personal data',
        blocks: [
          { type: 'h3', text: 'Performance of a contract' },
          { type: 'ul', items: ['Operating the reverse price auction process (entry fee management, price decrements)', 'Processing purchases and sales', 'Issuing invoices, seller payments and commission billing', 'Creating and managing user accounts'] },
          { type: 'h3', text: 'Legitimate interests' },
          { type: 'ul', items: ['Prevention of fraud, misuse and unauthorised access', 'Improving and developing our products and services', 'Administration of the Website, including troubleshooting'] },
          { type: 'h3', text: 'Consent (withdrawable)' },
          { type: 'ul', items: ['Sending marketing communications about our own products and services', 'Personalising advertising based on past searches and purchases', 'Running promotions and surveys'] },
          { type: 'h3', text: 'Legal obligation' },
          { type: 'ul', items: ['Compliance with tax authority requests', 'Meeting financial record-keeping obligations'] },
        ],
      },
      {
        id: 'p5', title: '5. Sharing of data',
        blocks: [
          { type: 'p', text: <>SinkBid does <strong>not sell</strong> or share personal data beyond what is described in this Privacy Policy, or without your prior consent.</> },
          { type: 'h3', text: 'Transaction-related sharing' },
          { type: 'ul', items: [<><strong>With the seller:</strong> buyer's name and shipping address — for the purpose of the transaction only</>, <><strong>With the buyer:</strong> seller's name, contact details and shipping information</>, <><strong>With the payment processor:</strong> financial data relating to the transaction</>, <><strong>With logistics partners:</strong> data necessary for delivery</>] },
          { type: 'h3', text: 'Carefully selected service providers' },
          { type: 'ul', items: ['IT and network service providers, customer support partners', 'Accounting and financial advisers, legal service providers', 'Marketing assistance — with your consent only'] },
        ],
      },
      {
        id: 'p6', title: '6. International data transfers',
        blocks: [
          { type: 'p', text: <>Your personal data is stored on servers located in the <strong>European Union</strong> (Websupport, s.r.o., Karadžičova 12, 821 08 Bratislava, Slovakia). Where data is transferred outside the EU, we do so exclusively on the basis of Standard Contractual Clauses approved by the European Commission.</> },
        ],
      },
      {
        id: 'p7', title: '7. Your rights and data access',
        blocks: [
          { type: 'h3', text: 'Your rights under the GDPR' },
          { type: 'ul', items: [<><strong>Right of access:</strong> you are entitled to know what personal data we hold about you</>, <><strong>Right to rectification:</strong> you may request correction of inaccurate data</>, <><strong>Right to erasure ("right to be forgotten"):</strong> under certain conditions, you may request deletion of your data</>, <><strong>Right to restriction of processing</strong></>, <><strong>Right to data portability:</strong> you may request that your data be transferred to another controller</>, <><strong>Right to object:</strong> you may object to processing based on legitimate interests</>, <><strong>Withdrawal of consent:</strong> you may withdraw consent for consent-based processing at any time</>] },
          { type: 'p', text: <>To submit a request, write to: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a> — response time: within 30 days.</> },
          { type: 'h3', text: 'Data retention periods' },
          { type: 'retentionTable', h1: 'Data type', h2: 'Retention period', rows: [['Account data', 'Up to 3 years after account deletion'], ['Transaction data', '8 years (accounting obligation)'], ['Customer service correspondence', '3 years'], ['Marketing data', 'Until withdrawal of consent / 2 years of inactivity']] },
        ],
      },
      {
        id: 'p8', title: '8. Security',
        blocks: [
          { type: 'p', text: 'We apply physical, electronic and administrative security measures to protect your data:' },
          { type: 'ul', items: ['SSL/TLS encryption for all data transmissions', 'Two-factor authentication available', 'Regular security audits', 'Credit card data processed in accordance with PCI DSS standards', 'Restricted access to personal data — authorised personnel only'] },
          { type: 'p', text: <>In the event of a personal data breach, SinkBid is obliged to notify the competent supervisory authority within <strong>72 hours</strong>. In the event of a breach, please notify us immediately at: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a></> },
        ],
      },
      {
        id: 'p9', title: '9. Third-party websites',
        blocks: [
          { type: 'p', text: 'Our website may contain links to third-party websites. We do not review those websites and accept no responsibility for their content or privacy practices. We recommend reading the privacy policies of any such websites.' },
        ],
      },
      {
        id: 'p10', title: '10. Withdrawal of consent and complaints',
        blocks: [
          { type: 'p', text: <>You may withdraw your consent at any time by email: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a></> },
          { type: 'p', text: 'If you believe that our processing of your data infringes applicable data protection law, you have the right to lodge a complaint with a supervisory authority:' },
          { type: 'ul', items: [<><strong>Hungary:</strong> Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH) — <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer">www.naih.hu</a></>, <><strong>Slovakia:</strong> Úrad pre ochranu osobných údajov — <a href="https://dataprotection.gov.sk" target="_blank" rel="noopener noreferrer">dataprotection.gov.sk</a></>, <>The supervisory authority of your country of residence</>] },
        ],
      },
      { id: 'p11', title: '11. Contact and Data Protection Officer', blocks: [] },
    ],
  },

  de: {
    pageTitle: 'Datenschutzrichtlinie — SinkBid',
    metaDesc: 'Datenschutzrichtlinie und DSGVO-Hinweis von SinkBid.',
    tag: 'Rechtsdokument',
    title: 'Datenschutzrichtlinie',
    meta: 'SinkBid s.r.o. · Gültig ab: 01.01.2026 · Version: 1.0',
    tocTitle: 'Inhaltsverzeichnis',
    intro: <>Diese Datenschutzrichtlinie beschreibt, wie SinkBid s.r.o. Ihre personenbezogenen Daten erhebt, verarbeitet, schützt und weitergibt. Im Sinne der Verordnung (EU) 2016/679 (Datenschutz-Grundverordnung, „DSGVO") ist SinkBid s.r.o. der <strong>Verantwortliche</strong> für Ihre personenbezogenen Daten. Mit dem Zugriff auf die Website stimmen Sie den Bedingungen dieser Datenschutzrichtlinie ausdrücklich zu.</>,
    contactTitle: 'SinkBid s.r.o. — Datenschutzkontakt',
    contactLine: <>Datenschutz-E-Mail: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a><br />Website: <a href="https://www.sinkbid.com">www.sinkbid.com</a><br />Gültig ab: 01.01.2026</>,
    sections: [
      {
        id: 'p1', title: '1. Erhobene Informationen',
        blocks: [
          { type: 'h3', text: 'Von Ihnen bereitgestellte Informationen' },
          { type: 'ul', items: [<><strong>Kontoerstellung:</strong> Name, Liefer- und Rechnungsadresse, Telefonnummer, E-Mail-Adresse, Zahlungsdaten</>, <><strong>Auktion und Kauf:</strong> Kreditkarten- oder sonstige Zahlungsdaten, Lieferdaten</>, <><strong>Verkäuferregistrierung:</strong> Firmenname, Steuernummer, Bankkontonummer, Kontaktdaten</>, <><strong>Bewertungen und Rezensionen:</strong> Vorname und Transaktionsdaten (öffentlich sichtbar)</>] },
          { type: 'h3', text: 'Automatisch erhobene Informationen' },
          { type: 'ul', items: ['Browsertyp und -version, Betriebssystem, IP-Adresse, Gerätetyp', 'Aufgerufene Seiten, Klicks, Downloadfehler, Verweildauer', 'Auktionsdaten: angesehene Artikel, Auktionseinträge, Preisniveaus', 'Standortdaten bei mobilen Nutzern, ausschließlich mit Einwilligung'] },
        ],
      },
      {
        id: 'p2', title: '2. Privatsphäre von Kindern',
        blocks: [
          { type: 'p', text: <>Die SinkBid-Website ist nicht darauf ausgerichtet, Personen unter 18 Jahren anzusprechen. Für die Registrierung müssen Nutzer <strong>mindestens 18 Jahre alt</strong> sein. Sollten wir erfahren, dass wir personenbezogene Daten einer Person unter 18 Jahren verarbeiten, werden wir diese unverzüglich löschen.</> },
        ],
      },
      {
        id: 'p3', title: '3. Verwendung von Cookies',
        blocks: [
          { type: 'h3', text: 'Cookie-Typen' },
          { type: 'ul', items: [<><strong>Notwendige Cookies:</strong> unerlässlich für den grundlegenden Betrieb der Website — Verwendung ohne Einwilligung</>, <><strong>Performance-Cookies:</strong> erheben Informationen über die Website-Nutzung — Einwilligung erforderlich</>, <><strong>Funktionale Cookies:</strong> speichern Ihre Einstellungen — Einwilligung erforderlich</>, <><strong>Targeting-/Werbe-Cookies:</strong> zur Ausspielung personalisierter Werbung — Einwilligung erforderlich</>] },
          { type: 'h3', text: 'Cookie-Laufzeit' },
          { type: 'ul', items: [<><strong>Sitzungs-Cookies:</strong> werden beim Schließen des Browsers gelöscht</>, <><strong>Dauerhafte Cookies:</strong> bleiben für einen festgelegten Zeitraum gespeichert (z. B. 30 Tage, 1 Jahr)</>] },
          { type: 'p', text: 'Sie können Ihre Cookie-Einstellungen jederzeit in den Browser-Einstellungen ändern. Das Deaktivieren bestimmter Cookies kann die Funktionalität der Website beeinträchtigen.' },
        ],
      },
      {
        id: 'p4', title: '4. Verwendung personenbezogener Daten',
        blocks: [
          { type: 'h3', text: 'Vertragserfüllung' },
          { type: 'ul', items: ['Durchführung des Rückwärtsauktionsprozesses (Verwaltung der Teilnahmegebühren, Preissenkungen)', 'Abwicklung von Käufen und Verkäufen', 'Rechnungsstellung, Verkäuferzahlungen und Provisionsabrechnung', 'Erstellung und Verwaltung von Nutzerkonten'] },
          { type: 'h3', text: 'Berechtigte Interessen' },
          { type: 'ul', items: ['Prävention von Betrug, Missbrauch und unbefugtem Zugriff', 'Verbesserung und Weiterentwicklung unserer Produkte und Dienstleistungen', 'Administration der Website einschließlich Fehlerbehebung'] },
          { type: 'h3', text: 'Einwilligung (widerruflich)' },
          { type: 'ul', items: ['Versand von Marketingkommunikation zu unseren eigenen Produkten und Dienstleistungen', 'Personalisierung von Werbung auf Basis früherer Suchen und Käufe', 'Durchführung von Aktionen und Umfragen'] },
          { type: 'h3', text: 'Rechtliche Verpflichtung' },
          { type: 'ul', items: ['Erfüllung von Anfragen der Steuerbehörden', 'Einhaltung buchführungsrechtlicher Aufzeichnungspflichten'] },
        ],
      },
      {
        id: 'p5', title: '5. Datenweitergabe',
        blocks: [
          { type: 'p', text: <>SinkBid <strong>verkauft</strong> personenbezogene Daten nicht und gibt sie nicht über das in dieser Datenschutzrichtlinie Beschriebene hinaus ohne Ihre vorherige Einwilligung weiter.</> },
          { type: 'h3', text: 'Transaktionsbezogene Datenweitergabe' },
          { type: 'ul', items: [<><strong>An den Verkäufer:</strong> Name und Lieferadresse des Käufers — ausschließlich für die Transaktion</>, <><strong>An den Käufer:</strong> Name, Kontaktdaten und Versandinformationen des Verkäufers</>, <><strong>An den Zahlungsabwickler:</strong> finanzielle Transaktionsdaten</>, <><strong>An Logistikpartner:</strong> für die Lieferung erforderliche Daten</>] },
          { type: 'h3', text: 'Sorgfältig ausgewählte Dienstleister' },
          { type: 'ul', items: ['IT- und Netzwerkdienstleister, Kundendienst-Partner', 'Buchführungs- und Finanzberater, Rechtsdienstleister', 'Marketingunterstützung — ausschließlich mit Ihrer Einwilligung'] },
        ],
      },
      {
        id: 'p6', title: '6. Internationale Datenübermittlungen',
        blocks: [
          { type: 'p', text: <>Ihre personenbezogenen Daten werden auf Servern in der <strong>Europäischen Union</strong> gespeichert (Websupport, s.r.o., Karadžičova 12, 821 08 Bratislava, Slowakei). Sofern Daten außerhalb der EU übermittelt werden, erfolgt dies ausschließlich auf Grundlage der von der Europäischen Kommission genehmigten Standardvertragsklauseln.</> },
        ],
      },
      {
        id: 'p7', title: '7. Ihre Rechte und Datenzugang',
        blocks: [
          { type: 'h3', text: 'Ihre Rechte nach der DSGVO' },
          { type: 'ul', items: [<><strong>Auskunftsrecht:</strong> Sie haben das Recht zu erfahren, welche personenbezogenen Daten wir über Sie verarbeiten</>, <><strong>Recht auf Berichtigung:</strong> Sie können die Korrektur unrichtiger Daten verlangen</>, <><strong>Recht auf Löschung („Recht auf Vergessenwerden"):</strong> unter bestimmten Voraussetzungen können Sie die Löschung Ihrer Daten verlangen</>, <><strong>Recht auf Einschränkung der Verarbeitung</strong></>, <><strong>Recht auf Datenübertragbarkeit:</strong> Sie können verlangen, dass Ihre Daten an einen anderen Verantwortlichen übermittelt werden</>, <><strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung auf Basis berechtigter Interessen widersprechen</>, <><strong>Widerruf der Einwilligung:</strong> Sie können eine auf Einwilligung beruhende Datenverarbeitung jederzeit widerrufen</>] },
          { type: 'p', text: <>Zur Einreichung eines Antrags schreiben Sie an: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a> — Antwortzeit: innerhalb von 30 Tagen.</> },
          { type: 'h3', text: 'Datenspeicherfristen' },
          { type: 'retentionTable', h1: 'Datenart', h2: 'Speicherfrist', rows: [['Kontodaten', 'Bis zu 3 Jahre nach Kontolöschung'], ['Transaktionsdaten', '8 Jahre (buchführungsrechtliche Pflicht)'], ['Kundendienst-Korrespondenz', '3 Jahre'], ['Marketingdaten', 'Bis zum Widerruf der Einwilligung / 2 Jahre Inaktivität']] },
        ],
      },
      {
        id: 'p8', title: '8. Sicherheit',
        blocks: [
          { type: 'p', text: 'Wir wenden physische, elektronische und administrative Sicherheitsmaßnahmen zum Schutz Ihrer Daten an:' },
          { type: 'ul', items: ['SSL/TLS-Verschlüsselung bei allen Datenübertragungen', 'Möglichkeit der Zwei-Faktor-Authentifizierung', 'Regelmäßige Sicherheitsaudits', 'Verarbeitung von Kreditkartendaten gemäß PCI-DSS-Standard', 'Eingeschränkter Datenzugang — nur autorisierte Mitarbeiter'] },
          { type: 'p', text: <>Im Falle eines Datenschutzvorfalls ist SinkBid verpflichtet, die zuständige Aufsichtsbehörde innerhalb von <strong>72 Stunden</strong> zu benachrichtigen. Im Falle eines Vorfalls informieren Sie uns bitte unverzüglich: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a></> },
        ],
      },
      {
        id: 'p9', title: '9. Websites Dritter',
        blocks: [
          { type: 'p', text: 'Unsere Website kann Links zu Websites Dritter enthalten. Wir überprüfen diese Websites nicht und übernehmen keine Verantwortung für deren Inhalte oder Datenschutzpraktiken. Wir empfehlen, die Datenschutzrichtlinien solcher Websites zu lesen.' },
        ],
      },
      {
        id: 'p10', title: '10. Widerruf der Einwilligung und Beschwerden',
        blocks: [
          { type: 'p', text: <>Sie können Ihre Einwilligung jederzeit per E-Mail widerrufen: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a></> },
          { type: 'p', text: 'Wenn Sie der Ansicht sind, dass unsere Datenverarbeitung gegen geltendes Datenschutzrecht verstößt, haben Sie das Recht, bei einer Aufsichtsbehörde Beschwerde einzulegen:' },
          { type: 'ul', items: [<><strong>Ungarn:</strong> Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH) — <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer">www.naih.hu</a></>, <><strong>Slowakei:</strong> Úrad pre ochranu osobných údajov — <a href="https://dataprotection.gov.sk" target="_blank" rel="noopener noreferrer">dataprotection.gov.sk</a></>, <>Die Aufsichtsbehörde Ihres Wohnsitzlandes</>] },
        ],
      },
      { id: 'p11', title: '11. Kontakt und Datenschutzbeauftragter', blocks: [] },
    ],
  },
}

export default function Privacy() {
  const { i18n } = useTranslation()
  const lang = (i18n.language || 'hu').split('-')[0]
  const c = CONTENT[lang] || CONTENT.hu

  return (
    <div className={styles.wrap}>
      <Helmet>
        <title>{c.pageTitle}</title>
        <meta name="description" content={c.metaDesc} />
      </Helmet>

      <div className={styles.hero}>
        <div className={styles.tag}>{c.tag}</div>
        <h1 className={styles.title}>{c.title}</h1>
        <div className={styles.meta}>{c.meta}</div>
      </div>

      <nav className={styles.toc}>
        <div className={styles.tocTitle}>{c.tocTitle}</div>
        <ol className={styles.tocList}>
          {c.sections.map(s => (
            <li key={s.id} className={styles.tocItem}>
              <a href={`#${s.id}`}>{s.title}</a>
            </li>
          ))}
        </ol>
      </nav>

      <div className={styles.highlight}>{c.intro}</div>

      {c.sections.map(s => (
        <div key={s.id} id={s.id} className={styles.section}>
          <h2 className={styles.sectionTitle}>{s.title}</h2>
          {renderBlocks(s.blocks)}
        </div>
      ))}

      <div className={styles.contact}>
        <div className={styles.contactTitle}>{c.contactTitle}</div>
        <div className={styles.contactLine}>{c.contactLine}</div>
      </div>
    </div>
  )
}
