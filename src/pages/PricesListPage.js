import React from 'react';
import { Link } from 'react-router-dom';

import imgEye from '../images/eye.jpg';
import imgFoot from '../images/foot.jpg';
import imgHand from '../images/hand.jpg';
import imgFace from '../images/face.jpg';
import imgDepilation from '../images/depilation.jpg';

import '../styles/PricesListPage.css';

const categories = [
  {
    id: 'oczy',
    to: 'kategoria/oczy',
    name: 'Oprawa oka',
    img: imgEye,
    alt: 'Kategoria - oprawa oka',
  },
  {
    id: 'stopy',
    to: 'kategoria/stopy',
    name: 'Pielęgnacja stóp',
    img: imgFoot,
    alt: 'Kategoria - pielęgnacja stóp',
  },
  {
    id: 'dlonie',
    to: 'kategoria/dlonie',
    name: 'Pielęgnacja dłoni',
    img: imgHand,
    alt: 'Kategoria - pielęgnacja dłoni',
  },
  {
    id: 'depilacja',
    to: 'kategoria/depilacja',
    name: 'Depilacja woskiem',
    img: imgDepilation,
    alt: 'Kategoria - depilacja woskiem',
  },
  {
    id: 'twarz',
    to: 'kategoria/twarz',
    name: 'Zabiegi na twarz',
    img: imgFace,
    alt: 'Kategoria - zabiegi na twarz',
  },
]
const h1String = 'Cennik - kategorie';

const PricesListPage = () => {
  const list = categories.map((category) => (
    <li key={category.id} className='category-image'>
      <Link to={category.to}>
        <img src={category.img} alt={category.alt} className='category-img' />
      </Link>
    </li>

  ))

  return (
    <div className='prices-list'>
      <article>
        <h1>{h1String}</h1>
        <ul>
          {list}
        </ul>
      </article>
    </div>
  );
}

export default PricesListPage;