import React from 'react';

const facesStrings = [
  'Podstawowe manualne oczyszczanie twarzy z peelingiem kawitacyjnym - 170zł',
  'Peeling kawitacyjny wraz z zabiegiemm pielęgnacyjnym - 150zł',
  'Peeling kawitacyjny jako dodatek do usługi - 30zł',
  'Mikrodermabrazja diamentowa wraz z zabiegiem pielęgnacyjnym - 160zł',
  'Mikrodermabrazja diamentowa jako dodatek do usługi - 30zł',
  'Infuzja tlenowa - 140zł',
  'Infuzja tlenowa jako dodatek do usługi - 30zł',
  'Sonoforeza z zabiegiem pielęgnacyjnym - 150zł',
  'Sonoforeza jako dodatek do innego zabiegu - 30zł',
  'Oxybrazja wodno-tlenowa - 160zł',
  'Oxybrazja jako dodatek do innego zabiegu - 30zł',
];
const facesStrings2 = [
  'Mandelic Peel (Zabieg oczyszczający na bazie kwasu migdałowego) - 120zł',
  'Mesoestetic Mesopeel Azelan (Peeling medyczny na bazie kwasu salicylowego i azelainowego) - 150zł',
  'Mesoestetic Mesopeel Jessner (Peeling medyczny oparty na kwasie salicylowym,cytrynowym i mlekowym) - 150zł',
  'Mesoestetic Mesopeel Salicylic (Peeling medyczny na bazie 20% kwasu salicylowego) - 150zł',
  'Mesoestetic Mesopeel Melanostop (Peeling medyczny stanowiący mieszankę kwasu azelainowego i rezorcyny) - 150zł',
  'TCA - 200zł',
  'Retinol - 250zł',
];
const facesStrings3 = [
  'Twarz - 250zł',
  'Twarz + szyja - 300zł',
  'Twarz + szyja + dekolt - 350zł',
];
const facesStrings4 = [
  'Twarz - 300zł',
  'Podbródek + szyja - 250zł',
  'Dekolt - 200zł',
  'Twarz + szyja + dekolt - 500zł',
  'Bruzdy nosowo-wargowe - 200zł',
  'Czoło + lwia zmarszczka - 200zł',
  'TRYCHOLOGIA INIEKCYJNA (Mezoterapia igłowa w łysieniu oraz wypadaniu włosów) - 180zł',
];

const Face = ({ name }) => {
  const list = facesStrings.map(element => (
    <li key={element}>
      {element}
    </li>
  ));
  const list2 = facesStrings2.map(element => (
    <li key={element}>
      {element}
    </li>
  ));
  const list3 = facesStrings3.map(element => (
    <li key={element}>
      {element}
    </li>
  ));
  const list4 = facesStrings4.map(element => (
    <li key={element}>
      {element}
    </li>
  ));

  return (
    <div>
      <article>
        <h1>{name}</h1>
        <p>Zabiegi oczyszczające</p>
        <ul>
          {list}
        </ul>
        <p>Peelingi chemiczne</p>
        <ul>
          {list2}
        </ul>
        <p>Mezoterapia bezigłowa - 200zł</p>
        <p>Mezoterapia mikroigłowa</p>
        <ul>
          {list3}
        </ul>
        <p>Mezoterapia igłowa</p>
        <ul>
          {list4}
        </ul>
      </article>
    </div>
  );
}

export default Face;