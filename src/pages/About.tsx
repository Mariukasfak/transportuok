import React from 'react';
import { Shield, Users, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Apie Transportuok.lt</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transportuok.lt – tai Kaune įsikūrusi atliekų išvežimo paslauga, kurios tikslas – padėti 
            gyventojams greitai, patikimai ir atsakingai atsikratyti nereikalingais daiktais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Patikimumas</h3>
            <p className="text-gray-600">
              Daugumą atliekų išvežame nemokamai. Dirbame greitai ir laikomės susitarimų.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Profesionalumas</h3>
            <p className="text-gray-600">
              Mūsų komanda specializuojasi buitinės technikos, elektronikos, baldų ir metalo laužo išvežime.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Atsakomybė</h3>
            <p className="text-gray-600">
              Užtikriname tvarią utilizaciją – kai tik įmanoma, daiktai perdirbami, ne išmetami.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">Mūsų paslaugos Kaune</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Transportuok.lt teikia platų atliekų išvežimo paslaugų spektrą Kauno mieste ir rajone:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nemokamas buitinės technikos išvežimas (šaldytuvai, skalbimo mašinos, viryklės)</li>
              <li>Elektronikos atliekų surinkimas ir utilizavimas</li>
              <li>Metalo laužo išvežimas nemokamai (jei atitinka minimalius kiekius)</li>
              <li>Baldų ir stambiagabaričių atliekų išvežimas</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Kodėl verta rinktis mus?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Mūsų privalumai</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Nemokamas daugumos atliekų išvežimas</li>
                <li>Greitas ir patikimas aptarnavimas</li>
                <li>Patyrusi komanda</li>
                <li>Lankstus darbo grafikas</li>
                <li>Aplinkos tausojimas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Mūsų įsipareigojimai</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Operatyvus užklausų aptarnavimas</li>
                <li>Punktualus atvykimas sutartu laiku</li>
                <li>Saugus daiktų išnešimas</li>
                <li>Atsakingas atliekų tvarkymas</li>
                <li>Profesionalus aptarnavimas</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-gray-600">
            Pasirinkę mus, jūs prisidedate ne tik prie švarios aplinkos, bet ir prie atsakingo 
            vartojimo kultūros Kaune. Mūsų tikslas – ne tik išvežti atliekas, bet ir užtikrinti, 
            kad jos būtų tvarkomos aplinkai draugišku būdu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;