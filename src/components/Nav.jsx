import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';

import { LinkStyled, NavList } from './Nav.styled';

const links = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

const Nav = () => {
  const location = useLocation();
  return (
    <div>
      <NavList>
        {links.map(item => (
          <li key={item.to}>
            <LinkStyled
              to={item.to}
              className={item.to === location.pathname ? 'active' : ''}
            >
              {item.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default memo(Nav);
