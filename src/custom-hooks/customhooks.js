import { userReducer, useEffect } from 'react';
function usePersistedReducer(reducer, initialState, key) {
  const [state, dispatch] = useReducer(reducer, initialState, intial => {
    const persisted = localStorage.getItem(key);
    return persisted ? JSON.parse(persisted) : intial;
  });

  //   to sync with local Storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
    return () => {
      cleanup;
    };
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
