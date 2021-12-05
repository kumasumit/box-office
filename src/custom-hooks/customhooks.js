import { useReducer, useEffect, useState } from 'react';
import { apiGet } from '../api-config/config';

function usePersistedReducer(reducer, initialState, key) {
  const [state, dispatch] = useReducer(reducer, initialState, intial => {
    const persisted = localStorage.getItem(key);
    return persisted ? JSON.parse(persisted) : intial;
  });

  //   to sync with local Storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}
function showsReducer(prevState, action) {
  switch (action.type) {
    case 'ADD':
      return [...prevState, action.showId];
    case 'REMOVE':
      return prevState.filter(showId => showId !== action.showId);

    default:
      return prevState;
  }
}
export function useShows(key = 'shows') {
  return usePersistedReducer(showsReducer, [], key);
}

// persisted Input in Home.js
export function useLastQuery(key = 'lastQuery') {
  const [input, setInput] = useState(() => {
    const persisted = sessionStorage.getItem(key);

    return persisted ? JSON.parse(persisted) : '';
  });

  const setPersistedInput = newState => {
    setInput(newState);
    sessionStorage.setItem(key, JSON.stringify(newState));
  };

  return [input, setPersistedInput];
}

// detail.jsx page and its core functions.

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

export function useDetail(showId) {
  const [state, dispatch] = useReducer(reducer, {
    detail: null,
    isLoading: true,
    error: null,
  });
  useEffect(() => {
    let isMounted = true;
    apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`)
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
  }, [showId]);
  return state;
}
