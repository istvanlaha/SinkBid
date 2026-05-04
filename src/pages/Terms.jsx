import React from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './LegalPage.module.css'

const SECTIONS = [
  { id: 's1', title: '1. A Webhely és a SinkBid szerepe' },
  { id: 's2', title: '2. Regisztráció és fiókhozzáférés' },
  { id: 's3', title: '3. A fordított aukció folyamata' },
  { id: 's4', title: '4. Fizetési feltételek – Vásárlók' },
  { id: 's5', title: '5. Eladói regisztráció és feltételek' },
  { id: 's6', title: '6. Jutalék és kifizetési feltételek' },
  { id: 's7', title: '7. Fiókfelfüggesztés és megszüntetés' },
  { id: 's8', title: '8. Elállási jog és visszaküldés' },
  { id: 's9', title: '9. Szállítási feltételek' },
  { id: 's10', title: '10. Import/export korlátozások' },
  { id: 's11', title: '11. Szellemi tulajdon' },
  { id: 's12', title: '12. Felelősség kizárása' },
  { id: 's13', title: '13. Kártalanítás' },
  { id: 's14', title: '14. Vitarendezés és alkalmazandó jog' },
  { id: 's15', title: '15. Az ÁSZF módosítása' },
  { id: 's16', title: '16. Kapcsolat' },
]

const BID_STEPS = [
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
  ['90 001 EUR felett', '100 EUR'],
]

export default function Terms() {
  return (
    <div className={styles.wrap}>
      <Helmet>
        <title>Általános Szerződési Feltételek — SinkBid</title>
        <meta name="description" content="A SinkBid fordított aukciós platform Általános Szerződési Feltételei." />
      </Helmet>

      <div className={styles.hero}>
        <div className={styles.tag}>Jogi dokumentum</div>
        <h1 className={styles.title}>Általános Szerződési Feltételek</h1>
        <div className={styles.meta}>SinkBid s.r.o. · Hatálybalépés: 2026.01.01. · Verzió: 1.0</div>
      </div>

      <nav className={styles.toc}>
        <div className={styles.tocTitle}>Tartalomjegyzék</div>
        <ol className={styles.tocList}>
          {SECTIONS.map(s => (
            <li key={s.id} className={styles.tocItem}>
              <a href={`#${s.id}`}>{s.title}</a>
            </li>
          ))}
        </ol>
      </nav>

      <div className={styles.highlight}>
        A www.sinkbid.com weboldal (a továbbiakban: Webhely) a SinkBid s.r.o. tulajdonában és üzemeltetésében áll. A Webhely egy <strong>fordított aukció platformot</strong> biztosít, amelyen az eladók termékeket kínálnak eladásra csökkenő áras aukció formájában. A Webhely elérésével és használatával Ön elfogadja a jelen ÁSZF feltételeit.
      </div>

      <div id="s1" className={styles.section}>
        <h2 className={styles.sectionTitle}>1. A Webhely és a SinkBid szerepe</h2>
        <h3 className={styles.subTitle}>1.1 A platform leírása</h3>
        <p className={styles.para}>A SinkBid egy fordított aukció platform, amelyen az árak felülről lefelé csökkennek. Az eladók termékeket tesznek közzé induló áron, és a vásárlók betekintési díj befizetésével csatlakozhatnak az aukcióhoz. Minden egyes betekintési díj befizetése csökkenti a termék aktuális árát az aukció lépcső összegével.</p>
        <h3 className={styles.subTitle}>1.2 A SinkBid szerepe</h3>
        <p className={styles.para}>A SinkBid szerepe kizárólag arra korlátozódik, hogy a Webhelyet elérhetővé tegye és fenntartsa. A SinkBid közvetítőként működik, és nem ügynöke, megbízottja vagy képviselője semmilyen eladónak vagy vásárlónak. Az adásvétel közvetlenül a vásárló és az eladó között jön létre.</p>
        <p className={styles.para}>A SinkBid nem felelős:</p>
        <ul className={styles.list}>
          <li>a termékek tényleges értékéért, állapotáért, eredetiségéért</li>
          <li>az eladók vagy vásárlók által megadott információk pontosságáért</li>
          <li>az eladók vagy vásárlók cselekményeiért vagy mulasztásaiért</li>
          <li>a termékek szállításáért</li>
          <li>a vásárló és eladó között esetlegesen felmerülő vitákért</li>
        </ul>
        <h3 className={styles.subTitle}>1.3 Vitarendezés</h3>
        <p className={styles.para}>A SinkBid jogosult, de nem köteles közvetítői szolgáltatásokat nyújtani. Amennyiben a SinkBid saját belátása szerint közvetítői szolgáltatásokat nyújt, döntése végleges és minden félre kötelező, kivéve, ha illetékes bíróság ítéletet hoz.</p>
      </div>

      <div id="s2" className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Regisztráció és fiókhozzáférés</h2>
        <h3 className={styles.subTitle}>2.1 Regisztráció</h3>
        <p className={styles.para}>A Webhely teljes körű használatához regisztráció szükséges. A regisztráció során meg kell adni érvényes e-mail címét, nevét, szállítási és számlázási adatait, valamint egy jelszót.</p>
        <h3 className={styles.subTitle}>2.2 Jogosultság</h3>
        <p className={styles.para}>A Webhelyet kizárólag <strong>18 éves vagy idősebb személyek</strong> használhatják. A SinkBid fenntartja a jogot, hogy ellenőrizze a felhasználók korát, és törölje azon fiókokat, amelyek tulajdonosai nem felelnek meg a korhatár-követelménynek.</p>
        <h3 className={styles.subTitle}>2.3 Fiókvédelem</h3>
        <p className={styles.para}>A felhasználó felelős fiókja és jelszava bizalmas kezeléséért, valamint minden olyan tevékenységért, amely a fiókja alatt történik. Jogosulatlan hozzáférés esetén haladéktalanul értesítse a SinkBid-et: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a></p>
      </div>

      <div id="s3" className={styles.section}>
        <h2 className={styles.sectionTitle}>3. A fordított aukció folyamata</h2>
        <h3 className={styles.subTitle}>3.1 Az aukció működése</h3>
        <ol className={styles.list}>
          <li>Az eladó a terméket induló áron teszi közzé a platformon.</li>
          <li>A vásárló betekintési díj befizetésével lép be az aukcióba.</li>
          <li>Minden egyes befizetés csökkenti az aktuális árat az aukció lépcső összegével.</li>
          <li>Az aukció addig tart, amíg valamely vásárló él a „Megveszem most" opcióval.</li>
          <li>Nincs időkorlát — az aukció addig fut, amíg valaki megveszi a terméket.</li>
        </ol>
        <h3 className={styles.subTitle}>3.2 Betekintési díj és aukció lépcső</h3>
        <p className={styles.para}>A betekintési díj beleszámít a végső vételárba, és megegyezik az aukció lépcső összegével:</p>
        <table className={styles.table}>
          <thead>
            <tr><th>Aktuális ár</th><th>Lépcső / Betekintési díj</th></tr>
          </thead>
          <tbody>
            {BID_STEPS.map(([range, fee]) => (
              <tr key={range}><td>{range}</td><td>{fee}</td></tr>
            ))}
          </tbody>
        </table>
        <h3 className={styles.subTitle}>3.3 „Megveszem most" opció</h3>
        <p className={styles.para}>Ha a vásárló az aktuális áron meg kívánja vásárolni a terméket, a „Megveszem most" gombra kattintva kezdeményezheti a vásárlást. Ezt követően <strong>5 percen belül</strong> ki kell fizetnie a fennmaradó összeget. Az 5 perces időkorlát alatt az aukció szünetel, de nem zárul le. Ha a vásárló nem fizet, az aukció automatikusan folytatódik.</p>
        <h3 className={styles.subTitle}>3.4 Jogok a betekintési díj befizetése után</h3>
        <p className={styles.para}>Egyetlen betekintési díj befizetésével a vásárló jogot szerez arra, hogy a terméket az aktuális áron megvásárolja — még akkor is, ha az ár azóta tovább csökkent más vásárlók befizetései miatt. Ez a jog mindaddig fennáll, amíg az aukció le nem zárul.</p>
      </div>

      <div id="s4" className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Fizetési feltételek – Vásárlók</h2>
        <h3 className={styles.subTitle}>4.1 Fizetési kötelezettség</h3>
        <p className={styles.para}>A vásárló közvetlenül az eladónak fizeti a termék végső vételárát. A SinkBid kizárólag a betekintési díj beszedését végzi.</p>
        <h3 className={styles.subTitle}>4.2 Elfogadott fizetési módok</h3>
        <ul className={styles.list}><li>Bankkártya</li></ul>
        <h3 className={styles.subTitle}>4.3 A végső vételár összetevői</h3>
        <ul className={styles.list}>
          <li>Aktuális aukciós ár a „Megveszem most" gomb megnyomásának pillanatában</li>
          <li>Levonva: a vásárló által már befizetett betekintési díj</li>
          <li>Az ár tartalmazza az ÁFÁ-t és a szállítási költséget</li>
        </ul>
        <h3 className={styles.subTitle}>4.4 Nemfizetés következményei</h3>
        <p className={styles.para}>Ha a vásárló 5 percen belül nem teljesíti a fizetést, az aukció automatikusan folytatódik, és a befizetett betekintési díj nem kerül visszatérítésre. Szándékos visszaélés esetén a SinkBid jogosult a fiókot felfüggeszteni vagy törölni.</p>
      </div>

      <div id="s5" className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Eladói regisztráció és feltételek</h2>
        <h3 className={styles.subTitle}>5.1 Eladói regisztráció</h3>
        <p className={styles.para}>Az eladóként való regisztrációhoz szükséges adatok:</p>
        <ul className={styles.list}>
          <li>Teljes név vagy cégnév, székhely / lakcím</li>
          <li>Adószám (vállalkozások esetén), bankszámlaszám</li>
          <li>Érvényes e-mail cím és telefonszám</li>
          <li>Elfogadott személyazonosító okmány másolata</li>
        </ul>
        <h3 className={styles.subTitle}>5.2 Termékfeltöltési szabályok</h3>
        <ul className={styles.list}>
          <li>1–4 fotó a termékről (megfelelő minőségű, valósághű felvételek)</li>
          <li>Részletes leírás (maximum 1 000 karakter)</li>
          <li>Termékkategória kiválasztása</li>
          <li>Induló ár (bruttó összegben, ÁFÁ-val és szállítási költséggel együtt)</li>
          <li>Szállítási vállalások: földrajzi terület és határidő</li>
        </ul>
        <div className={styles.highlight}>Az ár tartalmaznia kell az ÁFÁ-t és a szállítási költséget is. Ezeket nem lehet külön felszámítani a vásárló felé.</div>
        <h3 className={styles.subTitle}>5.3 Az eladó felelőssége</h3>
        <ul className={styles.list}>
          <li>A termék pontos és valósághű leírásáért és képeiért</li>
          <li>A termék tulajdonjogáért és az értékesítési jogosultságért</li>
          <li>A meghatározott szállítási határidő betartásáért</li>
          <li>Az alkalmazandó adók és vámok megfizetéséért</li>
        </ul>
      </div>

      <div id="s6" className={styles.section}>
        <h2 className={styles.sectionTitle}>6. Jutalék és kifizetési feltételek – Eladók</h2>
        <h3 className={styles.subTitle}>6.1 A SinkBid jutaléka</h3>
        <div className={styles.highlight}>A SinkBid jutaléka minden esetben <strong>12%</strong>, amelyet a nettó eladási árból számítunk fel — a vételárra és a betekintési díjakra egyaránt.</div>
        <h3 className={styles.subTitle}>6.2 Számlázás</h3>
        <p className={styles.para}>Minden regisztrált eladó minden <strong>hétfőn</strong> számlát kap a jutalékról, amennyiben az előző héten volt legalább egy teljes egészében kifizetett értékesítés.</p>
        <h3 className={styles.subTitle}>6.3 Jutalék kifizetése</h3>
        <p className={styles.para}>A számlakézhezvételtől számított <strong>8 munkanapon belül</strong> az eladó köteles a jutalékot banki átutalással megfizetni. Elmulasztás esetén a SinkBid jogosult a fiókot felfüggeszteni és a követelést jogi úton érvényesíteni.</p>
        <h3 className={styles.subTitle}>6.4 Az eladó kifizetése</h3>
        <p className={styles.para}>A SinkBid a befizetés visszaigazolásától számított <strong>3 munkanapon belül</strong> utalja az összeget az eladó bankszámlájára, levonva a 12%-os jutalékot.</p>
      </div>

      <div id="s7" className={styles.section}>
        <h2 className={styles.sectionTitle}>7. Fiókfelfüggesztés és megszüntetés</h2>
        <h3 className={styles.subTitle}>7.1 Eladói felfüggesztés okai</h3>
        <ul className={styles.list}>
          <li>Valótlan vagy félrevezető termékleírás</li>
          <li>A szállítási határidő ismételt be nem tartása</li>
          <li>A jutalék megfizetésének elmulasztása</li>
          <li>Jogosulatlan termékek feltöltése (hamisított áruk, szerzői jogsértés)</li>
          <li>Visszaélés a platform rendszerével</li>
        </ul>
        <h3 className={styles.subTitle}>7.2 Felfüggesztés menete</h3>
        <p className={styles.para}>Felfüggesztés esetén a SinkBid írásban értesíti az eladót, és 14 napos határidőt biztosít a probléma rendezésére. Ha az eladó határidőn belül nem orvosolja a problémát, a fiók véglegesen törölhető.</p>
      </div>

      <div id="s8" className={styles.section}>
        <h2 className={styles.sectionTitle}>8. Elállási jog és visszaküldés</h2>
        <h3 className={styles.subTitle}>8.1 EU-s fogyasztói elállási jog</h3>
        <p className={styles.para}>Az EU-ban tartózkodó fogyasztók a termék kézhezvételétől számított <strong>14 napon belül</strong> indoklás nélkül elállhatnak a megrendeléstől. Az elálláshoz írásban kell értesíteni a SinkBid-et: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a></p>
        <p className={styles.para}>Elállás esetén az eladó a visszaérkezett termék kézhezvételétől számított 14 napon belül köteles visszatéríteni a vételárat. A visszaküldés költségét a vásárló viseli.</p>
        <h3 className={styles.subTitle}>8.2 Az elállási jog kizárása</h3>
        <ul className={styles.list}>
          <li>A vásárló specifikációi szerint készített, személyre szabott termékek</li>
          <li>Gyorsan romló vagy lejáró termékek</li>
          <li>Egészségügyi okokból visszaküldésre alkalmatlan, felbontott csomagolású termékek</li>
          <li>Lezárt szoftverek vagy digitális tartalmak, amelyek csomagolását felbontották</li>
        </ul>
        <h3 className={styles.subTitle}>8.3 Betekintési díj visszatérítése</h3>
        <p className={styles.para}>A betekintési díj visszatérítésére kizárólag az alábbi esetekben kerülhet sor:</p>
        <ul className={styles.list}>
          <li>Technikai hiba esetén, amely megakadályozta a részvételt</li>
          <li>Ha a termék adatai lényegesen eltérnek a valóságtól</li>
          <li>Ha az eladó törli a terméket az aukció megkezdése előtt</li>
        </ul>
      </div>

      <div id="s9" className={styles.section}>
        <h2 className={styles.sectionTitle}>9. Szállítási feltételek</h2>
        <h3 className={styles.subTitle}>9.1 Az eladó szállítási kötelezettsége</h3>
        <p className={styles.para}>Az eladó köteles a kifizetés visszaigazolásától számított, a termék adatlapján megjelölt határidőn belül feladni a terméket. Alapértelmezett határidő: <strong>5 munkanap</strong>.</p>
        <h3 className={styles.subTitle}>9.2 Szállítási módok</h3>
        <ul className={styles.list}>
          <li>Futárszolgálattal, az eladó szervezi (ár tartalmazza a szállítási költséget)</li>
          <li>Személyes átadás (nagy értékű vagy nagy méretű tárgyak esetén)</li>
          <li>Vevő szervezi a szállítást (saját szállítmányozóval, saját költségre)</li>
        </ul>
        <h3 className={styles.subTitle}>9.3 Szállítási biztosítás</h3>
        <p className={styles.para}>Ha a termék értéke meghaladja az <strong>500 EUR-t</strong>, az eladó köteles szállítási biztosítást kötni a termék értékének megfelelő összegre.</p>
      </div>

      <div id="s10" className={styles.section}>
        <h2 className={styles.sectionTitle}>10. Import/export korlátozások</h2>
        <p className={styles.para}>Egyes termékek esetében kulturális, vám- és egyéb engedélyekre lehet szükség az export vagy import engedélyezéséhez. A vásárló felelős az összes alkalmazandó vám, illeték és adó megfizetéséért.</p>
      </div>

      <div id="s11" className={styles.section}>
        <h2 className={styles.sectionTitle}>11. Szellemi tulajdon és szerzői jogok</h2>
        <p className={styles.para}>A Webhely tartalma, dizájnja, logói, védjegyei és egyéb szellemi tulajdona a SinkBid s.r.o. kizárólagos tulajdona. A Webhely tartalmának engedély nélküli felhasználása, másolása vagy terjesztése tilos.</p>
        <p className={styles.para}>Az eladó felelős az általa feltöltött képek és leírások szerzői jogi tisztaságáért. A tartalom feltöltésével az eladó nem kizárólagos, visszavonhatatlan licencet ad a SinkBid-nek a tartalom platform céljaira történő felhasználására.</p>
      </div>

      <div id="s12" className={styles.section}>
        <h2 className={styles.sectionTitle}>12. Felelősség kizárása</h2>
        <p className={styles.para}>A SinkBid a Webhelyet jelenlegi állapotban biztosítja, és nem vállal garanciát a Webhely folyamatos elérhetőségére, hibamentességére, a termékek állapotára, értékére vagy eredetiségére.</p>
        <p className={styles.para}>A SinkBid teljes felelőssége bármely felhasználóval szemben semmilyen esetben sem haladhatja meg az adott tranzakcióban befizetett betekintési díj összegét.</p>
      </div>

      <div id="s13" className={styles.section}>
        <h2 className={styles.sectionTitle}>13. Kártalanítás</h2>
        <p className={styles.para}>Minden felhasználó beleegyezik abba, hogy megvédi, kártalanítja és mentesíti a SinkBid s.r.o.-t minden olyan követeléssel, felelősséggel és költséggel szemben, amelyek a Webhely használatából, a jelen ÁSZF megsértéséből, vagy a felhasználó által közzétett tartalmakból erednek.</p>
      </div>

      <div id="s14" className={styles.section}>
        <h2 className={styles.sectionTitle}>14. Vitarendezés és alkalmazandó jog</h2>
        <h3 className={styles.subTitle}>14.1 Panaszkezelés</h3>
        <p className={styles.para}>Panasz esetén forduljon elsőként a SinkBid ügyfélszolgálatához: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a> — válaszidő: 5 munkanapon belül.</p>
        <h3 className={styles.subTitle}>14.2 Vitarendezés</h3>
        <ul className={styles.list}>
          <li>Fogyasztói viták: a fogyasztó lakóhelye szerint illetékes békéltető testület előtt</li>
          <li>Egyéb viták: a SinkBid székhelye szerint illetékes bíróság előtt</li>
        </ul>
        <h3 className={styles.subTitle}>14.3 Alkalmazandó jog</h3>
        <p className={styles.para}>A jelen ÁSZF-re és az abból eredő vitákra <strong>Szlovákia joga</strong> az irányadó.</p>
      </div>

      <div id="s15" className={styles.section}>
        <h2 className={styles.sectionTitle}>15. Az ÁSZF módosítása</h2>
        <p className={styles.para}>A SinkBid fenntartja a jogot, hogy a jelen ÁSZF-et bármikor módosítsa. A módosított ÁSZF a Webhelyen való közzétételének napján lép hatályba. Lényeges módosítások esetén a SinkBid e-mailben értesíti a regisztrált felhasználókat, legalább <strong>15 nappal</strong> a hatálybalépés előtt.</p>
      </div>

      <div id="s16" className={styles.section}>
        <h2 className={styles.sectionTitle}>16. Kapcsolat</h2>
      </div>

      <div className={styles.contact}>
        <div className={styles.contactTitle}>SinkBid s.r.o.</div>
        <div className={styles.contactLine}>
          E-mail: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a><br />
          Weboldal: <a href="https://www.sinkbid.com">www.sinkbid.com</a><br />
          Hatálybalépés: 2026.01.01.
        </div>
      </div>
    </div>
  )
}
