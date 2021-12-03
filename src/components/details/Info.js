import React from 'react';
import { InfoWrapper } from './Info.styled';

const Info = ({ status, premiered, network }) => {
  return (
    <InfoWrapper>
      <p>
        Status: <span>{status}</span>
      </p>
      <p>
        Premiered {premiered} {network ? `on ${network.name}` : null}
      </p>
    </InfoWrapper>
  );
};

export default Info;
