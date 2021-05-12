import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

const ArrowBack = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    document.addEventListener('scroll', toggleVisibility)
  }, []);
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }
  const arrowScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <div className='arrow-scroll-to-top'>
      {isVisible &&
        <div onClick={arrowScrollToTop}>
          <FontAwesomeIcon icon={faArrowCircleUp} />
        </div>}
    </div>
  );
}

export default ArrowBack;