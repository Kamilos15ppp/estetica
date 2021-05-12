import React from 'react';

import gallery1Photo from '../images/gallery1_photo.jpg';

import '../styles/Gallery.css';

const galleryStrings = [
  'Galeria',
  'photo1',
  'photo2',
  'photo3',
  'photo4',
  'photo5',
  'photo6',
];

const GalleryPage = () => {
  return (
    <div className='gallery'>
      <h1>{galleryStrings[0]}</h1>
      <div className='photos'>
        <img src={gallery1Photo} alt={galleryStrings[1]} />
        <img src={gallery1Photo} alt={galleryStrings[2]} />
        <img src={gallery1Photo} alt={galleryStrings[3]} />
        <img src={gallery1Photo} alt={galleryStrings[4]} />
        <img src={gallery1Photo} alt={galleryStrings[5]} />
        <img src={gallery1Photo} alt={galleryStrings[6]} />
      </div>
    </div>
  );
}

export default GalleryPage;