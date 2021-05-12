import React from 'react';

import '../styles/Contact.css';

const contactStrings = [
  'Informacje kontaktowe',
  'Salon Urody Estetica Patrycja Bukowska',
  'Rezerwacja telefoniczna:',
  '514-072-229',
  'e-mail:',
  'info@studioestetica.pl',
  'Rokiciny Podhalańskie 29, 34-721 Raba Wyżna',
  'GODZINY OTWARCIA:',
  'wtorek – czwartek 9.00-18.00 ',
  'piątek 15.00-21.00 ',
  'poniedziałek,sobota,niedziela – nieczynne',
];

const ContactPage = () => {
  return (
    <div className='wrapper'>
      <div className='contact'>
        <h1>{contactStrings[0]}</h1>
        <p>{contactStrings[1]}</p>
        <p>{contactStrings[2]}</p>
        <span><a href={`tel:${contactStrings[3]}`}>{contactStrings[3]}</a></span>
        <span>{contactStrings[4]}<span><a href={`mailto:${contactStrings[5]}`}>{contactStrings[5]}</a></span></span>
        <p>{contactStrings[6]}</p>
        <div>
          <p>{contactStrings[7]}</p>
          <p>{contactStrings[8]}</p>
          <p>{contactStrings[9]}</p>
          <p>{contactStrings[10]}</p>
        </div>
      </div>
      <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1410.7122673544227!2d19.913108060401985!3d49.574026624069695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715e0609768bb0f%3A0x603b71cd2154afe!2sRokiciny%20Podhala%C5%84skie%2029%2C%2034-721%20Rokiciny%20Podhala%C5%84skie!5e0!3m2!1spl!2spl!4v1609763812789!5m2!1spl!2spl" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title='map'></iframe>
      </div>
    </div>
  );
}

export default ContactPage;