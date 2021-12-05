/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
// import React, { useEffect, useReducer } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
// import { apiGet } from '../../api-config/config';
import { useDetail } from '../../custom-hooks/customhooks';
import Cast from '../details/Cast';
import DetailMaindata from '../details/DetailMaindata';
import { InfoBlock, ShowPageWrapper } from '../details/Detailstyled';
import Info from '../details/Info';
import Seasons from '../details/Seasons';

const Detail = () => {
  const { id } = useParams();
  const { detail, isLoading, error } = useDetail(id);
  // const [detail, setDetail] = useState(null);
  // const [isLoading, setisLoading] = useState(true);
  // const [error, setError] = useState(null);

  if (isLoading) {
    return <div>Data is being loaded.</div>;
  }
  if (error) {
    return <div>Error ocurred : {error}.</div>;
  }
  console.log('detail', detail);

  return (
    <ShowPageWrapper>
      <DetailMaindata
        image={detail.image}
        name={detail.name}
        rating={detail.rating}
        summary={detail.summary}
        tags={detail.genres}
      />

      <InfoBlock>
        <h2>Info:</h2>
        <Info
          status={detail.status}
          network={detail.network}
          premiered={detail.premiered}
        />
      </InfoBlock>
      <InfoBlock>
        <h2>Seasons:</h2>
        <Seasons seasons={detail._embedded.seasons} />
      </InfoBlock>
      <InfoBlock>
        <h2>Cast:</h2>
        <Cast cast={detail._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Detail;
