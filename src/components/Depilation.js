import React from 'react';

const depilStrings = [
  'Wąsik - 10zł',
  'Broda - 20zł',
  'Baczki - 20zł',
  'Pachy - 40zł',
  'Przedramiona - 40zł',
  'Ręce - 60zł',
  'Łydki - 60zł',
  'Nogi - 60zł',
];

const Depilation = ({ name }) => {
  const list = depilStrings.map(element => (
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

export default Depilation;