import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

import Price from '../components/Price';

import '../styles/CategoryPage.css';

const CategoryPage = ({ match }) => {
  return (
    <div className='category'>
      <Price id={match.params.id} />
      <Link to='/cennik'><FontAwesomeIcon icon={faArrowAltCircleLeft} className='back-icon' /></Link>
    </div>
  );
}

export default CategoryPage;