import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../../api-config/config';

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if (isMounted) {
          setDetail(results);
          setisLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err.message);
          setisLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [id]);

  console.log('detail', detail);

  if (isLoading) {
    return <div>Data is being loaded.</div>;
  }
  if (error) {
    return <div>Error ocurred : {error}.</div>;
  }

  return <div>This is the details page.</div>;
};

export default Detail;
