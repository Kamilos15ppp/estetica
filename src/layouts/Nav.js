import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Nav.css';

const list = [
  { name: "O mnie", path: "/", exact: true },
  { name: "Cennik", path: "/cennik" },
  { name: "Informacje", path: "/info" },
  { name: "Voucher", path: "/voucher" },
  { name: "Galeria", path: "/galeria" },
  { name: "Kontakt", path: "/kontakt" },
]

const Nav = (props) => {
  const menu = list.map(item => (
    <li key={item.name} onClick={props.onClick}>
      <NavLink
        to={item.path}
        exact={item.exact ? item.exact : false}
      >
        {item.name}
      </NavLink>
    </li>
  ))

  return (
    <ul>
      {menu}
    </ul>
  );
}

export default Nav;