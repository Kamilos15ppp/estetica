import React from 'react';

// import '../styles/Eyes.css';

const eyesStrings = [
  'Henna brwi - 20zł',
  'Henna brwi + regulacja woskiem/pęseta - 25zł',
  'Regulacja brwi woskiem/pęseta - 15zł',
  'Henna rzęs - 20zł',
  'Henna brwi i rzęs + regulacja - 50zł',
];

const Eyes = ({ name }) => {
  const list = eyesStrings.map(element => (
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

export default Eyes;