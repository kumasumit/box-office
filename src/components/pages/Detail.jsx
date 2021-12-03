/* eslint-disable no-console */
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../../api-config/config';

const Detail = () => {
  const { id } = useParams();
  // const [detail, setDetail] = useState(null);
  // const [isLoading, setisLoading] = useState(true);
  // const [error, setError] = useState(null);
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return { ...prevState, detal: action.detail, isLoading: false };

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
  const [state, dispatch] = useReducer(reducer, initialState);
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

  if (state.isLoading) {
    return <div>Data is being loaded.</div>;
  }
  if (state.error) {
    return <div>Error ocurred : {state.error}.</div>;
  }

  return <div>This is the details page.</div>;
};

export default Detail;
