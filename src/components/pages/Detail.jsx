/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../../api-config/config';
import Cast from '../details/Cast';
import DetailMaindata from '../details/DetailMaindata';
import { InfoBlock, ShowPageWrapper } from '../details/Detailstyled';
import Info from '../details/Info';
import Seasons from '../details/Seasons';

const Detail = () => {
  const { id } = useParams();
  // const [detail, setDetail] = useState(null);
  // const [isLoading, setisLoading] = useState(true);
  // const [error, setError] = useState(null);
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return { ...prevState, detail: action.detail, isLoading: false };

      case 'FETCH_FAILED':
        return { ...prevState, isLoading: false, error: action.error };

      default:
        return prevState;
    }
  };
  const initialState = {
    detail: null,
    isLoading: true,
    error: null,
  };
  const [{ detail, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(() => {
    let isMounted = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if (isMounted) {
          dispatch({ type: 'FETCH_SUCCESS', detail: results });
          // setDetail(results);
          // setisLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          dispatch({ type: 'FETCH_FAILED', error: err.message });
          // setError(err.message);
          // setisLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [id]);

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
