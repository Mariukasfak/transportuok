import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Share2, ArrowLeft } from 'lucide-react';
// Helmet usage replaced by centralized SEO component
import SEO from '../components/SEO';
import company from '../data/company';
import { buildAbsoluteUrl, buildCanonicalUrl } from '../lib/seo';

const blogPosts = [
  {
    id: 13,
    slug: '100-reviews-acia-lietuva-buitines-technikos-isvezimas',
    title: '100+ atsiliepimų ir 5.0/5: ačiū, Lietuva! Nemokamas buitinės technikos išvežimas – ir toliau be rūpesčių',
    excerpt: 'Dėkojame už 100+ atsiliepimų (5.0/5)! Greitumas, patogumas ir skaidrumas – tai, ką jūs vertinate. Toliau atsivešame įrangą, išnešame iš bet kurio aukšto, perdirbame atsakingai.',
    date: '2025-11-10',
    imageUrl: '/images/optimized/100-reviews-saligatvis.webp',
    content: `
  <h1 class="text-3xl font-bold mb-6">100+ atsiliepimų ir 5.0/5: ačiū, Lietuva!</h1>
  <p class="text-gray-700 mb-4"><strong>Transportuok.lt bendruomenė užaugino gražų skaičių – 100+ atsiliepimų, vidurkis 5.0/5.</strong> Dėkojame kiekvienam, kas skambino, registravo laiką, atvėrė duris ir paliko įvertinimą. Šis skaičius mums reiškia įsipareigojimą: išnešti greičiau, palikti švariau, o atliekas perdirbti atsakingiau.</p>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Ką klientai vertina labiausiai</h2>

  <div class="grid md:grid-cols-4 gap-4 mb-8">
    <div class="bg-white border border-green-200 rounded-lg p-4 shadow-sm">
      <h3 class="font-semibold text-lg mb-2 text-gray-900">⚡ Greitį</h3>
      <p class="text-gray-700 text-sm">Kaune ir Vilniuje dažnai atvykstame šiandien arba rytoj. Nėra nuolatinių eilių, tik konkretus laikas ir punktualumas.</p>
    </div>
    <div class="bg-white border border-green-200 rounded-lg p-4 shadow-sm">
      <h3 class="font-semibold text-lg mb-2 text-gray-900">🏠 Patogumą</h3>
      <p class="text-gray-700 text-sm">Išnešame iš bet kurio aukšto, atsivežame vežimėlius ir diržus. Saugom sienas ir grindis – naudojame specialius padėklus.</p>
    </div>
    <div class="bg-white border border-green-200 rounded-lg p-4 shadow-sm">
      <h3 class="font-semibold text-lg mb-2 text-gray-900">📋 Skaidrumą</h3>
      <p class="text-gray-700 text-sm">Elektronika ir metalas – nemokamai. Pasakom, kas ir kur keliauja. Galima gauti perdavimo aktus (B2B).</p>
    </div>
    <div class="bg-white border border-green-200 rounded-lg p-4 shadow-sm">
      <h3 class="font-semibold text-lg mb-2 text-gray-900">📱 Komunikaciją</h3>
      <p class="text-gray-700 text-sm">Laiko langai, skambutis prieš atvykimą, reagavimas per 24 h. Žinote, kada laukti.</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kaip veikia paslauga (3 žingsniai)</h2>

  <div class="space-y-6 mb-8">
    <div class="border-l-4 border-green-600 pl-4">
      <h3 class="font-semibold text-lg mb-2 text-gray-900">1️⃣ Registruokite laiką internetu</h3>
      <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li>24/7 (turėkite ryšio, bet priminsime jei reikalingas)</li>
        <li>Tik ~30 sekundžių: adresas, aukštas, kodas</li>
        <li>Pasirinkite patogų laiko langą</li>
      </ul>
    </div>
    <div class="border-l-4 border-green-600 pl-4">
      <h3 class="font-semibold text-lg mb-2 text-gray-900">2️⃣ Atvykstame sutartu langu</h3>
      <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li>Paskambiname prieš kelionę (±15 min)</li>
        <li>Suvedame jums laiko langu</li>
        <li>Turime savo furgonus ir transportą</li>
      </ul>
    </div>
    <div class="border-l-4 border-green-600 pl-4">
      <h3 class="font-semibold text-lg mb-2 text-gray-900">3️⃣ Išnešame → išvežame → perdirbame</h3>
      <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li>Jums – tik atverti duris</li>
        <li>Mes nuryšiavame, pakrauname, išvešame</li>
        <li>Jūs to pačios dienos vakare turite naują erdvę</li>
      </ul>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Ką išvežame (nemokamai arba su dalimi)</h2>

  <div class="grid md:grid-cols-2 gap-6 mb-8">
    <div>
      <h3 class="font-semibold text-lg mb-3 text-gray-900">Didžioji technika</h3>
      <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li>Skalbimo mašinos (priekinės ir viršutinės kraunimo)</li>
        <li>Džiovyklės (kondensacinės, ištraukiamosios)</li>
        <li>Šaldytuvai ir šaldikliai (visos markės)</li>
        <li>Viryklės (dujinės, elektrinės, indukcinės)</li>
        <li>Orkaitės ir gartraukiai</li>
        <li>Indaplousės</li>
      </ul>
    </div>
    <div>
      <h3 class="font-semibold text-lg mb-3 text-gray-900">Elektronika &amp; Kompiuterija</h3>
      <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li>Televizoriai (įsk. CRT – senosios)</li>
        <li>Monitoriai (LCD, LED, OLED)</li>
        <li>Mikrobangės ir garso aparatūra</li>
        <li>Kompiuteriai ir serveriai</li>
        <li>Spausdintuvai ir kopirkai</li>
        <li>Maršrutizatoriai, telefonai, laidai</li>
      </ul>
    </div>
  </div>

  <div class="bg-green-50 border border-green-300 rounded-lg p-6 mb-8">
    <h3 class="font-semibold text-lg mb-3 text-green-900">🌍 Kur dirbame?</h3>
    <ul class="list-disc list-inside text-gray-700 space-y-2">
      <li><strong>Greitieji miestai:</strong> Kaunas ir Vilnius (dažnai šiandien/rytoj)</li>
      <li><strong>Rajonai:</strong> Aptarnaujame per 48-72 h</li>
      <li><strong>Visoje Lietuvoje:</strong> Nuo Panevėžio iki Marijampolės, nuo Telšių iki Utenos</li>
    </ul>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Įmonėms (B2B) – periodiniai maršrutai</h2>
  <p class="text-gray-700 mb-4">Siūlome <strong>bendradarbiavimą su sutartimi:</strong></p>
  <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6">
    <li>Reaktyvus reagavimas per 24 h</li>
    <li>Surinkimo dėžės smulkiai elektronikai biure/gamyboje</li>
    <li>Perdavimo aktai kiekvienam išvežimui</li>
    <li>Mėnesinės ataskaitos – vertimas į jūsų ESG sistemą</li>
    <li>Vienas kontaktas – nereikia dalintis, jei numainytas personalas</li>
    <li>Kainų nuolaidos – didėjant maršrutų dažnumui</li>
  </ul>

  <div class="bg-blue-50 border border-blue-300 rounded-lg p-6 mb-8">
    <p class="text-blue-900 font-semibold mb-3">Padėkime jums pasiekti ESG tikslus!</p>
    <div class="flex flex-col sm:flex-row gap-4">
      <div>
        <p class="text-sm text-gray-600">Kaunas:</p>
        <p class="font-semibold text-blue-900">+370 699 25 744</p>
      </div>
      <div>
        <p class="text-sm text-gray-600">Vilnius:</p>
        <p class="font-semibold text-blue-900">+370 664 24 024</p>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">❓ DUK (Dažnai Užduodami Klausimai)</h2>

  <div class="space-y-4 mb-8">
    <div>
      <h3 class="font-semibold text-gray-900 mb-1">Ar tikrai nemokamai?</h3>
      <p class="text-gray-700">Taip – elektronika ir metalas dažniausiai nemokamai. Nestandartams (pavyzdžiui, labai sunkus šaldytuvas ketvirtame aukšte) pateikiame sprendimą. Būkite atvirūs – iš mūsų pusės taip pat.</p>
    </div>
    <div>
      <h3 class="font-semibold text-gray-900 mb-1">Ar išnešate be lifto?</h3>
      <p class="text-gray-700">Taip, turime vežimėlius, diržus, stiprią komandą ir 10+ metų patirtį. Jei neįmanoma civilizuotai – pasakysime atvirai.</p>
    </div>
    <div>
      <h3 class="font-semibold text-gray-900 mb-1">Ar atvykstate už miesto?</h3>
      <p class="text-gray-700">Taip – nuo Šiaulių iki Alytaus, nuo jūros iki Vilniaus. Rajonuose laukimas truputį ilgesnis (48-72 h), bet mes pasiekiame.</p>
    </div>
    <div>
      <h3 class="font-semibold text-gray-900 mb-1">Ar reikia dokumentų?</h3>
      <p class="text-gray-700">Gyventojams – nereikia. Organizacijoms – teikiame perdavimo aktus ir ataskaitas. Elektronikos – naudojame sertifikuotus partnerius.</p>
    </div>
    <div>
      <h3 class="font-semibold text-gray-900 mb-1">Ar grindys/sienos nepažeistos?</h3>
      <p class="text-gray-700">Garantuojame! Turime specialius padėklus, mažiausiai žalingas atsargą ir darbą. Jei bus problema – atlygynam.</p>
    </div>
  </div>

  <div class="bg-green-600 text-white rounded-lg p-8 text-center mb-8">
    <h2 class="text-2xl font-bold mb-4">🙏 Ačiū už pasitikėjimą</h2>
    <p class="mb-6 text-lg">Jeigu turite <strong>skalbyklę, šaldytuvą, TV ar kitą buitinę techniką</strong>, kuris tik užima vietą – <strong>užsakykite laiką dabar</strong>, o mes grąžinsime erdvę ir tvarką.</p>
    <p class="font-semibold text-green-100">Erdvę grąžintą jūs turėsite dar šiandien.</p>
  </div>

  <div class="flex gap-3 flex-wrap">
    <a href="/paslaugos/buitines-technikos-isvezimas" class="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700">👉 Užsakyti išvežimą dabar</a>
    <a href="/kontaktai" class="px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50">👉 Gauti B2B pasiūlymą</a>
  </div>
    `,
    metaTitle: '100+ atsiliepimų ir 5.0/5 | Nemokamas buitinės technikos išvežimas – Transportuok.lt',
    metaDescription: 'Ačiū už 100+ atsiliepimų (5.0/5)! Išnešame ir nemokamai išvežame buitinę techniką bei elektroniką visoje Lietuvoje. Kaunas/Vilnius – šiandien arba rytoj.',
    ogImage: '/images/optimized/100-reviews-saligatvis.webp',
  },
  {
    id: 12,
    slug: 'nemokamas-buitines-technikos-isvezimas-tvarka',
    title: 'Nemokamas buitinės technikos išvežimas Lietuvoje: tvarka be rūpesčių',
    excerpt: 'Išvežimo paslaugos be naudžių rūpesčių - išnešame, išvežame ir perdirbame. Dėl transportavimo ir formalumų pasirūpina Transportuok.lt profesionalai.',
    date: '2025-10-27',
    imageUrl: '/images/optimized/straipsnis-buitine-technika-network-large.webp',
    content: `
  <h1 class="text-3xl font-bold mb-6">Nemokamas buitinės technikos išvežimas Lietuvoje: tvarka be rūpesčių</h1>
  <p class="text-gray-700 mb-4">Ar pažįstate tą jausmą, kai vienas senas šaldytuvas ar skalbyklė „suriša" visą koridorių? <strong>Transportuok.lt</strong> sukurta paslauga nuima šį mazgą taip pat lengvai, kaip išsikviesti pavežėją: pasirenkate laiką, mes išnešame ir nemokamai išvežame (elektronika ir metalas), o jūs tą pačią dieną atgaunate erdvę ir ramybę.</p>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kodėl tai veikia: trijų barjerų sprendimas</h2>
  <div class="grid md:grid-cols-3 gap-4 mb-8">
    <div class="bg-white border border-green-200 rounded-lg p-6 shadow-sm">
      <h3 class="font-semibold text-lg mb-3 text-gray-900">🚫 Neturiu transporto</h3>
      <p class="text-gray-700">Turime savo, pritaikytą sunkiai technikai – nereikia ieškoti kempinės ar prašyti draugų pagalbos.</p>
    </div>
    <div class="bg-white border border-green-200 rounded-lg p-6 shadow-sm">
      <h3 class="font-semibold text-lg mb-3 text-gray-900">💪 Bijau nešti</h3>
      <p class="text-gray-700">Išnešame iš bet kurio aukšto – turime vežimėlius, diržus ir daugiau nei 10 metų patirtį.</p>
    </div>
    <div class="bg-white border border-green-200 rounded-lg p-6 shadow-sm">
      <h3 class="font-semibold text-lg mb-3 text-gray-900">❓ Nežinau kur priduoti</h3>
      <p class="text-gray-700">Perdirbame per patikimus partnerius, prireikus pateikiame dokumentus ir ataskaitas.</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kaip veikia: 3 aiškūs žingsniai</h2>
  <ol class="list-decimal pl-6 space-y-4 text-gray-700 mb-8">
    <li><span class="font-semibold">Pasirink laiką internetu</span> – 24/7, tik ~30 sekundžių. Adresą, aukštą, kodą.</li>
    <li><span class="font-semibold">Atvykstame sutartu langu</span> – paskambbiname prieš atvykimą. Kaunas/Vilnius – dažnai šiandien/rytoj.</li>
    <li><span class="font-semibold">Išnešame → išvežame → perdirbame</span> – jums tik atverti duris. Dirbame visoje Lietuvoje.</li>
  </ol>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Ką paimame nemokamai?</h2>
  <div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
    <div class="grid md:grid-cols-3 gap-6">
      <div>
        <h3 class="font-semibold text-green-800 mb-3">Didžioji buitinė technika</h3>
        <ul class="space-y-1 text-gray-700 text-sm">
          <li>✅ Skalbimo mašinos, džiovyklės</li>
          <li>✅ Šaldytuvai, viryklės</li>
          <li>✅ Orkaitės, indaplausės</li>
          <li>✅ Gartraukiai, mikrobangės</li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-green-800 mb-3">Elektronika</h3>
        <ul class="space-y-1 text-gray-700 text-sm">
          <li>✅ Televizoriai (įsk. CRT)</li>
          <li>✅ Monitoriai, audio aparatūra</li>
          <li>✅ Nešiojamieji kompiuteriai</li>
          <li>✅ Serveriai, spausdintuvai</li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-green-800 mb-3">Metalas ir kita</h3>
        <ul class="space-y-1 text-gray-700 text-sm">
          <li>✅ Metalo laužas (superkame)</li>
          <li>✅ Laidai ir jungikliai</li>
          <li>✅ Kompiuterių dalys</li>
          <li>✅ Mobilieji telefonai</li>
        </ul>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kodėl verta?</h2>
  <div class="grid md:grid-cols-2 gap-4 mb-8">
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <h3 class="font-semibold mb-2">Sutaupote laiką ⏱️</h3>
      <ul class="list-disc pl-5 text-sm text-gray-700 space-y-1">
        <li>Jokių eilių aikštelėse</li>
        <li>Nuo užsakymo – per 24-48 h</li>
      </ul>
    </div>
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <h3 class="font-semibold mb-2">Saugiau 🏠</h3>
      <ul class="list-disc pl-5 text-sm text-gray-700 space-y-1">
        <li>Tvarkingas išnešimas</li>
        <li>10+ metų patirtis</li>
      </ul>
    </div>
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <h3 class="font-semibold mb-2">Ramybė 🧠</h3>
      <ul class="list-disc pl-5 text-sm text-gray-700 space-y-1">
        <li>Daiktai perdirbami, ne išmetami</li>
        <li>Elektronika – atsakingai utilizuojama</li>
      </ul>
    </div>
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <h3 class="font-semibold mb-2">Skaidrumas 📋</h3>
      <ul class="list-disc pl-5 text-sm text-gray-700 space-y-1">
        <li>Perdavimo aktai ir ataskaitos</li>
        <li>Aktualu įmonėms ir NT valdytojams</li>
      </ul>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Dažniausiai klausiami klausimai</h2>
  <div class="space-y-4 mb-8">
    <div class="bg-white border border-gray-200 rounded-lg p-4">
      <h3 class="font-semibold text-gray-900 mb-2">❓ Ar tikrai nemokamai?</h3>
      <p class="text-gray-700 text-sm">Taip – elektronika ir metalas. Nestandartams pasiūlysime sprendimą pagal situaciją.</p>
    </div>
    <div class="bg-white border border-gray-200 rounded-lg p-4">
      <h3 class="font-semibold text-gray-900 mb-2">❓ Ar išnešate be lifto?</h3>
      <p class="text-gray-700 text-sm">Taip. Dirbame dviese/trise, turime vežimėlius ir diržus.</p>
    </div>
    <div class="bg-white border border-gray-200 rounded-lg p-4">
      <h3 class="font-semibold text-gray-900 mb-2">❓ Ar atvykstate už miesto?</h3>
      <p class="text-gray-700 text-sm">Taip – visa Lietuva. Didesniams miestams per 24 h, rajonams – per 2-3 darbo dienas.</p>
    </div>
  </div>

  <div class="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-6 mb-8">
    <h2 class="text-2xl font-semibold mb-4">Kontaktai</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <h3 class="font-semibold mb-2">Kaunas ir regionas</h3>
        <p class="text-sm opacity-90">📞 +370 699 25 744</p>
        <p class="text-sm opacity-90">📧 info@transportuok.lt</p>
      </div>
      <div>
        <h3 class="font-semibold mb-2">Vilnius ir visa Lietuva</h3>
        <p class="text-sm opacity-90">📞 +370 664 24 024</p>
        <p class="text-sm opacity-90">📧 karavanaslt@gmail.com</p>
      </div>
    </div>
  </div>

  <div class="flex gap-3 flex-wrap">
    <a href="/kontaktai#contact-form" class="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700">👉 Užsakyti išvežimą dabar</a>
    <a href="/kontaktai" class="px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50">👉 B2B pasiūlymas</a>
  </div>
    `,
    metaTitle: 'Nemokamas buitinės technikos išvežimas | Transportuok.lt',
    metaDescription: 'Nemokamai išvešame buitinę techniką, elektroniką ir metalą Lietuvoje. Profesionalus išnešimas, tvarki perdirbimo procedūra. Užsakykite per 30 sekundžių.',
    ogImage: '/images/optimized/straipsnis-buitine-technika-network.webp',
  },
  {
    id: 11,
    slug: 'nemokamas-buitines-technikos-paemimas-is-namu-2025',
    title: 'Nemokamas buitinės technikos paėmimas iš namų Kaune ir Vilniuje – žalioji instrukcija 2025',
    excerpt: 'Gidas gyventojams: kaip pasiruošti nemokamam buitinės technikos išvežimui Kaune ir Vilniuje, kur palikti prietaisus ir kodėl Transportuok.lt yra patikimiausias pasirinkimas.',
    date: '2025-10-10',
    imageUrl: '/images/straipsnis7.webp',
    content: `
  <h1 class="text-3xl font-bold mb-6">Nemokamas buitinės technikos paėmimas iš namų Kaune ir Vilniuje – žalioji instrukcija 2025</h1>
  <p class="text-gray-700 mb-4">2025-ieji tapo metais, kai <strong>nemokamas buitinės technikos išvežimas</strong> Kaune ir Vilniuje išaugo 42 %. Transportuok.lt komanda pastebi, kad gyventojai vis dažniau nori žinoti, <em>kur palikti šaldytuvą, dujinę viryklę, vonią, pečių, metalą ar elektronikos likučius</em>, kad viskas įvyktų saugiai, greitai ir tvariai. Šis gidas – praktinis atsakymas į dažniausius klausimus.</p>

  <div class="bg-green-600 text-white rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
    <div class="mb-4 sm:mb-0">
      <h2 class="text-xl font-semibold">Norite, kad išvežtume rytoj?</h2>
      <p class="text-sm opacity-90">Nemokamas paėmimas Kaune ir Vilniuje – sutariame grafikus per 24 val.</p>
    </div>
    <div class="flex flex-wrap gap-3">
      <a href="tel:+37069925744" class="px-4 py-2 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-100">Skambinti +370 699 25 744</a>
      <a href="/kontaktai#contact-form" class="px-4 py-2 border border-white font-semibold rounded-lg hover:bg-white hover:text-green-700">Pateikti užklausą</a>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kur palikti prietaisus – laiptinėje ar lauke?</h2>
  <div class="grid md:grid-cols-2 gap-4 mb-6">
    <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <h3 class="font-semibold text-lg mb-2 text-gray-900">Daugiabučių gyventojams</h3>
      <ul class="list-disc pl-6 space-y-2 text-gray-700">
        <li>Šaldytuvus, skalbimo mašinas ir virykles patogiausia palikti <strong>laiptinės apačioje</strong> arba prie sandėliuko durų.</li>
        <li>Durys turėtų būti prilaikytos, kad prietaisus būtų galima išstumti be papildomų įrankių.</li>
        <li>Jei laiptinė siaura, rekomenduojame <strong>palikti prietaisus lauke</strong> po stogeliu ir nurodyti tikslią vietą užsakymo formoje.</li>
      </ul>
    </div>
    <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <h3 class="font-semibold text-lg mb-2 text-gray-900">Nuosavų namų savininkams</h3>
      <ul class="list-disc pl-6 space-y-2 text-gray-700">
        <li>Palikite prietaisus kieme ar garaže taip, kad būtų galimybė privažiuoti mikroautobusui.</li>
        <li>Dujines virykles rekomenduojame atjungti profesionaliai ir pažymėti, kad dujų tiekimas sustabdytas.</li>
        <li>Metalo laužą ir elektrinius įrankius galima sukrauti ant vieno padėklo – taip užsakymas bus atliktas greičiau.</li>
      </ul>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Ką paimame nemokamai?</h2>
  <div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
    <div class="grid md:grid-cols-3 gap-4">
      <div>
        <h3 class="font-semibold text-green-800 mb-3">Didžioji buitinė technika</h3>
        <ul class="list-disc pl-6 space-y-1 text-gray-700 text-sm">
          <li>Šaldytuvai, šaldikliai, vyninės spintos</li>
          <li>Skalbimo mašinos, džiovyklės, indaplovės</li>
          <li>Dujinės ir elektrinės viryklės, orkaitės, gartraukiai</li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-green-800 mb-3">Sunkioji įranga ir metalas</h3>
        <ul class="list-disc pl-6 space-y-1 text-gray-700 text-sm">
          <li>Kietojo kuro pečiai, katilai, radiatoriai</li>
          <li>Vonia, dušo kabinos karkasas, metaliniai vamzdžiai</li>
          <li>Metalo laužas ir kabeliai (galimas supirkimas vietoje)</li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-green-800 mb-3">Elektronika ir smulkūs prietaisai</h3>
        <ul class="list-disc pl-6 space-y-1 text-gray-700 text-sm">
          <li>Televizoriai, monitoriai, audio aparatūra</li>
          <li>Kavos aparatai, mikrobangės, virtuvės kombainai</li>
          <li>Kompiuteriai, UPS'ai, serverių dalys (su duomenų sunaikinimo pažyma)</li>
        </ul>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Žingsniai iki išvežimo – paprasta kaip 1-2-3</h2>
  <ol class="list-decimal pl-6 space-y-3 text-gray-700 mb-8">
    <li><span class="font-semibold">Registruokite užsakymą:</span> nurodykite adresą, aukštą, kodą ir prietaisų sąrašą. Galite pridėti nuotrauką, kad planuotume nešimo įrangą.</li>
    <li><span class="font-semibold">Paruoškite prietaisus:</span> atjunkite šaldytuvus nuo elektros 24 val. prieš paėmimą, ištuštinkite vandenį iš skalbyklių, palikite atviras dureles, kad išgaruotų kvapai.</li>
    <li><span class="font-semibold">Palikite prieinamoje vietoje:</span> laiptinėje, kieme ar sandėliuke pažymėkite lipduku „Transportuok.lt“. Mūsų komanda atvyks sutartu laiku ir pasirašys perdavimo aktą.</li>
  </ol>

  <div class="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-8">
    <h2 class="text-2xl font-semibold text-green-700 mb-4">Tvarumo ir ESG nauda</h2>
    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <h3 class="font-semibold text-gray-900 mb-2">Aplinkosauga</h3>
        <ul class="list-disc pl-6 space-y-2 text-gray-700 text-sm">
          <li>Šaldytuvų freonas surenkamas ir utilizuojamas sertifikuotoje linijoje – išvengiama 1430 CO₂ ekv. kg emisijų.</li>
          <li>Metalo perdirbimas sumažina rūdos kasimo poreikį ir taupo iki 70 % energijos.</li>
          <li>Elektronikos plokštės perdavimo partneriai atgauna retuosius metalus, mažindami sąvartynų apkrovą.</li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900 mb-2">Bendruomenės įtraukimas</h3>
        <ul class="list-disc pl-6 space-y-2 text-gray-700 text-sm">
          <li>Gyventojai informuojami per el. laiškus ir laiptinių skelbimus apie atliekų paėmimo datas.</li>
          <li>Atliekų kiekiai fiksuojami, todėl seniūnijos gauna duomenis apie taršos mažinimą.</li>
          <li>Transportas planuojamas <em>AI</em> pagrindu – maršrutai trumpėja, mažėja spūstys.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
    <h2 class="text-2xl font-semibold text-green-700 mb-4">Kodėl Transportuok.lt – Nr. 1 pasirinkimas Lietuvoje?</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <ul class="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>100 % licencijuotas tvarkymas:</strong> laikomės <em>Atliekų tvarkymo įstatymo</em> ir LR aplinkos ministerijos rekomendacijų – gaunate oficialius perdavimo dokumentus.</li>
          <li><strong>Lokali komanda Kaune ir Vilniuje:</strong> turime atskirus maršrutus <a href="/kaunas" class="text-green-700 hover:text-green-800 font-semibold">Kauno</a> ir <a href="/vilnius" class="text-green-700 hover:text-green-800 font-semibold">Vilniaus</a> padaliniams, todėl reaguojame greičiau nei nacionaliniai vežėjai.</li>
          <li><strong>Partnerių ekosistema:</strong> su <a href="/partneriai" class="text-green-700 hover:text-green-800 font-semibold">Transportuok.lt partneriais</a> pasirūpiname metalo supirkimu, katalizatorių perdirbimu ir dokumentacija be papildomų tarpininkų.</li>
        </ul>
      </div>
      <div>
        <ul class="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>Duomenimis grįsta logistika:</strong> AI planuojami maršrutai sumažina CO₂ pėdsaką ~18 % palyginti su pavieniais iškvietimais.</li>
          <li><strong>Klientų pasitikėjimas:</strong> vidutinis įvertinimas <a href="/naujienos/partneryste-su-katalizatoriu-supirkimas-lt" class="text-green-700 hover:text-green-800 font-semibold">Google atsiliepimuose</a> – 4,9/5, remiantis daugiau nei 600 užsakymų.</li>
          <li><strong>Turinio ekspertizė:</strong> mūsų straipsnių biblioteka, pvz. <a href="/naujienos/nemokamas-buitines-technikos-isvezimas-2025" class="text-green-700 hover:text-green-800 font-semibold">2025 m. nemokamo išvežimo strategija</a>, nuolat atnaujinama pagal Aplinkos apsaugos agentūros duomenis.</li>
        </ul>
      </div>
    </div>
    <div class="mt-6 border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
      <p class="text-sm text-gray-700">Ekspertų rekomendacija: buitinę techniką perduokite licencijuotam tvarkytojui – tai ne tik apsaugo aplinką, bet ir užkerta kelią nenumatytoms baudoms. Transportuok.lt pasirūpina visais formalumais už jus.</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Klausimai, kuriuos girdime dažniausiai</h2>
  <div class="space-y-4 mb-8">
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Ar paslauga nemokama visiems?</h3>
      <p class="text-gray-700">Taip, Kaune ir Vilniuje didžiosios buitinės technikos paėmimas iš gyventojų yra nemokamas. Verslams pateikiame individualų pasiūlymą su atliekų apskaitos dokumentais.</p>
    </div>
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Ar galiu palikti prietaisą, jei nebūsiu namuose?</h3>
      <p class="text-gray-700">Žinoma. Palikite prietaisą laiptinėje ar kieme ir nurodykite, kur rasti raktą / kodą. Mūsų komanda užfiksuos paėmimą nuotraukomis.</p>
    </div>
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Kas vyksta su dujinėmis viryklėmis ir pečiais?</h3>
      <p class="text-gray-700">Dujines virykles ir kietojo kuro pečius pernešame su specialiais vežimėliais, o jas perdavę partneriams gauname pažymą apie pavojingų komponentų išardymą.</p>
    </div>
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Ar gausiu dokumentus?</h3>
      <p class="text-gray-700">Gyventojams siunčiame patvirtinimo laišką, o įmonėms – atliekų perdavimo aktą ir, jei reikia, nuotraukų ataskaitą.</p>
    </div>
  </div>

  <div class="bg-green-600 text-white rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
    <div class="mb-4 sm:mb-0">
      <h3 class="text-xl font-semibold">Palikote prietaisus laiptinėje? Mes jau pakeliui.</h3>
      <p class="text-sm opacity-90">Dirbame visomis darbo dienomis, savaitgaliais vykdome suplanuotus maršrutus.</p>
    </div>
    <div class="flex flex-wrap gap-3">
      <a href="https://www.google.com/maps/dir/?api=1&destination=Transportuok.lt" class="px-4 py-2 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-100">Sekti maršrutą</a>
      <a href="mailto:info@transportuok.lt" class="px-4 py-2 border border-white font-semibold rounded-lg hover:bg-white hover:text-green-700">info@transportuok.lt</a>
    </div>
  </div>

  <div class="mt-10 border-t border-gray-200 pt-8">
    <h2 class="text-2xl font-semibold text-green-700 mb-4">Toliau skaitykite</h2>
    <ul class="list-disc pl-6 space-y-2 text-gray-700">
      <li><a href="/naujienos/kaip-teisingai-utilizuoti-saldytuva-kaunieciai" class="text-green-700 hover:text-green-800 font-semibold">Kaip teisingai utilizuoti šaldytuvą Kaune</a> – žingsnis po žingsnio paruošimo gidas.</li>
      <li><a href="/naujienos/kodel-svarbu-tinkamai-ismesti-elektronikos-atliekas" class="text-green-700 hover:text-green-800 font-semibold">Kodėl svarbu tinkamai tvarkyti elektronikos atliekas</a> – svarbiausi pavojai ir sprendimai.</li>
      <li><a href="/naujienos/partneryste-su-katalizatoriu-supirkimas-lt" class="text-green-700 hover:text-green-800 font-semibold">Partnerystė su Katalizatoriu-supirkimas.lt</a> – kaip bendradarbiavimas užtikrina ESG tikslus.</li>
    </ul>
  </div>

  <p class="text-sm text-gray-500 mt-8">Atnaujinta: 2025-10-10</p>
    `,
    metaTitle: 'Nemokamas buitinės technikos paėmimas Kaune ir Vilniuje | Transportuok.lt',
    metaDescription: 'Sužinokite, kaip 2025 m. nemokamai perduoti šaldytuvus, virykles, pečius, metalą ir elektroniką Kaune bei Vilniuje. Praktiniai patarimai kur palikti prietaisus ir kaip prisidėti prie tvarumo.',
    ogImage: '/images/straipsnis7.webp',
  },
  {
    id: 9,
    slug: 'nemokamas-buitines-technikos-isvezimas-2025',
    title: 'Nemokamas buitinės technikos išvežimas Kaune ir Vilniuje – 2025 strategija',
    excerpt: 'Aktualus gidas gyventojams ir verslui: kaip 2025 m. nemokamai išvežti buitinę techniką Kaune ir Vilniuje, pasiruošti per 24 val. ir pasinaudoti papildomomis paslaugomis.',
    date: '2025-02-05',
    imageUrl: '/images/straipsnis3.webp',
    content: `
  <h1 class="text-3xl font-bold mb-6">Nemokamas buitinės technikos išvežimas Kaune ir Vilniuje – 2025 strategija</h1>
  <p class="text-gray-700 mb-4">Augant elektronikos ir buitinės technikos keitimo tempui, <strong>nemokamas išvežimas</strong> tapo kritiška paslauga tiek daugiabučių gyventojams, tiek verslo klientams. Šiame 2025 m. vadove pasidalinsime, kaip pasiruošti surinkimui, kokius prietaisus priimame ir kaip išnaudoti papildomas Karavanas LT galimybes.</p>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kodėl verta rinktis profesionalų nemokamą išvežimą?</h2>
  <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
    <li><span class="font-semibold">Licencijuota tvarkyba:</span> visos atliekos perduodamos perdirbimo partneriams ir įtraukiamos į <em>WEEE</em> apskaitą.</li>
    <li><span class="font-semibold">Nulinės išlaidos:</span> Kaune ir Vilniuje šaldytuvai, skalbimo mašinos, viryklės ir televizoriai išvežami be papildomų mokesčių.</li>
    <li><span class="font-semibold">Atsakomybė už visą procesą:</span> nuo išnešimo iš 5 aukšto iki dokumentų išrašo – viską atliekame mes.</li>
  </ul>

  <div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
    <h3 class="font-semibold text-green-800 mb-3">Kaip veikia užsakymas?</h3>
    <ol class="list-decimal pl-6 space-y-2 text-gray-700">
      <li><strong>Registracija:</strong> užpildykite <a href="/kontaktai#contact-form" class="text-green-700 hover:text-green-800 font-semibold">užklausos formą</a> arba paskambinkite.</li>
      <li><strong>Pasiruošimas:</strong> atjunkite prietaisus nuo elektros ir vandentiekio, ištuštinkite vidų, palikite atviras duris.</li>
      <li><strong>Surinkimas:</strong> mūsų komanda atvyksta sutartu laiku, išneša ir pakrauna prietaisus, o jūs gaunate perdavimo patvirtinimą.</li>
    </ol>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Miestų specifika 2025 metais</h2>
  <div class="grid md:grid-cols-2 gap-4 mb-6">
    <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <h3 class="font-semibold text-lg mb-2 text-gray-900">Kaunas</h3>
      <p class="text-gray-700">Nemokamas išvežimas visiems dideliems prietaisams ir metalo laužui. Prioritetas teikiamas užsakymams centruose bei <a href="/kaunas" class="text-green-600 hover:text-green-700 font-semibold">Kauno padalinio puslapyje</a> nurodytose seniūnijose.</p>
    </div>
    <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <h3 class="font-semibold text-lg mb-2 text-gray-900">Vilnius</h3>
      <p class="text-gray-700">Sostinėje nemokamas surinkimas apima daugiabučius, biurus ir gamybines patalpas. Suderinus grafiką, vykstame ir į Vilniaus rajoną – plačiau rasite <a href="/vilnius" class="text-green-600 hover:text-green-700 font-semibold">Vilniaus padalinio puslapyje</a>.</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Papildomos galimybės</h2>
  <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
    <li><strong>Fotofiksacija</strong> prieš ir po išvežimo – naudinga NT valdytojams.</li>
    <li><strong>Pervežimas į laikiną saugojimą</strong> (renovuojant patalpas) už simbolinį mokestį.</li>
    <li><strong>Dokumentų archyvas</strong> – per 10 min. atsiunčiame perdavimo aktą į el. paštą.</li>
  </ul>

  <div class="bg-green-600 text-white rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
    <div class="mb-4 sm:mb-0">
      <h3 class="text-xl font-semibold">Paruošę prietaisus? Išsikvieskite komandą per 60 sekundžių.</h3>
      <p class="text-sm opacity-90">Atsakome per 24 val. darbo dienomis ir suderiname patogiausią laiką.</p>
    </div>
    <div class="flex flex-wrap gap-3">
      <a href="tel:+37069925744" class="px-4 py-2 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-100">Skambinti +370 699 25 744</a>
      <a href="/kontaktai#contact-form" class="px-4 py-2 border border-white font-semibold rounded-lg hover:bg-white hover:text-green-700">Pateikti užklausą</a>
    </div>
  </div>

  <p class="text-sm text-gray-500">Atnaujinta: 2025-02-05</p>
    `,
    metaTitle: 'Nemokamas buitinės technikos išvežimas 2025 | Kaunas ir Vilnius',
    metaDescription: 'Kaip 2025 m. nemokamai išvežti buitinę techniką Kaune ir Vilniuje. Pasiruošimo žingsniai, aptarnavimo teritorijos, papildomos Karavanas LT paslaugos.',
    ogImage: '/images/straipsnis3.webp',
  },
  {
    id: 10,
    slug: 'partneryste-su-katalizatoriu-supirkimas-lt',
    title: 'Partnerystė su Katalizatoriu-supirkimas.lt – SEO sinergija atliekų tvarkyme',
    excerpt: 'Karavanas LT ir Katalizatoriu-supirkimas.lt jungia jėgas: vieninga SEO strategija, platesnis aptarnavimo spektras ir papildomos naudos klientams visoje Lietuvoje.',
    date: '2025-02-12',
    imageUrl: '/images/straipsnis4.webp',
    content: `
  <h1 class="text-3xl font-bold mb-6">Partnerystė su Katalizatoriu-supirkimas.lt – SEO sinergija atliekų tvarkyme</h1>
  <p class="text-gray-700 mb-4"><strong>Karavanas LT</strong> pradeda strateginę partnerystę su <a href="https://katalizatoriu-supirkimas.lt/" target="_blank" rel="noopener noreferrer" class="text-green-700 hover:text-green-800 font-semibold">Katalizatoriu-supirkimas.lt</a>. Abi įmonės turi ilgametę patirtį atliekų surinkimo ir perdirbimo rinkoje, o bendras SEO planas leidžia klientams greičiau rasti reikiamas paslaugas ir gauti pilną sprendimą vienu vizitu.</p>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Į ką orientuojasi bendradarbiavimas?</h2>
  <div class="grid md:grid-cols-2 gap-4 mb-6">
    <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <h3 class="font-semibold text-lg mb-2 text-gray-900">Pilnas atliekų ciklas</h3>
      <p class="text-gray-700">Karavanas LT pasirūpina buitinės technikos ir elektronikos surinkimu, o partneriai – katalizatorių supirkimu, brangiųjų metalų išgavimu bei sertifikuotu perdirbimu.</p>
    </div>
    <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <h3 class="font-semibold text-lg mb-2 text-gray-900">Šildančios SEO pozicijos</h3>
      <p class="text-gray-700">Bendra turinio strategija užtikrina, kad paieškose dominuotų patikimi lietuviški atliekų tvarkytojai, o klientai pasirinktų paslaugas, atitinkančias ESG principus.</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Ką gauna klientai?</h2>
  <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
    <li><strong>Vienas kontaktas</strong> visam atliekų tvarkymo paketui – nuo buitinės technikos iki katalizatorių.</li>
    <li><strong>Greitesnė paieška</strong> – SEO optimizuoti nusileidimo puslapiai plačiai aprėpia <em>atliekų surinkimas</em>, <em>katalizatorių supirkimas</em> ir <em>žiedinė ekonomika</em> užklausas.</li>
    <li><strong>Patikimumo signalai</strong> – aiškiai pateikiami rekvizitai, sertifikatai ir realūs klientų atsiliepimai.</li>
  </ul>

  <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
    <h3 class="font-semibold text-blue-900 mb-3">SEO veiksmų planas</h3>
    <ol class="list-decimal pl-6 space-y-2 text-gray-700">
      <li><strong>Turinio tinklaraštis:</strong> kuriame teminius straipsnius apie katalizatorių perdirbimą, eismo saugą ir atliekų prevenciją.</li>
      <li><strong>Vidiniai ir išoriniai backlink'ai:</strong> cross-link'ai tarp Karavanas LT ir Katalizatoriu-supirkimas.lt sustiprina autoritetą.</li>
      <li><strong>Lokalių puslapių optimizacija:</strong> kuriame <em>Vilniaus</em>, <em>Kauno</em>, <em>Klaipėdos</em> raktažodžiams pritaikytus skiltis.</li>
    </ol>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kaip pasinaudoti partneryste?</h2>
  <p class="text-gray-700 mb-4">Jei renovuojate dirbtuves, servisą ar gamybinį cechą, galite sujungti paslaugas: Karavanas LT išvež buitinę techniką ir elektroniką, o <a href="https://katalizatoriu-supirkimas.lt/" target="_blank" rel="noopener noreferrer" class="text-green-700 hover:text-green-800 font-semibold">Katalizatoriu-supirkimas.lt</a> užtikrins katalizatorių supirkimą už konkurencingą kainą.</p>
  <p class="text-gray-700 mb-6">Susiderinti vizitus galite paskambinę <a href="tel:+37066424024" class="text-green-700 hover:text-green-800 font-semibold">+370 664 24 024</a> arba užpildę <a href="/kontaktai#contact-form" class="text-green-700 hover:text-green-800 font-semibold">užklausą internete</a>. Mūsų komanda surezgins tvarkaraštį ir pateiks vieną bendrą pasiūlymą.</p>

  <div class="bg-green-600 text-white rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
    <div class="mb-4 sm:mb-0">
      <h3 class="text-xl font-semibold">Pasiruošę bendram projektui?</h3>
      <p class="text-sm opacity-90">Susitarkite dėl išvežimo ir katalizatorių supirkimo vienu skambučiu.</p>
    </div>
    <div class="flex flex-wrap gap-3">
      <a href="https://www.google.com/maps/dir/?api=1&destination=Karavanas+LT,+Vilnius" class="px-4 py-2 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-100">Atvykti į biurą</a>
      <a href="/kontaktai#contact-form" class="px-4 py-2 border border-white font-semibold rounded-lg hover:bg-white hover:text-green-700">Derinti projektą</a>
    </div>
  </div>

  <p class="text-sm text-gray-500">Atnaujinta: 2025-02-12</p>
    `,
    metaTitle: 'Partnerystė su Katalizatoriu-supirkimas.lt | Atliekų ir SEO sinergija',
    metaDescription: 'Karavanas LT ir Katalizatoriu-supirkimas.lt pristato bendrą SEO strategiją ir atliekų tvarkymo paketą. Vienas kontaktas, platesnis paslaugų spektras ir patikimumo garantijos.',
    ogImage: '/images/straipsnis4.webp',
  },
  {
    id: 1,
    slug: 'kaip-teisingai-utilizuoti-saldytuva-kaunieciai',
    title: 'Kaip teisingai utilizuoti šaldytuvą – išsamus vadovas kauniečiams',
    excerpt: 'Kaip tinkamai paruošti seną šaldytuvą išvežimui ir saugiam perdirbimui Kaune. Aiškūs žingsniai, ekologinė atsakomybė ir DUK atsakymai vienoje vietoje.',
    date: '2025-01-15',
    imageUrl: '/images/straipsnis5.webp',
    content: `
  <h1 class="text-3xl font-bold mb-6">Kaip teisingai utilizuoti šaldytuvą – vadovas Kaune gyvenantiems</h1>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Įžanga</h2>
  <p class="mb-4">
    Seno šaldytuvo atsikratymas – tai ne tik būtina užduotis, bet ir <strong>atsakomybė prieš gamtą</strong>. Šiame išsamiame vadove 
    sužinosite, kaip Kaune tinkamai pasiruošti šaldytuvo utilizavimui ir pasirūpinti jo ekologišku perdirbimu.
  </p>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kodėl verta utilizuoti šaldytuvą atsakingai?</h2>
  <div class="bg-gray-50 p-6 rounded-lg mb-6">
    <ul class="list-disc pl-6 space-y-2">
      <li class="mb-2"><span class="font-semibold">Freonas ir šaltnešiai</span> – kenkia ozono sluoksniui ir skatina klimato kaitą</li>
      <li class="mb-2"><span class="font-semibold">Pavojingos medžiagos</span> – netinkamai išmestas gali užteršti aplinką ir gruntinius vandenis</li>
      <li class="mb-2"><span class="font-semibold">Perdirbimo galimybės</span> – dauguma dalių (metalas, plastikas) gali būti perdirbtos ir panaudotos iš naujo</li>
      <li class="mb-2"><span class="font-semibold">Teisiniai reikalavimai</span> – ES ir Lietuvos įstatymai reikalauja tinkamo elektronikos atliekų tvarkymo</li>
    </ul>
  </div>

  <div class="border-l-4 border-green-500 pl-4 italic my-6">
    <p>Žinote, kad šaldytuve esantys šaltnešiai gali būti net 1400 kartų kenksmingesni šiltnamio efektui nei CO₂?</p>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kaip tinkamai paruošti šaldytuvą išvežimui?</h2>
  <p class="mb-4">Prieš išvežant seną šaldytuvą, svarbu jį tinkamai paruošti. Štai keletas paprastų žingsnių:</p>
  
  <div class="pl-6 mb-6">
    <div class="flex items-start mb-4">
      <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
        <span class="text-green-700 font-bold">1</span>
      </div>
      <div>
        <p class="font-semibold">Išjunkite iš elektros</p>
        <p class="text-gray-600">Atjunkite šaldytuvą nuo elektros tinklo bent 24 valandas prieš išvežimą</p>
      </div>
    </div>
    
    <div class="flex items-start mb-4">
      <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
        <span class="text-green-700 font-bold">2</span>
      </div>
      <div>
        <p class="font-semibold">Ištuštinkite ir išvalykite</p>
        <p class="text-gray-600">Pašalinkite visus maisto produktus, atšildykite šaldiklį ir sausai išvalykite vidų</p>
      </div>
    </div>
    
    <div class="flex items-start mb-4">
      <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
        <span class="text-green-700 font-bold">3</span>
      </div>
      <div>
        <p class="font-semibold">Išimkite lentynas ir stalčius</p>
        <p class="text-gray-600">Išimkite visas nuimamas dalis, kad jos nesusilaužytų transportavimo metu</p>
      </div>
    </div>
    
    <div class="flex items-start mb-4">
      <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
        <span class="text-green-700 font-bold">4</span>
      </div>
      <div>
        <p class="font-semibold">Užfiksuokite dureles</p>
        <p class="text-gray-600">Jei laikysite lauke ar laiptinėje – užtikrinkite, kad durelės būtų saugiai užfiksuotos</p>
      </div>
    </div>
  </div>

  <div class="bg-green-50 p-6 rounded-lg my-8 border border-green-200">
    <h3 class="font-bold text-xl mb-4 text-green-700">Užsakykite nemokamą išvežimą</h3>
    <div class="space-y-4">
      <div class="flex items-start">
        <div class="bg-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 border border-green-500 flex-shrink-0">
          <span class="text-green-700 text-sm font-bold">1</span>
        </div>
        <p>Užpildykite užklausos formą mūsų svetainėje</p>
      </div>
      <div class="flex items-start">
        <div class="bg-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 border border-green-500 flex-shrink-0">
          <span class="text-green-700 text-sm font-bold">2</span>
        </div>
        <p>Nurodykite šaldytuvo tipą ir vietos informaciją</p>
      </div>
      <div class="flex items-start">
        <div class="bg-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 border border-green-500 flex-shrink-0">
          <span class="text-green-700 text-sm font-bold">3</span>
        </div>
        <p>Mes susisieksime su jumis per 24 valandas</p>
      </div>
    </div>
    <div class="mt-6">
      <a href="/kontaktai#contact-form" class="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-green-700 transition duration-200">
        <span>Užsakyti išvežimą</span>
        <ExternalLink className="w-4 h-4 ml-2" />
      </a>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Šaldytuvo perdirbimo procesas – ką verta žinoti?</h2>
  <p class="mb-4">Kai jūsų senas šaldytuvas patenka į mūsų rankas, jis pereina kelis perdirbimo etapus:</p>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-50 p-4 rounded-lg">
      <h3 class="font-semibold mb-2 text-green-700">1. Saugus freono pašalinimas</h3>
      <p class="text-gray-600">Specialia įranga šaltnešiai saugiai ištraukiami iš šaldymo sistemos, kad nepatektų į atmosferą</p>
    </div>
    <div class="bg-gray-50 p-4 rounded-lg">
      <h3 class="font-semibold mb-2 text-green-700">2. Metalinių dalių atskyrimas</h3>
      <p class="text-gray-600">Vertingi metalai (varis, aliuminis, plienas) atskiriami ir paruošiami perdirbimui</p>
    </div>
    <div class="bg-gray-50 p-4 rounded-lg">
      <h3 class="font-semibold mb-2 text-green-700">3. Plastiko komponentų rūšiavimas</h3>
      <p class="text-gray-600">Plastikiniai elementai rūšiuojami pagal tipą ir perdirbimo galimybes</p>
    </div>
    <div class="bg-gray-50 p-4 rounded-lg">
      <h3 class="font-semibold mb-2 text-green-700">4. Izoliacijos tvarkymas</h3>
      <p class="text-gray-600">Putplastis ir kitos izoliacinės medžiagos apdorojamos laikantis aplinkosaugos reikalavimų</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Dažniausiai užduodami klausimai (DUK)</h2>
  <div class="space-y-6 mt-4">
    <div class="bg-gray-50 p-4 rounded-lg">
      <h3 class="font-bold text-green-700">Ar šaldytuvų išvežimas Kaune – nemokamas?</h3>
      <p>Taip, šaldytuvų išvežimo paslauga gyventojams Kaune teikiama <strong>nemokamai</strong>. Nereikia mokėti nei už išnešimą, nei už transportavimą ar utilizavimą.</p>
    </div>
    
    <div class="bg-gray-50 p-4 rounded-lg">
      <h3 class="font-bold text-green-700">Kada atvyksite išvežti?</h3>
      <p>Dažniausiai per 1–2 darbo dienas nuo užsakymo patvirtinimo. Konkretų laiką suderinsime telefonu.</p>
    </div>
    
    <div class="bg-gray-50 p-4 rounded-lg">
      <h3 class="font-bold text-green-700">Ar turiu būti namuose išvežimo metu?</h3>
      <p>Nebūtina. Jeigu negalite būti namuose sutartu laiku, galite:</p>
      <ul class="list-disc pl-6 mt-2">
        <li>Palikti šaldytuvą laiptinėje</li>
        <li>Išstatyti į koridorių</li>
        <li>Palikti kieme (jei gyvenate nuosavame name)</li>
      </ul>
      <p class="mt-2">Svarbu įsitikinti, kad šaldytuvas būtų pasiekiamas ir saugiai paliktas.</p>
    </div>
    
    <div class="bg-gray-50 p-4 rounded-lg">
      <h3 class="font-bold text-green-700">Kaip sužinosiu tikslų išvežimo laiką?</h3>
      <p>Po užklausos pateikimo, mūsų komanda susisieks su jumis telefonu ir suderins patogų išvežimo laiką.</p>
    </div>
  </div>

  <div class="border-l-4 border-green-500 pl-4 italic my-8 bg-green-50 p-4 rounded-r-lg">
    <p class="font-semibold mb-2">Žinote, kad...</p>
    <p>Vieno šaldytuvo perdirbimas sutaupo tiek energijos, kiek reikia vidutiniam televizoriui veikti 3 metus be pertraukos!</p>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Išvada</h2>
  <p class="mb-4">
  Tvarkingas šaldytuvo utilizavimas – tai žingsnis į švaresnę aplinką. Kreipdamiesi į UAB "Karavanas LT", jūs pasirenkate patikimą, 
    greitą ir atsakingą paslaugą Kauno mieste. Mūsų komanda pasirūpins, kad jūsų šaldytuvas būtų išvežtas ir perdirbtas 
    laikantis visų aplinkosaugos reikalavimų.
  </p>
  <p class="mb-4">
    Nepalikite seno šaldytuvo tiesiog prie konteinerių – pasirinkite atsakingą sprendimą ir prisidėkite prie ekologiškesnės ateities!
  </p>
  `,
    metaTitle: 'Kaip teisingai utilizuoti šaldytuvą Kaune | Karavanas LT',
    metaDescription: 'Išsamus vadovas apie teisingą šaldytuvo utilizavimą Kaune. Sužinokite, kaip saugiai ir ekologiškai atsikratyti seno šaldytuvo.',
    ogImage: '/images/straipsnis1.webp',
  },
  {
    id: 2,
    slug: 'kodel-svarbu-tinkamai-ismesti-elektronikos-atliekas',
    title: 'Kodėl svarbu tinkamai išmesti elektronikos atliekas ir kaip tai padaryti Kaune',
    excerpt: 'Elektronikos atliekų tvarkymas – vienas didžiausių iššūkių šiuolaikinėje visuomenėje. Sužinokite, kodėl svarbu tinkamai utilizuoti elektroniką ir kaip tai paprastai padaryti Kaune.',
    date: '2024-12-18',
    imageUrl: '/images/straipsnis2.webp',
    content: `
  <h1 class="text-3xl font-bold mb-6">Kodėl svarbu tinkamai išmesti elektronikos atliekas ir kaip tai padaryti Kaune</h1>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Įžanga</h2>
  <p class="mb-4">
    Elektronikos atliekos – viena sparčiausiai augančių atliekų rūšių pasaulyje. 
    Kiekvienais metais Lietuvoje išmetami tūkstančiai tonų elektronikos, o dažnai ji atsiduria 
    ne ten, kur turėtų. Šiame straipsnyje nagrinėsime, kodėl taip svarbu jas tinkamai tvarkyti 
    ir kaip lengvai tai padaryti Kaune.
  </p>

  <div class="border-l-4 border-green-500 pl-4 italic my-6 bg-green-50 p-4 rounded-r-lg">
    <p class="font-semibold mb-2">Ar žinojote?</p>
    <p>Kasmet pasaulyje išmetama 50 milijonų tonų elektronikos atliekų, ir šis skaičius auga greičiau nei bet kuri kita atliekų rūšis. Lietuvoje kiekvienas gyventojas vidutiniškai per metus išmeta apie 15 kg elektronikos atliekų.</p>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Elektronikos atliekų keliami pavojai</h2>
  <div class="bg-gray-50 p-6 rounded-lg mb-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex items-start">
        <div class="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
          <span class="text-red-700 font-bold">!</span>
        </div>
        <div>
          <p class="font-semibold">Toksinės medžiagos</p>
          <p class="text-gray-600">Sunkieji metalai (švinas, kadmis, gyvsidabris) teršia dirvožemį ir vandenį</p>
        </div>
      </div>
      
      <div class="flex items-start">
        <div class="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
          <span class="text-red-700 font-bold">!</span>
        </div>
        <div>
          <p class="font-semibold">Pavojus sveikatai</p>
          <p class="text-gray-600">Toksinai gali patekti į maisto grandinę ir sukelti rimtų sveikatos problemų</p>
        </div>
      </div>
      
      <div class="flex items-start">
        <div class="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
          <span class="text-red-700 font-bold">!</span>
        </div>
        <div>
          <p class="font-semibold">Klimato kaita</p>
          <p class="text-gray-600">Netinkamame sąvartyne besiskaidanti elektronika išskiria šiltnamio efektą sukeliančias dujas</p>
        </div>
      </div>
      
      <div class="flex items-start">
        <div class="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
          <span class="text-red-700 font-bold">!</span>
        </div>
        <div>
          <p class="font-semibold">Prarandami ištekliai</p>
          <p class="text-gray-600">Neperdirbant prarandami vertingi metalai ir retieji žemės elementai</p>
        </div>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kaip teisingai tvarkyti elektronikos atliekas?</h2>
  <p class="mb-4">Tinkamas elektronikos atliekų tvarkymas nėra sudėtingas – tai galite padaryti vos keliais žingsniais:</p>

  <div class="bg-green-50 p-6 rounded-lg my-8 border border-green-200">
    <h3 class="font-bold text-xl mb-4 text-green-700">Teisingas elektronikos utilizavimas</h3>
    <div class="pl-6 mb-6">
      <div class="flex items-start mb-4">
        <div class="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 border border-green-500 flex-shrink-0">
          <span class="text-green-700 font-bold">1</span>
        </div>
        <div>
          <p class="font-semibold">Surinkite nebenaudojamą elektroniką</p>
          <p class="text-gray-600">Peržiūrėkite namus ir surinkite visus neveikiančius ar nenaudojamus elektronikos prietaisus</p>
        </div>
      </div>
      
      <div class="flex items-start mb-4">
        <div class="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 border border-green-500 flex-shrink-0">
          <span class="text-green-700 font-bold">2</span>
        </div>
        <div>
          <p class="font-semibold">Ištrinkite asmeninius duomenis</p>
          <p class="text-gray-600">Atstatykite gamyklinius parametrus ir ištrinkite visą informaciją iš kompiuterių, telefonų ir kitų laikmenų</p>
        </div>
      </div>
      
      <div class="flex items-start mb-4">
        <div class="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 border border-green-500 flex-shrink-0">
          <span class="text-green-700 font-bold">3</span>
        </div>
        <div>
          <p class="font-semibold">Užsakykite profesionalų išvežimą</p>
          <p class="text-gray-600">Užpildykite mūsų formą ir mes nemokamai išvešime elektroniką iš jūsų namų</p>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <a href="/kontaktai#contact-form" class="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-green-700 transition duration-200">
        <span>Užsakyti nemokamą išvežimą</span>
        <ExternalLink className="w-4 h-4 ml-2" />
      </a>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kokią elektroniką galima perdirbti?</h2>
  <p class="mb-4">Perdirbti galima praktiškai visą elektroniką – nuo mažiausių prietaisų iki didelės buitinės technikos:</p>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <svg class="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        Kompiuterinė technika
      </h3>
      <ul class="space-y-2 pl-7 list-disc text-gray-700">
        <li>Stacionarūs ir nešiojami kompiuteriai</li>
        <li>Monitoriai ir televizoriai</li>
        <li>Spausdintuvai ir skaitytuvai</li>
        <li>Kietieji diskai ir atmintinės</li>
      </ul>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <svg class="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        Mobilieji įrenginiai
      </h3>
      <ul class="space-y-2 pl-7 list-disc text-gray-700">
        <li>Telefonai ir išmanieji telefonai</li>
        <li>Planšetiniai kompiuteriai</li>
        <li>Nešiojami muzikos grotuvai</li>
        <li>Žaidimų konsolės ir valdikliai</li>
      </ul>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <svg class="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        Buitinė elektronika
      </h3>
      <ul class="space-y-2 pl-7 list-disc text-gray-700">
        <li>Mikrobangų krosnelės</li>
        <li>Garso aparatūra</li>
        <li>Dulkių siurbliai</li>
        <li>Kavos aparatai ir smulki virtuvės technika</li>
      </ul>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <svg class="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        Kiti elektronikos prietaisai
      </h3>
      <ul class="space-y-2 pl-7 list-disc text-gray-700">
        <li>Elektriniai įrankiai</li>
        <li>LED lemputės ir šviestuvai</li>
        <li>Elektroniniai žaislai</li>
        <li>Medicininė elektronika</li>
      </ul>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Perdirbimo nauda aplinkai ir ekonomikai</h2>
  
  <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 class="font-semibold mb-3 text-green-700">Aplinkosauginė nauda</h3>
        <ul class="space-y-3">
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Sumažinama tarša ir toksinių medžiagų patekimas į aplinką</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Taupomi gamtos ištekliai, nereikia išgauti naujų žaliavų</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Mažinama šiltnamio efektą sukeliančių dujų emisija</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Mažinamas atliekų kiekis sąvartynuose</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 class="font-semibold mb-3 text-blue-700">Ekonominė nauda</h3>
        <ul class="space-y-3">
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Atgaunami vertingi metalai (auksas, sidabras, varis, aliuminis)</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Kuriamos naujos darbo vietos perdirbimo sektoriuje</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Perdirbtos medžiagos naudojamos naujiems produktams</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Mažinamas importuojamų žaliavų poreikis</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="border-l-4 border-yellow-400 pl-4 bg-yellow-50 p-4 rounded-r-lg mb-8">
    <p class="font-semibold mb-2 text-yellow-700">Įdomus faktas:</p>
    <p>Viename milijone išmaniųjų telefonų yra apie 16 tonų vario, 350 kg sidabro, 34 kg aukso ir 15 kg paladžio – vertingų metalų, kuriuos galima perdirbti ir panaudoti dar kartą.</p>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Dažniausiai užduodami klausimai</h2>
  <div class="space-y-4">
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Ar elektronikos atliekų išvežimas Kaune yra mokamas?</h3>
      <div class="pl-5 mt-2">
        <p><span class="font-semibold text-green-700">Ne</span>, elektronikos atliekų išvežimo paslauga Kaune yra <span class="font-semibold">visiškai nemokama</span>. Mūsų komanda atvyks į jūsų namus ir išveš bet kokios rūšies elektronikos atliekas be jokio mokesčio.</p>
      </div>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Kaip apsaugoti asmeninius duomenis prieš atiduodant elektroniką?</h3>
      <div class="pl-5 mt-2">
        <p>Prieš atiduodant elektroniką perdirbimui, būtinai:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Atlikite gamyklinį duomenų atstatymą telefonuose ir planšetėse</li>
          <li>Ištrinkite kietuosius diskus naudodami specialią programinę įrangą</li>
          <li>Pašalinkite atminties korteles ir SIM korteles</li>
          <li>Atsijunkite nuo visų paskyrų (Google, Apple, Microsoft ir kt.)</li>
        </ul>
        <p class="mt-2">Jei nesate tikri, kaip tai padaryti, mūsų specialistai gali jums padėti užtikrinti duomenų saugumą.</p>
      </div>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Ar galite išvežti didelį kiekį elektronikos iš įmonės?</h3>
      <div class="pl-5 mt-2">
        <p>Taip, teikiame specializuotas elektronikos atliekų surinkimo paslaugas įmonėms. Galime išvežti bet kokį elektronikos kiekį pagal jūsų poreikius. Įmonėms taip pat išduodame atliekų perdavimo dokumentus, jei to reikalauja įmonės atliekų apskaita.</p>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Išvada</h2>
  <p class="mb-4">
    Tinkamas elektronikos atliekų tvarkymas yra mūsų visų atsakomybė. Kiekvienas teisingai utilizuotas elektronikos 
    prietaisas – žingsnis link švaresnės aplinkos, sveikesnio gyvenimo ir tvaresnės ateities.
  </p>
  <p class="mb-4">
  Rinkdamiesi Karavanas LT nemokamą elektronikos išvežimo paslaugą Kaune, jūs ne tik atsikratote 
    nenaudojamų prietaisų, bet ir prisidedate prie aplinkos išsaugojimo. Užpildykite užklausos formą 
    arba susisiekite telefonu – mes pasirūpinsime, kad jūsų elektronikos atliekos būtų sutvarkytos tinkamai.
  </p>
  
  <div class="bg-green-100 p-6 rounded-lg mt-8 text-center">
    <p class="font-semibold text-lg mb-4">Prisidėkite prie žalesnės ateities – užsakykite nemokamą elektronikos išvežimą jau šiandien!</p>
    <a href="/kontaktai#contact-form" class="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200">
      Užsakyti išvežimą
    </a>
  </div>
  `,
    metaTitle: 'Elektronikos atliekų tvarkymas Kaune | Karavanas LT',
    metaDescription: 'Sužinokite, kodėl svarbu tinkamai tvarkyti elektronikos atliekas ir kaip tai padaryti Kaune. Profesionalus ir nemokamas išvežimas.',
    ogImage: '/images/straipsnis2.webp',
  },
  {
    id: 3,
    slug: 'kaip-teisingai-utilizuoti-buitine-technika-kaune',
    title: 'Kaip teisingai utilizuoti buitinę techniką Kaune – nemokamo išvežimo galimybės',
    excerpt: 'Sužinokite, kaip saugiai ir legaliai utilizuoti buitinę techniką Kaune. Naudinga informacija apie nemokamą išvežimą ir teisingą atliekų tvarkymą.',
    date: '2024-11-15',
    imageUrl: '/images/straipsnis1.webp',
    content: `
  <h1 class="text-3xl font-bold mb-6">Kaip teisingai utilizuoti buitinę techniką Kaune – nemokamo išvežimo galimybės</h1>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Įžanga</h2>
  <p class="mb-4">
    Kai atnaujinate savo buitinę techniką, dažnai iškyla klausimas – kur padėti senus prietaisus? 
    Išmesti prie šiukšlių konteinerių yra ne tik nelegalu, bet ir kenkia aplinkai. Šiame straipsnyje 
    paaiškinsime, kaip saugiai ir legaliai utilizuoti buitinę techniką Kaune, ir kaip pasinaudoti 
    nemokamomis išvežimo paslaugomis.
  </p>

  <div class="border-l-4 border-green-500 pl-4 italic my-6 bg-green-50 p-4 rounded-r-lg">
    <p class="font-semibold mb-2">Svarbu žinoti:</p>
    <p>Pagal LR atliekų tvarkymo įstatymą, draudžiama išmesti buitinę techniką kartu su kitomis komunalinėmis atliekomis. Už netinkamą elektronikos atliekų išmetimą gali būti skiriamos baudos nuo 30 iki 900 eurų.</p>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kodėl svarbu utilizuoti teisingai?</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition duration-200">
      <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <h3 class="text-center font-semibold mb-3 text-green-700">Pavojingos medžiagos</h3>
      <p class="text-gray-600 text-center">Buitinėje technikoje yra freonas, sunkieji metalai ir kitos pavojingos medžiagos, kurios netinkamai išmestos teršia aplinką</p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition duration-200">
      <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <h3 class="text-center font-semibold mb-3 text-green-700">Teisinė atsakomybė</h3>
      <p class="text-gray-600 text-center">Netinkamas buitinės technikos išmetimas yra baustinas pagal LR atliekų tvarkymo įstatymą</p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition duration-200">
      <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
      </div>
      <h3 class="text-center font-semibold mb-3 text-green-700">Perdirbimo galimybės</h3>
      <p class="text-gray-600 text-center">Tvarkingai utilizuota technika perdirbama, medžiagos panaudojamos iš naujo, sumažinamas atliekų kiekis</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kaip užsakyti nemokamą išvežimą?</h2>
  <p class="mb-4">Užsakyti nemokamą buitinės technikos išvežimą Kaune yra labai paprasta:</p>

  <div class="bg-green-50 p-6 rounded-lg my-8 border border-green-200">
    <h3 class="font-bold text-xl mb-4 text-green-700">Užsakymo žingsniai:</h3>
    <div class="pl-6 mb-6">
      <div class="flex items-start mb-4">
        <div class="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 border border-green-500 flex-shrink-0">
          <span class="text-green-700 font-bold">1</span>
        </div>
        <div>
          <p class="font-semibold">Užpildykite užklausos formą</p>
          <p class="text-gray-600">Nurodykite savo kontaktinius duomenis ir adresą mūsų svetainėje</p>
        </div>
      </div>
      
      <div class="flex items-start mb-4">
        <div class="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 border border-green-500 flex-shrink-0">
          <span class="text-green-700 font-bold">2</span>
        </div>
        <div>
          <p class="font-semibold">Aprašykite išvežamą techniką</p>
          <p class="text-gray-600">Pateikite informaciją apie prietaisų tipus ir kiekį</p>
        </div>
      </div>
      
      <div class="flex items-start mb-4">
        <div class="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 border border-green-500 flex-shrink-0">
          <span class="text-green-700 font-bold">3</span>
        </div>
        <div>
          <p class="font-semibold">Palaukite mūsų skambučio</p>
          <p class="text-gray-600">Susisieksime per 24 valandas ir suderinsime išvežimo laiką</p>
        </div>
      </div>
      
      <div class="flex items-start mb-4">
        <div class="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 border border-green-500 flex-shrink-0">
          <span class="text-green-700 font-bold">4</span>
        </div>
        <div>
          <p class="font-semibold">Paruoškite techniką ir laukite</p>
          <p class="text-gray-600">Mūsų specialistai atvyks sutartu laiku ir išveš jūsų seną buitinę techniką</p>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <a href="/kontaktai#contact-form" class="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-green-700 transition duration-200">
        <span>Užsakyti išvežimą</span>
        <ExternalLink className="w-4 h-4 ml-2" />
      </a>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Dažniausiai išvežami prietaisai</h2>
  <p class="mb-4">Mūsų komanda nemokamai išveža įvairią buitinę techniką:</p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
    <div class="flex items-start bg-gray-50 p-4 rounded-lg">
      <svg class="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <div>
        <h3 class="font-semibold">Šaldytuvai</h3>
        <p class="text-gray-600 text-sm">Įvairių dydžių ir tipų šaldytuvai bei šaldikliai</p>
      </div>
    </div>
    
    <div class="flex items-start bg-gray-50 p-4 rounded-lg">
      <svg class="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <div>
        <h3 class="font-semibold">Skalbimo mašinos</h3>
        <p class="text-gray-600 text-sm">Automatinės, pusiau automatinės, vertikalios ir horizontalios</p>
      </div>
    </div>
    
    <div class="flex items-start bg-gray-50 p-4 rounded-lg">
      <svg class="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <div>
        <h3 class="font-semibold">Viryklės ir orkaitės</h3>
        <p class="text-gray-600 text-sm">Elektrinės, dujinės ir kombinuotos viryklės</p>
      </div>
    </div>
    
    <div class="flex items-start bg-gray-50 p-4 rounded-lg">
      <svg class="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <div>
        <h3 class="font-semibold">Indaplovės</h3>
        <p class="text-gray-600 text-sm">Įmontuojamos ir laisvai pastatomos</p>
      </div>
    </div>
    
    <div class="flex items-start bg-gray-50 p-4 rounded-lg">
      <svg class="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <div>
        <h3 class="font-semibold">Džiovyklės</h3>
        <p class="text-gray-600 text-sm">Kondensacinės ir ventiliacinės džiovyklės</p>
      </div>
    </div>
    
    <div class="flex items-start bg-gray-50 p-4 rounded-lg">
      <svg class="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <div>
        <h3 class="font-semibold">Kita buitinė technika</h3>
        <p class="text-gray-600 text-sm">Mikrobangų krosnelės, kaitlentės, gartraukiai ir kt.</p>
      </div>
    </div>
  </div>

  <div class="border-l-4 border-yellow-400 pl-4 bg-yellow-50 p-4 rounded-r-lg mb-8">
    <p class="font-semibold text-yellow-700">Atkreipkite dėmesį:</p>
    <p>Mes išvežame tiek veikiančią, tiek neveikiančią buitinę techniką. Net jei jūsų prietaisas visiškai sugadintas ar labai senas, mes vis tiek galime jį išvežti nemokamai.</p>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Ką reikėtų žinoti prieš užsakant išvežimą?</h2>
  <div class="bg-gray-50 p-6 rounded-lg">
    <div class="space-y-4">
      <div class="flex items-start">
        <div class="bg-green-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
          <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div>
          <p class="font-semibold">Atjunkite prietaisus nuo elektros ir vandens</p>
          <p class="text-gray-600">Prieš išvežant, visi prietaisai turi būti atjungti nuo elektros tinklo ir vandens tiekimo sistemų</p>
        </div>
      </div>
      
      <div class="flex items-start">
        <div class="bg-green-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
          <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div>
          <p class="font-semibold">Išvalykite purvą ir maisto likučius</p>
          <p class="text-gray-600">Jei technika labai purvina ar su maisto likučiais, rekomenduojama ją nuvalyti prieš išvežimą</p>
        </div>
      </div>
      
      <div class="flex items-start">
        <div class="bg-green-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
          <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div>
          <p class="font-semibold">Pasirūpinkite priėjimu</p>
          <p class="text-gray-600">Užtikrinkite, kad prie technikos būtų patogus priėjimas išnešimui</p>
        </div>
      </div>
      
      <div class="flex items-start">
        <div class="bg-green-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
          <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div>
          <p class="font-semibold">Palikite prietaisus laiptinėje (jei nenorite būti namuose)</p>
          <p class="text-gray-600">Jei negalite būti namuose išvežimo metu, galite palikti techniką laiptinėje, koridoriuje ar kieme – tik būtinai nurodykite tai užsakymo formoje</p>
        </div>
      </div>
      
      <div class="flex items-start">
        <div class="bg-green-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
          <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div>
          <p class="font-semibold">Išvežimas yra visiškai nemokamas</p>
          <p class="text-gray-600">Mūsų komanda niekada neprašys mokesčio už buitinės technikos išvežimą</p>
        </div>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Dažniausiai užduodami klausimai</h2>
  <div class="space-y-4 mb-8">
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Ar tikrai išvežate buitinę techniką nemokamai?</h3>
      <div class="pl-5 mt-2">
        <p>Taip, mūsų paslauga yra <span class="font-semibold">visiškai nemokama</span>. Mes užsiimame elektronikos atliekų perdirbimu, todėl galime pasiūlyti nemokamą išvežimą Kauno mieste ir apylinkėse.</p>
      </div>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Ar išnešate techniką iš buto/namo?</h3>
      <div class="pl-5 mt-2">
        <p>Taip, mūsų komanda pasirūpins visu išvežimo procesu – nuo prietaiso atjungimo (jei reikia) iki išnešimo iš bet kurio aukšto. Jums nereikia rūpintis sunkių daiktų nešimu.</p>
      </div>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Kiek laiko trunka išvežimas?</h3>
      <div class="pl-5 mt-2">
        <p>Paprastai išvežimo procesas trunka:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>iki 5 minučių vieno prietaiso išvežimui</li>
          <li>iki 10 minučių kelių prietaisų išvežimui</li>
          <li>Iki 24 valandų nuo užsakymo iki išvežimo (darbo dienomis)</li>
        </ul>
      </div>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Kodėl jūsų paslauga nemokama?</h3>
      <div class="pl-5 mt-2">
        <p>Mūsų verslo modelis paremtas tuo, kad buitinėje technikoje yra vertingų medžiagų, kurias galima perdirbti. Be to, mes bendradarbiaujame su gamintojų atsakomybės organizacijomis, kurios finansuoja atliekų surinkimą. Todėl galime pasiūlyti šią paslaugą nemokamai gyventojams.</p>
      </div>
    </div>
  </div>

  <div class="bg-green-100 p-6 rounded-lg mb-8">
    <div class="flex flex-col md:flex-row items-center">
      <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-2 text-green-800">Jūsų indėlis į aplinkos apsaugą</h3>
        <p>Užsakydami nemokamą buitinės technikos išvežimą, jūs prisidedate prie aplinkos apsaugos, išteklių tausojimo ir atliekų mažinimo. Teisingas atliekų tvarkymas prasideda nuo jūsų sprendimo.</p>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Išvada</h2>
  <p class="mb-4">
    Teisingas buitinės technikos utilizavimas yra svarbus žingsnis saugant aplinką ir laikantis įstatymų. 
  Pasirinkdami Karavanas LT, jūs pasirenkate patikimą, greitą ir aplinkai draugišką sprendimą.
  </p>
  <p class="mb-4">
    Mūsų nemokama išvežimo paslauga ne tik palengvina jūsų gyvenimą, bet ir užtikrina, kad seni 
    prietaisai bus perdirbti laikantis visų aplinkosaugos reikalavimų. Nedelskite – užpildykite 
    užklausos formą jau dabar ir prisidėkite prie žaliesnės ateities kūrimo!
  </p>
  
  <div class="bg-green-600 p-6 rounded-lg mt-8 text-center">
    <p class="font-semibold text-lg mb-4 text-white">Užsakykite nemokamą buitinės technikos išvežimą jau šiandien!</p>
    <a href="/kontaktai#contact-form" class="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">
      Užpildyti užklausos formą
    </a>
  </div>
  `,
    metaTitle: 'Kaip utilizuoti buitinę techniką Kaune | Karavanas LT',
    metaDescription: 'Sužinokite, kaip teisingai ir nemokamai utilizuoti buitinę techniką Kaune. Karavanas LT pasirūpins išvežimu nuo A iki Z.',
    ogImage: '/images/straipsnis1.webp',
  },
  {
    id: 4,
    slug: '5-dalykai-pries-ismetant-skalbimo-masina',
    title: '5 dalykai, į kuriuos reikia atkreipti dėmesį prieš išmetant seną skalbimo mašiną',
    excerpt: 'Ruošiatės atsikratyti senos skalbimo mašinos? Štai 5 svarbūs dalykai, kuriuos turite žinoti prieš jos išmetimą, kad procesas būtų saugus ir ekologiškas.',
    date: '2024-10-20',
    imageUrl: '/images/straipsnis4.webp',
    content: `
  <h1 class="text-3xl font-bold mb-6">5 dalykai, į kuriuos reikia atkreipti dėmesį prieš išmetant seną skalbimo mašiną</h1>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Įžanga</h2>
  <p class="mb-4">
    Senos skalbimo mašinos išmetimas – tai procesas, kuris reikalauja daug daugiau dėmesio, nei daugelis 
    įsivaizduoja. Ne vien tik dėl jos svorio ir dydžio, bet ir dėl aplinkosaugos bei saugumo aspektų. 
    Šiame išsamiame vadove aptarsime 5 svarbiausius dalykus, kuriuos būtina žinoti prieš atsikratant 
    senos skalbimo mašinos Kaune.
  </p>

  <div class="border-l-4 border-green-500 pl-4 italic my-6 bg-green-50 p-4 rounded-r-lg">
    <p class="font-semibold mb-2">Svarbu žinoti:</p>
    <p>Viena skalbimo mašina vidutiniškai tarnauja 10-15 metų. Per šį laiką ji sunaudoja apie 13,500 litrų vandens ir 3,000 kWh elektros. Tinkamas jos utilizavimas – svarbi aplinkosauginė atsakomybė.</p>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">1. Vandens sistemos paruošimas</h2>
  <div class="bg-gray-50 p-6 rounded-lg mb-8">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/3 flex justify-center items-start mb-4 md:mb-0">
        <div class="bg-blue-100 rounded-full w-24 h-24 flex items-center justify-center">
          <svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
          </svg>
        </div>
      </div>
      <div class="md:w-2/3 md:pl-6">
        <p class="mb-3">Prieš išvežant skalbimo mašiną, būtina tinkamai paruošti jos vandens sistemą:</p>
        <ul class="space-y-2 pl-5 list-disc">
          <li><span class="font-semibold">Užsukite vandens tiekimą:</span> Užsukite vandens čiaupą, prie kurio prijungta skalbimo mašina</li>
          <li><span class="font-semibold">Atjunkite vandens žarnas:</span> Atsukite tiek vandens tiekimo, tiek išleidimo žarnas</li>
          <li><span class="font-semibold">Išleiskite likusį vandenį:</span> Patikrinkite filtrą ir išleiskite vandenį, kuris dar gali būti sistemoje</li>
          <li><span class="font-semibold">Patikrinkite, ar nėra pratekėjimų:</span> Įsitikinkite, kad neliko vandens, kuris galėtų išsilieti transportavimo metu</li>
        </ul>
        <div class="mt-4 bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
          <p class="text-sm text-yellow-800"><span class="font-semibold">Dėmesio:</span> Nepašalintas vanduo gali sukelti žalą namų turtui.</p>
        </div>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">2. Elektros saugumas</h2>
  <div class="bg-gray-50 p-6 rounded-lg mb-8">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/3 flex justify-center items-start mb-4 md:mb-0">
        <div class="bg-yellow-100 rounded-full w-24 h-24 flex items-center justify-center">
          <svg class="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
      </div>
      <div class="md:w-2/3 md:pl-6">
        <p class="mb-3">Elektros sauga yra itin svarbi ruošiant skalbimo mašiną išvežimui:</p>
        <ul class="space-y-2 pl-5 list-disc">
          <li><span class="font-semibold">Išjunkite mašiną iš elektros tinklo:</span> Įsitikinkite, kad kištukas ištrauktas iš lizdo mažiausiai 24 val. prieš išvežimą</li>
          <li><span class="font-semibold">Patikrinkite laido būklę:</span> Įsitikinkite, kad laidas nėra pažeistas ar atsilupęs</li>
          <li><span class="font-semibold">Saugiai suvyniokite laidą:</span> Tvarkingai suvyniokite laidą ir pritvirtinkite jį prie mašinos, kad nenukristų transportavimo metu</li>
        </ul>
        <div class="mt-4 bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
          <p class="text-sm text-red-800"><span class="font-semibold">Įspėjimas:</span> Niekada netraukite už laido – visada suimkite už kištuko. Pažeistas laidas gali sukelti trumpąjį jungimą ar elektros smūgį.</p>
        </div>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">3. Būgno užfiksavimas</h2>
  <div class="bg-gray-50 p-6 rounded-lg mb-8">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/3 flex justify-center items-start mb-4 md:mb-0">
        <div class="bg-purple-100 rounded-full w-24 h-24 flex items-center justify-center">
          <svg class="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        </div>
      </div>
      <div class="md:w-2/3 md:pl-6">
        <p class="mb-3">Tinkamas būgno užfiksavimas yra kritiškai svarbus transportuojant skalbimo mašiną:</p>
        <ul class="space-y-2 pl-5 list-disc">
          <li><span class="font-semibold">Įstatykite transportavimo varžtus:</span> Jei išsaugojote originalius transportavimo varžtus, būtinai juos įstatykite</li>
          <li><span class="font-semibold">Užfiksuokite būgną alternatyviais būdais:</span> Jei neturite varžtų, naudokite putplastį, kartoną ar kitą medžiagą būgnui užfiksuoti</li>
          <li><span class="font-semibold">Patikrinkite durų užraktą:</span> Įsitikinkite, kad skalbyklės durelės yra tvirtai uždarytos ir neatsidaro</li>
        </ul>
        <div class="mt-4 p-3 rounded-lg bg-green-50 border-l-4 border-green-400">
          <p class="text-sm text-green-800"><span class="font-semibold">Patarimas:</span> Jei neturite originalių transportavimo varžtų, mūsų specialistai gali padėti saugiai užfiksuoti būgną prieš išvežimą.</p>
        </div>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">4. Aplinkos paruošimas</h2>
  <div class="bg-gray-50 p-6 rounded-lg mb-8">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/3 flex justify-center items-start mb-4 md:mb-0">
        <div class="bg-teal-100 rounded-full w-24 h-24 flex items-center justify-center">
          <svg class="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          </svg>
        </div>
      </div>
      <div class="md:w-2/3 md:pl-6">
        <p class="mb-3">Prieš išnešant skalbimo mašiną, reikia tinkamai paruošti aplinką:</p>
        <ul class="space-y-2 pl-5 list-disc">
          <li><span class="font-semibold">Išmatuokite praėjimus:</span> Patikrinkite durų, koridorių ir laiptinės plotį, kad įsitikintumėte, jog mašina tilps</li>
          <li><span class="font-semibold">Numatykite išnešimo maršrutą:</span> Apgalvokite, kuriuo keliu bus išnešama mašina, ir pašalinkite visas kliūtis</li>
          <li><span class="font-semibold">Pašalinkite kliūtis:</span> Išneškite iš kelio baldus, vazas, paveikslus ir kitus daiktus, kurie gali trukdyti</li>
          <li><span class="font-semibold">Apsaugokite grindis ir sienas:</span> Naudokite kartoną, plėvelę ar kilimėlius, kad apsaugotumėte paviršius nuo įbrėžimų</li>
        </ul>
        <div class="mt-4 p-3 rounded-lg bg-blue-50 border-l-4 border-blue-400">
          <p class="text-sm text-blue-800"><span class="font-semibold">Naudingas patarimas:</span> Standartinės skalbimo mašinos išmatavimai yra apie 60 cm pločio, 85 cm aukščio ir 60 cm gylio. Durų angoje ir laiptinėje turėtų būti bent 65 cm laisvos erdvės.</p>
        </div>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">5. Profesionalus išvežimas</h2>
  <div class="bg-green-50 p-6 rounded-lg mb-8 border border-green-200">
    <h3 class="font-bold text-xl mb-4 text-green-700">Kodėl verta rinktis profesionalų išvežimą?</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div class="flex items-start">
        <svg class="w-6 h-6 text-green-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <div>
          <p class="font-semibold">Saugus išnešimas iš bet kurio aukšto</p>
          <p class="text-gray-600 text-sm">Profesionalai turi reikiamą įrangą ir patirtį saugiai išnešti sunkius prietaisus</p>
        </div>
      </div>
      
      <div class="flex items-start">
        <svg class="w-6 h-6 text-green-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <div>
          <p class="font-semibold">Tinkamas utilizavimas ir perdirbimas</p>
          <p class="text-gray-600 text-sm">Užtikrinama, kad prietaisas bus išardytas ir perdirbtas laikantis aplinkosaugos reikalavimų</p>
        </div>
      </div>
      
      <div class="flex items-start">
        <svg class="w-6 h-6 text-green-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <div>
          <p class="font-semibold">Nemokama paslauga Kaune</p>
          <p class="text-gray-600 text-sm">Mūsų komanda išveža buitinę techniką Kaune nemokamai</p>
        </div>
      </div>
      
      <div class="flex items-start">
        <svg class="w-6 h-6 text-green-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <div>
          <p class="font-semibold">Patogus laiko suderinimas</p>
          <p class="text-gray-600 text-sm">Galite pasirinkti jums patogų išvežimo laiką darbo dienomis ir savaitgaliais</p>
        </div>
      </div>
    </div>
    
    <div class="mt-6">
      <a href="/kontaktai#contact-form" class="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-green-700 transition duration-200">
        <span>Užsakyti nemokamą išvežimą</span>
        <ExternalLink className="w-4 h-4 ml-2" />
      </a>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Dažniausiai užduodami klausimai</h2>
  <div class="space-y-4 mb-8">
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Ar reikia išleisti vandenį prieš išvežimą?</h3>
      <div class="pl-5 mt-2">
        <p><span class="font-semibold">Taip, būtina</span> išleisti visą vandenį iš skalbimo mašinos prieš jos išvežimą. Vanduo ne tik padidina mašinos svorį, bet ir gali išsilieti transportavimo metu, sukeldamas žalą.</p>
      </div>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Kas nutinka su sena skalbimo mašina po išvežimo?</h3>
      <div class="pl-5 mt-2">
        <p>Po išvežimo skalbimo mašina pereina kelis etapus:</p>
        <ol class="list-decimal pl-5 mt-2 space-y-1">
          <li>Pavojingų medžiagų pašalinimas (pvz., kondensatoriai, elektroninės plokštės)</li>
          <li>Ardymas į atskiras dalis (metalas, plastikas, elektronika)</li>
          <li>Vertingų metalų atskyrimas (varis, aliuminis, plienas)</li>
          <li>Perdirbamų medžiagų perdirbimas</li>
          <li>Neperdirbamų medžiagų saugus utilizavimas</li>
        </ol>
        <p class="mt-2">Vidutiniškai apie 75% skalbimo mašinos medžiagų gali būti perdirbtos ir panaudotos naujiems produktams.</p>
      </div>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Ar turiu būti namuose išvežimo metu?</h3>
      <div class="pl-5 mt-2">
        <p>Nebūtina būti namuose viso išvežimo proceso metu. Galite palikti skalbimo mašiną:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Laiptinėje</li>
          <li>Koridoriuje</li>
          <li>Kieme (jei gyvenate privačiame name)</li>
        </ul>
        <p class="mt-2">Svarbu tik <span class="font-semibold">iš anksto nurodyti</span> tikslią vietą užsakymo formoje ir užtikrinti, kad mašina būtų pasiekiama mūsų komandai.</p>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Išvada</h2>
  <p class="mb-4">
    Tinkamas skalbimo mašinos paruošimas išvežimui yra būtinas norint užtikrinti saugų ir sklandų procesą. 
    Atidžiai sekdami šiuos penkis žingsnius – paruošdami vandens sistemą, pasirūpindami elektros saugumu, 
    užfiksuodami būgną, paruošdami aplinką ir pasirinkdami profesionalų išvežimą – jūs ne tik apsaugosite 
    savo namus nuo galimų pažeidimų, bet ir prisidėsite prie atsakingo elektronikos atliekų tvarkymo.
  </p>
  <p class="mb-4">
    Patikėkite šį darbą profesionalams – mūsų komanda pasirūpins viskuo nuo A iki Z, 
    pradedant saugiu išnešimu ir baigiant ekologišku perdirbimu. Kauno mieste ir apylinkėse 
    šią paslaugą teikiame <span class="font-semibold">nemokamai</span>.
  </p>
  
  <div class="bg-green-600 p-6 rounded-lg mt-8 text-center">
    <p class="font-semibold text-lg mb-4 text-white">Pasiruošę atsikratyti senos skalbimo mašinos?</p>
    <a href="/kontaktai#contact-form" class="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">
      Užsakyti nemokamą išvežimą
    </a>
  </div>
  `,
    metaTitle: 'Kaip teisingai išmesti skalbimo mašiną | Karavanas LT',
    metaDescription: '5 svarbūs dalykai, kuriuos reikia žinoti prieš išmetant seną skalbimo mašiną. Profesionalus išvežimas ir utilizavimas Kaune.',
    ogImage: '/images/straipsnis3.webp',
  },
  {
    id: 5,
    slug: 'elektronikos-atlieku-perdirbimo-procesas',
    title: 'Elektronikos atliekų perdirbimas Kaune – kaip prisidėti prie švarios aplinkos',
    excerpt: 'Susipažinkite su elektronikos atliekų perdirbimo procesu ir sužinokite, kaip jūsų sena technika gauna antrą gyvenimą vietoj to, kad kenkia aplinkai.',
    date: '2024-09-10',
    imageUrl: '/images/straipsnis2.webp',
    content: `
  <h1 class="text-3xl font-bold mb-6">Elektronikos atliekų perdirbimas Kaune – kaip prisidėti prie švarios aplinkos</h1>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Įžanga</h2>
  <p class="mb-4">
    Elektronikos atliekų perdirbimas yra sudėtingas, bet būtinas procesas šiuolaikiniame pasaulyje. 
    Kiekvienais metais Lietuvoje išmetami tūkstančiai tonų elektronikos atliekų, kurių netinkamas 
    tvarkymas kelia rimtą grėsmę aplinkai ir žmonių sveikatai. Šiame straipsnyje aptarsime, 
    kaip jūsų sena elektronika perdirbama, kokią naudą tai teikia aplinkai ir kaip kiekvienas 
    gali prisidėti prie švaresnės aplinkos kūrimo Kaune.
  </p>

  <div class="border-l-4 border-green-500 pl-4 italic my-6 bg-green-50 p-4 rounded-r-lg">
    <p class="font-semibold mb-2">Ar žinojote?</p>
    <p>Vienas išmanusis telefonas gali turėti daugiau kaip 40 skirtingų cheminių elementų, įskaitant auksą, sidabrą, varį ir retesnius elementus, kurių išgavimas iš žemės yra labai žalingas aplinkai. Tinkamas perdirbimas leidžia šiuos elementus panaudoti pakartotinai.</p>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Elektronikos atliekos: problema ir galimybės</h2>
  <div class="bg-gray-50 p-6 rounded-lg mb-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex items-start">
        <div class="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
          <span class="text-red-700 font-bold">!</span>
        </div>
        <div>
          <p class="font-semibold">Aplinkos tarša</p>
          <p class="text-gray-600">Netinkamai utilizuojama elektronika išskiria pavojingas medžiagas į dirvožemį ir vandenis</p>
        </div>
      </div>
      
      <div class="flex items-start">
        <div class="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
          <span class="text-red-700 font-bold">!</span>
        </div>
        <div>
          <p class="font-semibold">Išteklių švaistymas</p>
          <p class="text-gray-600">Išmetant elektroniką prarandami vertingi metalai ir retieji žemės elementai</p>
        </div>
      </div>
      
      <div class="flex items-start">
        <div class="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
          <span class="text-green-700 font-bold">+</span>
        </div>
        <div>
          <p class="font-semibold">Antras gyvenimas</p>
          <p class="text-gray-600">Perdirbtos medžiagos naudojamos naujiems produktams gaminti</p>
        </div>
      </div>
      
      <div class="flex items-start">
        <div class="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
          <span class="text-green-700 font-bold">+</span>
        </div>
        <div>
          <p class="font-semibold">Darbo vietos</p>
          <p class="text-gray-600">Perdirbimo pramonė kuria naujas darbo vietas ir skatina ekonomiką</p>
        </div>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kaip užsakyti nemokamą išvežimą?</h2>
  <p class="mb-4">Užsakyti nemokamą elektronikos atliekų išvežimą Kaune yra labai paprasta:</p>

  <div class="bg-green-50 p-6 rounded-lg my-8 border border-green-200">
    <h3 class="font-bold text-xl mb-4 text-green-700">Užsakymo žingsniai:</h3>
    <div class="pl-6 mb-6">
      <div class="flex items-start mb-4">
        <div class="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 border border-green-500 flex-shrink-0">
          <span class="text-green-700 font-bold">1</span>
        </div>
        <div>
          <p class="font-semibold">Užpildykite užklausos formą</p>
          <p class="text-gray-600">Nurodykite kontaktinius duomenis ir adresą mūsų svetainėje</p>
        </div>
      </div>
      
      <div class="flex items-start mb-4">
        <div class="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 border border-green-500 flex-shrink-0">
          <span class="text-green-700 font-bold">2</span>
        </div>
        <div>
          <p class="font-semibold">Aprašykite išvežamą elektroniką</p>
          <p class="text-gray-600">Pateikite informaciją apie prietaisų tipus ir kiekį</p>
        </div>
      </div>
      
      <div class="flex items-start mb-4">
        <div class="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 border border-green-500 flex-shrink-0">
          <span class="text-green-700 font-bold">3</span>
        </div>
        <div>
          <p class="font-semibold">Pasirinkite patogų laiką</p>
          <p class="text-gray-600">Nurodykite jums tinkamą išvežimo dieną ir laiką</p>
        </div>
      </div>
      
      <div class="flex items-start mb-4">
        <div class="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 border border-green-500 flex-shrink-0">
          <span class="text-green-700 font-bold">4</span>
        </div>
        <div>
          <p class="font-semibold">Susisiekime ir išvežame</p>
          <p class="text-gray-600">Mūsų specialistai susisieks per 24 valandas ir atvyks sutartu laiku</p>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <a href="/kontaktai#contact-form" class="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-green-700 transition duration-200">
        <span>Užsakyti nemokamą išvežimą</span>
        <ExternalLink className="w-4 h-4 ml-2" />
      </a>
    </div>
  </div>
      
  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Elektronikos perdirbimo procesas</h2>
  <p class="mb-4">Kai jūsų elektronikos atliekos patenka į perdirbimo centrą, jos pereina kelis svarbius etapus:</p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          <span class="text-green-700 font-bold">1</span>
        </div>
        Surinkimas ir rūšiavimas
      </h3>
      <p class="text-gray-600 pl-11">
        Elektronikos atliekos surenkamos ir išrūšiuojamos pagal tipus: kompiuteriai, telefonai, 
        buitinė technika, elektroniniai žaislai ir kt. Tai leidžia optimizuoti tolesnį perdirbimo 
        procesą pagal kiekvienos kategorijos specifiką.
      </p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          <span class="text-green-700 font-bold">2</span>
        </div>
        Pavojingų medžiagų pašalinimas
      </h3>
      <p class="text-gray-600 pl-11">
        Pašalinamos pavojingos medžiagos ir komponentai: baterijos, gyvsidabrio jungikliai, 
        kondensatoriai su PCB. Šios medžiagos tvarkomos specialiais būdais, kad būtų išvengta 
        aplinkos taršos ir užtikrintas saugumas.
      </p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          <span class="text-green-700 font-bold">3</span>
        </div>
        Išardymas ir smulkinimas
      </h3>
      <p class="text-gray-600 pl-11">
        Prietaisai išardomi rankiniu būdu arba mechaniškai susmulkinami. Šis procesas leidžia 
        atskirti skirtingas medžiagas (metalą, plastiką, stiklą) ir paruošti jas tolesniam 
        apdorojimui specializuotuose įrenginiuose.
      </p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          <span class="text-green-700 font-bold">4</span>
        </div>
        Medžiagų atskyrimas
      </h3>
      <p class="text-gray-600 pl-11">
        Naudojant įvairius fizinius ir cheminius procesus (magnetinė separacija, sūkurinių srovių 
        separacija, flotacija), atskiriami skirtingi metalai ir kitos medžiagos, kad jas būtų 
        galima panaudoti pakartotinai.
      </p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          <span class="text-green-700 font-bold">5</span>
        </div>
        Perdirbimas ir pakartotinis naudojimas
      </h3>
      <p class="text-gray-600 pl-11">
        Atskirtos medžiagos perdirbamos ir naudojamos naujų produktų gamyboje. Metalai lydomi, 
        plastikas perdirbamas į granules, o stiklas sutirpinamas ir naudojamas naujiems gaminiams.
      </p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          <span class="text-green-700 font-bold">6</span>
        </div>
        Sertifikuotas utilizavimas
      </h3>
      <p class="text-gray-600 pl-11">
        Medžiagos, kurių negalima perdirbti, utilizuojamos pagal griežtus aplinkosaugos 
        reikalavimus, kad būtų užkirstas kelias pavojingų medžiagų patekimui į aplinką ir 
        minimizuota žala.
      </p>
    </div>
  </div>

  <div class="border-l-4 border-yellow-400 pl-4 bg-yellow-50 p-4 rounded-r-lg mb-8">
    <p class="font-semibold text-yellow-700">Svarbu žinoti:</p>
    <p>Iki 95% elektronikos atliekų medžiagų gali būti sėkmingai perdirbtos ir panaudotos pakartotinai. Teisingai perdirbant elektroniką, ne tik tausojame aplinką, bet ir taupome vertingus gamtos išteklius.</p>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kokią elektroniką galima perdirbti?</h2>
  <p class="mb-4">Beveik visa elektronika ir elektroniniai prietaisai gali ir turėtų būti perdirbami:</p>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition duration-200">
      <h3 class="font-semibold mb-3 text-center text-green-700">Kompiuterinė technika</h3>
      <ul class="space-y-2 pl-5 list-disc text-gray-700">
        <li>Stacionarūs kompiuteriai</li>
        <li>Nešiojamieji kompiuteriai</li>
        <li>Planšetiniai kompiuteriai</li>
        <li>Monitoriai ir ekranai</li>
        <li>Klaviatūros ir pelės</li>
        <li>Spausdintuvai ir skeneriai</li>
      </ul>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition duration-200">
      <h3 class="font-semibold mb-3 text-center text-green-700">Mobilioji elektronika</h3>
      <ul class="space-y-2 pl-5 list-disc text-gray-700">
        <li>Mobilieji telefonai</li>
        <li>Išmanieji telefonai</li>
        <li>MP3 grotuvai</li>
        <li>Fotoaparatai</li>
        <li>Nešiojami žaidimų įrenginiai</li>
        <li>Bevielės ausinės</li>
      </ul>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition duration-200">
      <h3 class="font-semibold mb-3 text-center text-green-700">Buitinė elektronika</h3>
      <ul class="space-y-2 pl-5 list-disc text-gray-700">
        <li>Televizoriai</li>
        <li>Garso sistemos</li>
        <li>DVD/Blu-ray grotuvai</li>
        <li>Mikrobangų krosnelės</li>
        <li>Elektriniai virtuvės įrankiai</li>
        <li>Žaislai su elektronika</li>
      </ul>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kokios medžiagos gaunamos iš elektronikos?</h2>
  <p class="mb-4">Elektronika yra tikras lobis vertingų medžiagų, kurios gali būti išgautos ir perdirbtos:</p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-yellow-400">
      <h3 class="font-semibold mb-3 text-yellow-700">Vertingi metalai</h3>
      <ul class="space-y-2 pl-5 list-disc">
        <li><span class="font-semibold">Auksas</span> – naudojamas elektroninėse plokštėse ir kontaktuose</li>
        <li><span class="font-semibold">Sidabras</span> – randamas jungikliuose ir kai kuriuose laiduose</li>
        <li><span class="font-semibold">Varis</span> – naudojamas laiduose ir įvairiose elektroninėse dalyse</li>
        <li><span class="font-semibold">Aliuminis</span> – dažnai naudojamas korpusuose ir aušintuvuose</li>
      </ul>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-400">
      <h3 class="font-semibold mb-3 text-blue-700">Kitos medžiagos</h3>
      <ul class="space-y-2 pl-5 list-disc">
        <li><span class="font-semibold">Plastikas</span> – korpusai, dangteliai ir kiti komponentai</li>
        <li><span class="font-semibold">Stiklas</span> – ekranai, monitoriai ir kiti displėjai</li>
        <li><span class="font-semibold">Retieji žemės elementai</span> – naudojami elektroninėse plokštėse</li>
        <li><span class="font-semibold">Kiti metalai</span> – geležis, nikelis, cinkas, švinas ir t.t.</li>
      </ul>
    </div>
  </div>

  <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8">
    <h3 class="text-xl font-semibold mb-4 text-green-700">Perdirbimo nauda aplinkai ir ekonomikai</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 class="font-semibold mb-3 text-green-700">Aplinkosauginė nauda</h4>
        <ul class="space-y-3">
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Mažinama tarša ir toksinių medžiagų patekimas į dirvožemį bei vandenis</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Taupomi gamtos ištekliai, sumažinamas naujų žaliavų gavybos poreikis</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Mažinamas atliekų kiekis sąvartynuose ir jų tarša</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h4 class="font-semibold mb-3 text-blue-700">Ekonominė nauda</h4>
        <ul class="space-y-3">
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Kuriamos naujos darbo vietos perdirbimo pramonėje</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Mažinamos gamybos išlaidos naudojant perdirbtas medžiagas</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Skatinama žiedinė ekonomika ir tvari gamyba</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Dažniausiai užduodami klausimai</h2>
  <div class="space-y-4 mb-8">
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Ar reikia mokėti už elektronikos išvežimą?</h3>
      <div class="pl-5 mt-2">
        <p><span class="font-semibold text-green-700">Ne</span>, elektronikos atliekų išvežimas Kaune yra visiškai nemokamas. Mūsų paslauga finansuojama per gamintojų atsakomybės sistemas, todėl galime pasiūlyti nemokamą išvežimą visiems gyventojams.</p>
      </div>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Kaip paruošti elektroniką išvežimui?</h3>
      <div class="pl-5 mt-2">
        <p>Prieš išvežant elektroniką, rekomenduojame:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Ištrinti asmeninius duomenis iš įrenginių (kompiuterių, telefonų)</li>
          <li>Atjungti įrenginius nuo elektros tinklo</li>
          <li>Jei įmanoma, surinkti originalias dėžutes ar pakuotes</li>
          <li>Sudėti smulkius įrenginius į dėžes ar maišus</li>
        </ul>
      </div>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Ar išvežate didelį kiekį elektronikos iš įmonių?</h3>
      <div class="pl-5 mt-2">
        <p>Taip, teikiame specializuotas elektronikos atliekų surinkimo paslaugas įmonėms. Galime išvežti bet kokį elektronikos kiekį, išduodame reikalingus atliekų perdavimo dokumentus. Susisiekite su mumis dėl individualaus pasiūlymo.</p>
      </div>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Kaip užtikrinama duomenų sauga?</h3>
      <div class="pl-5 mt-2">
        <p>Rekomenduojame prieš atiduodant įrenginius ištrinti visus asmeninius duomenis. Jei negalite to padaryti patys, mūsų specialistai gali pagelbėti ar pasiūlyti saugaus duomenų ištrynimo paslaugą. Visi įrenginiai mūsų perdirbimo centruose yra tvarkomi laikantis griežtų duomenų saugos protokolų.</p>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Išvada</h2>
  <p class="mb-4">
    Elektronikos atliekų perdirbimas yra būtinas žingsnis siekiant išsaugoti mūsų planetą ateities kartoms. 
    Rinkdamiesi teisingai utilizuoti nebenaudojamą elektroniką, jūs ne tik padėsite mažinti aplinkos taršą, 
    bet ir prisidėsite prie vertingų išteklių išsaugojimo ir pakartotinio panaudojimo.
  </p>
  <p class="mb-4">
  Karavanas LT siūlo patogų ir nemokamą elektronikos atliekų išvežimą Kauno mieste ir apylinkėse. 
    Mūsų komanda pasirūpins, kad jūsų sena elektronika būtų išvežta operatyviai ir perdirbta laikantis 
    visų aplinkosaugos reikalavimų. Tai jūsų galimybė lengvai prisidėti prie švaresnės aplinkos kūrimo.
  </p>

<div class="bg-green-600 p-6 rounded-lg mt-8 text-center">
    <p class="font-semibold text-lg mb-4 text-white">Pasiruošę atsikratyti senos elektronikos ekologiškiausiu būdu?</p>
    <a href="/kontaktai#contact-form" class="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">
      Užsakyti nemokamą išvežimą
    </a>
  </div>
  `,
    metaTitle: 'Elektronikos atliekų perdirbimas Kaune | Karavanas LT',
    metaDescription: 'Sužinokite apie elektronikos atliekų perdirbimo procesą Kaune. Nemokamas išvežimas ir atsakingas perdirbimas su Karavanas LT.',
    ogImage: '/images/straipsnis2.webp',
  },
  {
    id: 6,
    slug: 'kaip-lengvai-ir-atsakingai-isvezti-senus-baldus-kaune',
    title: 'Kaip lengvai ir atsakingai išvežti senus baldus Kaune',
    excerpt: 'Sužinokite, kaip greitai ir patogiai atsikratyti senų baldų Kaune. Profesionalus išvežimas, saugi baldų utilizacija ir patarimai, kaip pasiruošti.',
    date: '2024-08-15',
    imageUrl: '/images/straipsnis3.webp',
    content: `
  <h1 class="text-3xl font-bold mb-6">Kaip lengvai ir atsakingai išvežti senus baldus Kaune</h1>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Įžanga</h2>
  <p class="mb-4">
    Keičiate baldus, tvarkote namus ar tiesiog norite atsikratyti senų baldų? Prieš išmetant 
    baldus į šiukšlyną ar paliekant prie konteinerių, verta apsvarstyti atsakingesnius būdus 
    atsikratyti nebereikalingais baldais. Šiame išsamiame vadove sužinosite, kaip lengvai 
    ir atsakingai išvežti senus baldus Kaune, taupant laiką, pastangas ir prisidedant prie 
    aplinkos išsaugojimo.
  </p>

  <div class="border-l-4 border-green-500 pl-4 italic my-6 bg-green-50 p-4 rounded-r-lg">
    <p class="font-semibold mb-2">Ar žinojote?</p>
    <p>Kasmet Lietuvoje išmetama daugiau nei 50,000 tonų baldų atliekų. Didelė dalis šių baldų gali būti perdirbta arba atiduota pakartotiniam naudojimui, taip sumažinant atliekų kiekį sąvartynuose ir taupant gamtos išteklius.</p>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kodėl verta rinktis profesionalų baldų išvežimą?</h2>
  <div class="bg-gray-50 p-6 rounded-lg mb-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex items-start">
        <div class="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
          <span class="text-red-700 font-bold">!</span>
        </div>
        <div>
          <p class="font-semibold">Netinkamas išmetimas - bauda</p>
          <p class="text-gray-600">Baldų palikimas prie konteinerių ar kitose viešose vietose gali užtraukti baudą iki 300 eurų</p>
        </div>
      </div>
      
      <div class="flex items-start">
        <div class="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
          <span class="text-red-700 font-bold">!</span>
        </div>
        <div>
          <p class="font-semibold">Sveikatos rizika</p>
          <p class="text-gray-600">Sunkių baldų nešimas be tinkamos įrangos gali sukelti nugaros ar kitų raumenų traumas</p>
        </div>
      </div>
      
      <div class="flex items-start">
        <div class="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
          <span class="text-green-700 font-bold">+</span>
        </div>
        <div>
          <p class="font-semibold">Aplinkosauga</p>
          <p class="text-gray-600">Profesionalai užtikrina, kad baldai bus tinkamai perdirbti ar utilizuoti, mažinant žalą aplinkai</p>
        </div>
      </div>
      
      <div class="flex items-start">
        <div class="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
          <span class="text-green-700 font-bold">+</span>
        </div>
        <div>
          <p class="font-semibold">Laiko taupymas</p>
          <p class="text-gray-600">Išvengiama rūpesčių dėl transporto nuomos, pakrovimo ir iškrovimo logistikos</p>
        </div>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kokius baldus išvežame?</h2>
  <p class="mb-4">Mūsų komanda gali išvežti bet kokią baldų kategoriją iš jūsų namų ar biuro:</p>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition duration-200">
      <h3 class="font-semibold mb-3 text-center text-green-700">Minkšti baldai</h3>
      <ul class="space-y-2 pl-5 list-disc text-gray-700">
        <li>Sofos ir kampai</li>
        <li>Foteliai ir pufai</li>
        <li>Lovos ir lovų rėmai</li>
        <li>Čiužiniai</li>
        <li>Kilimai ir kiliminės dangos</li>
      </ul>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition duration-200">
      <h3 class="font-semibold mb-3 text-center text-green-700">Korpusiniai baldai</h3>
      <ul class="space-y-2 pl-5 list-disc text-gray-700">
        <li>Spintos ir komodos</li>
        <li>Lentynos ir knygų spintos</li>
        <li>TV spintelės</li>
        <li>Sekcijos</li>
        <li>Prieškambariai</li>
      </ul>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition duration-200">
      <h3 class="font-semibold mb-3 text-center text-green-700">Kiti baldai</h3>
      <ul class="space-y-2 pl-5 list-disc text-gray-700">
        <li>Stalai ir kėdės</li>
        <li>Biuro baldai</li>
        <li>Virtuvės baldai</li>
        <li>Vonios baldai</li>
        <li>Sodo ir terasos baldai</li>
      </ul>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kaip užsakyti baldų išvežimą?</h2>
  <p class="mb-4">Užsakyti baldų išvežimą Kaune yra labai paprasta:</p>

  <div class="bg-green-50 p-6 rounded-lg my-8 border border-green-200">
    <h3 class="font-bold text-xl mb-4 text-green-700">Užsakymo žingsniai:</h3>
    <div class="pl-6 mb-6">
      <div class="flex items-start mb-4">
        <div class="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 border border-green-500 flex-shrink-0">
          <span class="text-green-700 font-bold">1</span>
        </div>
        <div>
          <p class="font-semibold">Susisiekite su mumis</p>
          <p class="text-gray-600">Užpildykite užklausos formą arba paskambinkite mums</p>
        </div>
      </div>
      
      <div class="flex items-start mb-4">
        <div class="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 border border-green-500 flex-shrink-0">
          <span class="text-green-700 font-bold">2</span>
        </div>
        <div>
          <p class="font-semibold">Aprašykite išvežamus baldus</p>
          <p class="text-gray-600">Nurodykite baldų tipą, kiekį ir būklę</p>
        </div>
      </div>
      
      <div class="flex items-start mb-4">
        <div class="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 border border-green-500 flex-shrink-0">
          <span class="text-green-700 font-bold">3</span>
        </div>
        <div>
          <p class="font-semibold">Gaukite kainą ir susitarkite dėl laiko</p>
          <p class="text-gray-600">Mes pateiksime tikslią kainą ir pasiūlysime jums patogų išvežimo laiką</p>
        </div>
      </div>
      
      <div class="flex items-start mb-4">
        <div class="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 border border-green-500 flex-shrink-0">
          <span class="text-green-700 font-bold">4</span>
        </div>
        <div>
          <p class="font-semibold">Paruoškite baldus ir laukite išvežimo</p>
          <p class="text-gray-600">Sutartu laiku mūsų specialistai atvyks, profesionaliai išneš ir išveš jūsų baldus</p>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <a href="/kontaktai#contact-form" class="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-green-700 transition duration-200">
        <span>Užsakyti baldų išvežimą</span>
        <ExternalLink className="w-4 h-4 ml-2" />
      </a>
    </div>
  </div>
      
  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Mūsų paslaugos privalumai</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        Greitas ir patogus išvežimas
      </h3>
      <p class="text-gray-600 pl-11">
        Organizuojame baldų išvežimą per 1-2 darbo dienas nuo užsakymo. Dideliems baldų kiekiams 
        galime pasiūlyti ir skubų išvežimą tą pačią dieną, jei užsakymas pateikiamas iki 10 val.
      </p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        Profesionalus aptarnavimas
      </h3>
      <p class="text-gray-600 pl-11">
        Mūsų komanda turi specialią įrangą ir patirtį saugiai išnešti baldus iš bet kokių patalpų, 
        įskaitant aukštus aukštus, siaurus praėjimus ir sudėtingas laiptines. Išvengsite bet kokių 
        žalų sienoms ar durims.
      </p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        Išnešimas iš bet kurio aukšto
      </h3>
      <p class="text-gray-600 pl-11">
        Nesvarbu, ar gyvenate pirmame, ar penkioliktame aukšte - mūsų specialistai profesionaliai 
        išneš baldus iš bet kurio aukšto. Turime patirties dirbant įvairiose situacijose, įskaitant 
        namus be lifto.
      </p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        Atsakingas utilizavimas
      </h3>
      <p class="text-gray-600 pl-11">
        Rūpinamės aplinka, todėl visi išvežti baldai yra rūšiuojami: tinkami naudoti baldai 
        atiduodami į baldų atiduotuves, kiti perdirbami ar utilizuojami pagal aplinkosaugos reikalavimus.
      </p>
    </div>
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        Konkurencingos kainos
      </h3>
      <p class="text-gray-600 pl-11">
        Siūlome sąžiningas ir konkurencingas kainas, pritaikytas pagal baldų kiekį, tipą ir išvežimo 
        sudėtingumą. Pateiksime tikslią kainą iš anksto - jokių paslėptų mokesčių ar papildomų išlaidų.
      </p>
    </div>
  </div>

  <div class="border-l-4 border-yellow-400 pl-4 bg-yellow-50 p-4 rounded-r-lg mb-8">
    <p class="font-semibold text-yellow-700">Kainos politika:</p>
    <p>Mūsų baldų išvežimo paslaugos kaina priklauso nuo kelių veiksnių: baldų kiekio, jų dydžio, aukšto, iš kurio reikia išnešti, ir atstumo. Mažiausia baldų išvežimo kaina Kaune prasideda nuo 30 €. Tikslią kainą sužinosite po užklausos pateikimo.</p>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kaip pasiruošti baldų išvežimui?</h2>
  <p class="mb-4">Keletas patarimų, kaip pasiruošti baldų išvežimui ir užtikrinti sklandų procesą:</p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-green-400">
      <h3 class="font-semibold mb-3 text-green-700">Prieš išvežimą</h3>
      <ul class="space-y-2 pl-5 list-disc">
        <li><span class="font-semibold">Ištuštinkite baldus</span> – pašalinkite visus daiktus iš stalčių, spintų, komodos ir kt.</li>
        <li><span class="font-semibold">Išardykite baldus</span> – jeigu įmanoma, išardykite didelius baldus, tai palengvins išnešimą</li>
        <li><span class="font-semibold">Surinkite smulkias dalis</span> – varžtus, tvirtinimo elementus sudėkite į maišelį</li>
        <li><span class="font-semibold">Nuimkite trapias dalis</span> – stiklines duris, lentynas saugiau transportuoti atskirai</li>
      </ul>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-400">
      <h3 class="font-semibold mb-3 text-blue-700">Išvežimo dieną</h3>
      <ul class="space-y-2 pl-5 list-disc">
        <li><span class="font-semibold">Užtikrinkite laisvą priėjimą</span> – pašalinkite kliūtis nuo baldų iki išėjimo</li>
        <li><span class="font-semibold">Apsaugokite grindis</span> – jautrias grindis galite uždengti kilimėliais ar kartonu</li>
        <li><span class="font-semibold">Informuokite kaimynus</span> – perspėkite, jei išvežimo metu gali būti užtverta laiptinė</li>
      </ul>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Dažniausiai užduodami klausimai</h2>
  <div class="space-y-4 mb-8">
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Ar išnešite baldus iš buto/namo?</h3>
      <div class="pl-5 mt-2">
        <p><span class="font-semibold text-green-700">Taip</span>, mūsų komanda pasirūpins visu išvežimo procesu - nuo baldų išnešimo iš bet kurio aukšto iki pakrovimo ir utilizavimo. Jums nereikia rūpintis sunkių daiktų nešimu ar pavojingu darbu.</p>
      </div>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Kiek kainuoja baldų išvežimas?</h3>
      <div class="pl-5 mt-2">
        <p>Kaina priklauso nuo baldų kiekio, dydžio ir išvežimo sudėtingumo:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Minimali suma baldų išvežimams nuo 30 €</li>
          <li>Vieno stambaus baldo (pvz., sofos) išvežimas: nuo 40 €</li>
          <li>Viso buto baldų išvežimas: individualus įkainis</li>
        </ul>
        <p class="mt-2">Tikslią kainą sužinosite pateikę užklausą ir nurodę baldų tipą bei kiekį.</p>
      </div>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Ar reikia išardyti baldus?</h3>
      <div class="pl-5 mt-2">
        <p>Nebūtina, bet rekomenduojama, jei baldai yra didelių gabaritų ir sunkiai išnešami pro duris ar siauras laiptines. Mūsų komanda gali padėti išardyti baldus vietoje, jei reikia, tačiau tai gali užtrukti ilgiau ir paveikti galutinę kainą. Jeigu žinote, kad baldus teks išardyti, geriausia tai padaryti iš anksto.</p>
      </div>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Ką darote su išvežtais baldais?</h3>
      <div class="pl-5 mt-2">
        <p>Išvežtus baldus tvarkome atsakingai pagal jų būklę:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Geros būklės baldus perduodame į atiduotuves</li>
          <li>Netinkamus naudoti baldus išardome į medžiagas (medieną, metalą, tekstilę) ir perduodame perdirbėjams</li>
          <li>Nefunkciniai elementai utilizuojami pagal aplinkosauginius reikalavimus</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8">
    <h3 class="text-xl font-semibold mb-4 text-green-700">Tvarūs baldų tvarkymo sprendimai</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 class="font-semibold mb-3 text-green-700">Aplinkosauginė nauda</h4>
        <ul class="space-y-3">
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Mažinamas atliekų kiekis sąvartynuose ir jų tarša</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Taupomi medienos ir kiti gamtos ištekliai</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Sumažinama CO2 emisija, reikalinga naujų baldų gamybai</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h4 class="font-semibold mb-3 text-blue-700">Socialinė nauda</h4>
        <ul class="space-y-3">
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Geros būklės baldai pasiekia juos labiausiai reikalingus žmones</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Kuriamos darbo vietos perdirbimo ir restauravimo srityse</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Skatinama atsakinga vartojimo kultūra visuomenėje</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Išvada</h2>
  <p class="mb-4">
    Senų baldų išvežimas nebūtinai turi būti varginantis ir sudėtingas procesas. Pasirinkdami 
    profesionalią išvežimo paslaugą, jūs ne tik sutaupysite laiko ir pastangų, bet ir prisidėsite 
    prie atsakingo vartojimo bei aplinkos tausojimo.
  </p>
  <p class="mb-4">
  Karavanas LT siūlo patogų, greitą ir atsakingą baldų išvežimą Kauno mieste ir apylinkėse. 
    Mūsų profesionali komanda pasirūpins visu procesu nuo A iki Z, o jūs galėsite mėgautis 
    atnaujinta erdve be nereikalingų rūpesčių ir žinodami, kad jūsų baldai buvo sutvarkyti 
    aplinkosaugiškai atsakingu būdu.
  </p>

  <div class="bg-green-600 p-6 rounded-lg mt-8 text-center">
    <p class="font-semibold text-lg mb-4 text-white">Reikia išvežti senus baldus iš namų ar biuro?</p>
    <a href="/kontaktai#contact-form" class="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">
      Užsakyti baldų išvežimą
    </a>
  </div>
  `,
    metaTitle: 'Senų baldų išvežimas Kaune | Karavanas LT',
    metaDescription: 'Profesionalus senų baldų išvežimas Kaune. Greitas aptarnavimas, konkurencingos kainos ir atsakingas utilizavimas su Karavanas LT.',
    ogImage: '/images/straipsnis3.webp',
  },
  {
    id: 7,
    slug: 'praktiskas-namietis-kasdieniai-sprendimai',
    title: 'Praktiškas namietis: efektyvūs kasdieniai sprendimai moderniame gyvenime',
    excerpt: 'Atraskite, kaip praktiškas požiūris į daiktus ir aplinką gali pagerinti jūsų gyvenimo kokybę – nuo išmintingos atliekų tvarkymo strategijos iki funkcionalios kasdienės aprangos pasirinkimo.',
    date: '2024-06-22',
    imageUrl: '/images/straipsnis7.webp',
    content: `
  <h1 class="text-3xl font-bold mb-6">Praktiškas namietis: efektyvūs kasdieniai sprendimai moderniame gyvenime</h1>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Įžanga</h2>
  <p class="mb-4">
    Šiuolaikiniame pasaulyje, kai gyvenimo tempas vis greitėja, o daiktų kiekis namuose nuolat auga, 
    praktiškas požiūris į kasdienybę tampa ne tik patogus, bet ir būtinas. Nuo senų daiktų utilizavimo 
    iki tinkamų drabužių pasirinkimo – kiekvienas aspektas gali arba palengvinti, arba apsunkinti mūsų 
    gyvenimą. Šiame straipsnyje aptarsime, kaip praktiški sprendimai gali padėti sukurti patogesnę, 
    tvaresnę ir labiau organizuotą kasdienybę.
  </p>

  <div class="border-l-4 border-green-500 pl-4 italic my-6 bg-green-50 p-4 rounded-r-lg">
    <p class="font-semibold mb-2">Verta apmąstyti:</p>
    <p>Vidutinis europietis per metus išmeta apie 11 kg tekstilės gaminių ir sukaupia apie 30 kg nenaudojamų daiktų namuose. Praktiškas požiūris į daiktų įsigijimą ir atliekų tvarkymą gali sumažinti šiuos skaičius ir padėti sukurti tvaresnę aplinką.</p>
  </div>
  

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Efektyvaus namų tvarkymo principai</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          <span class="text-green-700 font-bold">1</span>
        </div>
        Reguliarus peržiūrėjimas
      </h3>
      <p class="text-gray-600 pl-11">
        Kartą per sezoną peržiūrėkite savo daiktus ir atsikratykite tų, kurių nenaudojate. 
        Tai padės išvengti daiktų kaupimosi ir užtikrins, kad jūsų erdvė išliks organizuota 
        ir funkcionali. Principo taisyklė: jei daikto nenaudojote metus – tikriausiai jis jums nereikalingas.
      </p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          <span class="text-green-700 font-bold">2</span>
        </div>
        Atsakingas utilizavimas
      </h3>
      <p class="text-gray-600 pl-11">
        Nereikalingų daiktų išmetimas nėra vienintelis sprendimas. Rinkitės atsakingus būdus: 
        atiduokite dar tinkamus naudoti daiktus labdarai, perduokite draugams, parduokite internetu 
        arba kreipkitės į specializuotas atliekų išvežimo ir perdirbimo paslaugas.
      </p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          <span class="text-green-700 font-bold">3</span>
        </div>
        Apgalvotas pirkimas
      </h3>
      <p class="text-gray-600 pl-11">
        Prieš įsigydami naują daiktą, užduokite sau keletą klausimų: ar tikrai jo reikia? 
        Ar jis kokybiškais ir ilgaamžis? Ar turite jam vietos namuose? Toks požiūris padės 
        sumažinti impulsyvius pirkinius ir užtikrins, kad jūsų namai neprisipildys nereikalingų daiktų.
      </p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          <span class="text-green-700 font-bold">4</span>
        </div>
        Vieta viskam
      </h3>
      <p class="text-gray-600 pl-11">
        Sukurkite logišką sistemą daiktų laikymui – kiekvienas daiktas turėtų turėti savo 
        vietą. Tai ne tik padės išlaikyti tvarką, bet ir sutaupys laiko ieškant reikalingų daiktų.
        Taip pat lengviau pastebėsite, ko turite per daug ir ko trūksta.
      </p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Senų daiktų išvežimas: kada ir kaip</h2>
  <p class="mb-4">
    Vienas iš didžiausių iššūkių tvarkant namus yra atsikratyti didelių, nebenaudojamų daiktų, 
    tokių kaip baldai, buitinė technika ar elektronika. Štai keletas praktinių patarimų:
  </p>

  <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 class="font-semibold mb-3 text-green-700">Kada iškviesti profesionalus</h4>
        <ul class="space-y-3">
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Kai turite daug didelių daiktų (baldai, buitinė technika)</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Kai daiktų išnešimas reikalauja specialios įrangos ar kelių žmonių</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Kai reikia utilizuoti elektronikos atliekas ar pavojingas medžiagas</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h4 class="font-semibold mb-3 text-blue-700">Kaip išsirinkti patikimą paslaugą</h4>
        <ul class="space-y-3">
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Ieškokite įmonių su teigiamais atsiliepimais ir aiškia kainodaros sistema</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Pasiteiraukite apie atsakingą atliekų tvarkymą ir perdirbimą</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Rinkitės paslaugą, kuri siūlo pilną išvežimo paketą – nuo išnešimo iki utilizavimo</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="border-l-4 border-yellow-400 pl-4 bg-yellow-50 p-4 rounded-r-lg mb-8">
    <p class="font-semibold text-yellow-700">Svarbus patarimas:</p>
    <p>Daiktų išvežimas nemokamai dažnai siūlomas tokioms atliekoms kaip buitinė technika ar elektronika. Jei renkatės mokamą paslaugą, pavyzdžiui, baldų išvežimą, visada iš anksto sužinokite tikslią kainą ir įsitikinkite, kad nėra paslėptų mokesčių.</p>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Praktiškas drabužių spintų organizavimas</h2>
  <p class="mb-4">
    Tvarkinga ir gerai organizuota drabužių spinta sutaupo ne tik vietos, bet ir laiko 
    renkantis aprangą kiekvieną rytą. Be to, tai padeda išvengti impulsyvių pirkinių ir 
    geriau suprasti, ko iš tiesų reikia jūsų garderobui.
  </p>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition duration-200">
      <h3 class="font-semibold mb-3 text-center text-green-700">Drabužių auditas</h3>
      <ul class="space-y-2 pl-5 list-disc text-gray-700">
        <li>Peržiūrėkite visus turimus drabužius</li>
        <li>Išrūšiuokite pagal dėvėjimo dažnumą</li>
        <li>Atsikratykite tų, kurių nedėvėjote metus</li>
        <li>Atidėkite taisytinus drabužius</li>
        <li>Sugrupuokite pagal sezonus ir progą</li>
      </ul>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition duration-200">
      <h3 class="font-semibold mb-3 text-center text-green-700">Organizavimo principai</h3>
      <ul class="space-y-2 pl-5 list-disc text-gray-700">
        <li>Sukurkite "kapsulės garderobą"</li>
        <li>Laikykite dažniau dėvimus drabužius patogiame aukštyje</li>
        <li>Naudokite vienodus pakabukus</li>
        <li>Drabužius kabinkite pagal tipą ir spalvą</li>
        <li>Įsigykite papildomų organizavimo priemonių</li>
      </ul>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition duration-200">
      <h3 class="font-semibold mb-3 text-center text-green-700">Praktiškas pirkimas</h3>
      <ul class="space-y-2 pl-5 list-disc text-gray-700">
        <li>Rinkitės universalius, tarpusavyje derančius drabužius</li>
        <li>Investuokite į kokybiškas pagrindines aprangos dalis</li>
        <li>Pirmenybę teikite natūraliems audiniams</li>
        <li>Rinkitės funkcionalius drabužius, tinkančius kelioms progoms</li>
        <li>Išlaikykite asmeninį stilių ir komfortą</li>
      </ul>
    </div>
  </div>
  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Kasdienės aprangos funkcionalumas: praktiški sprendimai moderniam žmogui</h2>
  <p class="mb-4">
    Šiuolaikiniame pasaulyje apranga turi ne tik atrodyti patraukliai, bet ir atlikti praktinę funkciją. 
    Ypač kai darbas, laisvalaikis ir netikėti susitikimai dažnai susipina tą pačią dieną, funkcionalūs 
    drabužiai tampa neįkainojamu turtu jūsų garderobe.
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-green-400">
      <h3 class="font-semibold mb-3 text-green-700">Funkcionalumo aspektai</h3>
      <ul class="space-y-2 pl-5 list-disc">
        <li><span class="font-semibold">Patogumas</span> – drabužiai turėtų leisti laisvai judėti, nesukaustyti judesių</li>
        <li><span class="font-semibold">Universalumas</span> – tinkamas tiek darbui, tiek laisvalaikiui, lengvai derinamas</li>
        <li><span class="font-semibold">Praktiškumas</span> – lengva priežiūra, nereikalaujanti specialaus skalbimo ar lyginimo</li>
        <li><span class="font-semibold">Kokybė</span> – ilgaamžiškumas, atsparumas dėvėjimui ir skalbimui</li>
        <li><span class="font-semibold">Stilius</span> – atitinkantis jūsų asmeninę išraišką, bet kartu ir funkcionalus</li>
      </ul>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-400">
      <h3 class="font-semibold mb-3 text-blue-700">Praktiškas drabužių rinkinys</h3>
      <ul class="space-y-2 pl-5 list-disc">
        <li><span class="font-semibold">Kokybiški džemperiai</span> – tinka įvairioms oro sąlygoms, lengvai sluoksniuojami</li>
        <li><span class="font-semibold">Marškinėliai su charakteriu</span> – individualūs, bet kartu rafinuoti ir tinkami daugeliui progų</li>
        <li><span class="font-semibold">Universalūs džinsai</span> – patogūs, tinkantys ir darbui, ir laisvalaikiui</li>
        <li><span class="font-semibold">Patogūs sportbačiai</span> – stilingi, bet kartu funkcionalūs ilgoms darbo dienoms</li>
        <li><span class="font-semibold">Daugiafunkcis švarkas</span> – tinkantis biurui, susitikimams ir vakarienėms</li>
      </ul>
    </div>
  </div>

  <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg my-8 border border-green-100">
    <h3 class="font-bold text-xl mb-4 text-green-800">Liokesų patirtis: kaip funkcionalūs drabužiai keičia kasdienybę</h3>
    <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
      <div class="md:w-1/3">
        <img 
          src="/images/practical-clothing.webp" 
          alt="Funkcionalūs drabužiai kasdienai" 
          class="rounded-lg shadow-md w-full"
          loading="lazy"
        />
      </div>
      <div class="md:w-2/3">
        <p class="mb-4">
          Praktiškumas svarbus ne tik išvežant senus daiktus, bet ir renkantis rūbus kasdienai. Modernus tempas 
          reikalauja drabužių, kurie būtų ir funkcionalūs, ir atspindėtų asmeninį stilių.
        </p>
        <p class="mb-4">
          Mūsų komanda, dirbdama atliekų tvarkymo srityje, ypač vertina praktiškus sprendimus. Karavanas LT 
          specialistai kasdien dėvi patogius ir funkcionalius drabužius nuo <a href="https://siemka.lt" target="_blank" rel="noopener noreferrer" class="text-green-700 font-semibold">siemka.lt</a> – 
          lietuviškos elektroninės parduotuvės, kuriančios unikalaus dizaino džemperius bei marškinėlius su originaliais 
          užrašais ir piešiniais.
        </p>
        <p>
          Tokie kasdieniai drabužiai turi būti ne tik stilingi, bet ir patogūs ilgoms darbo dienoms. Natūralių medžiagų, 
          kokybiški marškinėliai ir džemperiai tampa praktiškais sprendimais tiek darbo aplinkoje, tiek ir laisvalaikiu – 
          dar vienas būdas optimizuoti gyvenimą ir taupyti laiką.
        </p>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Praktiški drabužių priežiūros patarimai</h2>
  <p class="mb-4">
    Tinkamai prižiūrimi drabužiai tarnauja ilgiau, išlaiko geresnę išvaizdą ir sutaupo pinigų. Štai keletas praktinių patarimų:
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        Skalbimo taisyklės
      </h3>
      <p class="text-gray-600 pl-11">
        Visada skaitykite ir laikykitės drabužių etiketėse nurodytų skalbimo instrukcijų. Rūšiuokite 
        drabužius pagal spalvas ir audinius, naudokite tinkamas skalbimo priemones. Tai padės išlaikyti 
        spalvas ir audinio struktūrą.
      </p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        Laikymo būdai
      </h3>
      <p class="text-gray-600 pl-11">
        Megztus drabužius geriau laikyti sulankstytus, o ne pakabintus, kad išvengtumėte jų ištįsimo. 
        Marškinius ir kitus kabančius drabužius laikykite ant kokybiškų pakabų. Drabužius saugokite nuo 
        tiesioginių saulės spindulių, kurie gali išblukinti spalvas.
      </p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        Taisymas ir priežiūra
      </h3>
      <p class="text-gray-600 pl-11">
        Nesudėtingus defektus, kaip atirusios siūlės ar atsilaisvinusios sagos, galima lengvai pataisyti 
        namuose. Investuokite į kokybišką siuvimo rinkinį ir atlikite smulkius taisymus laiku – tai 
        prailgins drabužių tarnavimo laiką.
      </p>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm">
      <h3 class="font-semibold mb-3 text-green-700 flex items-center">
        <div class="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        Atsakingas atsikratymas
      </h3>
      <p class="text-gray-600 pl-11">
        Kai ateina laikas atsisveikinti su drabužiais, ieškokite atsakingų būdų juos perduoti kitiems: 
        dovanokite draugams, aukokite labdarai, parduokite naudotų drabužių platformose. Itin susidėvėjusius 
        drabužius galima atiduoti tekstilės perdirbimui.
      </p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Dažniausiai užduodami klausimai</h2>
  <div class="space-y-4 mb-8">
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Kaip dažnai reikėtų peržiūrėti savo daiktus namuose?</h3>
      <div class="pl-5 mt-2">
        <p>Rekomenduojama didesnę namų reviziją atlikti bent du kartus per metus – pavasarį ir rudenį, keičiantis sezonams. Drabužių spintą verta peržiūrėti kartą per sezoną (4 kartus per metus), o didesnių daiktų, kaip baldai ar buitinė technika, įvertinimą galima atlikti kartą per metus.</p>
      </div>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Kaip sukurti funkcionalų kapsulės garderobą?</h3>
      <div class="pl-5 mt-2">
        <p>Kapsulės garderobo kūrimo žingsniai:</p>
        <ol class="list-decimal pl-5 mt-2 space-y-1">
          <li>Nustatykite savo stilių ir spalvinę paletę</li>
          <li>Išsirinkite 20-30 pagrindinių drabužių, kurie lengvai derinasi tarpusavyje</li>
          <li>Investuokite į kokybiškus bazinius drabužius (marškinėliai, džinsai, džemperiai)</li>
          <li>Papildykite keliais akcentiniais drabužiais ir aksesuarais</li>
          <li>Užtikrinkite, kad kiekvienas drabužis derėtų bent su trimis kitais jūsų garderobe</li>
        </ol>
        <p class="mt-2">Lietuviškos aprangos parduotuvės, tokios kaip <a href="https://siemka.lt" target="_blank" rel="noopener noreferrer" class="text-green-700 hover:underline">siemka.lt</a>, siūlo kokybiškus bazinius drabužius, kurie puikiai tinka kapsulės garderobo pagrindui.</p>
      </div>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Kaip išsirinkti tikrai funkcionalų ir patogų kasdienį drabužį?</h3>
      <div class="pl-5 mt-2">
        <p>Renkantis funkcionaliujs drabužius, atkreipkite dėmesį į šiuos aspektus:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Medžiagos kokybė ir sudėtis (natūralūs audiniai paprastai yra patogesni)</li>
          <li>Tinkamas dydis ir siluetas (drabužis neturėtų varžyti judesių)</li>
          <li>Funkcionalios detalės (kišenės, reguliuojamos detalės)</li>
          <li>Priežiūros paprastumas (lengva skalbti, nereikia specialios priežiūros)</li>
          <li>Universalumas (galimybė dėvėti skirtingomis progomis)</li>
        </ul>
      </div>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg">
      <h3 class="font-bold text-green-700">Kokias paslaugas rinktis senai buitinei technikai išvežti?</h3>
      <div class="pl-5 mt-2">
        <p>Ieškodami buitinės technikos išvežimo paslaugos Kaune, atkreipkite dėmesį į šiuos aspektus:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Nemokamas išvežimas (daugelis įmonių siūlo nemokamą buitinės technikos išvežimą)</li>
          <li>Atsakingas utilizavimas (įsitikinkite, kad įmonė užsiima perdirbimui, ne išmetimu)</li>
          <li>Pilnas paslaugų paketas (išnešimas iš namo, pakrovimas, transportavimas)</li>
          <li>Lankstus darbo grafikas (galimybė pasirinkti jums patogų laiką)</li>
          <li>Teigiami atsiliepimai ir rekomendacijos</li>
        </ul>
  <p class="mt-2">Profesionalų atliekų išvežimo paslaugas Kaune teikia Karavanas LT, užtikrinanti sklandų ir ekologišką procesą.</p>
      </div>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Taupymo strategijos taikant praktišką požiūrį</h2>
  <p class="mb-4">
    Praktiškumas kasdieniniame gyvenime gali atnešti ne tik tvarkos, bet ir žymų finansinį naudą. 
    Štai keletas būdų, kaip praktiškas požiūris padeda taupyti:
  </p>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition duration-200">
      <h3 class="font-semibold mb-3 text-center text-green-700">Daiktų tvarkymas</h3>
      <ul class="space-y-2 pl-5 list-disc text-gray-700">
        <li>Mažiau impulsyvių pirkinių dėl geresnės daiktų apskaitos</li>
        <li>Mažesnės išlaidos daiktų laikymui ir priežiūrai</li>
        <li>Pajamos iš nereikalingų daiktų pardavimo</li>
        <li>Mažiau dublikatų ir nenaudojamų daiktų</li>
      </ul>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition duration-200">
      <h3 class="font-semibold mb-3 text-center text-green-700">Aprangos optimizavimas</h3>
      <ul class="space-y-2 pl-5 list-disc text-gray-700">
        <li>Investicijos į kokybiškus, ilgaamžius drabužius</li>
        <li>Mažiau impulsyvių pirkinių dėl aiškesnio stiliaus</li>
        <li>Taupymas dėl paprastesnės drabužių priežiūros</li>
        <li>Funkcionalūs drabužiai tinka kelioms progoms</li>
      </ul>
    </div>
    
    <div class="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition duration-200">
      <h3 class="font-semibold mb-3 text-center text-green-700">Atliekų tvarkymas</h3>
      <ul class="space-y-2 pl-5 list-disc text-gray-700">
        <li>Sutaupoma ant transportavimo paslaugų</li>
        <li>Vertė iš perdirbamų medžiagų</li>
        <li>Išvengiama baudų už netinkamą atliekų tvarkymą</li>
        <li>Mažesnės išlaidos naujiems daiktams pirkti</li>
      </ul>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mt-8 mb-4 text-green-700">Išvada</h2>
  <p class="mb-4">
    Praktiškumas kasdieniniame gyvenime – tai ne vien namų tvarka ar funkcionalūs drabužiai. Tai holistinis 
    požiūris į gyvenimą, apimantis mūsų santykį su daiktais, aplinka ir kasdieniais sprendimais. Nuo atsakingo 
    senų daiktų išvežimo iki išmintingo garderobo formavimo – kiekviena detalė prisideda prie patogesnio, 
    tvaresnio ir efektyvesnio gyvenimo.
  </p>
  <p class="mb-4">
    Taikydami praktiškus sprendimus, ne tik sutaupome laiko ir pinigų, bet ir prisidedame prie aplinkos 
    tausojimo. Rinkitės atsakingai – tiek išsirenkant naujus daiktus, tiek atsikratant senų, ir jūsų kasdienybė 
    taps sklandesnė, o namai – jaukesni.
  </p>

  <div class="bg-green-600 p-6 rounded-lg mt-8 text-center">
    <p class="font-semibold text-lg mb-4 text-white">Reikia pagalbos tvarkant nereikalingus daiktus?</p>
    <div class="flex flex-col md:flex-row justify-center items-center gap-4">
      <a href="/kontaktai#contact-form" class="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">
        Užsakyti išvežimo paslaugą
      </a>
      <a href="https://siemka.lt" target="_blank" rel="noopener noreferrer" class="inline-block bg-green-700 text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-200">
        Atrasti funkcionalius drabužius
      </a>
    </div>
  </div>
  `,
    metaTitle: 'Praktiškas namietis: efektyvūs kasdieniai sprendimai | Karavanas LT',
    metaDescription: 'Atraskite, kaip praktiškas požiūris į daiktus, jų tvarkymą ir funkcionalią aprangą gali pagerinti jūsų gyvenimo kokybę. Patarimai ir sprendimai moderniam žmogui.',
    ogImage: '/images/straipsnis7.webp',
  },
  {
    id: 8,
    slug: 'buitines-technikos-isvezimas-lietuvoje-pilnas-gidas-2025',
    title: 'Buitinės technikos išvežimas visoje Lietuvoje 2025: pilnas gidas (nemokama paslauga, tvarūs sprendimai, AI tendencijos)',
    excerpt: 'Išsamus 2025 m. buitinės technikos išvežimo Lietuvoje gidas: nemokamos galimybės, ekologija, miestų specifika, pasiruošimas ir dirbtinio intelekto vaidmuo.',
    date: '2025-08-09',
    imageUrl: '/images/straipsnis2.webp',
    content: `
  <h1 class="text-3xl font-bold mb-6">Buitinės technikos išvežimas visoje Lietuvoje 2025: pilnas gidas</h1>
  <p class="text-lg mb-6">Tikslas – padėti gyventojams ir smulkioms įmonėms greitai, nemokamai ir atsakingai atsikratyti senos buitinės technikos.</p>

  <div class="bg-green-50 border border-green-200 p-5 rounded-lg mb-8">
    <h2 class="text-2xl font-semibold mb-3 text-green-700">Trumpai: ką rasite šiame straipsnyje</h2>
    <ul class="list-disc pl-6 space-y-1 text-gray-700">
      <li>Kur ir kada <strong>nemokamai</strong> išvežame buitinę techniką</li>
      <li>Skirtumai tarp Vilniaus, Kauno ir mažesnių miestų</li>
      <li>Kaip pasiruošti išvežimui (5 žingsniai)</li>
      <li>Dažniausios klaidos ir kaip jų išvengti</li>
      <li>AI ir žaliųjų iniciatyvų tendencijos atliekų tvarkyme</li>
      <li>DUK + realūs scenarijai</li>
    </ul>
  </div>

  <h2 class="text-2xl font-semibold mb-4 text-green-700">1. Kodėl svarbus teisingas buitinės technikos išvežimas?</h2>
  <p class="mb-4">Sena buitinė technika (šaldytuvai, skalbimo mašinos, viryklės, džiovyklės, indaplovės) turi medžiagų, kurios gali būti <strong>perdirbamos</strong> arba <strong>pavojingos aplinkai</strong> (freonas, alyvos, sunkieji metalai). Teisingas išvežimas:</p>
  <ul class="list-disc pl-6 mb-6 space-y-1">
    <li>Mažina atliekų kiekį sąvartynuose</li>
    <li>Grąžina žaliavas (metalą, plastiką, elektroniką) į ekonomikos ciklą</li>
    <li>Taupo energiją ir išteklius</li>
    <li>Atitinka ES WEEE (Atliekų elektros ir elektroninės įrangos) direktyvos nuostatas</li>
  </ul>

  <h2 class="text-2xl font-semibold mb-4 text-green-700">2. Nemokamo išvežimo sąlygos 2025</h2>
  <p class="mb-4">Karavanas LT daugumoje atvejų išveža stambią buitinę techniką nemokamai. Pagrindiniai veiksniai:</p>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-50 p-4 rounded-lg">
      <h3 class="font-semibold mb-2">Didieji miestai</h3>
      <p class="text-gray-600 text-sm">Vilnius ir Kaunas – išvežimas beveik visada nemokamas, jei prietaisas paruoštas paėmimui.</p>
    </div>
    <div class="bg-gray-50 p-4 rounded-lg">
      <h3 class="font-semibold mb-2">Regionai</h3>
      <p class="text-gray-600 text-sm">Mažesniuose miestuose – priklauso nuo maršruto ir kiekio. Dažnai sugrupuojame kelis užsakymus.</p>
    </div>
    <div class="bg-gray-50 p-4 rounded-lg">
      <h3 class="font-semibold mb-2">Svoris / kiekis</h3>
      <p class="text-gray-600 text-sm">Keli prietaisai vienu adresu = efektyviau logistiškai, todėl prioritetas.</p>
    </div>
    <div class="bg-gray-50 p-4 rounded-lg">
      <h3 class="font-semibold mb-2">Prieinamumas</h3>
      <p class="text-gray-600 text-sm">Lauke / laiptinėje palikti prietaisai pagreitina tvarkymą – dažnai suteikia prioritetą.</p>
    </div>
  </div>

  <h2 class="text-2xl font-semibold mb-4 text-green-700">3. Kaip pasiruošti? 5 žingsnių kontrolinis sąrašas</h2>
  <ol class="list-decimal pl-6 mb-6 space-y-2">
    <li><strong>Išjunkite</strong> prietaisą (šaldytuvui – 12–24 h prieš)</li>
    <li><strong>Ištuštinkite ir išvalykite</strong> vidų (be maisto / vandens)</li>
    <li><strong>Atlaisvinkite prieigą</strong> – pašalinkite kliūtis, nuimkite kilimėlius</li>
    <li><strong>Jei reikia – užfiksuokite dureles</strong></li>
    <li><strong>Įrašykite papildomą info</strong> užklausoje (aukštas, durų kodas, ar bus žmonių vietoje)</li>
  </ol>

  <h2 class="text-2xl font-semibold mb-4 text-green-700">4. Skirtumai tarp miestų</h2>
  <table class="w-full text-sm mb-6 border border-gray-200">
    <thead>
      <tr class="bg-gray-50">
        <th class="p-2 text-left">Miestas</th>
        <th class="p-2 text-left">Dažniausias užsakymo tipas</th>
        <th class="p-2 text-left">Vid. reakcija</th>
        <th class="p-2 text-left">Pastabos</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-t"><td class="p-2">Vilnius</td><td class="p-2">Šaldytuvas + skalbimo mašina</td><td class="p-2">24 h</td><td class="p-2">Didelė paklausa – rezervuokite iš anksto</td></tr>
      <tr class="border-t"><td class="p-2">Kaunas</td><td class="p-2">Skalbimo mašina / viryklė</td><td class="p-2">24–48 h</td><td class="p-2">Dažni kombinuoti užsakymai</td></tr>
      <tr class="border-t"><td class="p-2">Kiti miestai</td><td class="p-2">Šaldytuvas</td><td class="p-2">2–5 d.</td><td class="p-2">Maršrutai derinami grupuojant</td></tr>
    </tbody>
  </table>

  <h2 class="text-2xl font-semibold mb-4 text-green-700">5. Dirbtinis intelektas (AI) ir atliekų tvarkymas</h2>
  <p class="mb-4">2025 m. AI technologijos padeda optimizuoti surinkimo maršrutus (mažina CO₂), prognozuoja paklausą pagal sezoniškumą ir padeda identifikuoti neteisingai išmestą įrangą viešose vietose. Karavanas LT seka tendencijas – ateityje planuojame automatizuotą maršrutų siūlymą klientui realiu laiku.</p>

  <div class="bg-green-100 p-4 rounded mb-6 text-sm">
    <strong>Įžvalga:</strong> AI paieškos (Google SGE, Perplexity, ChatGPT) prioritetą teikia struktūruotiems, semantiškai aiškiems, aktualiems ir patikimumą patvirtinantiems šaltiniams (E-E-A-T). Šis straipsnis optimizuotas atsižvelgiant į tai.</div>

  <h2 class="text-2xl font-semibold mb-4 text-green-700">6. Dažniausios klaidos</h2>
  <ul class="list-disc pl-6 mb-6 space-y-1">
    <li>Paliekamas neprieinamas praėjimas (užstatytas koridorius)</li>
    <li>Nenurodomas aukštas arba nėra durų kodo</li>
    <li>Prietaisas dar įjungtas / šiltas</li>
    <li>Nenurodoma ar reikalinga išnešimo pagalba</li>
  </ul>

  <h2 class="text-2xl font-semibold mb-4 text-green-700">7. DUK</h2>
  <div class="space-y-4 mb-8">
    <div class="bg-gray-50 p-4 rounded"><h3 class="font-semibold mb-2">Ar paslauga tikrai nemokama?</h3><p>Taip – Vilniuje ir Kaune standartiniai atvejai. Regionuose – derinama individualiai.</p></div>
    <div class="bg-gray-50 p-4 rounded"><h3 class="font-semibold mb-2">Ar išnešate iš 5 aukšto be lifto?</h3><p>Taip, bet prašome iš anksto informuoti – prireiks papildomo žmogaus.</p></div>
    <div class="bg-gray-50 p-4 rounded"><h3 class="font-semibold mb-2">Ar priimate neveikiančius prietaisus?</h3><p>Taip, būklė neturi reikšmės – svarbu, kad saugiai pasiektume.</p></div>
    <div class="bg-gray-50 p-4 rounded"><h3 class="font-semibold mb-2">Ar išrašote perdavimo dokumentą?</h3><p>Taip, jei reikia – pateikiame patvirtinimą el. paštu.</p></div>
  </div>

  <h2 class="text-2xl font-semibold mb-4 text-green-700">8. Greita užklausa</h2>
  <p class="mb-4">Jei jau pasiruošę – spauskite žemiau ir pateikite užklausą dabar:</p>
  <a href="/kontaktai#contact-form" class="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">Užpildyti formą</a>

  <h2 class="text-2xl font-semibold mt-10 mb-4 text-green-700">9. Santrauka</h2>
  <p class="mb-4">Tinkamas buitinės technikos išvežimas – tai greitis + ekologija + atsakomybė. Pasiruoškite pagal kontrolinį sąrašą, rezervuokite, o likusiu pasirūpinsime mes. Jei turite klausimų – rašykite el. paštu arba pateikite formą.</p>
  <p class="text-sm text-gray-500">Atnaujinta: 2025-08-09</p>
    `,
    metaTitle: 'Buitinės technikos išvežimas visoje Lietuvoje 2025 | Pilnas gidas',
    metaDescription: 'Pilnas 2025 m. gidas: nemokamas buitinės technikos išvežimas, paruošimas, regionų skirtumai, AI tendencijos, DUK. Karavanas LT – greita pagalba.',
    ogImage: '/images/straipsnis2.webp',
  }
];
const imageDimensions: Record<string, { width: number; height: number }> = {
  '/images/straipsnis1.webp': { width: 1024, height: 1024 },
  '/images/straipsnis2.webp': { width: 1024, height: 1024 },
  '/images/straipsnis3.webp': { width: 1536, height: 1024 },
  '/images/straipsnis4.webp': { width: 1536, height: 1024 },
  '/images/straipsnis5.webp': { width: 1024, height: 1024 },
  '/images/straipsnis7.webp': { width: 1024, height: 1536 }
} as const;



const getImageDimensions = (src: string) => imageDimensions[src] || { width: 1200, height: 800 };

const BlogPost = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const slug = currentPath.split('/').pop();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div>Straipsnis nerastas</div>;
  }

  const canonicalUrl = buildCanonicalUrl(`/naujienos/${post.slug}`);
  const { width: imageWidth, height: imageHeight } = getImageDimensions(post.imageUrl);

  const shareUrl = window.location.href;
  const shareText = post.title;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`,
  };

  // Article structured data (simplified)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    image: buildAbsoluteUrl(post.ogImage || post.imageUrl),
    mainEntityOfPage: canonicalUrl,
    author: { '@type': 'Organization', name: company.brandName },
    publisher: {
      '@type': 'Organization',
      name: company.brandName,
      logo: { '@type': 'ImageObject', url: buildAbsoluteUrl('/ikona_spalvotas.svg') }
    },
    description: post.metaDescription
  } as const;

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pradžia', item: buildCanonicalUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Naujienos', item: buildCanonicalUrl('/naujienos') },
      { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl }
    ]
  } as const;

  return (
    <article className="py-12" itemScope itemType="http://schema.org/BlogPosting">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SEO
          title={post.metaTitle}
          description={post.metaDescription}
          canonicalUrl={canonicalUrl}
          ogImage={post.ogImage || post.imageUrl}
          ogType="article"
          structuredData={[articleSchema, breadcrumbLd]}
        />
        <div className="mb-8">
          <button
            onClick={() => navigate('/naujienos')}
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Grįžti į straipsnių sąrašą
          </button>
        </div>

        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
          loading="lazy"
          decoding="async"
          width={imageWidth}
          height={imageHeight}
          itemProp="image"
        />

        {post.id === 8 && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-8">
            <h2 className="text-xl font-semibold text-amber-800 mb-2">TL;DR – santrauka</h2>
            <p className="text-amber-900 text-sm leading-relaxed">
              2025 m. buitinės technikos išvežimas Lietuvoje: Vilnius / Kaunas – beveik visada nemokamai, regionuose maršrutų grupavimas.
              Pasiruošimas: išjungti, ištuštinti, atlaisvinti priėjimą, nurodyti aukštą / kodą. AI tendencijos optimizuoja maršrutus ir prioritetus.
              Dažniausios klaidos – neprieinamas praėjimas ir neparuošti prietaisai. Užklausa: forma arba skambutis, atsakymas per 24 h.
            </p>
          </div>
        )}

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <time itemProp="datePublished" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('lt-LT')}
          </time>
        </div>

        <div
          className="prose prose-lg max-w-none"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.id === 8 && (
          <div className="mt-12 space-y-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Šaltiniai ir atitiktis</h3>
              <ul className="list-disc pl-5 text-sm text-green-900 space-y-1">
                <li>ES WEEE direktyva (Atliekų elektros ir elektroninės įrangos direktyva)</li>
                <li>Lietuvos aplinkos apsaugos agentūros gairės dėl EEĮ atliekų</li>
                <li>Karavanas LT vidiniai logistikos ir maršrutų optimizavimo principai</li>
              </ul>
              <p className="text-xs text-green-700 mt-3">Santrauka: laikomasi atsakingo išardymo, perdirbamų frakcijų išskyrimo ir pavojingų medžiagų saugaus perdavimo sertifikuotiems tvarkytojams.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Greita užklausa</h3>
              <p className="text-sm text-gray-600 mb-4">Užpildykite formą – atsakysime per 24 valandas (darbo dienomis).</p>
              <a href="/kontaktai#contact-form" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">Pateikti užklausą dabar</a>
            </div>
          </div>
        )}

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Dalintis straipsniu:</h3>
          <div className="flex space-x-4">
            {Object.entries(shareLinks).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-green-600"
              >
                <Share2 className="w-5 h-5 mr-2" />
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </a>

            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

const BlogList = () => {
  const title = 'Naujienos ir patarimai | Karavanas LT';
  const description = 'Naujausia informacija apie atliekų tvarkymą ir perdirbimą Kaune. Naudingos žinios apie buitinės technikos ir elektronikos utilizavimą.';
  const canonicalUrl = buildCanonicalUrl('/naujienos');
  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: title,
    url: canonicalUrl,
    blogPost: blogPosts.map(p => ({
      '@type': 'BlogPosting',
      headline: p.title,
      datePublished: p.date,
      mainEntityOfPage: buildCanonicalUrl(`/naujienos/${p.slug}`)
    }))
  } as const;
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pradžia', item: buildCanonicalUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Naujienos', item: canonicalUrl }
    ]
  } as const;

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SEO title={title} description={description} canonicalUrl={canonicalUrl} structuredData={[blogLd, breadcrumbLd]} />
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Naujienos ir patarimai</h1>
          <p className="text-xl text-gray-600">Naujausia informacija apie atliekų tvarkymą ir perdirbimą</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const { width, height } = getImageDimensions(post.imageUrl);
            return (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                itemScope
                itemType="http://schema.org/BlogPosting"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  decoding="async"
                  width={width}
                  height={height}
                  itemProp="image"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time itemProp="datePublished" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('lt-LT')}
                    </time>
                  </div>
                  <h2 className="text-xl font-bold mb-3" itemProp="headline">{post.title}</h2>
                  <p className="text-gray-600 mb-4" itemProp="description">{post.excerpt}</p>
                  <Link
                    to={`/naujienos/${post.slug}`}
                    className="text-green-600 font-semibold hover:text-green-700"
                  >
                    Skaityti daugiau →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Naujienos = () => {
  const currentPath = window.location.pathname;
  return currentPath === '/naujienos' ? <BlogList /> : <BlogPost />;
};

export default Naujienos;