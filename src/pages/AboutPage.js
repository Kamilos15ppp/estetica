import React from 'react';

import profilePhoto from '../images/profile_photo.jpg';

import '../styles/About.css';

const aboutStrings = [
  'Szanowni Państwo',
  'Pasja do tego co robię, zamiłowanie do kosmetyki i kosmetologii, doświadczenie oraz nieustanne poszerzanie swojej wiedzy i umiejętności sprawiły, że nadszedł moment, w którym mogę zaprosić Państwa do swojego gabinetu. Salon Urody Estetica to miejsce, w którym każdy będzie mógł się zrelaksować, poprawić swój wygląd i samopoczucie, to także przestrzeń dla osób, które cenią sobie komfort i profesjonalizm. Oferuję pełen zakres profesjonalnych zabiegów kosmetycznych dobranych do indywidualnych potrzeb Klienta, dzięki czemu jestem w stanie sprostać oczekiwaniom najbardziej wymagających. Moją specjalnością zawodową, są spersonalizowane terapie trudnych i problematycznych cer oraz terapie łączone wspomagające naturalne procesy naprawcze skóry. Ponadto oferuję Państwu profesjonalne usługi z zakresu manicure, pedicure, upiększania okolicy oka, a także depilacji.',
  'Serdecznie zapraszam Państwa do zapoznania się z pełną ofertą usług.',
  'Patrycja Bukowska',
  'Zdjęcie profilowe'
];

const AboutPage = () => {
  return (
    <>
      <div className='about'>
        <article>
          <h1>{aboutStrings[0]}</h1>
          <p>{aboutStrings[1]}</p>
          <p>{aboutStrings[2]}</p>
          <span className='signature'>{aboutStrings[3]}</span>
        </article>
        <img src={profilePhoto} alt={aboutStrings[4]} />

      </div>

    </>
  );
}

export default AboutPage;