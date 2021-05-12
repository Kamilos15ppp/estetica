import React from 'react';

import '../styles/Footer.css';

const Footer = () => {
  const date = new Date();
  const footerString = `Created by Kamil Sarga 2021 ${date.getFullYear() === 2021 ? '' : `- ${date.getFullYear()}`}`;
  return (
    <div className='footer'>
      <p>{footerString}</p>
    </div>
  );
}

export default Footer;