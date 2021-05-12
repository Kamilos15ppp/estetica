import React from 'react';

import infoPhoto from '../images/info_photo.jpg';

import '../styles/Info.css';

const infoStrings = [
  'Bezpłatna konsultacja kosmetologiczna',
  'Bardzo wiele osób rezygnuje z konsultacji przed wizytą, uważając że ta jest tylko stratą ich cennego czasu. Pozwól, że obalę ten mit... Przeprowadzenie szczegółowego wywiadu obejmującego aktualny stan zdrowia, nawyki pielęgnacyjne, stosowane kosmetyki jest kluczem do sukcesu. Podczas bezpłatnej konsultacji dokonamy dokładnej analizy stanu Twojej skóry i jej problemów, ustalimy spersonalizowany plan zabiegowy, który pozwoli walczyć z defektami Twojej skóry i zachowa ją w doskonałej kondycji, a także dobierzemy odpowiednią pielęgnację domową dostosowaną do indywidualnych potrzeb Twojej skóry, abyś mogła prawidłowo dbać o nią również w domu.',
  'Zadzwoń i umów się już dziś, zanim ktoś inny zajmie Twoje miejsce!',
  'Tel',
  '514-072-229',
  ''
];

const InfoPage = () => {
  return (
    <div className='info'>
      <article>
        <h1>{infoStrings[0]}</h1>
        <p>{infoStrings[1]}</p>
      </article>
      <img src={infoPhoto} alt={infoStrings[5]} />
      <p>{infoStrings[2]}</p>
      <span>{infoStrings[3]} <a href={`tel:${infoStrings[4]}`}>{infoStrings[4]}</a></span>
    </div>
  );
}

export default InfoPage;