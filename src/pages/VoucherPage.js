import React from 'react';

import voucherPhoto from '../images/voucher_photo.jpg';

import '../styles/Voucher.css';

const voucherStrings = [
  'Voucher',
  'Szukasz oryginalnego upominku dla bliskiej Ci osoby? Nie musisz dłużej szukać. Voucher podarunkowy to świetna propozycja na różnorodne okazje. To również wspaniały pomysł na prezent w ostatniej chwili jak i praktyczne rozwiązanie dla wszystkich, którzy mają problem z wyborem prezentu. Salon Urody Estetica oferuje vouchery w następujących kategoriach:',
  'wartościowe-opiewające na konkretną kwotę',
  'na konkretny zabieg wybrany z oferty',
  'Spraw by bliska Ci osoba poczuła się wyjątkowo!',
  ''
];

const VoucherPage = () => {
  return (
    <div className='voucher'>
      <h1>{voucherStrings[0]}</h1>
      <img src={voucherPhoto} alt={voucherStrings[5]} />
      <article>
        <p>{voucherStrings[1]}</p>
        <ul>
          <li>{voucherStrings[2]}</li>
          <li>{voucherStrings[3]}</li>
        </ul>
      </article>
      <p>{voucherStrings[4]}</p>
    </div>
  );
}

export default VoucherPage;