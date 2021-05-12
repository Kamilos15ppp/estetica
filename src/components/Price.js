import React from 'react';

import Eyes from './Eyes';
import Feet from './Feet';
import Hands from './Hands';
import Face from './Face';
import Depilation from './Depilation';

const Price = (props) => {
  const Elements = props => {
    switch (props.value) {
      case 'oczy': return <Eyes name={'Oprawa oka'} />;
      case 'stopy': return <Feet name={'Pielęgnacja stóp'} />;
      case 'dlonie': return <Hands name={'Pielęgnacja dłoni'} />;
      case 'twarz': return <Face name={'Zabiegi na twarz'} />;
      case 'depilacja': return <Depilation name={'Depilacja woskiem'} />;


      default: return <h1>Wystąpił błąd</h1>;
    }
  }

  return (
    <div>
      <Elements value={`${props.id}`} />
    </div>
  );
}

export default Price;