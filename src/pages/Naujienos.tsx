import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Share2, ExternalLink, ArrowLeft } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    slug: 'kaip-teisingai-utilizuoti-saldytuva-kaunieciai',
    title: 'Kaip teisingai utilizuoti šaldytuvą – išsamus vadovas kauniečiams',
    excerpt: 'Sužinokite, kaip teisingai ir saugiai utilizuoti seną šaldytuvą Kaune. Išsamus vadovas apie šaldytuvo paruošimą išvežimui ir ekologišką perdirbimą.',
    date: '2025-01-15',
    imageUrl: '/images/straipsnis1.webp',
    content: `
      <h1>Kaip teisingai utilizuoti šaldytuvą – išsamus vadovas kauniečiams</h1>
      
      <h2>Įžanga</h2>
      <p>
        Seno šaldytuvo utilizavimas – svarbus žingsnis tiek aplinkosaugos, tiek saugumo požiūriu. 
        Šiame išsamiame vadove sužinosite, kaip teisingai paruošti ir utilizuoti seną šaldytuvą Kaune.
      </p>
      
      <h2>Kodėl svarbu tinkamai utilizuoti šaldytuvą?</h2>
      <ul>
        <li>Šaldytuvuose yra freonas, kuris kenkia ozono sluoksniui</li>
        <li>Netinkamas utilizavimas gali užteršti gruntinį vandenį</li>
        <li>Dauguma šaldytuvo dalių gali būti perdirbtos ir panaudotos pakartotinai</li>
        <li>Teisingas utilizavimas užtikrina saugumą ir aplinkos apsaugą</li>
      </ul>

      <h2>Šaldytuvo paruošimas išvežimui</h2>
      <ol>
        <li>Išjunkite šaldytuvą iš elektros tinklo</li>
        <li>Atšildykite ir išvalykite vidų</li>
        <li>Išimkite visas lentynėles ir stalčius</li>
        <li>Užfiksuokite dureles, kad jos neatsidarytų transportuojant</li>
      </ol>

      <h2>Kaip užsakyti išvežimą?</h2>
      <div class="bg-green-50 p-6 rounded-lg my-6">
        <h3 class="font-bold mb-4">Užsakymo žingsniai:</h3>
        <ol class="space-y-2">
          <li>1. Užpildykite užklausos formą mūsų svetainėje</li>
          <li>2. Nurodykite šaldytuvo tipą ir būklę</li>
          <li>3. Pasirinkite jums patogų išvežimo laiką</li>
          <li>4. Mes susisieksime per 24 valandas</li>
        </ol>
        <div class="mt-6">
          <a href="/kontaktai#contact-form" class="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center">
            <span>Užsakyti išvežimą</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>

      <h2>Šaldytuvo perdirbimo procesas</h2>
      <ol>
        <li>Freono ištraukimas ir saugus utilizavimas</li>
        <li>Metalinių dalių atskyrimas perdirbimui</li>
        <li>Plastiko komponentų rūšiavimas</li>
        <li>Izoliacinių medžiagų tvarkymas</li>
      </ol>

      <h2>Dažniausiai užduodami klausimai</h2>
      <div class="space-y-4">
        <div>
          <h3 class="font-bold">Ar išvežimas mokamas?</h3>
          <p>Ne, šaldytuvų išvežimas Kaune yra nemokamas.</p>
        </div>
        <div>
          <h3 class="font-bold">Kiek laiko užtrunka išvežimas?</h3>
          <p>Išvežimą organizuojame per 1-2 darbo dienas nuo užsakymo.</p>
        </div>
        <div>
          <h3 class="font-bold">Ar reikia būti namie išvežimo metu?</h3>
          <p>Taip, kažkas turi būti namuose, kad įleistų mūsų komandą.</p>
        </div>
      </div>

      <h2>Išvada</h2>
      <p>
        Teisingas šaldytuvo utilizavimas yra svarbus žingsnis saugant aplinką. 
        Pasirinkdami profesionalų išvežimą, jūs prisidedate prie atsakingo atliekų tvarkymo 
        ir aplinkos išsaugojimo ateities kartoms.
      </p>
    `,
    metaTitle: 'Kaip teisingai utilizuoti šaldytuvą Kaune | Transportuok.lt',
    metaDescription: 'Išsamus vadovas apie teisingą šaldytuvo utilizavimą Kaune. Sužinokite, kaip saugiai ir ekologiškai atsikratyti seno šaldytuvo.',
    ogImage: '/images/straipsnis1.webp',
  },
  {
    id: 2,
    slug: 'kodel-svarbu-tinkamai-ismesti-elektronikos-atliekas',
    title: 'Kodėl svarbu tinkamai išmesti elektronikos atliekas ir kaip tai padaryti Kaune',
    excerpt: 'Elektronikos atliekų tvarkymas – iššūkis šiuolaikinėje visuomenėje. Sužinokite, kodėl svarbu tinkamai utilizuoti elektroniką ir kaip tai padaryti Kaune.',
    date: '2024-12-18',
    imageUrl: '/images/straipsnis2.webp',
    content: `
      <h1>Kodėl svarbu tinkamai išmesti elektronikos atliekas ir kaip tai padaryti Kaune</h1>
      
      <h2>Įžanga</h2>
      <p>
        Elektronikos atliekos – viena sparčiausiai augančių atliekų rūšių pasaulyje. 
        Šiame straipsnyje nagrinėsime, kodėl svarbu jas tinkamai tvarkyti ir kaip tai 
        padaryti Kaune.
      </p>

      <h2>Elektronikos atliekų keliami pavojai</h2>
      <ul>
        <li>Sunkieji metalai teršia dirvožemį ir vandenį</li>
        <li>Pavojingos medžiagos kelia grėsmę sveikatai</li>
        <li>Netinkamas tvarkymas skatina šiltnamio efektą</li>
        <li>Prarandami vertingi ištekliai, kuriuos galima perdirbti</li>
      </ul>

      <h2>Kaip teisingai tvarkyti elektronikos atliekas?</h2>
      <div class="bg-green-50 p-6 rounded-lg my-6">
        <h3 class="font-bold mb-4">Teisingas elektronikos utilizavimas:</h3>
        <ol class="space-y-2">
          <li>1. Surinkite visą nebenaudojamą elektroniką</li>
          <li>2. Ištrinkite asmeninius duomenis iš įrenginių</li>
          <li>3. Užsakykite profesionalų išvežimą</li>
          <li>4. Perduokite įrenginius perdirbimui</li>
        </ol>
        <div class="mt-6">
          <a href="/kontaktai#contact-form" class="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center">
            <span>Užsakyti išvežimą</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>

      <h2>Kokią elektroniką galima perdirbti?</h2>
      <ul>
        <li>Kompiuteriai ir jų dalys</li>
        <li>Mobilieji telefonai</li>
        <li>Televizoriai ir monitoriai</li>
        <li>Smulki buitinė elektronika</li>
        <li>Spausdintuvai ir daugiafunkciniai įrenginiai</li>
      </ul>

      <h2>Perdirbimo nauda aplinkai</h2>
      <ul>
        <li>Sumažinama tarša</li>
        <li>Taupomi gamtos ištekliai</li>
        <li>Mažinamas atliekų kiekis sąvartynuose</li>
        <li>Atgaunami vertingi metalai ir medžiagos</li>
      </ul>

      <h2>Dažniausiai užduodami klausimai</h2>
      <div class="space-y-4">
        <div>
          <h3 class="font-bold">Ar išvežimas mokamas?</h3>
          <p>Ne, elektronikos atliekų išvežimas Kaune yra nemokamas.</p>
        </div>
        <div>
          <h3 class="font-bold">Kaip paruošti elektroniką išvežimui?</h3>
          <p>Ištrinkite asmeninius duomenis ir supakuokite įrenginius saugiam transportavimui.</p>
        </div>
      </div>

      <h2>Išvada</h2>
      <p>
        Tinkamas elektronikos atliekų tvarkymas yra mūsų visų atsakomybė. 
        Rinkdamiesi profesionalų utilizavimą, prisidedate prie švaresnės ir 
        sveikesnės aplinkos kūrimo.
      </p>
    `,
    metaTitle: 'Elektronikos atliekų tvarkymas Kaune | Transportuok.lt',
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
      <h1>Kaip teisingai utilizuoti buitinę techniką Kaune – nemokamo išvežimo galimybės</h1>
      
      <h2>Įžanga</h2>
      <p>
        Kai keičiate šaldytuvą ar skalbimo mašiną, dažnai iškyla klausimas – kur padėti seną prietaisą?
        Šiame straipsnyje paaiškinsime, kaip saugiai ir legaliai utilizuoti buitinę techniką Kaune.
      </p>
      
      <h2>Kodėl svarbu utilizuoti teisingai?</h2>
      <ul>
        <li>Senas prietaisas gali turėti pavojingų medžiagų (freono, plastiko dalių, elektronikos)</li>
        <li>Netinkamas išmetimas gali būti baustinas (pagal LR atliekų tvarkymo įstatymą)</li>
        <li>Tvarkingai utilizavus – technika perdirbama, nekenkia aplinkai</li>
      </ul>

      <h2>Kaip užsakyti išvežimą?</h2>
      <div class="bg-green-50 p-6 rounded-lg my-6">
        <h3 class="font-bold mb-4">Užsakymo žingsniai:</h3>
        <ol class="space-y-2">
          <li>1. Užpildykite užklausos formą mūsų svetainėje</li>
          <li>2. Nurodykite prietaisų tipus ir kiekį</li>
          <li>3. Pasirinkite jums patogų laiką</li>
          <li>4. Mes susisieksime per 24 valandas</li>
        </ol>
        <div class="mt-6">
          <a href="/kontaktai#contact-form" class="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center">
            <span>Užsakyti išvežimą</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
      
      <h2>Dažniausiai išvežami prietaisai</h2>
      <ul>
        <li>✓ Šaldytuvai</li>
        <li>✓ Skalbimo mašinos</li>
        <li>✓ Viryklės, orkaitės</li>
        <li>✓ Indaplovės</li>
        <li>✓ Džiovyklės</li>
      </ul>
      
      <h2>Ką reikėtų žinoti prieš užsakant?</h2>
      <ul>
        <li>Prietaisas turi būti atjungtas nuo elektros / vandens</li>
        <li>Jei technika labai purvina – rekomenduojama ją nuvalyti</li>
        <li>Išvežimas nemokamas</li>
      </ul>
      
      <h2>Išvada</h2>
      <p>
        Atliekų tvarkymas prasideda nuo jūsų sprendimo. Pasirinkdami Transportuok.lt, jūs pasirenkate 
        greitą, patogų ir aplinkai draugišką sprendimą.
      </p>
    `,
    metaTitle: 'Kaip utilizuoti buitinę techniką Kaune | Transportuok.lt',
    metaDescription: 'Sužinokite, kaip teisingai ir nemokamai utilizuoti buitinę techniką Kaune. Transportuok.lt pasirūpins išvežimu nuo A iki Z.',
    ogImage: '/images/straipsnis1.webp',
  },
  {
    id: 4,
    slug: '5-dalykai-pries-ismetant-skalbimo-masina',
    title: '5 dalykai, į kuriuos reikia atkreipti dėmesį prieš išmetant seną skalbimo mašiną',
    excerpt: 'Ruošiatės atsikratyti senos skalbimo mašinos? Štai 5 svarbūs dalykai, kuriuos turite žinoti prieš jos išmetimą.',
    date: '2024-10-20',
    imageUrl: '/images/straipsnis3.webp',
    content: `
      <h1>5 dalykai, į kuriuos reikia atkreipti dėmesį prieš išmetant seną skalbimo mašiną</h1>
      
      <h2>Įžanga</h2>
      <p>
        Senos skalbimo mašinos išmetimas – ne toks paprastas procesas, kaip gali atrodyti. 
        Štai 5 svarbūs dalykai, į kuriuos būtina atkreipti dėmesį.
      </p>

      <h2>1. Vandens sistemos paruošimas</h2>
      <ul>
        <li>Užsukite vandens tiekimą</li>
        <li>Atjunkite vandens žarnas</li>
        <li>Išleiskite likusį vandenį</li>
        <li>Patikrinkite, ar nėra pratekėjimų</li>
      </ul>

      <h2>2. Elektros saugumas</h2>
      <ul>
        <li>Išjunkite mašiną iš elektros tinklo</li>
        <li>Patikrinkite, ar laidas nepažeistas</li>
        <li>Suvyniokite laidą saugiam transportavimui</li>
      </ul>

      <h2>3. Būgno užfiksavimas</h2>
      <ul>
        <li>Įstatykite transportavimo varžtus (jei išsaugojote)</li>
        <li>Užfiksuokite būgną, kad nejudėtų</li>
        <li>Patikrinkite durų užraktą</li>
      </ul>

      <h2>4. Aplinkos paruošimas</h2>
      <ul>
        <li>Išmatuokite praėjimus ir duris</li>
        <li>Numatykite išnešimo maršrutą</li>
        <li>Pašalinkite kliūtis kelyje</li>
        <li>Apsaugokite grindis ir sienas</li>
      </ul>

      <h2>5. Profesionalus išvežimas</h2>
      <div class="bg-green-50 p-6 rounded-lg my-6">
        <h3 class="font-bold mb-4">Kodėl verta rinktis profesionalų išvežimą:</h3>
        <ul class="space-y-2">
          <li>✓ Saugus išnešimas iš bet kurio aukšto</li>
          <li>✓ Tinkamas utilizavimas ir perdirbimas</li>
          <li>✓ Nemokama paslauga Kaune</li>
          <li>✓ Patogus laiko pasirinkimas</li>
        </ul>
        <div class="mt-6">
          <a href="/kontaktai#contact-form" class="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center">
            <span>Užsakyti išvežimą</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>

      <h2>Dažniausiai užduodami klausimai</h2>
      <div class="space-y-4">
        <div>
          <h3 class="font-bold">Ar reikia išleisti vandenį prieš išvežimą?</h3>
          <p>Taip, būtina išleisti visą likusį vandenį, kad išvengtumėte pratekėjimų.</p>
        </div>
        <div>
          <h3 class="font-bold">Kas nutinka su sena skalbimo mašina?</h3>
          <p>Ji išardoma į dalis, kurios perdirbamos arba utilizuojamos pagal aplinkosaugos reikalavimus.</p>
        </div>
      </div>

      <h2>Išvada</h2>
      <p>
        Tinkamas skalbimo mašinos paruošimas išvežimui užtikrina saugų ir sklandų procesą. 
        Patikėkite šį darbą profesionalams – mes pasirūpinsime viskuo nuo A iki Z.
      </p>
    `,
    metaTitle: 'Kaip teisingai išmesti skalbimo mašiną | Transportuok.lt',
    metaDescription: '5 svarbūs dalykai, kuriuos reikia žinoti prieš išmetant seną skalbimo mašiną. Profesionalus išvežimas ir utilizavimas Kaune.',
    ogImage: '/images/straipsnis3.webp',
  },
  {
    id: 5,
    slug: 'elektronikos-atlieku-perdirbimo-procesas',
    title: 'Elektronikos atliekų perdirbimas Kaune – kaip prisidėti prie švarios aplinkos',
    excerpt: 'Susipažinkite su elektronikos atliekų perdirbimo procesu ir sužinokite, kaip jūsų sena technika gauna antrą gyvenimą.',
    date: '2024-09-10',
    imageUrl: '/images/straipsnis2.webp',
    content: `
      <h1>Elektronikos atliekų perdirbimas Kaune – kaip prisidėti prie švarios aplinkos</h1>
      
      <h2>Įžanga</h2>
      <p>
        Elektronikos atliekų perdirbimas yra sudėtingas, bet būtinas procesas. Sužinokite, kaip jūsų 
        sena elektronika yra perdirbama ir kokią naudą tai teikia aplinkai.
      </p>

      <h2>Kaip užsakyti išvežimą?</h2>
      <div class="bg-green-50 p-6 rounded-lg my-6">
        <h3 class="font-bold mb-4">Užsakymo žingsniai:</h3>
        <ol class="space-y-2">
          <li>1. Užpildykite užklausos formą mūsų svetainėje</li>
          <li>2. Nurodykite prietaisų tipus ir kiekį</li>
          <li>3. Pasirinkite jums patogų laiką</li>
          <li>4. Mes susisieksime per 24 valandas</li>
        </ol>
        <div class="mt-6">
          <a href="/kontaktai#contact-form" class="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center">
            <span>Užsakyti išvežimą</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
      
      <h2>Perdirbimo etapai</h2>
      <h3>1. Surinkimas ir rūšiavimas</h3>
      <p>Pirmiausia atliekos yra surenkamos ir išrūšiuojamos pagal tipus:</p>
      <ul>
        <li>Buitinė technika</li>
        <li>Kompiuteriai ir jų dalys</li>
        <li>Mobilieji telefonai</li>
        <li>Televizoriai ir monitoriai</li>
      </ul>
      
      <h2>Perdirbimo nauda</h2>
      <ul>
        <li>Tausojami gamtos ištekliai</li>
        <li>Mažinama tarša</li>
        <li>Kuriamos naujos darbo vietos</li>
        <li>Gaunamos vertingos žaliavos</li>
      </ul>
      
      <h2>Ką galima perdirbti?</h2>
      <p>Beveik visa elektronika gali būti perdirbta:</p>
      <ul>
        <li>Metalai (varis, aliuminis, geležis)</li>
        <li>Plastikai</li>
        <li>Stiklas</li>
        <li>Taurieji metalai (auksas, sidabras)</li>
      </ul>
    `,
    metaTitle: 'Elektronikos atliekų perdirbimas Kaune | Transportuok.lt',
    metaDescription: 'Sužinokite apie elektronikos atliekų perdirbimo procesą Kaune. Nemokamas išvežimas ir atsakingas perdirbimas su Transportuok.lt.',
    ogImage: '/images/straipsnis2.webp',
  },
  {
    id: 6,
    slug: 'kaip-lengvai-ir-atsakingai-isvezti-senus-baldus-kaune',
    title: 'Kaip lengvai ir atsakingai išvežti senus baldus Kaune',
    excerpt: 'Sužinokite, kaip greitai ir patogiai atsikratyti senų baldų Kaune. Profesionalus išvežimas ir atsakingas utilizavimas.',
    date: '2024-08-15',
    imageUrl: '/images/straipsnis3.webp',
    content: `
      <h1>Kaip lengvai ir atsakingai išvežti senus baldus Kaune</h1>
      
      <h2>Įžanga</h2>
      <p>
        Keičiate baldus ar tvarkote namus? Sužinokite, kaip lengvai ir atsakingai išvežti senus baldus Kaune.
        Mūsų profesionalus aptarnavimas užtikrins sklandų ir greitą senų baldų išvežimą.
      </p>

      <h2>Kaip užsakyti baldų išvežimą?</h2>
      <div class="bg-green-50 p-6 rounded-lg my-6">
        <h3 class="font-bold mb-4">Užsakymo žingsniai:</h3>
        <ol class="space-y-2">
          <li>1. Užpildykite užklausos formą mūsų svetainėje</li>
          <li>2. Nurodykite baldų tipus ir kiekį</li>
          <li>3. Pasirinkite jums patogų laiką</li>
          <li>4. Mes susisieksime per 24 valandas</li>
        </ol>
        <div class="mt-6">
          <a href="/kontaktai#contact-form" class="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center">
            <span>Užsakyti išvežimą</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>

      <h2>Kokius baldus išvežame?</h2>
      <ul>
        <li>✓ Sofos ir foteliai</li>
        <li>✓ Lovos ir čiužiniai</li>
        <li>✓ Spintos ir komodos</li>
        <li>✓ Stalai ir kėdės</li>
        <li>✓ Virtuvės baldai</li>
        <li>✓ Biuro baldai</li>
      </ul>

      <h2>Mūsų paslaugos privalumai</h2>
      <ul>
        <li>Greitas ir patogus išvežimas</li>
        <li>Profesionalus aptarnavimas</li>
        <li>Baldų išnešimas iš bet kurio aukšto</li>
        <li>Atsakingas utilizavimas ir perdirbimas</li>
        <li>Konkurencingos kainos</li>
      </ul>

      <h2>Pasiruošimas baldų išvežimui</h2>
      <ul>
        <li>Ištuštinkite baldus nuo daiktų</li>
        <li>Jei įmanoma, išardykite didelius baldus</li>
        <li>Užtikrinkite laisvą priėjimą prie baldų</li>
        <li>Paruoškite liftą (jei yra) arba laiptinę</li>
      </ul>

      <h2>Dažniausiai užduodami klausimai</h2>
      <div class="space-y-4">
        <div>
          <h3 class="font-bold">Ar išnešite baldus iš buto/namo?</h3>
          <p>Taip, mūsų komanda profesionaliai išneš baldus iš bet kurio aukšto.</p>
        </div>
        <div>
          <h3 class="font-bold">Kiek kainuoja baldų išvežimas?</h3>
          <p>Kaina priklauso nuo baldų kiekio ir tipo. Susisiekite su mumis dėl tikslios kainos.</p>
        </div>
        <div>
          <h3 class="font-bold">Ar reikia išardyti baldus?</h3>
          <p>Nebūtina, bet jei galite – tai palengvins ir pagreitins išvežimo procesą.</p>
        </div>
      </div>

      <h2>Išvada</h2>
      <p>
        Senų baldų išvežimas su Transportuok.lt – tai patogus ir atsakingas sprendimas. 
        Mūsų profesionali komanda pasirūpins visu procesu nuo A iki Z, o jūs galėsite 
        mėgautis atnaujinta erdve be nereikalingų rūpesčių.
      </p>
    `,
    metaTitle: 'Senų baldų išvežimas Kaune | Transportuok.lt',
    metaDescription: 'Profesionalus senų baldų išvežimas Kaune. Greitas aptarnavimas, konkurencingos kainos ir atsakingas utilizavimas su Transportuok.lt.',
    ogImage: '/images/straipsnis3.webp',
  }
];

const BlogPost = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const slug = currentPath.split('/').pop();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div>Straipsnis nerastas</div>;
  }

  React.useEffect(() => {
    document.title = post.metaTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', post.metaDescription);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogTitle) ogTitle.setAttribute('content', post.title);
    if (ogDescription) ogDescription.setAttribute('content', post.metaDescription);
    if (ogImage) ogImage.setAttribute('content', post.ogImage);
  }, [post]);

  const shareUrl = window.location.href;
  const shareText = post.title;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`,
  };

  return (
    <article className="py-12" itemScope itemType="http://schema.org/BlogPosting">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          itemProp="image"
        />
        
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
  React.useEffect(() => {
    document.title = 'Naujienos ir patarimai | Transportuok.lt';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Naujausia informacija apie atliekų tvarkymą ir perdirbimą Kaune. Naudingos žinios apie buitinės technikos ir elektronikos utilizavimą.');
    }
  }, []);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Naujienos ir patarimai</h1>
          <p className="text-xl text-gray-600">Naujausia informacija apie atliekų tvarkymą ir perdirbimą</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
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
          ))}
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