import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './SellerGuide.module.css'

const GENERAL_RULES = [
  'Minimális induló ár: 200 EUR',
  '1–8 valós fotó szükséges a termékről (nem stock kép)',
  'Az eladó felelős a tárgy jogszerű eredetéért és értékesítési jogosultságáért',
  'Az ár tartalmazza az ÁFÁ-t és a szállítási költséget — ezek nem számíthatók fel külön',
  'A termék leírása pontos, valósághű és részletes legyen',
]

const CATEGORIES = [
  {
    id: 'orak',
    label: 'Karórák',
    icon: '⌚',
    guides: [
      {
        title: 'Karórák',
        accept: [
          'Vintage órák (1980 előtti) — csak férfi modellek, min. 200 EUR',
          'Prémium órák (1980-tól napjainkig), min. 200 EUR',
          'Exkluzív órák (Rolex, Patek Philippe, Audemars Piguet), min. 1 000 EUR',
          'Hiteles, teljes, kiváló állapotú tárgyak',
          'Új órákat csak profi eladóktól fogadunk el',
          '500 EUR alatti értéknél nincs lehetőség tartalékárra',
        ],
        brands: 'Rolex, Omega, Patek Philippe, Audemars Piguet, Seiko (Vintage és Grand Seiko), Cartier, Tudor — búvárórák, kronográfok, limitált kiadások',
        required: 'Márka, modell, referencia szám, sorozatszám, gyártási év/időszak, szerkezet (automata/kézi/quartz), tok anyaga és átmérő (mm), szíj anyaga, doboz/papírok/garancia/szerviz dokumentáció megléte, hibák és kopás részletei',
        reject: 'Nem működő, sérült vagy hiányos órák · Sorozatszám nélküli darabok · Gyerekórák · Retusált vagy MI által generált képek',
        photos: 'Legalább 6–8 kép, semleges háttér, éles fókusz. A tok hátlapját és a sorozatszámot is fotózd le.',
      },
    ],
  },
  {
    id: 'ekszer',
    label: 'Ékszerek & Drágakövek',
    icon: '💎',
    guides: [
      {
        title: 'Ékszerek',
        accept: [
          'Új ékszerek: min. 200 EUR kiskereskedelmi értékkel',
          'Használt ékszerek (2000-es évek): min. 200 EUR',
          'Antik ékszerek (1930 előtti): min. 200 EUR',
          'Vintage ékszerek (1990-es évekig): min. 200 EUR',
          'Márkás ékszerek: min. 200 EUR',
        ],
        brands: 'Antik/vintage: Fouquet, Garrard, Georg Jensen, René Lalique, Tiffany vintage · Modern: Boucheron, Bvlgari, Cartier, Chanel, Chopard, De Beers, Graff, Harry Winston, Van Cleef & Arpels',
        required: 'Fém típusa és finomság, kő típusa és mérete, tanúsítványok (kötelező 5 000 EUR felett), állapot, méretek, hibák',
        reject: 'Nem nemesfémből készült ékszerek · Divatékszerek, Swarovski · Sérült vagy kopott tárgyak · Gyémánt tanúsítvány nélkül (5 000 EUR felett)',
        photos: 'Legalább 4–8 kép, semleges háttér, természetes megvilágítás. Minden oldal, hibák és jelzések láthatók legyenek.',
        extra: 'Elfogadott fémek: Arany (új ékszerek ≥14 kt, antik/vintage ≥8 kt), Platina (≥800 finomság), Ezüst (≥800, csak dedikált aukciókon). CITES szabályok vonatkoznak a korallra és más szerves anyagokra. Gyöngyök: csak magas minőségű tenyésztett tengeri gyöngyök (Akoya, Tahiti, Dél-tengeri).',
      },
      {
        title: 'Gyémántok',
        accept: [
          'Természetes, jól csiszolt, ékszerbe foglalásra kész gyémántok',
          'Elfogadott laboratórium által tanúsított tárgyak',
          'Egyedi fehér gyémánt minimum: 0,20 ct',
          'Természetes különleges színű minimum: 0,30 ct',
          'Megfelel a Kimberley-folyamat előírásainak',
        ],
        brands: 'GIA, HRD vagy IGI tanúsítvány kötelező 20 000 EUR felett (fizikai papír tanúsítvány)',
        required: 'Karátsúly, csiszolás, szín, tisztaság, laborjelentésszám, méretek és súly',
        reject: 'Szintetikus gyémántok (jelölés nélkül) · Sérült vagy szabálytalan csiszolású darabok',
        photos: '6–10 kép, fehér vagy fekete háttér, természetes megvilágítás.',
        extra: 'Kizárólag regisztrált, áfaszámmal rendelkező profi eladók tölthetnek fel laza gyémántokat.',
      },
      {
        title: 'Drágakövek',
        accept: [
          'Természetes, kezeletlen vagy ipari szabványoknak megfelelően kezelt drágakövek',
          'Megfelelő gemmológiai intézeti tanúsítvánnyal rendelkező tárgyak',
          'Beryl smaragd, korund rubin/zafír, krizoberil, paraiba turmalin, grandiderit >1,00 ct',
          'Akvamarin, morganit, spinell, tanzanit, cirkon >2,00 ct',
          'Turmalin, peridot, gránát, opál >5,00 ct',
        ],
        brands: 'Tanúsított laboratóriumok: GRS, Gübelin, SSEF, GIA, AGL',
        required: 'Kő típusa, súlya, csiszolása, színe, tisztasága, alkalmazott kezelések, laborjelentés száma és dátuma',
        reject: 'Laboratóriumban előállított (szintetikus) kövek · Kompozit kövek · Bevonatos kövek',
        photos: 'Természetes megvilágítás vagy sötét háttér a szín kiemelésére.',
      },
    ],
  },
  {
    id: 'divat',
    label: 'Divat',
    icon: '👜',
    guides: [
      {
        title: 'Divat táskák',
        accept: [
          'Eredeti, magas minőségű luxus divattáskák — új és használt egyaránt',
          'Gyűjthető, ikonikus vagy szezonálisan releváns darabok',
          'Különleges kiadások, egyedi színek, ritka modellek, együttműködések',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Hermès, Chanel, Louis Vuitton, Dior, Gucci, Balenciaga, Bottega Veneta, Celine, Prada',
        required: 'Tárgy típusa, márka, modell neve, szín, anyag, korszak, stíluskód, sorozatszám, méretek cm-ben, eredetiség dokumentumok (számla, hitelességi kártya, porzsák, doboz), belső és külső állapot',
        reject: 'VIP ajándékok, sajtóminták, prototípusok · Hordhatatlan állapotú tárgyak · Ismeretlen márkák',
        photos: 'Legalább 6–10 kép. Töltsd meg a táskát fotózás előtt. Ne mutasd emberi modellen.',
        condition: 'A – Új/Újszerű · B – Nagyon jó · C – Jó · D – Nagyon használt (csak top márkáknál)',
      },
      {
        title: 'Divat cipők',
        accept: [
          'Hiteles, 2000 után gyártott luxus cipők',
          'Gyűjthető, ikonikus vagy aktuális szezonális darabok',
          'Preferált méretek: nőknek IT38–41, férfiaknak IT41–44',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Chanel, Hermès, Gucci, Dior, Louboutin, Nike limitált kiadások, Balenciaga, Jimmy Choo',
        required: 'Tárgy típusa, márka, méret (IT, FR, DE, US, UK és cm), modell neve, szín, anyag, sarokmagasság, eredetiség dokumentumok (doboz, számla, porzsák)',
        reject: '2000 előtti vintage cipők · Tömeges piacokon elérhető cipők · Sportcipők (kivéve limitált)',
        photos: '4–8 kép, semleges háttér.',
        condition: 'A – Új/Újszerű · B – Nagyon jó · C – Jó · D – Nagyon használt (csak top márkáknál)',
      },
      {
        title: 'Divat ruházat',
        accept: [
          'Eredeti luxus és prémium márkák',
          'Ritka vintage vagy couture darabok, különleges anyagok',
          'Ikonikus státuszú vagy az aktuális szezonra alkalmas darabok',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Chanel, Dior, YSL, Hermès, Tom Ford, Loro Piana, Balenciaga, Valentino, Bottega Veneta',
        required: 'Tárgy típusa, márka, méret (IT, FR, DE, US, UK és cm), anyag, korszak, eredetiség dokumentumok, hibák',
        reject: 'Diffúziós vonalak és al-márkák (Armani Jeans, D&G) · Sportruházat · Gyermekruházat',
        photos: '4–8 kép, semleges háttér. Ne mutasd emberi modellen.',
        condition: 'A – Új/Újszerű · B – Nagyon jó · C – Jó · D – Nagyon használt (csak top márkáknál)',
      },
      {
        title: 'Divat kiegészítők',
        accept: [
          'Divatékszerek, napszemüvegek, kis bőráru',
          'Kalapok, kesztyűk, sálak és foulardok',
          'Luxus vagy prémium márkák ikonikus darabjai',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Hermès, Chanel, Louis Vuitton, Dior, Gucci, Cartier',
        required: 'Tárgy típusa, márka, stíluskód/név, szín, anyag, korszak, sorozatszám, méret, eredetiség dokumentumok',
        reject: 'VIP, sajtó, promóciós tárgyak · Parfümök és kozmetikumok',
        photos: '4–8 kép, semleges háttér.',
        condition: 'A – Új/Újszerű · B – Nagyon jó · C – Jó · D – Nagyon használt (csak top márkáknál)',
      },
    ],
  },
  {
    id: 'muveszet',
    label: 'Művészet & Fotó',
    icon: '🎨',
    guides: [
      {
        title: 'Klasszikus és modern művészet',
        accept: [
          'Hiteles, magas minőségű műalkotások a 15. századtól 1945-ig',
          'Festmények, papírmunkák — aláírt akvarelleket és rajzokat',
          'Olyan újabb darabok, amelyek egyértelműen klasszikus esztétikát tükröznek',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Szerzőség megjelölése: [Művész neve] = biztosan; Attribútum [Művész neve]-hoz = erős bizonyíték; Körülötte/Iskolája = kapcsolódik a stílushoz; Után/Követő = másolat',
        required: 'Médium és technika, méretek (cm, kerettel és keret nélkül), aláírás/bélyeg, proveniencia (legalább 20 éves igazolható história), restaurálások, egyéb hibák',
        reject: 'Nem hiteles darabok · Dokumentáció nélküli tárgyak',
        photos: 'Teljes mű + részletek + aláírás + keret hátulja. UV fényforrásban is fotózd le (restaurálás kiderül).',
      },
      {
        title: 'Kortárs és háború utáni művészet',
        accept: [
          'Hiteles, magas minőségű műalkotások 1945-től napjainkig',
          'Festmények és vegyes technikák, nyomatok és sokszorosított művek',
          'Szobrok és 3D tárgyak',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Limitált kiadásoknál: kiadás száma (pl. 3/10), a sorozat teljes mérete, hitelesítési módszer',
        required: 'Művész háttere és életrajza, anyagok és technikák, állapotleírás (restaurálások és hibák), katalógus/kiállítási hivatkozások, eredettörténet, szállítási és biztosítási adatok',
        reject: 'Nem hiteles darabok · Szélesen elérhető printelt vagy digitálisan gyártott tárgyak',
        photos: 'Teljes mű + részletek + aláírás. UV fényforrásban is érdemes fotózni.',
      },
      {
        title: 'Fotóművészet',
        accept: [
          'Eredeti fényképek vagy fotómechanikai nyomatok a 20. vagy 21. századból',
          'Korlátozott példányszámú nyomatok (kis mennyiségben)',
          'Vintage sajtófotók — 1990 előtt jelölve vagy bélyegezve',
          'Fotók, amelyek egyértelműen a fotóshoz köthetők',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Állapotminősítési rendszer (PASS-CO): OS (Eredeti állapot) · EF (Kiváló) · VF (Nagyon jó) · F (Jó) · G (Elfogadható) · P (Rossz)',
        required: 'Fotós neve, cím, kiadás éve, nyomat típusa, méretek, állapot, sorozatszám, hitelesítési tanúsítvány',
        reject: 'Posztumusz kiadások · Reprodukciók · Autopen aláírások',
        photos: '4–6 kép beleértve a hátlapot, bélyegzőket, aláírást.',
      },
      {
        title: 'MI által generált művészet',
        accept: [
          'MI-generált műalkotások, amelyek jelentős emberi hozzájárulást, egyedi alkotói szándékot és valódi művészi értéket tükröznek',
          'Az MI használatát egyértelműen jelezni kell a leírásban és a termék nevében',
          'Min. 200 EUR értékkel',
        ],
        brands: 'MI-asszisztált alkotói folyamatok: Midjourney, DALL-E, Stable Diffusion, stb.',
        required: 'MI eszköz neve, az emberi alkotó szerepének leírása, szerzői jogi státusz egyértelmű megjelölése',
        reject: 'Felnőtt tartalmú MI-képek · Azonosítható valós személyek ábrázolásai hozzájárulás nélkül · Teljes egészében MI által generált, emberi közreműködés nélküli alkotások',
        photos: 'Magas felbontású eredeti fájl printje.',
      },
    ],
  },
  {
    id: 'hangszer',
    label: 'Hangszerek',
    icon: '🎸',
    guides: [
      {
        title: 'Gitárok, basszusgitárok és felszerelés',
        accept: [
          'Elektromos gitárok és basszusgitárok — modern és vintage',
          'Akusztikus és klasszikus gitárok',
          'Erősítők és hangszórószekrények (csöves és szilárdtest)',
          'Effekt pedálok, hangszedők, vintage alkatrészek, gyűjthető tokok',
          'Játszható és tesztelt, VAGY magas belső értékű restaurációs jelölt',
        ],
        brands: 'Elektromos: Fender, Gibson, Ibanez Prestige/JEM/JS, Rickenbacker, PRS, Music Man, Gretsch · Akusztikus: C.F. Martin, Taylor, Gibson, Guild, Ramírez, Collings, Lowden',
        required: 'Márka, modell, gyártási év, sorozatszám, tokozás állapota, jellemző alkatrészek, javítások és módosítások, CITES doksi ha szükséges (pl. brazil rózsafa)',
        reject: 'Tömeges piacon elérhető gitárok · Mechanikailag hibás hangszerek dokumentáció nélkül',
        photos: '6–10 kép: elő- és hátlap, fejlap, test, nyak-test csatlakozás, esetleges hibák.',
      },
      {
        title: 'Vonós hangszerek',
        accept: [
          'Vonós hangszerek: hegedűk, brácsák, csellók, nagybőgők',
          'Vonók (íjak) — hangszerekkel együtt vagy önálló tételekként',
          'Gyűjthető tokok, korabeli szerelvények és vintage vonók',
          'Játszható és tesztelt, VAGY magas belső értékű restaurációs jelölt',
          'CITES dokumentáció szükséges, ha érintett (elefántcsont vonóhegyek: csak 1940 előtti)',
        ],
        brands: 'Stradivari, Guarneri, Amati, Gagliano, Guadagnini · Francia iskola (pl. Vuillaume) · J.B. Schweitzer, Émile François, E.H. Roth, Karl Höfner',
        required: 'Hangszer típusa, mérete, becsült kora, hangszerész által kiadott jegy, vonók leírása, tokok és kiegészítők',
        reject: 'Dokumentáció nélküli tárgyak 2 000 EUR felett · Nem játszható, javíthatatlan hangszerek',
        photos: '6–8 kép: test, oldal, belső (f-lyukakon keresztül), fejlap, vonó és tokok.',
      },
      {
        title: 'Általános hangszerek',
        accept: [
          'Húros és vonós hangszerek (hegedű, gitár, mandolin, banjo)',
          'Fúvós hangszerek (szaxofon, trombita, klarinét, oboa, fuvola)',
          'Billentyűs hangszerek (zongora, billentyűzet, harmonika)',
          'Dobok és ütős hangszerek',
          'Elektronikus hangszerek és erősítők',
          'Kiegészítők: effekt pedálok, vintage fúvókák, gyűjthető tokok',
        ],
        brands: 'Akusztikus: Gibson, C.F. Martin, Deering, Collings · Fúvós: Henri Selmer Paris, Buffet Crampon, Bach (Stradivarius), Yamaha Professional · Harmonika: Pigini, Dallapé',
        required: 'Márka, modell, gyártási év, sorozatszám, anyag, állapot, kiegészítők listája',
        reject: 'Tömeggyártott, alacsony értékű hangszerek · Hibás, nem javítható darabok',
        photos: '4–8 kép minden szögből, beleértve a sorozatszámot.',
      },
    ],
  },
  {
    id: 'butor',
    label: 'Bútor & Lakberendezés',
    icon: '🪑',
    guides: [
      {
        title: 'Design és kortárs bútorok',
        accept: [
          '2000 után tervezett kortárs design bútorok elismert tervezőktől vagy márkáktól',
          'Kézzel készített tárgyak közvetlenül a tervezőktől',
          'Ikonikus vintage bútorok dokumentált eredettel',
          'Min. 200 EUR (exkluzív design tárgyaknál: 1 000 EUR)',
        ],
        brands: 'Mid-Century Modern: Charles & Ray Eames, Hans J. Wegner, Arne Jacobsen, Charlotte Perriand, Poul Henningsen, Gio Ponti · Márkák: Artifort, Thonet, Fritz Hansen, Cassina · Bauhaus: Mies van der Rohe, Marcel Breuer · Memphis/posztmodern: Ettore Sottsass',
        required: 'Tervező neve, márka/gyártó, stílus és gyártási időszak, eredet országa, méretek (ülőmagasságot is), súly, állapot, kopás, restaurálások, eredetiség dokumentáció exkluzív tárgyak esetén',
        reject: 'Replikák és hamisítványok · Ismeretlen tervezők tömeggyártású darabjai',
        photos: '6–10 kép: elölről, oldalról, hátulról, részletek, kopások, jelzések, talpak.',
      },
      {
        title: 'Régiségek, szecesszió, art deco és klasszikus bútorok',
        accept: [
          'Bútorok: ülőalkalmatosságok, asztalok, szekrények, könyvszekrények, lámpák (1940-ig)',
          'Díszítő és alkalmazott művészetek: tükrök, vázák, kerámiák, szecessziós üvegek',
          'Vallási gyűjtői tárgyak: keresztek, ikonok, ereklyetartók, szobrok',
          'Órák: konzol-, utazó-, csontváz-, hosszúház-, faliórák; prémium márkák',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Különleges figyelmeztetések: Bronz tárgyak — karcpróbával ellenőrizd az anyagot (ezüst szín = spelter, arany szín = bronz). CITES anyagok (elefántcsont, teknőspáncél) — kötelező dokumentáció.',
        required: 'Tárgy típusa, anyag, készítő/művész/márka, becsült korszak és eredet országa, méretek és súly, állapot és minden restauráció részletei',
        reject: 'Gyártói számok nélküli, bizonytalan korú darabok magas áron',
        photos: 'Teljes tárgy + részletek + jelzések + minden szög. UV lámpával ellenőrizd a restaurálásokat.',
      },
      {
        title: 'Kerámiák és üvegtárgyak',
        accept: [
          'Hiteles, aláírt vagy azonosítható gyártótól/tervezőtől származó tárgyak',
          'Kiváló vagy nagyon jó állapotban (ritka tárgyaknál kisebb kopás elfogadható)',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Lalique, Val Saint Lambert · Herendi, Sèvres, Limoges · Murano üveg: Venini, Seguso, Barovier & Toso · Bitossi, Rosenthal · Meissen, Zsolnay, Royal Copenhagen',
        required: 'Tervező, készítő vagy gyár neve, stílus és gyártási mód, korszak, méretek és súly, gyártási ország, állapot és hibák pontosan',
        reject: 'Jelöletlen, bizonytalan gyártótól származó tárgyak · Sérült, ragasztott darabok',
        photos: '4–8 kép. UV fény alatt vizsgáld meg — a fluoreszkáló ragasztó javítást jelez.',
      },
      {
        title: 'Szobrok és figurák',
        accept: [
          'Szobrok: mellszobrok, csoportok, domborművek — 1940 előtt készültek',
          'Figurák: 20–21. századi díszítő és gyűjthető figurák',
          'Swarovski (csak eredetik), Hummel/Goebel figurák',
          'Nyugdíjazott Cow Parade modellek',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Anyagazonosítási teszt: Hideg érintés = fém/kő, gyorsan melegszik = gyanta. Mágneses teszt: acél tapad, bronz/sárgaréz nem. Karcpróba: ezüst szín = spelter, arany szín = bronz.',
        required: 'Művész/készítő/márka/öntöde (ha ismert), anyag pontosan (bronz, terrakotta, gyanta stb.), súly és méret talppal és anélkül, állapot és minden javítás részletei',
        reject: 'Műanyag figurák azonosító jelek nélkül · Bizonytalan eredetű tárgyak',
        photos: '6–8 kép minden szögből. Mindig mérd le — ne másold korábbi hirdetésekből.',
      },
      {
        title: 'Otthoni és kerti dekoráció',
        accept: [
          'Modern otthoni dekoráció: szobrok, világítás, belső kiegészítők profi eladóktól',
          'Klasszikus otthoni dekoráció: tükrök, faliszőnyegek, keretek, lámpák (20. sz.)',
          'Kert és növények: szobrok, szökőkutak, kültéri dekorációk, bonsai',
          'Karácsonyi díszek: csak szeptember és január között',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Minőségellenőrzési tesztek: Tapintás teszt (kő/kristály/fém hideg, gyanta meleg) · Rázás teszt (ha csörög, belül törött) · Fényes megvilágításban sárguló ragasztónyomok keresése',
        required: 'Tárgy típusa, állapot, méretek, súly, anyag, eredettörténet és hibák',
        reject: 'Tömeggyártott, széles körben elérhető dekorációk · Penészes, dohányszagú, vegyszerszagú tárgyak',
        photos: '4–8 kép, természetes megvilágítás.',
      },
      {
        title: 'Főzés és étkezés',
        accept: [
          'Magas minőségű, elismert márkák konyhai és étkezési tárgyai',
          'Gyűjthető evőeszközkészletek, porcelán étkészletek, kristály poharak',
          'Vintage és antik konyhai tárgyak jó állapotban',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Christofle, Villeroy & Boch, WMF, Riedel, Baccarat, Hermès, Ginori, Rosenthal',
        required: 'Tárgy típusa, márka, anyag, darabszám (szett esetén), állapot részletei, méretek és súly, teljesség',
        reject: 'Tömeggyártott konyhai termékek · Sérült, hiányos vagy restaurált tárgyak · Egészségügyi kockázatot jelentő tárgyak',
        photos: '6–10 kép, fehér vagy fekete háttér. Ne mutasd emberi modellen.',
      },
      {
        title: 'Világítás',
        accept: [
          'Asztali lámpák, állólámpák, íróasztali lámpák',
          'Függesztékek, csillárok, mennyezeti lámpák',
          '1940-től készült, teljesen működőképes tárgyak',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Artemide, FLOS, Louis Poulsen, Foscarini, Stilnovo, Ingo Maurer, iGuzzini · Vistosi, Reggiani, Metalarte, Glashütte Limburg',
        required: 'Tárgy típusa, tervező, gyártó, korszak, méretek (mennyezeti lámpáknál a teljes függesztési hossz), anyag, elektromos állapot (tesztelve-e), tartozékok listája, hibák',
        reject: 'Nem működő, javíthatatlan lámpák · Hiányos szerelési alkatrészek nélküli darabok',
        photos: '4–8 kép. Elektromos teszt: a kábelt mozgatva, kapcsolót ki-be kapcsolva.',
      },
    ],
  },
  {
    id: 'gyujtheto',
    label: 'Gyűjtők',
    icon: '🏆',
    guides: [
      {
        title: 'Hanglemezek és vinyl',
        accept: [
          'Első és ritka kiadások, limitált szériás lemezek (LP, 7", 12" Maxi kislemez, képlemez)',
          'Nehezen beszerezhető MiniDisc, hangkazetta, CD, LaserDisc, Shellac',
          'Minimális állapot: VG+ (Very Good Plus) mind a lemez, mind a borító esetén',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Állapotminősítés: M&S (Fóliázott) · M (Mint) · NM (Újszerű) · EX (Kiváló) · VG+ (Jó+). VG+ alatti nem elfogadott.',
        required: 'Előadó neve, album cím, kiadó és katalógusszám, gyártási ország, megjelenési év, műfaj, állapot (borító és vinyl külön jelölve)',
        reject: 'VG+ alatti lemezek · Hamisított vagy nem hivatalos kiadások',
        photos: '4–6 kép: borító, belső borító, lemez mindkét oldala, matricák.',
      },
      {
        title: 'Hi-Fi és rádió',
        accept: [
          'Professzionális audio eszközök (mikrofonok, kompresszorok, keverők, monitorok)',
          'Integrált erősítők, teljesítmény- és főerősítők',
          'Lejátszók, szalagos és kazettás magnók',
          'Hi-Fi szettek (ideálisan 90-es évek előtti)',
          'Legalább 3 éves, hiteles és működőképes tárgyak',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Akai, Bang & Olufsen, Marantz, NAD, JBL, Technics, Pioneer, Revox, Luxman, Yamaha',
        required: 'Márka, modell neve/száma, típus, sorozatszám, állapot és tesztelés, teljesítmény (W), impedancia (Ohm), méretek, súly, tartozékok listája, hibák',
        reject: 'Nem működő berendezések (kivéve nagyon gyűjthető tárgyak) · Jelöletlen, bizonytalan márkák',
        photos: '4–8 kép: elöl, hátul, kezelőfelület, csatlakozók, sorozatszám.',
      },
      {
        title: 'Érmék, nemesfémek és bankjegyek',
        accept: [
          'Ókori érmék: római, bizánci, görög, kelta, korai keleti érmék — min. 200 EUR',
          'Bankjegyek és kötvények — min. 200 EUR',
          'Nemesfém rudak és érmék: arany ≥1g, ezüst ≥100g, platina ≥2g',
          'Euro érmék és világérmék — min. 200 EUR',
          'Exonumia (zsetonok, érmek, tálcák) — min. 200 EUR',
        ],
        brands: 'Szankcionált területekről (Kuba, Irán, Észak-Korea, Szíria, Krím) érmék nem fogadhatók el. Kivétel: ókori érmék. Horogkereszt tartalmú tárgyak: a nyilvános listázási képeken nem mutatható be előlapjuk.',
        required: 'Tárgy típusa, ország/régió, korszak, állapot, súly, elő- és hátlap leírása, katalógusszám (ha ismert), tanúsítványok',
        reject: 'Szankcionált területekről (kivéve ókori) · Hamisítványok · Nem hiteles darabok',
        photos: '2–4 kép: elő- és hátlap, szél, gyűrűzőtok.',
      },
      {
        title: 'Automobilia',
        accept: [
          'Autómaszkok, gyári emblémák, motorkerékpár jelvények',
          'Eredeti vagy licencelt másolatok (nem fantázia darabok)',
          'Táblák, világító dobozok és vintage poszterek',
          'Gyűjthető motoros dzsekik, márkázott kiegészítők',
          'Autós témájú órák és stopperórák (licencelt, márkázott)',
          'Könyvek, prospektusok, kézikönyvek, magazinok',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Ferrari, Porsche, Mercedes-Benz, Aston Martin, Lamborghini, Rolls-Royce, BMW, Maserati',
        required: 'Tárgy típusa, eredeti vagy reprodukció, cím/modell, anyag, állapot, méretek, gyártási év, eredettörténet és hibák',
        reject: 'Védjegybitorló tárgyak és licenc nélküli másolatok · GPS készülékek · Általános szerviz autóalkatrészek',
        photos: '4–8 kép, semleges háttér.',
      },
      {
        title: 'Kerékpárok',
        accept: [
          'Vintage és antik kerékpárok',
          'Ritka eredeti kerékpáralkatrészek: váltókészletek, nyergek, versenyvázak',
          'Prémium vagy történelmileg jelentős márkák kerékpárjai',
          'Ritka, limitált gyártású modellek (kevesebb mint 100 darab)',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Állapotminősítés: Kiváló · Nagyon jó · Jó · Kopásos de működőképes · Restaurálásra szorul',
        required: 'Márka, modell, vázméret, gyártási év, vázszám, váz/festés/matricák/kerekek/gumik/lánc/váltók/fékek állapota, eredeti vagy restaurált, karbantartás részletei',
        reject: 'Olcsó, tömeggyártású kerékpárok · Alkatrészek nélküli, nem működő darabok',
        photos: '6–10 kép: teljes kerékpár, részletek, vázszám, kopások.',
      },
      {
        title: 'Tollak és írószerek',
        accept: [
          'Luxus tollak: Montblanc, Cartier, S.T. Dupont, Visconti, Aurora, Delta, Montegrappa',
          'Vintage írószerek 1850-től napjainkig',
          'Elismert márkák: OMAS, Louis Vuitton, Caran d\'Ache, Dunhill, Parker, Waterman, Pelikan',
          'Eredeti, nagyon jó állapotban és működőképes',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Állapotminősítés: Új · Újszerű · Kiváló · Nagyon jó · Jó · Elfogadható',
        required: 'Márka, modell, hegy mérete, tárgy típusa, szín, anyag, felületkezelés, sorozatszám, kiadás neve, méretek, doboz/papírok/garancia megléte, hibák',
        reject: 'Ismeretlen márkák · Nem működő tollak · Hiányos szettekből kiemelt darabok',
        photos: '4–8 kép minden szögből, beleértve a hegyét és a tetejét.',
      },
      {
        title: 'Játékok és társasjátékok',
        accept: [
          'Antik vagy gyűjthető fémjátékok és mechanikus felhúzós játékok',
          'Játék járművek: Dinky Toys, Corgi, Lesney, Matchbox, Tekno, Solido',
          'Márkás babák, Barbie, plüssmackók, babaházak (Steiff, Mattel, Hasbro)',
          'Hiteles LEGO készletek (100% LEGO kockák, lehetőleg eredeti csomagolással)',
          'Film/popkultúra: Star Wars, Marvel, NECA, Sideshow',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Állapotminősítés: Újszerű · Majdnem újszerű · Nagyon jó · Jó · Elfogadható',
        required: 'Tárgy típusa, márka, sorozat, kiadás éve, anyag, állapot, eredeti csomagolás megléte, tartozékok és hibák',
        reject: 'Tömegpiacon elérhető, nem gyűjthető játékok · Reprodukciók · Hiányos készletek (kivéve jelölve)',
        photos: '4–8 kép: tárgy, csomagolás, hibák, jelzések.',
      },
      {
        title: 'Sport emléktárgyak',
        accept: [
          'Mérkőzésen kiadott vagy viselt sportfelszerelés (mezek, cipők, kesztyűk)',
          'Hitelesített sport emléktárgyak: kézzel aláírt tárgyak, díjak, mérkőzésjegyek',
          'Hivatalos licencelt termékek: csapatruházat, felszerelések',
          'Nagy sporteseményekhez vagy neves sportolókhoz/csapatokhoz kapcsolódó tárgyak',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Elfogadott COA: PSA/DNA, JSA, TriStar, Upper Deck. Érvényes COA vagy LOA, közvetlen vizuális bizonyíték (fotó az aláírásról, vásárlási számla, videó).',
        required: 'Tárgy típusa, sportoló/csapat neve, méret, állapot, aláírás adatai (ki, mikor, hol), hitelesítési tanúsítvány, eredettörténet és hibák',
        reject: 'Hímzett, bélyegzett, autopen vagy fax aláírások · COA nélküli drága aláírt tárgyak',
        photos: '4–8 kép: tárgy, aláírás közelképe, COA, eredeti csomagolás.',
      },
      {
        title: 'Film emléktárgyak',
        accept: [
          'Emléktárgyak: autogramok, filmposzterek, forgatókönyvek, sajtókészletek, vintage fényképek',
          'Kellékek: filmen használt tárgyak, jelmezek, storyboardok, klapperek',
          'Licencelt játékok, szobrok, figurák, replika kellékek, ruházat',
          'Legalább jó állapotban (1970 előtti játékok elfogadható állapotban is)',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Elfogadott COA: Beckett, JSA, PSA/DNA, Authentic Signings, Celebrity Authentics. Forgatáson használt kellékek: Propstore, Heritage.',
        required: 'Tárgy típusa, márka, film/karakter neve, megjelenés éve, anyag, állapot, méretek, eredettörténet, tartozékok és hibák',
        reject: 'Nem licencelt tárgyak · Nem ellenőrzött autogramok vagy megbízhatatlan COA-k',
        photos: '4–8 kép beleértve a COA-t és az egyéb dokumentumokat.',
      },
      {
        title: 'Zenei emléktárgyak',
        accept: [
          'Emléktárgyak: aláírások, zenei poszterek, sajtóanyagok, vintage képek, díjak, koncertjegyek',
          'Licencelt figurák, ruházat, litográfiák, könyvek, szobrok',
          'Legalább jó állapotban',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Különösen keresett: The Beatles, Pink Floyd, David Bowie, Led Zeppelin, Elvis Presley, Nirvana, Madonna, Miles Davis, Metallica, AC/DC, U2. Elfogadott COA: Beckett, JSA, PSA/DNA, Roger Epperson, ACOA.',
        required: 'Tárgy típusa, előadó neve, márka, állapot, méretek, eredettörténet (különösen aláírások esetén), tartozékok és hibák',
        reject: 'Nem licencelt tárgyak · Nem ellenőrzött aláírások · Rajongói készítésű "díszdíjak"',
        photos: '4–8 kép beleértve az aláírás közelképét és a COA-t.',
      },
      {
        title: 'Whisky',
        accept: [
          'Limitált vagy megszűnt kiadású gyűjthető whiskyk bármely lepárlótól',
          'Single cask vagy kis tételes palackozások',
          'Prémium whisky kiegészítők: vintage tükrök (1990 előtt), márkázott dekantálók',
          'Megfelelően lezárt, felbontatlan, eredeti zárjeggyel ellátott palackok',
          'Min. 200 EUR (legalább 30 EUR/palack)',
        ],
        brands: 'Különösen keresett: Port Ellen, Brora, Macallan, Glendronach, Springbank, Ardbeg, Laphroaig · Japán: Karuizawa, Hanyu, Yamazaki, Hibiki, Yoichi, Hakushu, Kavalan',
        required: 'Lepárló, típus, évjárat, palackméret, palackozás éve, töltöttségi szint (fotóval), sorozatszám, háttértörténet limitált/megszűnt kiadásnál, hibák',
        reject: 'Felbontott palackok · Zavaros tartalmú palackok · Hamisított vagy nem hivatalos kiadások',
        photos: '4–6 kép: egész palack, töltöttségi szint, zárjegy, sorozatszám.',
      },
      {
        title: 'Bor',
        accept: [
          'Prémium bor, pezsgő, portói vagy édes bor — eredeti, lezárt palackok',
          'Eredeti fa dobozok eredeti palackokkal',
          'Gyűjthető bor kiegészítők: jégvödrök, poharak, dekantálók, palacknyitók',
          'EuroCaves és borhűtők, boros bútorok',
          'Min. 200 EUR (legalább 15 EUR/palack, 25 EUR/magnum)',
        ],
        brands: 'Franciaország: Bordeaux Grand Cru Classé, Burgundia Grand Cru/Premier Cru · Olaszország: Barolo, Barbaresco, Brunello, Amarone, Super Tuscans · Spanyolország: Rioja Gran Reserva · USA: Napa Valley, Sonoma',
        required: 'Bor típusa, borászat, évjárat, palackozó, palackméret, töltöttségi szint (fotóval), tároló körülmények',
        reject: 'Közép vállrész alatti töltöttségi szintű palackok · Sérült, ázott vagy hiányos etikettű palackok · Felbontott, visszadugózott palackok',
        photos: '4–6 kép: egész palack, töltöttségi szint, etikett, dugó, fa doboz (ha van).',
      },
      {
        title: 'Képregények és animációs gyűjtők',
        accept: [
          'Képregény albumok és magazinok',
          'Eredeti műalkotások, vázlatok és nyomatok',
          'Képregény témájú gyűjtői tárgyak (zománctáblák, figurák, szobrok)',
          'Animációs celluloidok és figurák',
          'Gyűjthető értékűnek kell lennie — nem lehet széles körben elérhető kiskereskedelemben',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Állapotminősítés: Újszerű · Majdnem újszerű · Nagyon jó · Jó · Közepes · Elfogadható',
        required: 'Tárgy típusa, sorozat neve, szerzők, kiadó, kiadás éve, sorozatszám/kiadásszám, állapot, különleges jellemzők',
        reject: 'Széles körben elérhető, modern kiadások · Sérült, hiányos darabok',
        photos: '4–6 kép: borító, hátlap, belső állapot, aláírások (ha van).',
      },
    ],
  },
  {
    id: 'fenykepezo',
    label: 'Fényképezőgépek',
    icon: '📷',
    guides: [
      {
        title: 'Fényképezőgépek és optikai eszközök',
        accept: [
          'Analóg és digitális fényképezőgépek (tükörreflexes, telemérős, tükör nélküli, kompakt)',
          'Objektívek, vakuk, állványok, táskák, stúdiófelszerelések',
          'Binokulárок, távcsövek, mikroszkópok, teodolitok',
          'Film, videó, előhívó és sztereofotográfiai (3D) eszközök',
          '1975 utáni gyártás esetén minimum jó állapot szükséges',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Leica — fényképezőgépek, projektorok, optikák · Nikon, Canon, Hasselblad, Olympus — gyűjthető modellek',
        required: 'Márka, modell, gyártási év, sorozatszám, állapot (beleértve az optikák állapotát), tartozékok, tesztelés eredménye',
        reject: '1975 utáni műszaki hibás fényképezőgépek · Ismeretlen márkák alacsony értéken',
        photos: '4–8 kép: előlap, hátlap, optika, keresőkép (ha tesztelve), sorozatszám.',
      },
    ],
  },
  {
    id: 'kulonleges',
    label: 'Különleges kategóriák',
    icon: '📜',
    guides: [
      {
        title: 'Régészeti tárgyak',
        accept: [
          'Eredeti, gyűjthető régészeti tárgyak — teljes és töredékes darabok egyaránt',
          'Bármilyen kulturális eredet (őskor, római, egyiptomi, görög, prekolumbiánus, középkori)',
          'Ázsiai eredetű tárgyak: Kr.u. 1200 előttiek',
          'Minden más kulturális eredet: Kr.u. 1500 előtti tárgyak',
          'Min. 200 EUR értékkel',
        ],
        brands: 'Kötelező dokumentáció és COA minden régészeti tárgyhoz.',
        required: 'Kulturális eredet, becsült korszak, tárgy típusa, proveniencia (legalább 1980 előtti dokumentált kereskedelmi história), jogi megfelelőség dokumentálása az export/import ország jogszabályai szerint',
        reject: 'Proveniencia nélküli tárgyak 1 000 EUR felett · Szankcionált területekről (Irak, Szíria, Líbia, Jemen, Malí) illegálisan kivitt tárgyak',
        photos: '4–8 kép minden szögből, mérőrúddal a méret érzékeltetéséhez.',
      },
      {
        title: 'CITES — Védett fajok',
        accept: [
          'Kizárólag CITES I. melléklet (EU A melléklet): érvényes EU tanúsítvánnyal',
          'CITES II. melléklet (EU B melléklet): kereskedelemi feltételekhez kötött',
          'Minden szükséges export/import engedéllyel rendelkező tárgy',
        ],
        brands: 'CITES I = EU A (legjobban védett) · CITES II = EU B · CITES III = EU C',
        required: 'CITES tanúsítvány fénymásolata feltöltéskor, export engedély és import engedély (ha szükséges), fajta és köznév, darabszám és leírás',
        reject: 'CITES engedély nélküli védett fajok termékei · Ellenőrizhetetlen provenienciájú tárgyak',
        photos: 'Tárgy + tanúsítvány + minden ábra és jel fénymásolata.',
      },
      {
        title: 'Elefántcsont termékek',
        accept: [
          'Kizárólag 1900 előtt készült tárgyak — hiteles dokumentációval igazolva',
          'Érvényes EU Tanúsítvánnyal (19(b) bekezdés: "Kereskedelmi használat")',
          'Független szakértő értékbecslési jelentéssel (fizikai vizsgálat alapján)',
          'Teljes leírással, méretekkel és fényképekkel',
        ],
        brands: 'A SinkBid elkötelezett a természetvédelem iránt — 1900 utáni elefántcsont tárgyak nem engedélyezettek.',
        required: 'EU Tanúsítvány (19b), független szakértői értékbecslés (fizikai vizsgálat alapján), 1900 előtti eredet megerősítése, értékbecslő elérhetőségei',
        reject: '1900 utáni elefántcsont termékek · Dokumentáció nélküli darabok · Bizonytalan korú tárgyak',
        photos: '4–8 kép részletes fotókkal + tanúsítványok fénymásolatai.',
      },
    ],
  },
]

function GuideCard({ guide }) {
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
            <div className={styles.guideSectionTitle}>✅ Mit fogadunk el</div>
            <ul className={styles.guideList}>
              {guide.accept.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          {guide.brands && (
            <div className={styles.guideSection}>
              <div className={styles.guideSectionTitle}>⭐ Ajánlott márkák / Megjegyzések</div>
              <p className={styles.guidePara}>{guide.brands}</p>
            </div>
          )}
          {guide.condition && (
            <div className={styles.guideSection}>
              <div className={styles.guideSectionTitle}>📊 Állapotminősítési rendszer</div>
              <p className={styles.guidePara}>{guide.condition}</p>
            </div>
          )}
          <div className={styles.guideSection}>
            <div className={styles.guideSectionTitle}>📝 Kötelező leírás tartalma</div>
            <p className={styles.guidePara}>{guide.required}</p>
          </div>
          {guide.extra && (
            <div className={styles.guideSection}>
              <div className={styles.guideSectionTitle}>ℹ️ Fontos tudnivalók</div>
              <p className={styles.guidePara}>{guide.extra}</p>
            </div>
          )}
          <div className={styles.guideSection}>
            <div className={styles.guideSectionTitle}>📸 Fotókészítési szabályok</div>
            <p className={styles.guidePara}>{guide.photos}</p>
          </div>
          <div className={styles.guideSectionRed}>
            <div className={styles.guideSectionTitle}>❌ Mit nem fogadunk el</div>
            <p className={styles.guidePara}>{guide.reject}</p>
          </div>
        </div>
      )}
    </div>
  )
}

function CategorySection({ cat }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.catSection}>
      <button className={styles.catHeader} onClick={() => setOpen(o => !o)}>
        <span className={styles.catIcon}>{cat.icon}</span>
        <span className={styles.catLabel}>{cat.label}</span>
        <span className={styles.catCount}>{cat.guides.length} útmutató</span>
        <span className={styles.catChevron}>{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className={styles.catBody}>
          {cat.guides.map((g, i) => <GuideCard key={i} guide={g} />)}
        </div>
      )}
    </div>
  )
}

export default function SellerGuide() {
  return (
    <div className={styles.wrap}>
      <Helmet>
        <title>Eladói Útmutató — SinkBid</title>
        <meta name="description" content="Kategóriánkénti feltöltési útmutatók eladóknak. Feltételek, elfogadott termékek, kötelező leírás." />
      </Helmet>

      <div className={styles.hero}>
        <div className={styles.tag}>Eladóknak</div>
        <h1 className={styles.title}>Eladói Útmutató</h1>
        <p className={styles.sub}>Feltöltési szabályok és követelmények kategóriánként. Kattints egy kategóriára a részletek megjelenítéséhez.</p>
      </div>

      <div className={styles.generalBox}>
        <div className={styles.generalTitle}>Általános feltöltési szabályok — minden kategóriára érvényes</div>
        <ul className={styles.generalList}>
          {GENERAL_RULES.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>

      <div className={styles.catList}>
        {CATEGORIES.map(cat => (
          <CategorySection key={cat.id} cat={cat} />
        ))}
      </div>

      <div className={styles.contactBox}>
        <div className={styles.contactTitle}>Kérdés esetén</div>
        <div className={styles.contactLine}>
          <a href="mailto:support@sinkbid.com">support@sinkbid.com</a> — Válaszidő: 5 munkanapon belül
        </div>
      </div>
    </div>
  )
}
