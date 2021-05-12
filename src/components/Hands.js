import React from 'react';

const handsStrings = [
  'Manicure hybrydowy - 60zł',
  'Manicure hybrydowy na bazie proteinowej - 70zł',
  'Manicure klasyczny + odżywka - 40zł',
  'Manicure klasyczny + zwykły lakier - 45zł',
  'Ściąganie hybryd - 30zł',
  'Ściąganie hybryd + manicure klasyczny z odżywką - 50zł',
];
const handsStrings2 = [
  'Kąpiel parafinowa - 50zł',
  'Kąpiel parafinowa dodatkowo do usługi - 20zł',
];

const Hands = ({ name }) => {
  const list = handsStrings.map(element => (
    <li key={element}>
      {element}
    </li>
  ));
  const list2 = handsStrings2.map(element => (
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
        <p>Parafinowy zabieg dłoni</p>
        <ul>
          {list2}
        </ul>
      </article>
    </div>
  );
}

export default Hands;