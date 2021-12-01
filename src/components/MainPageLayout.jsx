import React from 'react';
import Nav from './Nav';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are you searching for a movie or actor ?"
      />
      <Nav />
      {children}
    </div>
  );
};

export default MainPageLayout;
