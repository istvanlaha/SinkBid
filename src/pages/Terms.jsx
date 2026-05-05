import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import styles from './LegalPage.module.css'

const BID_STEPS_ROWS = [
  ['100 – 1 000 EUR', '5 EUR'],
  ['1 001 – 10 000 EUR', '10 EUR'],
  ['10 001 – 20 000 EUR', '20 EUR'],
  ['20 001 – 30 000 EUR', '30 EUR'],
  ['30 001 – 40 000 EUR', '40 EUR'],
  ['40 001 – 50 000 EUR', '50 EUR'],
  ['50 001 – 60 000 EUR', '60 EUR'],
  ['60 001 – 70 000 EUR', '70 EUR'],
  ['70 001 – 80 000 EUR', '80 EUR'],
  ['80 001 – 90 000 EUR', '90 EUR'],
]

function renderBlocks(blocks, above90k, tableH) {
  return blocks.map((b, i) => {
    switch (b.type) {
      case 'h3': return <h3 key={i} className={styles.subTitle}>{b.text}</h3>
      case 'p': return <p key={i} className={styles.para}>{b.text}</p>
      case 'ul': return <ul key={i} className={styles.list}>{b.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
      case 'ol': return <ol key={i} className={styles.list}>{b.items.map((it, j) => <li key={j}>{it}</li>)}</ol>
      case 'highlight': return <div key={i} className={styles.highlight}>{b.text}</div>
      case 'bidtable': return (
        <table key={i} className={styles.table}>
          <thead><tr><th>{tableH[0]}</th><th>{tableH[1]}</th></tr></thead>
          <tbody>
            {BID_STEPS_ROWS.map(([range, fee]) => <tr key={range}><td>{range}</td><td>{fee}</td></tr>)}
            <tr><td>{above90k}</td><td>100 EUR</td></tr>
          </tbody>
        </table>
      )
      default: return null
    }
  })
}

const CONTENT = {
  hu: {
    pageTitle: 'Általános Szerződési Feltételek — SinkBid',
    metaDesc: 'A SinkBid fordított aukciós platform Általános Szerződési Feltételei.',
    tag: 'Jogi dokumentum',
    title: 'Általános Szerződési Feltételek',
    meta: 'SinkBid s.r.o. · Hatálybalépés: 2026.01.01. · Verzió: 1.0',
    tocTitle: 'Tartalomjegyzék',
    tableH: ['Aktuális ár', 'Lépcső / Betekintési díj'],
    above90k: '90 001 EUR felett',
    intro: <>A www.sinkbid.com weboldal (a továbbiakban: Webhely) a SinkBid s.r.o. tulajdonában és üzemeltetésében áll. A Webhely egy <strong>fordított aukció platformot</strong> biztosít, amelyen az eladók termékeket kínálnak eladásra csökkenő áras aukció formájában. A Webhely elérésével és használatával Ön elfogadja a jelen ÁSZF feltételeit.</>,
    contactTitle: 'SinkBid s.r.o.',
    contactEffective: 'Hatálybalépés: 2026.01.01.',
    sections: [
      {
        id: 's1', title: '1. A Webhely és a SinkBid szerepe',
        blocks: [
          { type: 'h3', text: '1.1 A platform leírása' },
          { type: 'p', text: 'A SinkBid egy fordított aukció platform, amelyen az árak felülről lefelé csökkennek. Az eladók termékeket tesznek közzé induló áron, és a vásárlók betekintési díj befizetésével csatlakozhatnak az aukcióhoz. Minden egyes betekintési díj befizetése csökkenti a termék aktuális árát az aukció lépcső összegével.' },
          { type: 'h3', text: '1.2 A SinkBid szerepe' },
          { type: 'p', text: 'A SinkBid szerepe kizárólag arra korlátozódik, hogy a Webhelyet elérhetővé tegye és fenntartsa. A SinkBid közvetítőként működik, és nem ügynöke, megbízottja vagy képviselője semmilyen eladónak vagy vásárlónak. Az adásvétel közvetlenül a vásárló és az eladó között jön létre.' },
          { type: 'p', text: 'A SinkBid nem felelős:' },
          { type: 'ul', items: ['a termékek tényleges értékéért, állapotáért, eredetiségéért', 'az eladók vagy vásárlók által megadott információk pontosságáért', 'az eladók vagy vásárlók cselekményeiért vagy mulasztásaiért', 'a termékek szállításáért', 'a vásárló és eladó között esetlegesen felmerülő vitákért'] },
          { type: 'h3', text: '1.3 Vitarendezés' },
          { type: 'p', text: 'A SinkBid jogosult, de nem köteles közvetítői szolgáltatásokat nyújtani. Amennyiben a SinkBid saját belátása szerint közvetítői szolgáltatásokat nyújt, döntése végleges és minden félre kötelező, kivéve, ha illetékes bíróság ítéletet hoz.' },
        ],
      },
      {
        id: 's2', title: '2. Regisztráció és fiókhozzáférés',
        blocks: [
          { type: 'h3', text: '2.1 Regisztráció' },
          { type: 'p', text: 'A Webhely teljes körű használatához regisztráció szükséges. A regisztráció során meg kell adni érvényes e-mail címét, nevét, szállítási és számlázási adatait, valamint egy jelszót.' },
          { type: 'h3', text: '2.2 Jogosultság' },
          { type: 'p', text: <><strong>18 éves vagy idősebb személyek</strong> használhatják kizárólag a Webhelyet. A SinkBid fenntartja a jogot, hogy ellenőrizze a felhasználók korát, és törölje azon fiókokat, amelyek tulajdonosai nem felelnek meg a korhatár-követelménynek.</> },
          { type: 'h3', text: '2.3 Fiókvédelem' },
          { type: 'p', text: <>A felhasználó felelős fiókja és jelszava bizalmas kezeléséért, valamint minden olyan tevékenységért, amely a fiókja alatt történik. Jogosulatlan hozzáférés esetén haladéktalanul értesítse a SinkBid-et: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a></> },
        ],
      },
      {
        id: 's3', title: '3. A fordított aukció folyamata',
        blocks: [
          { type: 'h3', text: '3.1 Az aukció működése' },
          { type: 'ol', items: ['Az eladó a terméket induló áron teszi közzé a platformon.', 'A vásárló betekintési díj befizetésével lép be az aukcióba.', 'Minden egyes befizetés csökkenti az aktuális árat az aukció lépcső összegével.', 'Az aukció addig tart, amíg valamely vásárló él a „Megveszem most" opcióval.', 'Nincs időkorlát — az aukció addig fut, amíg valaki megveszi a terméket.'] },
          { type: 'h3', text: '3.2 Betekintési díj és aukció lépcső' },
          { type: 'p', text: 'A betekintési díj beleszámít a végső vételárba, és megegyezik az aukció lépcső összegével:' },
          { type: 'bidtable' },
          { type: 'h3', text: '3.3 „Megveszem most" opció' },
          { type: 'p', text: <>Ha a vásárló az aktuális áron meg kívánja vásárolni a terméket, a „Megveszem most" gombra kattintva kezdeményezheti a vásárlást. Ezt követően <strong>5 percen belül</strong> ki kell fizetnie a fennmaradó összeget. Az 5 perces időkorlát alatt az aukció szünetel, de nem zárul le. Ha a vásárló nem fizet, az aukció automatikusan folytatódik.</> },
          { type: 'h3', text: '3.4 Jogok a betekintési díj befizetése után' },
          { type: 'p', text: 'Egyetlen betekintési díj befizetésével a vásárló jogot szerez arra, hogy a terméket az aktuális áron megvásárolja — még akkor is, ha az ár azóta tovább csökkent más vásárlók befizetései miatt. Ez a jog mindaddig fennáll, amíg az aukció le nem zárul.' },
        ],
      },
      {
        id: 's4', title: '4. Fizetési feltételek – Vásárlók',
        blocks: [
          { type: 'h3', text: '4.1 Fizetési kötelezettség' },
          { type: 'p', text: 'A vásárló közvetlenül az eladónak fizeti a termék végső vételárát. A SinkBid kizárólag a betekintési díj beszedését végzi.' },
          { type: 'h3', text: '4.2 Elfogadott fizetési módok' },
          { type: 'ul', items: ['Bankkártya'] },
          { type: 'h3', text: '4.3 A végső vételár összetevői' },
          { type: 'ul', items: ['Aktuális aukciós ár a „Megveszem most" gomb megnyomásának pillanatában', 'Levonva: a vásárló által már befizetett betekintési díj', 'Az ár tartalmazza az ÁFÁ-t és a szállítási költséget'] },
          { type: 'h3', text: '4.4 Nemfizetés következményei' },
          { type: 'p', text: 'Ha a vásárló 5 percen belül nem teljesíti a fizetést, az aukció automatikusan folytatódik, és a befizetett betekintési díj nem kerül visszatérítésre. Szándékos visszaélés esetén a SinkBid jogosult a fiókot felfüggeszteni vagy törölni.' },
        ],
      },
      {
        id: 's5', title: '5. Eladói regisztráció és feltételek',
        blocks: [
          { type: 'h3', text: '5.1 Eladói regisztráció' },
          { type: 'p', text: 'Az eladóként való regisztrációhoz szükséges adatok:' },
          { type: 'ul', items: ['Teljes név vagy cégnév, székhely / lakcím', 'Adószám (vállalkozások esetén), bankszámlaszám', 'Érvényes e-mail cím és telefonszám', 'Elfogadott személyazonosító okmány másolata'] },
          { type: 'h3', text: '5.2 Termékfeltöltési szabályok' },
          { type: 'ul', items: ['1–4 fotó a termékről (megfelelő minőségű, valósághű felvételek)', 'Részletes leírás (maximum 1 000 karakter)', 'Termékkategória kiválasztása', 'Induló ár (bruttó összegben, ÁFÁ-val és szállítási költséggel együtt)', 'Szállítási vállalások: földrajzi terület és határidő'] },
          { type: 'highlight', text: 'Az ár tartalmaznia kell az ÁFÁ-t és a szállítási költséget is. Ezeket nem lehet külön felszámítani a vásárló felé.' },
          { type: 'h3', text: '5.3 Az eladó felelőssége' },
          { type: 'ul', items: ['A termék pontos és valósághű leírásáért és képeiért', 'A termék tulajdonjogáért és az értékesítési jogosultságért', 'A meghatározott szállítási határidő betartásáért', 'Az alkalmazandó adók és vámok megfizetéséért'] },
        ],
      },
      {
        id: 's6', title: '6. Jutalék és kifizetési feltételek – Eladók',
        blocks: [
          { type: 'h3', text: '6.1 A SinkBid jutaléka' },
          { type: 'highlight', text: <>A SinkBid jutaléka minden esetben <strong>12%</strong>, amelyet a nettó eladási árból számítunk fel — a vételárra és a betekintési díjakra egyaránt.</> },
          { type: 'h3', text: '6.2 Számlázás' },
          { type: 'p', text: <>Minden regisztrált eladó minden <strong>hétfőn</strong> számlát kap a jutalékról, amennyiben az előző héten volt legalább egy teljes egészében kifizetett értékesítés.</> },
          { type: 'h3', text: '6.3 Jutalék kifizetése' },
          { type: 'p', text: <>A számlakézhezvételtől számított <strong>8 munkanapon belül</strong> az eladó köteles a jutalékot banki átutalással megfizetni. Elmulasztás esetén a SinkBid jogosult a fiókot felfüggeszteni és a követelést jogi úton érvényesíteni.</> },
          { type: 'h3', text: '6.4 Az eladó kifizetése' },
          { type: 'p', text: <>A SinkBid a befizetés visszaigazolásától számított <strong>3 munkanapon belül</strong> utalja az összeget az eladó bankszámlájára, levonva a 12%-os jutalékot.</> },
        ],
      },
      {
        id: 's7', title: '7. Fiókfelfüggesztés és megszüntetés',
        blocks: [
          { type: 'h3', text: '7.1 Eladói felfüggesztés okai' },
          { type: 'ul', items: ['Valótlan vagy félrevezető termékleírás', 'A szállítási határidő ismételt be nem tartása', 'A jutalék megfizetésének elmulasztása', 'Jogosulatlan termékek feltöltése (hamisított áruk, szerzői jogsértés)', 'Visszaélés a platform rendszerével'] },
          { type: 'h3', text: '7.2 Felfüggesztés menete' },
          { type: 'p', text: 'Felfüggesztés esetén a SinkBid írásban értesíti az eladót, és 14 napos határidőt biztosít a probléma rendezésére. Ha az eladó határidőn belül nem orvosolja a problémát, a fiók véglegesen törölhető.' },
        ],
      },
      {
        id: 's8', title: '8. Elállási jog és visszaküldés',
        blocks: [
          { type: 'h3', text: '8.1 EU-s fogyasztói elállási jog' },
          { type: 'p', text: <>Az EU-ban tartózkodó fogyasztók a termék kézhezvételétől számított <strong>14 napon belül</strong> indoklás nélkül elállhatnak a megrendeléstől. Az elálláshoz írásban kell értesíteni a SinkBid-et: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a></> },
          { type: 'p', text: 'Elállás esetén az eladó a visszaérkezett termék kézhezvételétől számított 14 napon belül köteles visszatéríteni a vételárat. A visszaküldés költségét a vásárló viseli.' },
          { type: 'h3', text: '8.2 Az elállási jog kizárása' },
          { type: 'ul', items: ['A vásárló specifikációi szerint készített, személyre szabott termékek', 'Gyorsan romló vagy lejáró termékek', 'Egészségügyi okokból visszaküldésre alkalmatlan, felbontott csomagolású termékek', 'Lezárt szoftverek vagy digitális tartalmak, amelyek csomagolását felbontották'] },
          { type: 'h3', text: '8.3 Betekintési díj visszatérítése' },
          { type: 'p', text: 'A betekintési díj visszatérítésére kizárólag az alábbi esetekben kerülhet sor:' },
          { type: 'ul', items: ['Technikai hiba esetén, amely megakadályozta a részvételt', 'Ha a termék adatai lényegesen eltérnek a valóságtól', 'Ha az eladó törli a terméket az aukció megkezdése előtt'] },
        ],
      },
      {
        id: 's9', title: '9. Szállítási feltételek',
        blocks: [
          { type: 'h3', text: '9.1 Az eladó szállítási kötelezettsége' },
          { type: 'p', text: <>Az eladó köteles a kifizetés visszaigazolásától számított, a termék adatlapján megjelölt határidőn belül feladni a terméket. Alapértelmezett határidő: <strong>5 munkanap</strong>.</> },
          { type: 'h3', text: '9.2 Szállítási módok' },
          { type: 'ul', items: ['Futárszolgálattal, az eladó szervezi (ár tartalmazza a szállítási költséget)', 'Személyes átadás (nagy értékű vagy nagy méretű tárgyak esetén)', 'Vevő szervezi a szállítást (saját szállítmányozóval, saját költségre)'] },
          { type: 'h3', text: '9.3 Szállítási biztosítás' },
          { type: 'p', text: <>Ha a termék értéke meghaladja az <strong>500 EUR-t</strong>, az eladó köteles szállítási biztosítást kötni a termék értékének megfelelő összegre.</> },
        ],
      },
      {
        id: 's10', title: '10. Import/export korlátozások',
        blocks: [
          { type: 'p', text: 'Egyes termékek esetében kulturális, vám- és egyéb engedélyekre lehet szükség az export vagy import engedélyezéséhez. A vásárló felelős az összes alkalmazandó vám, illeték és adó megfizetéséért.' },
        ],
      },
      {
        id: 's11', title: '11. Szellemi tulajdon és szerzői jogok',
        blocks: [
          { type: 'p', text: 'A Webhely tartalma, dizájnja, logói, védjegyei és egyéb szellemi tulajdona a SinkBid s.r.o. kizárólagos tulajdona. A Webhely tartalmának engedély nélküli felhasználása, másolása vagy terjesztése tilos.' },
          { type: 'p', text: 'Az eladó felelős az általa feltöltött képek és leírások szerzői jogi tisztaságáért. A tartalom feltöltésével az eladó nem kizárólagos, visszavonhatatlan licencet ad a SinkBid-nek a tartalom platform céljaira történő felhasználására.' },
        ],
      },
      {
        id: 's12', title: '12. Felelősség kizárása',
        blocks: [
          { type: 'p', text: 'A SinkBid a Webhelyet jelenlegi állapotban biztosítja, és nem vállal garanciát a Webhely folyamatos elérhetőségére, hibamentességére, a termékek állapotára, értékére vagy eredetiségére.' },
          { type: 'p', text: 'A SinkBid teljes felelőssége bármely felhasználóval szemben semmilyen esetben sem haladhatja meg az adott tranzakcióban befizetett betekintési díj összegét.' },
        ],
      },
      {
        id: 's13', title: '13. Kártalanítás',
        blocks: [
          { type: 'p', text: 'Minden felhasználó beleegyezik abba, hogy megvédi, kártalanítja és mentesíti a SinkBid s.r.o.-t minden olyan követeléssel, felelősséggel és költséggel szemben, amelyek a Webhely használatából, a jelen ÁSZF megsértéséből, vagy a felhasználó által közzétett tartalmakból erednek.' },
        ],
      },
      {
        id: 's14', title: '14. Vitarendezés és alkalmazandó jog',
        blocks: [
          { type: 'h3', text: '14.1 Panaszkezelés' },
          { type: 'p', text: <>Panasz esetén forduljon elsőként a SinkBid ügyfélszolgálatához: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a> — válaszidő: 5 munkanapon belül.</> },
          { type: 'h3', text: '14.2 Vitarendezés' },
          { type: 'ul', items: ['Fogyasztói viták: a fogyasztó lakóhelye szerint illetékes békéltető testület előtt', 'Egyéb viták: a SinkBid székhelye szerint illetékes bíróság előtt'] },
          { type: 'h3', text: '14.3 Alkalmazandó jog' },
          { type: 'p', text: <><strong>Szlovákia joga</strong> az irányadó a jelen ÁSZF-re és az abból eredő vitákra.</> },
        ],
      },
      {
        id: 's15', title: '15. Az ÁSZF módosítása',
        blocks: [
          { type: 'p', text: <>A SinkBid fenntartja a jogot, hogy a jelen ÁSZF-et bármikor módosítsa. A módosított ÁSZF a Webhelyen való közzétételének napján lép hatályba. Lényeges módosítások esetén a SinkBid e-mailben értesíti a regisztrált felhasználókat, legalább <strong>15 nappal</strong> a hatálybalépés előtt.</> },
        ],
      },
      { id: 's16', title: '16. Kapcsolat', blocks: [] },
    ],
  },

  en: {
    pageTitle: 'General Terms and Conditions — SinkBid',
    metaDesc: 'General Terms and Conditions of the SinkBid reverse price auction platform.',
    tag: 'Legal document',
    title: 'General Terms and Conditions',
    meta: 'SinkBid s.r.o. · Effective date: 1 January 2026 · Version: 1.0',
    tocTitle: 'Table of Contents',
    tableH: ['Current price', 'Step / Entry fee'],
    above90k: 'Above €90,000',
    intro: <>The website www.sinkbid.com (hereinafter: the "Website") is owned and operated by SinkBid s.r.o. The Website provides a <strong>reverse price auction platform</strong> on which sellers offer items for sale through a descending-price auction mechanism. By accessing and using the Website, you agree to be bound by these General Terms and Conditions.</>,
    contactTitle: 'SinkBid s.r.o.',
    contactEffective: 'Effective date: 1 January 2026',
    sections: [
      {
        id: 's1', title: '1. The Website and the role of SinkBid',
        blocks: [
          { type: 'h3', text: '1.1 Description of the platform' },
          { type: 'p', text: 'SinkBid is a reverse price auction platform on which prices decrease progressively. Sellers list items at a starting price, and buyers may join the auction by paying an entry fee. Each entry fee payment reduces the current price of the item by the applicable bid step.' },
          { type: 'h3', text: '1.2 The role of SinkBid' },
          { type: 'p', text: 'SinkBid\'s role is strictly limited to making the Website available and maintaining it. SinkBid acts as an intermediary and is not an agent, representative or proxy of any seller or buyer. The sale contract is concluded directly between the buyer and the seller.' },
          { type: 'p', text: 'SinkBid is not responsible for:' },
          { type: 'ul', items: ['the actual value, condition or authenticity of items', 'the accuracy of information provided by sellers or buyers', 'the acts or omissions of sellers or buyers', 'the delivery of items', 'disputes arising between buyers and sellers'] },
          { type: 'h3', text: '1.3 Dispute resolution' },
          { type: 'p', text: 'SinkBid is entitled but not obliged to provide mediation services. Where SinkBid, at its sole discretion, provides mediation, its decision shall be final and binding on all parties, unless overruled by a court of competent jurisdiction.' },
        ],
      },
      {
        id: 's2', title: '2. Registration and account access',
        blocks: [
          { type: 'h3', text: '2.1 Registration' },
          { type: 'p', text: 'Full use of the Website requires registration. During registration, users must provide a valid email address, name, shipping and billing details, and a password.' },
          { type: 'h3', text: '2.2 Eligibility' },
          { type: 'p', text: <>The Website may be used exclusively by persons aged <strong>18 or over</strong>. SinkBid reserves the right to verify users\' ages and to delete accounts whose holders do not meet the age requirement.</> },
          { type: 'h3', text: '2.3 Account security' },
          { type: 'p', text: <>The user is responsible for maintaining the confidentiality of their account and password, and for all activity conducted under their account. In the event of unauthorised access, please notify SinkBid immediately at: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a></> },
        ],
      },
      {
        id: 's3', title: '3. The reverse price auction process',
        blocks: [
          { type: 'h3', text: '3.1 How the auction works' },
          { type: 'ol', items: ['The seller lists the item on the platform at a starting price.', 'The buyer joins the auction by paying an entry fee.', 'Each payment reduces the current price by the applicable bid step.', 'The auction continues until a buyer exercises the "Buy Now" option.', 'There is no time limit — the auction runs until a buyer purchases the item.'] },
          { type: 'h3', text: '3.2 Entry fee and bid step' },
          { type: 'p', text: 'The entry fee is counted toward the final purchase price and equals the applicable bid step:' },
          { type: 'bidtable' },
          { type: 'h3', text: '3.3 "Buy Now" option' },
          { type: 'p', text: <>If the buyer wishes to purchase the item at the current price, they may initiate the purchase by clicking the "Buy Now" button. The buyer must then complete payment of the outstanding amount within <strong>5 minutes</strong>. During the 5-minute window the auction is paused but not closed. If the buyer does not pay, the auction resumes automatically.</> },
          { type: 'h3', text: '3.4 Rights following payment of the entry fee' },
          { type: 'p', text: 'By paying a single entry fee, the buyer acquires the right to purchase the item at the price prevailing at the time of payment — even if the price has since decreased as a result of other buyers\' entry fee payments. This right subsists until the auction closes.' },
        ],
      },
      {
        id: 's4', title: '4. Payment terms — Buyers',
        blocks: [
          { type: 'h3', text: '4.1 Payment obligation' },
          { type: 'p', text: 'The buyer pays the final purchase price directly to the seller. SinkBid collects entry fees only.' },
          { type: 'h3', text: '4.2 Accepted payment methods' },
          { type: 'ul', items: ['Bank card'] },
          { type: 'h3', text: '4.3 Composition of the final purchase price' },
          { type: 'ul', items: ['Current auction price at the moment the "Buy Now" button is pressed', 'Less: the entry fee already paid by the buyer', 'The price is inclusive of VAT and shipping costs'] },
          { type: 'h3', text: '4.4 Consequences of non-payment' },
          { type: 'p', text: 'If the buyer fails to complete payment within 5 minutes, the auction resumes automatically and the entry fee paid is non-refundable. In cases of intentional abuse, SinkBid is entitled to suspend or delete the account.' },
        ],
      },
      {
        id: 's5', title: '5. Seller registration and terms',
        blocks: [
          { type: 'h3', text: '5.1 Seller registration' },
          { type: 'p', text: 'The following information is required for seller registration:' },
          { type: 'ul', items: ['Full name or company name, registered address', 'Tax number (for businesses), bank account number', 'Valid email address and telephone number', 'Copy of an accepted government-issued identity document'] },
          { type: 'h3', text: '5.2 Listing requirements' },
          { type: 'ul', items: ['1–4 photographs of the item (adequate quality, accurate representations)', 'Detailed description (maximum 1,000 characters)', 'Category selection', 'Starting price (gross amount, inclusive of VAT and shipping costs)', 'Shipping commitments: geographic scope and delivery deadline'] },
          { type: 'highlight', text: 'The price must be inclusive of VAT and shipping costs. These may not be charged separately to the buyer.' },
          { type: 'h3', text: '5.3 Seller\'s responsibilities' },
          { type: 'ul', items: ['Accuracy and truthfulness of the item description and images', 'Title to the item and right to sell', 'Compliance with the agreed shipping deadline', 'Payment of all applicable taxes and duties'] },
        ],
      },
      {
        id: 's6', title: '6. Commission and payment terms — Sellers',
        blocks: [
          { type: 'h3', text: '6.1 SinkBid\'s commission' },
          { type: 'highlight', text: <>SinkBid\'s commission is <strong>12%</strong> in all cases, charged on the net sale price — applicable to both the purchase price and the entry fees.</> },
          { type: 'h3', text: '6.2 Invoicing' },
          { type: 'p', text: <>Every registered seller receives a commission invoice every <strong>Monday</strong>, provided that at least one fully paid sale occurred during the previous week.</> },
          { type: 'h3', text: '6.3 Payment of commission' },
          { type: 'p', text: <>The seller is required to remit the commission by bank transfer within <strong>8 business days</strong> of receipt of the invoice. In the event of default, SinkBid is entitled to suspend the account and to enforce the claim through legal proceedings.</> },
          { type: 'h3', text: '6.4 Payment to the seller' },
          { type: 'p', text: <>SinkBid transfers the amount to the seller\'s bank account within <strong>3 business days</strong> of payment confirmation, after deducting the 12% commission.</> },
        ],
      },
      {
        id: 's7', title: '7. Account suspension and termination',
        blocks: [
          { type: 'h3', text: '7.1 Grounds for seller suspension' },
          { type: 'ul', items: ['Inaccurate or misleading item description', 'Repeated failure to meet shipping deadlines', 'Failure to pay commission', 'Listing unauthorised items (counterfeit goods, copyright infringement)', 'Abuse of the platform\'s systems'] },
          { type: 'h3', text: '7.2 Suspension procedure' },
          { type: 'p', text: 'In the event of suspension, SinkBid notifies the seller in writing and allows 14 days to remedy the issue. If the seller fails to do so within the deadline, the account may be permanently deleted.' },
        ],
      },
      {
        id: 's8', title: '8. Right of withdrawal and returns',
        blocks: [
          { type: 'h3', text: '8.1 EU consumer right of withdrawal' },
          { type: 'p', text: <>Consumers residing in the EU may withdraw from the order without giving reasons within <strong>14 days</strong> of receipt of the item. Withdrawal must be communicated to SinkBid in writing at: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a></> },
          { type: 'p', text: 'Upon withdrawal, the seller is required to refund the purchase price within 14 days of receiving the returned item. The cost of return shipping is borne by the buyer.' },
          { type: 'h3', text: '8.2 Exclusion of the right of withdrawal' },
          { type: 'ul', items: ['Items manufactured to the buyer\'s specifications or clearly personalised', 'Perishable or short-dated goods', 'Items unsealed for health or hygiene reasons that are not suitable for return', 'Sealed software or digital content whose packaging has been opened'] },
          { type: 'h3', text: '8.3 Refund of entry fee' },
          { type: 'p', text: 'Entry fees may be refunded only in the following circumstances:' },
          { type: 'ul', items: ['A technical error that prevented participation', 'The item description materially differs from the actual condition of the item', 'The seller cancels the listing before the auction commences'] },
        ],
      },
      {
        id: 's9', title: '9. Shipping terms',
        blocks: [
          { type: 'h3', text: '9.1 Seller\'s shipping obligation' },
          { type: 'p', text: <>The seller is required to dispatch the item within the deadline stated on the product listing, counted from payment confirmation. Default deadline: <strong>5 business days</strong>.</> },
          { type: 'h3', text: '9.2 Shipping methods' },
          { type: 'ul', items: ['By courier, organised by the seller (shipping cost included in price)', 'Personal handover (for high-value or oversized items)', 'Buyer arranges shipping using their own carrier, at the buyer\'s expense'] },
          { type: 'h3', text: '9.3 Shipping insurance' },
          { type: 'p', text: <>Where the item\'s value exceeds <strong>€500</strong>, the seller is required to take out shipping insurance for the full declared value of the item.</> },
        ],
      },
      {
        id: 's10', title: '10. Import and export restrictions',
        blocks: [
          { type: 'p', text: 'Certain items may require cultural property permits, customs clearance or other authorisations for export or import. The buyer is solely responsible for payment of all applicable customs duties, levies and taxes.' },
        ],
      },
      {
        id: 's11', title: '11. Intellectual property and copyright',
        blocks: [
          { type: 'p', text: 'The content, design, logos, trade marks and other intellectual property of the Website are the exclusive property of SinkBid s.r.o. Unauthorised use, reproduction or distribution of the Website\'s content is prohibited.' },
          { type: 'p', text: 'The seller is responsible for ensuring that all images and descriptions uploaded are free of third-party intellectual property rights. By uploading content, the seller grants SinkBid a non-exclusive, irrevocable licence to use the content for platform purposes.' },
        ],
      },
      {
        id: 's12', title: '12. Disclaimer of liability',
        blocks: [
          { type: 'p', text: 'SinkBid provides the Website on an "as is" basis and makes no warranty as to the uninterrupted availability or error-free operation of the Website, nor as to the condition, value or authenticity of any item.' },
          { type: 'p', text: 'SinkBid\'s total liability to any user shall in no event exceed the amount of the entry fee paid in the relevant transaction.' },
        ],
      },
      {
        id: 's13', title: '13. Indemnification',
        blocks: [
          { type: 'p', text: 'Each user agrees to defend, indemnify and hold harmless SinkBid s.r.o. against all claims, liabilities and costs arising from their use of the Website, any breach of these General Terms and Conditions, or any content published by the user.' },
        ],
      },
      {
        id: 's14', title: '14. Dispute resolution and governing law',
        blocks: [
          { type: 'h3', text: '14.1 Complaints' },
          { type: 'p', text: <>For complaints, please contact SinkBid customer service in the first instance: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a> — response time: within 5 business days.</> },
          { type: 'h3', text: '14.2 Dispute resolution' },
          { type: 'ul', items: ['Consumer disputes: before the consumer arbitration board competent for the consumer\'s place of residence', 'Other disputes: before the court competent for SinkBid\'s registered seat'] },
          { type: 'h3', text: '14.3 Governing law' },
          { type: 'p', text: <>These General Terms and Conditions and any disputes arising therefrom are governed by the <strong>law of the Slovak Republic</strong>.</> },
        ],
      },
      {
        id: 's15', title: '15. Amendments to these General Terms and Conditions',
        blocks: [
          { type: 'p', text: <>SinkBid reserves the right to amend these General Terms and Conditions at any time. Amended terms take effect on the date of their publication on the Website. In the case of material amendments, SinkBid will notify registered users by email at least <strong>15 days</strong> before the amendment takes effect.</> },
        ],
      },
      { id: 's16', title: '16. Contact', blocks: [] },
    ],
  },

  de: {
    pageTitle: 'Allgemeine Geschäftsbedingungen — SinkBid',
    metaDesc: 'Allgemeine Geschäftsbedingungen der SinkBid-Rückwärtsauktionsplattform.',
    tag: 'Rechtsdokument',
    title: 'Allgemeine Geschäftsbedingungen',
    meta: 'SinkBid s.r.o. · Gültig ab: 01.01.2026 · Version: 1.0',
    tocTitle: 'Inhaltsverzeichnis',
    tableH: ['Aktueller Preis', 'Schritt / Teilnahmegebühr'],
    above90k: 'Über 90.000 EUR',
    intro: <>Die Website www.sinkbid.com (nachfolgend „Website") steht im Eigentum der SinkBid s.r.o. und wird von ihr betrieben. Die Website stellt eine <strong>Rückwärtsauktionsplattform</strong> bereit, auf der Verkäufer Artikel im Wege einer Preissenkungsauktion zum Verkauf anbieten. Mit dem Zugriff auf die Website und deren Nutzung erklären Sie sich mit diesen Allgemeinen Geschäftsbedingungen einverstanden.</>,
    contactTitle: 'SinkBid s.r.o.',
    contactEffective: 'Gültig ab: 01.01.2026',
    sections: [
      {
        id: 's1', title: '1. Die Website und die Rolle von SinkBid',
        blocks: [
          { type: 'h3', text: '1.1 Beschreibung der Plattform' },
          { type: 'p', text: 'SinkBid ist eine Rückwärtsauktionsplattform, auf der die Preise schrittweise sinken. Verkäufer stellen Artikel zu einem Startpreis ein, und Käufer können der Auktion durch Zahlung einer Teilnahmegebühr beitreten. Jede gezahlte Teilnahmegebühr reduziert den aktuellen Preis des Artikels um den geltenden Bietschritt.' },
          { type: 'h3', text: '1.2 Die Rolle von SinkBid' },
          { type: 'p', text: 'Die Rolle von SinkBid beschränkt sich ausschließlich darauf, die Website bereitzustellen und zu betreiben. SinkBid handelt als Vermittler und ist kein Vertreter, Beauftragter oder Bevollmächtigter eines Verkäufers oder Käufers. Der Kaufvertrag kommt direkt zwischen Käufer und Verkäufer zustande.' },
          { type: 'p', text: 'SinkBid ist nicht verantwortlich für:' },
          { type: 'ul', items: ['den tatsächlichen Wert, Zustand oder die Echtheit von Artikeln', 'die Richtigkeit der von Verkäufern oder Käufern bereitgestellten Informationen', 'das Handeln oder Unterlassen von Verkäufern oder Käufern', 'die Lieferung von Artikeln', 'etwaige Streitigkeiten zwischen Käufer und Verkäufer'] },
          { type: 'h3', text: '1.3 Streitbeilegung' },
          { type: 'p', text: 'SinkBid ist berechtigt, aber nicht verpflichtet, Vermittlungsdienstleistungen anzubieten. Bietet SinkBid nach eigenem Ermessen Vermittlungsdienstleistungen an, ist seine Entscheidung endgültig und für alle Parteien bindend, sofern kein zuständiges Gericht anderweitig entscheidet.' },
        ],
      },
      {
        id: 's2', title: '2. Registrierung und Kontozugang',
        blocks: [
          { type: 'h3', text: '2.1 Registrierung' },
          { type: 'p', text: 'Für die vollständige Nutzung der Website ist eine Registrierung erforderlich. Bei der Registrierung sind eine gültige E-Mail-Adresse, Name, Liefer- und Rechnungsadresse sowie ein Passwort anzugeben.' },
          { type: 'h3', text: '2.2 Nutzungsberechtigung' },
          { type: 'p', text: <>Die Website darf ausschließlich von Personen ab <strong>18 Jahren</strong> genutzt werden. SinkBid behält sich das Recht vor, das Alter der Nutzer zu überprüfen und Konten zu löschen, deren Inhaber die Altersanforderung nicht erfüllen.</> },
          { type: 'h3', text: '2.3 Kontosicherheit' },
          { type: 'p', text: <>Der Nutzer ist für die Vertraulichkeit seines Kontos und Passworts sowie für alle unter seinem Konto durchgeführten Aktivitäten verantwortlich. Bei unbefugtem Zugriff informieren Sie SinkBid bitte unverzüglich unter: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a></> },
        ],
      },
      {
        id: 's3', title: '3. Der Rückwärtsauktionsprozess',
        blocks: [
          { type: 'h3', text: '3.1 Funktionsweise der Auktion' },
          { type: 'ol', items: ['Der Verkäufer stellt den Artikel zu einem Startpreis auf der Plattform ein.', 'Der Käufer tritt der Auktion durch Zahlung einer Teilnahmegebühr bei.', 'Jede Zahlung reduziert den aktuellen Preis um den geltenden Bietschritt.', 'Die Auktion läuft, bis ein Käufer die Option „Jetzt kaufen" ausübt.', 'Es gibt keine Zeitbegrenzung — die Auktion läuft, bis ein Käufer den Artikel erwirbt.'] },
          { type: 'h3', text: '3.2 Teilnahmegebühr und Bietschritt' },
          { type: 'p', text: 'Die Teilnahmegebühr wird auf den endgültigen Kaufpreis angerechnet und entspricht dem geltenden Bietschritt:' },
          { type: 'bidtable' },
          { type: 'h3', text: '3.3 Option „Jetzt kaufen"' },
          { type: 'p', text: <>Möchte der Käufer den Artikel zum aktuellen Preis erwerben, kann er den Kauf durch Klicken auf die Schaltfläche „Jetzt kaufen" einleiten. Der Käufer muss den Restbetrag dann innerhalb von <strong>5 Minuten</strong> begleichen. Während des 5-Minuten-Fensters ist die Auktion pausiert, aber nicht geschlossen. Erfolgt keine Zahlung, wird die Auktion automatisch fortgesetzt.</> },
          { type: 'h3', text: '3.4 Rechte nach Zahlung der Teilnahmegebühr' },
          { type: 'p', text: 'Durch Zahlung einer einzigen Teilnahmegebühr erwirbt der Käufer das Recht, den Artikel zum zum Zeitpunkt der Zahlung geltenden Preis zu kaufen — auch wenn der Preis inzwischen durch die Zahlungen anderer Käufer weiter gesunken ist. Dieses Recht besteht bis zum Abschluss der Auktion.' },
        ],
      },
      {
        id: 's4', title: '4. Zahlungsbedingungen – Käufer',
        blocks: [
          { type: 'h3', text: '4.1 Zahlungsverpflichtung' },
          { type: 'p', text: 'Der Käufer zahlt den endgültigen Kaufpreis direkt an den Verkäufer. SinkBid erhebt ausschließlich die Teilnahmegebühren.' },
          { type: 'h3', text: '4.2 Akzeptierte Zahlungsmethoden' },
          { type: 'ul', items: ['Bankkarte'] },
          { type: 'h3', text: '4.3 Zusammensetzung des endgültigen Kaufpreises' },
          { type: 'ul', items: ['Aktueller Auktionspreis zum Zeitpunkt des Klickens auf „Jetzt kaufen"', 'Abzüglich: der bereits vom Käufer gezahlten Teilnahmegebühr', 'Der Preis ist inkl. MwSt. und Versandkosten'] },
          { type: 'h3', text: '4.4 Folgen der Nichtzahlung' },
          { type: 'p', text: 'Leistet der Käufer nicht innerhalb von 5 Minuten Zahlung, wird die Auktion automatisch fortgesetzt und die gezahlte Teilnahmegebühr wird nicht erstattet. Bei vorsätzlichem Missbrauch ist SinkBid berechtigt, das Konto zu sperren oder zu löschen.' },
        ],
      },
      {
        id: 's5', title: '5. Verkäuferregistrierung und -bedingungen',
        blocks: [
          { type: 'h3', text: '5.1 Verkäuferregistrierung' },
          { type: 'p', text: 'Für die Registrierung als Verkäufer sind folgende Angaben erforderlich:' },
          { type: 'ul', items: ['Vollständiger Name oder Firmenname, Anschrift', 'Steuernummer (für Unternehmen), Bankkontonummer', 'Gültige E-Mail-Adresse und Telefonnummer', 'Kopie eines akzeptierten amtlichen Lichtbildausweises'] },
          { type: 'h3', text: '5.2 Einstellungsanforderungen' },
          { type: 'ul', items: ['1–4 Fotografien des Artikels (ausreichende Qualität, realitätstreue Aufnahmen)', 'Ausführliche Beschreibung (max. 1.000 Zeichen)', 'Kategorieauswahl', 'Startpreis (Bruttobetrag, inkl. MwSt. und Versandkosten)', 'Versandzusagen: geografischer Bereich und Lieferfrist'] },
          { type: 'highlight', text: 'Der Preis muss inkl. MwSt. und Versandkosten sein. Diese dürfen dem Käufer nicht gesondert berechnet werden.' },
          { type: 'h3', text: '5.3 Pflichten des Verkäufers' },
          { type: 'ul', items: ['Richtigkeit und Wahrhaftigkeit der Artikelbeschreibung und Abbildungen', 'Eigentum am Artikel und Verfügungsbefugnis', 'Einhaltung der vereinbarten Lieferfrist', 'Entrichtung aller anwendbaren Steuern und Abgaben'] },
        ],
      },
      {
        id: 's6', title: '6. Provision und Zahlungsbedingungen – Verkäufer',
        blocks: [
          { type: 'h3', text: '6.1 Provision von SinkBid' },
          { type: 'highlight', text: <>Die Provision von SinkBid beträgt in allen Fällen <strong>12 %</strong>, berechnet auf den Netto-Verkaufspreis — sowohl auf den Kaufpreis als auch auf die Teilnahmegebühren.</> },
          { type: 'h3', text: '6.2 Rechnungsstellung' },
          { type: 'p', text: <>Jeder registrierte Verkäufer erhält jeden <strong>Montag</strong> eine Provisionsrechnung, sofern in der Vorwoche mindestens ein vollständig bezahlter Verkauf stattgefunden hat.</> },
          { type: 'h3', text: '6.3 Zahlung der Provision' },
          { type: 'p', text: <>Der Verkäufer ist verpflichtet, die Provision innerhalb von <strong>8 Werktagen</strong> nach Erhalt der Rechnung per Banküberweisung zu begleichen. Im Verzugsfall ist SinkBid berechtigt, das Konto zu sperren und die Forderung auf dem Rechtsweg durchzusetzen.</> },
          { type: 'h3', text: '6.4 Auszahlung an den Verkäufer' },
          { type: 'p', text: <>SinkBid überweist den Betrag innerhalb von <strong>3 Werktagen</strong> nach Zahlungsbestätigung auf das Bankkonto des Verkäufers, abzüglich der 12%igen Provision.</> },
        ],
      },
      {
        id: 's7', title: '7. Kontosperrung und -kündigung',
        blocks: [
          { type: 'h3', text: '7.1 Gründe für eine Verkäufersperrung' },
          { type: 'ul', items: ['Unrichtige oder irreführende Artikelbeschreibung', 'Wiederholte Nichteinhaltung der Lieferfristen', 'Nichtzahlung der Provision', 'Einstellen nicht zugelassener Artikel (Fälschungen, Urheberrechtsverletzungen)', 'Missbrauch der Plattformsysteme'] },
          { type: 'h3', text: '7.2 Sperrverfahren' },
          { type: 'p', text: 'Im Falle einer Sperrung benachrichtigt SinkBid den Verkäufer schriftlich und räumt ihm 14 Tage zur Behebung des Problems ein. Wird das Problem nicht fristgerecht behoben, kann das Konto dauerhaft gelöscht werden.' },
        ],
      },
      {
        id: 's8', title: '8. Widerrufsrecht und Rücksendung',
        blocks: [
          { type: 'h3', text: '8.1 EU-Verbraucherwiderrufsrecht' },
          { type: 'p', text: <>In der EU ansässige Verbraucher können den Auftrag innerhalb von <strong>14 Tagen</strong> nach Erhalt des Artikels ohne Angabe von Gründen widerrufen. Der Widerruf ist SinkBid schriftlich mitzuteilen: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a></> },
          { type: 'p', text: 'Im Falle des Widerrufs ist der Verkäufer verpflichtet, den Kaufpreis innerhalb von 14 Tagen nach Erhalt des zurückgesandten Artikels zu erstatten. Die Rücksendekosten trägt der Käufer.' },
          { type: 'h3', text: '8.2 Ausschluss des Widerrufsrechts' },
          { type: 'ul', items: ['Nach Käufervorgaben gefertigte oder eindeutig personalisierte Artikel', 'Verderbliche oder kurzfristig ablaufende Waren', 'Aus hygienischen Gründen nicht zur Rücksendung geeignete Artikel mit geöffneter Versiegelung', 'Versiegelte Software oder digitale Inhalte, deren Verpackung geöffnet wurde'] },
          { type: 'h3', text: '8.3 Erstattung der Teilnahmegebühr' },
          { type: 'p', text: 'Die Teilnahmegebühr wird ausschließlich in folgenden Fällen erstattet:' },
          { type: 'ul', items: ['Ein technischer Fehler, der die Teilnahme verhindert hat', 'Die Artikelbeschreibung weicht wesentlich vom tatsächlichen Zustand ab', 'Der Verkäufer storniert den Artikel vor Auktionsbeginn'] },
        ],
      },
      {
        id: 's9', title: '9. Versandbedingungen',
        blocks: [
          { type: 'h3', text: '9.1 Versandpflicht des Verkäufers' },
          { type: 'p', text: <>Der Verkäufer ist verpflichtet, den Artikel innerhalb der auf der Produktseite angegebenen Frist ab Zahlungsbestätigung zu versenden. Standardfrist: <strong>5 Werktage</strong>.</> },
          { type: 'h3', text: '9.2 Versandmethoden' },
          { type: 'ul', items: ['Per Kurier, organisiert durch den Verkäufer (Versandkosten im Preis enthalten)', 'Persönliche Übergabe (für hochwertige oder großformatige Artikel)', 'Käufer organisiert den Versand mit eigenem Spediteur auf eigene Kosten'] },
          { type: 'h3', text: '9.3 Transportversicherung' },
          { type: 'p', text: <>Übersteigt der Wert des Artikels <strong>500 €</strong>, ist der Verkäufer verpflichtet, eine Transportversicherung über den vollen deklarierten Artikelwert abzuschließen.</> },
        ],
      },
      {
        id: 's10', title: '10. Import- und Exportbeschränkungen',
        blocks: [
          { type: 'p', text: 'Bei bestimmten Artikeln können Kulturgüterausfuhrgenehmigungen, Zollabfertigungen oder sonstige Genehmigungen für die Ein- oder Ausfuhr erforderlich sein. Der Käufer ist allein verantwortlich für die Zahlung aller anfallenden Zölle, Abgaben und Steuern.' },
        ],
      },
      {
        id: 's11', title: '11. Geistiges Eigentum und Urheberrecht',
        blocks: [
          { type: 'p', text: 'Die Inhalte, das Design, Logos, Markenzeichen und sonstigen Schutzrechte der Website sind ausschließliches Eigentum der SinkBid s.r.o. Die unbefugte Nutzung, Vervielfältigung oder Verbreitung von Website-Inhalten ist untersagt.' },
          { type: 'p', text: 'Der Verkäufer ist dafür verantwortlich, dass alle hochgeladenen Bilder und Beschreibungen frei von Rechten Dritter sind. Durch das Hochladen von Inhalten erteilt der Verkäufer SinkBid eine nicht ausschließliche, unwiderrufliche Lizenz zur Nutzung der Inhalte für Plattformzwecke.' },
        ],
      },
      {
        id: 's12', title: '12. Haftungsausschluss',
        blocks: [
          { type: 'p', text: 'SinkBid stellt die Website im gegenwärtigen Zustand bereit und übernimmt keine Gewähr für die ununterbrochene Verfügbarkeit oder fehlerfreie Funktion der Website sowie für Zustand, Wert oder Echtheit von Artikeln.' },
          { type: 'p', text: 'Die Gesamthaftung von SinkBid gegenüber einem Nutzer übersteigt in keinem Fall den Betrag der im jeweiligen Vorgang gezahlten Teilnahmegebühr.' },
        ],
      },
      {
        id: 's13', title: '13. Schadloshaltung',
        blocks: [
          { type: 'p', text: 'Jeder Nutzer erklärt sich damit einverstanden, SinkBid s.r.o. von allen Ansprüchen, Verbindlichkeiten und Kosten freizustellen und schadlos zu halten, die sich aus der Nutzung der Website, einem Verstoß gegen diese AGB oder den vom Nutzer veröffentlichten Inhalten ergeben.' },
        ],
      },
      {
        id: 's14', title: '14. Streitbeilegung und anwendbares Recht',
        blocks: [
          { type: 'h3', text: '14.1 Beschwerden' },
          { type: 'p', text: <>Richten Sie Beschwerden zunächst an den Kundendienst von SinkBid: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a> — Antwortzeit: innerhalb von 5 Werktagen.</> },
          { type: 'h3', text: '14.2 Streitbeilegung' },
          { type: 'ul', items: ['Verbraucherstreitigkeiten: vor der für den Wohnort des Verbrauchers zuständigen Schlichtungsstelle', 'Sonstige Streitigkeiten: vor dem für den Sitz von SinkBid zuständigen Gericht'] },
          { type: 'h3', text: '14.3 Anwendbares Recht' },
          { type: 'p', text: <>Diese AGB und etwaige daraus entstehende Streitigkeiten unterliegen dem <strong>Recht der Slowakischen Republik</strong>.</> },
        ],
      },
      {
        id: 's15', title: '15. Änderung der AGB',
        blocks: [
          { type: 'p', text: <>SinkBid behält sich das Recht vor, diese AGB jederzeit zu ändern. Geänderte AGB treten mit dem Tag ihrer Veröffentlichung auf der Website in Kraft. Bei wesentlichen Änderungen benachrichtigt SinkBid die registrierten Nutzer per E-Mail mindestens <strong>15 Tage</strong> vor dem Inkrafttreten der Änderung.</> },
        ],
      },
      { id: 's16', title: '16. Kontakt', blocks: [] },
    ],
  },
}

export default function Terms() {
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
          {renderBlocks(s.blocks, c.above90k, c.tableH)}
        </div>
      ))}

      <div className={styles.contact}>
        <div className={styles.contactTitle}>{c.contactTitle}</div>
        <div className={styles.contactLine}>
          E-mail: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a><br />
          Website: <a href="https://www.sinkbid.com">www.sinkbid.com</a><br />
          {c.contactEffective}
        </div>
      </div>
    </div>
  )
}
