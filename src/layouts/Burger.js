import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Nav from './Nav';

import '../styles/Burger.css';

const Burger = () => {
  const [burgerActive, setBurgerActive] = useState(true);
  const [navActive, setNavActive] = useState(false);

  const changeActive = () => {
    setBurgerActive(!burgerActive);
    setNavActive(!navActive);
  }

  return (
    <>
      <div className={burgerActive ? 'burger' : 'burger active'} onClick={changeActive}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <nav className={navActive ? 'navigation nav-showed' : 'navigation nav-hidden'}>
        {<Nav onClick={changeActive} />}
      </nav>
    </>
  );
}

export default Burger;