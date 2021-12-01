import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

const Nav = () => {
  return (
    <div>
      <ul>
        {links.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
