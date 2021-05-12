import React from 'react';

const feetStrings = [
  'Pedicure frezarkowy - 80zł',
  'Pedicure frezarkowy + odżywka - 85zł',
  'Pedicure frezarkowy + zwykły lakier - 90zł',
  'Pedicure frezarkowy + hybryda - 100zł',
  'Pedicure hybrydowy - 60zł',
  'Pedicure z klasycznym malowaniem - 50zł',
];

const Feet = ({ name }) => {
  const list = feetStrings.map(element => (
    <li key={element}>
      {element}
    </li>
  ));

  return (
    <div>
      <article>
        <h1>{name}</h1>
        <ul>
          {list}
        </ul>
      </article>
    </div>
  );
}

export default Feet;