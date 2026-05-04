import React from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './LegalPage.module.css'

const SECTIONS = [
  { id: 'p1', title: '1. A gyűjtött információk' },
  { id: 'p2', title: '2. Gyermekek magánélete' },
  { id: 'p3', title: '3. Sütik (cookie) használata' },
  { id: 'p4', title: '4. Személyes adatok felhasználása' },
  { id: 'p5', title: '5. Adatok megosztása' },
  { id: 'p6', title: '6. Nemzetközi adattovábbítások' },
  { id: 'p7', title: '7. Az Ön jogai és adathozzáférés' },
  { id: 'p8', title: '8. Biztonság' },
  { id: 'p9', title: '9. Harmadik feles weboldalak' },
  { id: 'p10', title: '10. Hozzájárulás visszavonása és panasztétel' },
  { id: 'p11', title: '11. Kapcsolat és adatvédelmi tisztviselő' },
]

export default function Privacy() {
  return (
    <div className={styles.wrap}>
      <Helmet>
        <title>Adatvédelmi Irányelvek — SinkBid</title>
        <meta name="description" content="A SinkBid adatvédelmi irányelvei és GDPR tájékoztatója." />
      </Helmet>

      <div className={styles.hero}>
        <div className={styles.tag}>Jogi dokumentum</div>
        <h1 className={styles.title}>Adatvédelmi Irányelvek</h1>
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
        Ez az Adatvédelmi Szabályzat leírja, hogy a SinkBid s.r.o. hogyan gyűjti, kezeli, védi és osztja meg az Ön személyes adatait. Az EU 2016/679 Általános Adatvédelmi Rendeletének (GDPR) alkalmazásában a SinkBid s.r.o. az Ön személyes adatainak <strong>kezelője</strong>. A Webhely elérésével Ön kifejezetten elfogadja a jelen Adatvédelmi Szabályzat feltételeit.
      </div>

      <div id="p1" className={styles.section}>
        <h2 className={styles.sectionTitle}>1. A gyűjtött információk</h2>
        <h3 className={styles.subTitle}>Az Ön által megadott információk</h3>
        <ul className={styles.list}>
          <li><strong>Fiók létrehozása:</strong> neve, szállítási és számlázási cím, telefonszám, e-mail cím, fizetési adatok</li>
          <li><strong>Aukció és vásárlás:</strong> hitelkártya- vagy egyéb fizetési adatok, szállítási adatok</li>
          <li><strong>Eladói regisztráció:</strong> cégnév, adószám, bankszámlaszám, kapcsolattartási adatok</li>
          <li><strong>Vélemények és értékelések:</strong> keresztnév és tranzakció adatok (nyilvánosan látható)</li>
        </ul>
        <h3 className={styles.subTitle}>Automatikusan gyűjtött információk</h3>
        <ul className={styles.list}>
          <li>Böngésző típusa és verziója, operációs rendszer, IP-cím, eszköztípus</li>
          <li>Megtekintett oldalak, kattintások, letöltési hibák, oldalon töltött idő</li>
          <li>Aukció-adatok: megtekintett termékek, belépések, árszintek</li>
          <li>Helyszíni adatok mobilfelhasználók esetén, kizárólag hozzájárulással</li>
        </ul>
      </div>

      <div id="p2" className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Gyermekek magánélete</h2>
        <p className={styles.para}>A SinkBid weboldalt nem úgy terveztük, hogy 18 év alatti személyek számára vonzó legyen. A felhasználóknak <strong>18 évesnek vagy idősebbnek</strong> kell lenniük a regisztrációhoz. Ha tudomásunkra jut, hogy 18 év alatti személy adatait kezeljük, haladéktalanul töröljük azokat.</p>
      </div>

      <div id="p3" className={styles.section}>
        <h2 className={styles.sectionTitle}>3. Sütik (cookie) használata</h2>
        <h3 className={styles.subTitle}>Süti típusok</h3>
        <ul className={styles.list}>
          <li><strong>Szükséges sütik:</strong> a weboldal alapvető működéséhez nélkülözhetetlenek (bejelentkezési állapot, biztonság) — hozzájárulás nélkül is használjuk</li>
          <li><strong>Teljesítmény sütik:</strong> információkat gyűjtenek a weboldal használatáról (pl. Google Analytics) — csak hozzájárulással</li>
          <li><strong>Funkcionalitási sütik:</strong> megjegyzik az Ön beállításait (nyelv, pénznem) — csak hozzájárulással</li>
          <li><strong>Célzott / reklámsütik:</strong> az Ön érdeklődési körének megfelelő hirdetések megjelenítéséhez — csak hozzájárulással</li>
        </ul>
        <h3 className={styles.subTitle}>Süti lejárat</h3>
        <ul className={styles.list}>
          <li><strong>Munkamenet sütik:</strong> a böngésző bezárásakor törlődnek</li>
          <li><strong>Tartós sütik:</strong> előre meghatározott ideig maradnak (pl. 30 nap, 1 év)</li>
        </ul>
        <p className={styles.para}>Süti-preferenciáit bármikor módosíthatja a böngésző beállításaiban. Egyes sütik letiltása befolyásolhatja a weboldal működését.</p>
      </div>

      <div id="p4" className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Személyes adatok felhasználása</h2>
        <h3 className={styles.subTitle}>Szerződés teljesítése alapján</h3>
        <ul className={styles.list}>
          <li>A fordított aukció folyamat lebonyolítása (betekintési díj kezelése, árcsökkentés)</li>
          <li>Termékfelvásárlás és értékesítés feldolgozása</li>
          <li>Számlák elkészítése, eladói kifizetések és jutalék számlázása</li>
          <li>Ügyfélfiók létrehozása és kezelése</li>
        </ul>
        <h3 className={styles.subTitle}>Jogos érdek alapján</h3>
        <ul className={styles.list}>
          <li>Csalás, visszaélések és jogosulatlan hozzáférés megelőzése</li>
          <li>Termékeink és szolgáltatásaink fejlesztése és javítása</li>
          <li>A Webhely adminisztrálása, beleértve a hibaelhárítást</li>
        </ul>
        <h3 className={styles.subTitle}>Hozzájárulás alapján (visszavonható)</h3>
        <ul className={styles.list}>
          <li>Marketingkommunikáció küldése saját termékekről és szolgáltatásokról</li>
          <li>Hirdetések személyre szabása korábbi keresésen és vásárláson alapulva</li>
          <li>Promóciók és felmérések lebonyolítása</li>
        </ul>
        <h3 className={styles.subTitle}>Jogi kötelezettség alapján</h3>
        <ul className={styles.list}>
          <li>Adóhatósági megkeresések teljesítéséhez</li>
          <li>Pénzügyi nyilvántartási kötelezettségek teljesítéséhez</li>
        </ul>
      </div>

      <div id="p5" className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Adatok megosztása</h2>
        <p className={styles.para}>A SinkBid <strong>nem adja el</strong> és nem osztja meg a személyes adatokat a jelen Adatvédelmi Szabályzatban leírtakon kívül, illetve az Ön előzetes hozzájárulása nélkül.</p>
        <h3 className={styles.subTitle}>Tranzakciós megosztások</h3>
        <ul className={styles.list}>
          <li><strong>Az eladóval:</strong> vásárló neve, szállítási cím — kizárólag a tranzakcióhoz</li>
          <li><strong>A vásárlóval:</strong> eladó neve, elérhetősége és szállítási adatok</li>
          <li><strong>Fizetési feldolgozóval:</strong> a tranzakció pénzügyi adatai</li>
          <li><strong>Szállítmányozási partnerekkel:</strong> szállításhoz szükséges adatok</li>
        </ul>
        <h3 className={styles.subTitle}>Gondosan kiválasztott szolgáltatók</h3>
        <ul className={styles.list}>
          <li>IT és hálózati szolgáltatók, ügyfélszolgálati partnerek</li>
          <li>Számviteli és pénzügyi tanácsadók, jogi szolgálatok</li>
          <li>Marketing segítség — kizárólag az Ön beleegyezésével</li>
        </ul>
      </div>

      <div id="p6" className={styles.section}>
        <h2 className={styles.sectionTitle}>6. Nemzetközi adattovábbítások</h2>
        <p className={styles.para}>Az Öntől gyűjtött személyes adatok az <strong>Európai Unióban</strong> található szervereinken tárolódnak (Websupport, s.r.o., Karadžičova 12, 821 08 Bratislava, Szlovákia). Amennyiben adatokat továbbítunk az EU-n kívülre, ezt kizárólag az Európai Bizottság által jóváhagyott Általános Szerződési Feltételek alapján tesszük.</p>
      </div>

      <div id="p7" className={styles.section}>
        <h2 className={styles.sectionTitle}>7. Az Ön jogai és adathozzáférés</h2>
        <h3 className={styles.subTitle}>GDPR szerinti jogai</h3>
        <ul className={styles.list}>
          <li><strong>Hozzáférési jog:</strong> jogosult megismerni, hogy milyen adatokat kezelünk Önről</li>
          <li><strong>Helyesbítéshez való jog:</strong> kérhet pontatlan adatai helyesbítését</li>
          <li><strong>Törléshez való jog (elfeledtetés):</strong> bizonyos feltételek mellett kérheti adatai törlését</li>
          <li><strong>Adatkezelés korlátozásához való jog</strong></li>
          <li><strong>Adathordozhatósághoz való jog:</strong> kérheti adatai más adatkezelő részére történő továbbítását</li>
          <li><strong>Tiltakozáshoz való jog:</strong> tiltakozhat adatai kezelése ellen, ha az jogos érdeken alapul</li>
          <li><strong>Hozzájárulás visszavonása:</strong> a hozzájáruláson alapuló adatkezelést bármikor visszavonhatja</li>
        </ul>
        <p className={styles.para}>Kérelmek bejelentéséhez írjon: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a> — válaszidő: 30 napon belül.</p>
        <h3 className={styles.subTitle}>Adatmegőrzési idő</h3>
        <table className={styles.table}>
          <thead><tr><th>Adattípus</th><th>Megőrzési idő</th></tr></thead>
          <tbody>
            <tr><td>Fiókadatok</td><td>Fiók törlése után legfeljebb 3 évig</td></tr>
            <tr><td>Tranzakciós adatok</td><td>8 évig (számviteli kötelezettség)</td></tr>
            <tr><td>Ügyfélszolgálati levelezések</td><td>3 évig</td></tr>
            <tr><td>Marketingadatok</td><td>Hozzájárulás visszavonásáig / 2 év inaktivitás</td></tr>
          </tbody>
        </table>
      </div>

      <div id="p8" className={styles.section}>
        <h2 className={styles.sectionTitle}>8. Biztonság</h2>
        <p className={styles.para}>Fizikai, elektronikus és adminisztratív biztonsági intézkedéseket alkalmazunk az adatok védelme érdekében:</p>
        <ul className={styles.list}>
          <li>SSL/TLS titkosítás minden adattovábbítás során</li>
          <li>Kétfaktoros hitelesítés lehetősége</li>
          <li>Rendszeres biztonsági auditok</li>
          <li>Hitelkártya-adatok PCI DSS szabványnak megfelelő feldolgozáson keresztül</li>
          <li>Korlátozott hozzáférés a személyes adatokhoz — csak jogosult munkavállalók</li>
        </ul>
        <p className={styles.para}>Adatvédelmi incidens esetén a SinkBid köteles a hatóságokat <strong>72 órán belül</strong> értesíteni. Incidens esetén haladéktalanul értesítsen minket: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a></p>
      </div>

      <div id="p9" className={styles.section}>
        <h2 className={styles.sectionTitle}>9. Harmadik feles weboldalak</h2>
        <p className={styles.para}>Weboldalunk harmadik feles weboldalakra mutató hivatkozásokat tartalmazhat. Ezeket a weboldalakat nem vizsgáljuk felül, és nem vállalunk felelősséget azok tartalmáért vagy adatvédelmi gyakorlataiért. Javasoljuk, hogy olvassa el az ilyen weboldalak adatvédelmi szabályzatait.</p>
      </div>

      <div id="p10" className={styles.section}>
        <h2 className={styles.sectionTitle}>10. Hozzájárulás visszavonása és panasztétel</h2>
        <p className={styles.para}>Hozzájárulását bármikor visszavonhatja e-mailben: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a></p>
        <p className={styles.para}>Ha úgy érzékeli, hogy adatkezelésünk megsérti az alkalmazandó adatvédelmi törvényeket, panaszt tehet a felügyeleti hatóságnál:</p>
        <ul className={styles.list}>
          <li><strong>Magyarország:</strong> Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH) — <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer">www.naih.hu</a></li>
          <li><strong>Szlovákia:</strong> Úrad pre ochranu osobných údajov — <a href="https://dataprotection.gov.sk" target="_blank" rel="noopener noreferrer">dataprotection.gov.sk</a></li>
          <li><strong>Európai szinten:</strong> az Ön lakóhelye szerinti adatvédelmi hatóságnál</li>
        </ul>
      </div>

      <div id="p11" className={styles.section}>
        <h2 className={styles.sectionTitle}>11. Kapcsolat és adatvédelmi tisztviselő</h2>
      </div>

      <div className={styles.contact}>
        <div className={styles.contactTitle}>SinkBid s.r.o. — Adatvédelmi kapcsolat</div>
        <div className={styles.contactLine}>
          Adatvédelmi e-mail: <a href="mailto:support@sinkbid.com">support@sinkbid.com</a><br />
          Weboldal: <a href="https://www.sinkbid.com">www.sinkbid.com</a><br />
          Hatálybalépés: 2026.01.01.
        </div>
      </div>
    </div>
  )
}
